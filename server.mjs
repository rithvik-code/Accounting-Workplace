import http from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(ROOT, 'data');
const DB_FILE = path.join(DATA_DIR, 'workspace.json');
const PORT = Number(process.env.PORT || 4173);
const MAX_BODY = 8 * 1024 * 1024;
const COLLECTIONS = new Set(['clients', 'users', 'tasks', 'engagements', 'messages', 'documents', 'deadlines', 'payments', 'requests', 'announcements', 'auditLogs', 'knowledgeBase', 'gstRecons', 'reviews', 'calendarEvents']);

await mkdir(DATA_DIR, { recursive: true });
let workspace = existsSync(DB_FILE) ? JSON.parse(await readFile(DB_FILE, 'utf8')) : {};
let saveQueue = Promise.resolve();
const conversations = new Map();

function persist() {
  saveQueue = saveQueue.then(() => writeFile(DB_FILE, JSON.stringify(workspace, null, 2), 'utf8'));
  return saveQueue;
}
function send(res, status, value) {
  res.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' });
  res.end(JSON.stringify(value));
}
async function body(req) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > MAX_BODY) throw Object.assign(new Error('Request body is too large.'), { status: 413 });
    chunks.push(chunk);
  }
  if (!chunks.length) return {};
  try { return JSON.parse(Buffer.concat(chunks).toString('utf8')); }
  catch { throw Object.assign(new Error('Body must be valid JSON.'), { status: 400 }); }
}
function pickContext(data) {
  const allow = ['firm', 'clients', 'users', 'tasks', 'engagements', 'deadlines', 'documents', 'payments', 'requests', 'announcements', 'knowledgeBase', 'gstRecons', 'reviews', 'calendarEvents'];
  return Object.fromEntries(allow.filter(k => data?.[k] !== undefined).map(k => [k, data[k]]));
}
function fallbackReply(question, data, history) {
  const q = question.toLowerCase();
  const clients = data.clients || [];
  const tasks = data.tasks || [];
  const client = clients.find(c => q.includes(String(c.name || '').toLowerCase()));
  const due = tasks.filter(t => /overdue|today|pending|in progress/i.test(`${t.status || ''} ${t.dueDate || ''}`));
  if (/\b(hi|hello|hey|good morning|good afternoon)\b/.test(q)) return 'Hi! I’m your workspace assistant. I can help you understand client status, work items, deadlines, documents, and your firm data. What would you like to look into?';
  if (client) {
    const related = tasks.filter(t => String(t.clientId || '').toLowerCase() === String(client.id || '').toLowerCase() || String(t.clientName || '').toLowerCase() === String(client.name).toLowerCase());
    return `Here’s what I can see for ${client.name}: ${related.length} related work items in the current workspace. ${related.length ? `The first one is “${related[0].title || related[0].name || 'Untitled task'}” (${related[0].status || 'status not set'}).` : 'I don’t see any linked tasks in the current workspace.'} Want me to focus on deadlines, documents, or overall status?`;
  }
  if (/due|deadline|overdue|task|work item/.test(q)) return `I found ${tasks.length} work items in your workspace${due.length ? `, with ${due.length} marked overdue, due today, pending, or in progress` : ''}. Which client or time period should I narrow that down to?`;
  if (/client|who|list/.test(q)) return `There are ${clients.length} clients in the workspace${clients.length ? `: ${clients.slice(0, 8).map(c => c.name).filter(Boolean).join(', ')}` : ''}. Ask me about one of them and I’ll summarize what the saved workspace data contains.`;
  if (/help|what can you|capabilit/.test(q)) return 'I can answer questions about clients, work, deadlines, documents, reviews, and firm records. I can also keep track of this conversation and ask follow-up questions. For open-ended reasoning, set OPENAI_API_KEY to connect a model.';
  if (history.length > 1) return 'I’m following along. I don’t have enough detail to answer that accurately from the available workspace data yet. Which client, task, or date range are you referring to?';
  return 'I can help with that. Tell me which client or work area you mean, or ask about a deadline, task, document, or review in your workspace. To enable general AI reasoning, configure OPENAI_API_KEY and restart the server.';
}
async function assistantReply(question, context, history) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return fallbackReply(question, context, history);
  const endpoint = process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1';
  const response = await fetch(`${endpoint.replace(/\/$/, '')}/chat/completions`, {
    method: 'POST',
    headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      temperature: 0.6,
      messages: [
        { role: 'system', content: `You are a warm, conversational assistant inside an accounting practice workspace. Respond naturally, ask useful follow-up questions, remember the conversation, and ground claims about the firm in the supplied data. Never invent records or claim to have changed anything. For tax, legal, accounting, or compliance decisions, explain uncertainty and suggest professional verification. Keep answers readable. Workspace data (JSON): ${JSON.stringify(pickContext(context)).slice(0, 50000)}` },
        ...history.slice(-12).map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: String(m.content || '').slice(0, 5000) })),
        { role: 'user', content: question.slice(0, 5000) }
      ]
    }),
    signal: AbortSignal.timeout(30000)
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.error?.message || `AI provider returned HTTP ${response.status}`);
  return result.choices?.[0]?.message?.content?.trim() || 'I couldn’t form a response just now. Could you try asking another way?';
}
async function api(req, res, url) {
  if (url.pathname === '/api/health') return send(res, 200, { ok: true, assistant: process.env.OPENAI_API_KEY ? 'model' : 'local' });
  if (url.pathname === '/api/workspace' && req.method === 'GET') return send(res, 200, workspace);
  if (url.pathname === '/api/workspace' && req.method === 'PUT') {
    const incoming = await body(req);
    if (!incoming || typeof incoming !== 'object' || Array.isArray(incoming)) return send(res, 400, { error: 'Workspace must be a JSON object.' });
    workspace = incoming;
    await persist();
    return send(res, 200, { ok: true, updatedAt: new Date().toISOString() });
  }
  if (url.pathname === '/api/collections' && req.method === 'GET') return send(res, 200, [...COLLECTIONS]);
  const collectionRoute = url.pathname.match(/^\/api\/collections\/([a-zA-Z0-9_-]+)$/);
  if (collectionRoute && req.method === 'GET') {
    const name = collectionRoute[1];
    if (!COLLECTIONS.has(name)) return send(res, 404, { error: 'Unknown collection.' });
    return send(res, 200, Array.isArray(workspace[name]) ? workspace[name] : []);
  }
  if (collectionRoute && req.method === 'POST') {
    const name = collectionRoute[1];
    if (!COLLECTIONS.has(name)) return send(res, 404, { error: 'Unknown collection.' });
    const item = await body(req);
    if (!item || typeof item !== 'object' || Array.isArray(item)) return send(res, 400, { error: 'Record must be a JSON object.' });
    if (!Array.isArray(workspace[name])) workspace[name] = [];
    const saved = { ...item, id: item.id || randomUUID(), createdAt: item.createdAt || new Date().toISOString(), updatedAt: new Date().toISOString() };
    workspace[name].push(saved);
    await persist();
    return send(res, 201, saved);
  }
  const recordRoute = url.pathname.match(/^\/api\/collections\/([a-zA-Z0-9_-]+)\/([^/]+)$/);
  if (recordRoute && ['PUT', 'DELETE'].includes(req.method)) {
    const [, name, id] = recordRoute;
    if (!COLLECTIONS.has(name)) return send(res, 404, { error: 'Unknown collection.' });
    const rows = Array.isArray(workspace[name]) ? workspace[name] : [];
    const index = rows.findIndex(row => String(row.id) === decodeURIComponent(id));
    if (index < 0) return send(res, 404, { error: 'Record not found.' });
    if (req.method === 'DELETE') {
      rows.splice(index, 1);
      workspace[name] = rows;
      await persist();
      res.writeHead(204); return res.end();
    }
    const update = await body(req);
    if (!update || typeof update !== 'object' || Array.isArray(update)) return send(res, 400, { error: 'Record must be a JSON object.' });
    rows[index] = { ...rows[index], ...update, id: rows[index].id, updatedAt: new Date().toISOString() };
    workspace[name] = rows;
    await persist();
    return send(res, 200, rows[index]);
  }
  if (url.pathname === '/api/assistant/chat' && req.method === 'POST') {
    const input = await body(req);
    const question = String(input.message || '').trim();
    const id = String(input.conversationId || 'default').slice(0, 160);
    if (!question) return send(res, 400, { error: 'A message is required.' });
    const suppliedHistory = Array.isArray(input.history) ? input.history.slice(-12).filter(m => ['user', 'assistant'].includes(m.role) && typeof m.content === 'string') : [];
    const history = suppliedHistory.length ? suppliedHistory : (conversations.get(id) || []);
    try {
      const answer = await assistantReply(question, input.workspace || workspace, history);
      history.push({ role: 'user', content: question }, { role: 'assistant', content: answer });
      conversations.set(id, history.slice(-24));
      return send(res, 200, { conversationId: id, answer, mode: process.env.OPENAI_API_KEY ? 'model' : 'local' });
    } catch (error) { return send(res, 502, { error: `Assistant unavailable: ${error.message}` }); }
  }
  return send(res, 404, { error: 'API route not found.' });
}

const bridge = String.raw`(function(){
  var KEY='acc_workplace_os_data', CONV='acc-assistant-'+(localStorage.getItem('acc_workplace_os_session')||'guest');
  try { var r=new XMLHttpRequest(); r.open('GET','/api/workspace',false); r.send(); if(r.status===200){var d=JSON.parse(r.responseText);if(d&&Object.keys(d).length)localStorage.setItem(KEY,JSON.stringify(d));} } catch(e) {}
  var oldSet=Storage.prototype.setItem;
  Storage.prototype.setItem=function(k,v){oldSet.call(this,k,v);if(k===KEY){try{var x=JSON.parse(v);fetch('/api/workspace',{method:'PUT',headers:{'content-type':'application/json'},body:JSON.stringify(x)}).catch(function(){});}catch(e){}}};
  var busy=false;
  function escape(s){var d=document.createElement('div');d.textContent=s;return d.innerHTML;}
  function draw(target, history, answer){var rows=history.map(function(m){return '<div class="assistant-response-card"><strong>'+(m.role==='assistant'?'Assistant':'You')+'</strong><br>'+escape(m.content).replace(/\n/g,'<br>')+'</div>';}).join('');target.innerHTML=rows+(answer?'<div class="assistant-response-card"><strong>Assistant</strong><br>'+escape(answer).replace(/\n/g,'<br>')+'</div>':'');}
  async function ask(button){if(busy)return;var input=document.getElementById('quick-ask-input')||document.getElementById('ai-ask-input');var target=document.getElementById('quick-ask-result')||document.getElementById('ai-response-area');if(!input||!target||!input.value.trim())return;busy=true;var q=input.value.trim();input.value='';var h=[];try{h=JSON.parse(localStorage.getItem(CONV)||'[]')}catch(e){}draw(target,h,'Thinking…');try{var ws={};try{ws=JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){}var r=await fetch('/api/assistant/chat',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({conversationId:CONV,message:q,history:h,workspace:ws})});var d=await r.json();if(!r.ok)throw new Error(d.error||'Request failed');h.push({role:'user',content:q},{role:'assistant',content:d.answer});h=h.slice(-24);localStorage.setItem(CONV,JSON.stringify(h));draw(target,h); }catch(e){draw(target,h,'I couldn’t reach the assistant service. '+e.message);}finally{busy=false;}}
  document.addEventListener('click',function(e){var b=e.target.closest('#btn-ai-ask,#btn-quick-ask');if(!b)return;e.preventDefault();e.stopImmediatePropagation();ask(b);},true);
  document.addEventListener('keydown',function(e){if(e.key!=='Enter'||e.shiftKey)return;var i=e.target;if(!i.matches('#ai-ask-input,#quick-ask-input'))return;e.preventDefault();document.getElementById(i.id==='ai-ask-input'?'btn-ai-ask':'btn-quick-ask')?.click();},true);
  document.addEventListener('click',function(e){if(e.target.closest('[data-view="assistant"]')){setTimeout(function(){var t=document.getElementById('ai-response-area');if(t){try{draw(t,JSON.parse(localStorage.getItem(CONV)||'[]'));}catch(x){}}},0);}},true);
})();`;

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    if (url.pathname.startsWith('/api/')) return await api(req, res, url);
    const requested = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
    const full = path.resolve(ROOT, `.${requested}`);
    if (!full.startsWith(ROOT + path.sep) && full !== ROOT) return send(res, 403, { error: 'Forbidden.' });
    let contents;
    try { contents = await readFile(full); } catch { res.writeHead(404); return res.end('Not found'); }
    const ext = path.extname(full).toLowerCase();
    const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml' };
    res.writeHead(200, { 'content-type': types[ext] || 'application/octet-stream', 'cache-control': ext === '.html' ? 'no-store' : 'public, max-age=300' });
    if (ext === '.html') {
      let html = contents.toString('utf8');
      html = html.replace(/<script\s+src=["']app\.js["']\s*><\/script>/i, `<script>${bridge}</script><script src="app.js"></script>`);
      return res.end(html);
    }
    res.end(contents);
  } catch (error) { send(res, error.status || 500, { error: error.message || 'Internal server error.' }); }
});
server.listen(PORT, '127.0.0.1', () => console.log(`Office System backend ready at http://127.0.0.1:${PORT}`));
