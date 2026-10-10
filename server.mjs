import http from 'node:http';
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(ROOT, 'data');
const DB_FILE = path.join(DATA_DIR, 'workspace.json');
const VAULT_DIR = path.join(ROOT, 'documents', 'vault');
const PORT = Number(process.env.PORT || 4173);
const MAX_BODY = 12 * 1024 * 1024;
const MAX_UPLOAD = 8 * 1024 * 1024;
const COLLECTIONS = new Set(['clients', 'users', 'tasks', 'engagements', 'messages', 'documents', 'deadlines', 'payments', 'requests', 'announcements', 'auditLogs', 'knowledgeBase', 'gstRecons', 'reviews', 'calendarEvents', 'salesRegisters', 'deducteeEntries', 'payrollRuns', 'bankAccounts', 'advanceTaxPayments']);
const MEMBER_ROLES = new Set(['Partner', 'Manager', 'Senior', 'Accountant', 'Trainee']);

await mkdir(DATA_DIR, { recursive: true });
await mkdir(VAULT_DIR, { recursive: true });
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
function mergeAuditLogs(existing, incoming) {
  const oldRows = Array.isArray(existing) ? existing : [];
  const oldIds = new Set(oldRows.map(row => String(row.id)));
  const additions = (Array.isArray(incoming) ? incoming : []).filter(row => row && row.id && !oldIds.has(String(row.id)));
  return [...additions, ...oldRows].slice(0, 5000);
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
function pickContext(data, question) {
  const terms = String(question || '').toLowerCase().split(/[^a-z0-9]+/).filter(word => word.length > 2 && !new Set(['the','and','for','what','when','where','who','how','can','you','are','was','with','this','that','have','from','about','tell','please']).has(word));
  const clientNames = new Map((data.clients || []).map(c => [c.id, c.name]));
  const shapes = {
    clients: x => ({ name:x.name, status:x.status, industry:x.industry }),
    users: x => ({ name:x.name, role:x.role }),
    tasks: x => ({ title:x.title, client:x.clientName || clientNames.get(x.clientId), status:x.status, dueDate:x.dueDate, priority:x.priority, assignedTo:x.assignedTo }),
    engagements: x => ({ title:x.title, client:clientNames.get(x.clientId), status:x.status, deadline:x.deadline, progress:x.progress }),
    deadlines: x => ({ title:x.title || x.name, client:x.clientName || clientNames.get(x.clientId), dueDate:x.dueDate || x.deadline, status:x.status }),
    documents: x => ({ name:x.name, client:x.clientName || clientNames.get(x.clientId), status:x.status, category:x.category }),
    requests: x => ({ title:x.title, client:x.clientName || clientNames.get(x.clientId), status:x.status, dueDate:x.dueDate }),
    payments: x => ({ title:x.title, client:x.clientName || clientNames.get(x.clientId), status:x.status, dueDate:x.dueDate, amount:x.amount }),
    reviews: x => ({ title:x.title, client:x.clientName || clientNames.get(x.clientId), status:x.status, reviewer:x.reviewer }),
    announcements: x => ({ title:x.title, date:x.date, content:String(x.content || '').slice(0, 180) }),
    knowledgeBase: x => ({ title:x.title, category:x.category, desc:String(x.desc || '').slice(0, 180) }),
    calendarEvents: x => ({ title:x.title, date:x.date, client:x.clientName || clientNames.get(x.clientId) }),
    gstRecons: x => ({ client:x.clientName, period:x.period, status:x.status, purchaseLineCount:x.purchaseRegister?.length, salesLineCount:x.salesRegister?.length })
  };
  const compact = { firm: data.firm ? { name:data.firm.name, legalName:data.firm.legalName } : undefined, counts:{} };
  for (const [name, shape] of Object.entries(shapes)) {
    const rows = Array.isArray(data[name]) ? data[name] : [];
    compact.counts[name] = rows.length;
    const formatted = rows.map(row => shape(row)).filter(row => Object.values(row).some(v => v !== undefined && v !== null && v !== ''));
    const ranked = formatted.map(row => ({ row, score:terms.reduce((n,t) => n + (JSON.stringify(row).toLowerCase().includes(t) ? 1 : 0), 0) }));
    const relevant = terms.length ? ranked.filter(x => x.score > 0).sort((a,b) => b.score-a.score).slice(0, 5) : [];
    compact[name] = (relevant.length ? relevant.map(x => x.row) : formatted.slice(0, terms.length ? 2 : 4));
  }
  return compact;
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
  if (/help|what can you|capabilit/.test(q)) return 'I can answer questions about clients, work, deadlines, documents, reviews, and firm records. I can also keep track of this conversation and ask follow-up questions.';
  if (history.length > 1) return 'I’m following along. I don’t have enough detail to answer that accurately from the available workspace data yet. Which client, task, or date range are you referring to?';
  return 'I can help with that. Tell me which client or work area you mean, or ask about a deadline, task, document, or review in your workspace.';
}
function assistantMessages(question, context, history) {
  return [
    { role: 'system', content: `You are a warm, conversational assistant inside an accounting practice workspace. Respond naturally, ask useful follow-up questions, remember the conversation, and ground claims about the firm in the supplied data. Never invent records or claim to have changed anything. For tax, legal, accounting, or compliance decisions, explain uncertainty and suggest professional verification. Prefer concise answers of 2–5 sentences. Workspace data (JSON): ${JSON.stringify(pickContext(context, question)).slice(0, 8000)}` },
    ...history.slice(-4).map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: String(m.content || '').slice(0, 1400) })),
    { role: 'user', content: question.slice(0, 5000) }
  ];
}
async function assistantReply(question, context, history) {
  const provider = String(process.env.AI_PROVIDER || 'ollama').toLowerCase();
  const messages = assistantMessages(question, context, history);
  if (provider === 'openai') {
    const key = process.env.OPENAI_API_KEY;
    if (!key) throw new Error('AI_PROVIDER is openai but OPENAI_API_KEY is not set.');
    const endpoint = process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1';
    const response = await fetch(`${endpoint.replace(/\/$/, '')}/chat/completions`, {
      method: 'POST',
      headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
      body: JSON.stringify({ model: process.env.OPENAI_MODEL || 'gpt-4o-mini', temperature: 0.6, messages }),
      signal: AbortSignal.timeout(60000)
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error?.message || `AI provider returned HTTP ${response.status}`);
    return { answer: result.choices?.[0]?.message?.content?.trim() || 'I couldn’t form a response just now. Could you try asking another way?', mode: 'openai' };
  }
  if (provider === 'ollama') {
    const endpoint = (process.env.OLLAMA_BASE_URL || 'http://127.0.0.1:11434').replace(/\/$/, '');
    try {
      const response = await fetch(`${endpoint}/api/chat`, {
        method: 'POST', headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ model: process.env.OLLAMA_MODEL || 'qwen2.5:3b', messages, stream: false, keep_alive: '10m', options: { temperature: 0.6, num_ctx: 4096, num_predict: 128 } }),
        signal: AbortSignal.timeout(120000)
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || `Ollama returned HTTP ${response.status}`);
      const answer = result.message?.content?.trim();
      if (!answer) throw new Error('Ollama returned an empty answer.');
      return { answer, mode: 'ollama' };
    } catch (error) {
      console.warn(`Ollama request failed; using local workspace fallback: ${error.message}`);
      return { answer: fallbackReply(question, context, history), mode: 'local-fallback' };
    }
  }
  return { answer: fallbackReply(question, context, history), mode: 'local-fallback' };
}
async function streamAssistant(input, res) {
  const question = String(input.message || '').trim();
  const id = String(input.conversationId || 'default').slice(0, 160);
  const supplied = Array.isArray(input.history) ? input.history.slice(-12).filter(m => ['user', 'assistant'].includes(m.role) && typeof m.content === 'string') : [];
  const history = supplied.length ? supplied : (conversations.get(id) || []);
  const context = input.workspace || workspace;
  const provider = String(process.env.AI_PROVIDER || 'ollama').toLowerCase();
  let answer = '';
  const emit = value => res.write(`data: ${JSON.stringify(value)}\n\n`);
  try {
    if (provider === 'ollama') {
      const endpoint = (process.env.OLLAMA_BASE_URL || 'http://127.0.0.1:11434').replace(/\/$/, '');
      const response = await fetch(`${endpoint}/api/chat`, {
        method: 'POST', headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ model: process.env.OLLAMA_MODEL || 'qwen2.5:3b', messages: assistantMessages(question, context, history), stream: true, keep_alive: '10m', options: { temperature: 0.5, num_ctx: 4096, num_predict: 128 } }),
        signal: AbortSignal.timeout(120000)
      });
      if (!response.ok) throw new Error(`Ollama returned HTTP ${response.status}`);
      res.writeHead(200, { 'content-type': 'text/event-stream; charset=utf-8', 'cache-control': 'no-cache, no-transform', connection: 'keep-alive', 'x-accel-buffering': 'no' });
      res.flushHeaders?.();
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';
        for (const line of lines) {
          if (!line.trim()) continue;
          const chunk = JSON.parse(line);
          const token = chunk.message?.content || '';
          if (token) { answer += token; emit({ token }); }
        }
      }
      if (buffer.trim()) {
        const chunk = JSON.parse(buffer);
        const token = chunk.message?.content || '';
        if (token) { answer += token; emit({ token }); }
      }
      if (!answer.trim()) throw new Error('Ollama returned an empty answer.');
      if (res.destroyed) return;
      history.push({ role: 'user', content: question }, { role: 'assistant', content: answer });
      conversations.set(id, history.slice(-24));
      emit({ done: true, mode: 'ollama' });
      return res.end();
    }
    const result = await assistantReply(question, context, history);
    answer = result.answer;
    res.writeHead(200, { 'content-type': 'text/event-stream; charset=utf-8', 'cache-control': 'no-cache, no-transform', connection: 'keep-alive' });
    res.flushHeaders?.();
    emit({ token: answer });
    history.push({ role: 'user', content: question }, { role: 'assistant', content: answer });
    conversations.set(id, history.slice(-24));
    emit({ done: true, mode: result.mode });
    res.end();
  } catch (error) {
    console.warn(`Assistant streaming request failed: ${error.message}`);
    if (res.headersSent) {
      if (!answer) {
        answer = fallbackReply(question, context, history);
        emit({ token: answer });
      }
      emit({ done: true, mode: 'local-fallback' });
      return res.end();
    }
    const result = { answer: fallbackReply(question, context, history), mode: 'local-fallback' };
    res.writeHead(200, { 'content-type': 'text/event-stream; charset=utf-8', 'cache-control': 'no-cache, no-transform', connection: 'keep-alive' });
    res.flushHeaders?.();
    emit({ token: result.answer });
    emit({ done: true, mode: result.mode });
    res.end();
  }
}
async function api(req, res, url) {
  if (url.pathname === '/api/health') {
    const provider = String(process.env.AI_PROVIDER || 'ollama').toLowerCase();
    return send(res, 200, { ok: true, assistant: { provider, model: provider === 'openai' ? (process.env.OPENAI_MODEL || 'gpt-4o-mini') : (process.env.OLLAMA_MODEL || 'qwen2.5:3b') } });
  }
  if (url.pathname === '/api/workspace' && req.method === 'GET') return send(res, 200, workspace);
  if (url.pathname === '/api/workspace' && req.method === 'PUT') {
    const incoming = await body(req);
    if (!incoming || typeof incoming !== 'object' || Array.isArray(incoming)) return send(res, 400, { error: 'Workspace must be a JSON object.' });
    incoming.auditLogs = mergeAuditLogs(workspace.auditLogs, incoming.auditLogs);
    workspace = incoming;
    await persist();
    return send(res, 200, { ok: true, updatedAt: new Date().toISOString() });
  }
  if (url.pathname === '/api/vault/save' && req.method === 'POST') {
    const input = await body(req);
    const name = String(input.name || 'document').split(/[\\/]/).pop().replace(/[^\p{L}\p{N}._ -]/gu, '_').slice(0, 140) || 'document';
    const bytes = input.base64 ? Buffer.from(String(input.base64), 'base64') : Buffer.from(String(input.content || ''), 'utf8');
    if (!bytes.length) return send(res, 400, { error: 'Document content is required.' });
    if (bytes.length > MAX_UPLOAD) return send(res, 413, { error: 'Uploads must be 8 MB or smaller.' });
    const id = randomUUID();
    const ext = path.extname(name).slice(0, 12);
    const storedName = `${id}${ext || '.bin'}`;
    await writeFile(path.join(VAULT_DIR, storedName), bytes, { flag: 'wx' });
    return send(res, 201, { ok: true, id, path: `/api/vault/files/${id}`, name, size: bytes.length, type: String(input.type || 'application/octet-stream').slice(0, 120) });
  }
  const vaultFile = url.pathname.match(/^\/api\/vault\/files\/([0-9a-f-]{36})$/i);
  if (vaultFile && req.method === 'GET') {
    const entries = await readdir(VAULT_DIR);
    const stored = entries.find(file => file.startsWith(vaultFile[1] + '.'));
    if (!stored) return send(res, 404, { error: 'File not found.' });
    const data = await readFile(path.join(VAULT_DIR, stored));
    res.writeHead(200, { 'content-type': 'application/octet-stream', 'content-length': data.length, 'cache-control': 'private, no-store', 'content-disposition': `attachment; filename="${stored}"` });
    return res.end(data);
  }
  if (url.pathname === '/api/members' && req.method === 'GET') return send(res, 200, Array.isArray(workspace.users) ? workspace.users : []);
  if (url.pathname === '/api/members' && req.method === 'POST') {
    const input = await body(req);
    const name = String(input.name || '').trim();
    const role = String(input.role || 'Trainee');
    if (!name) return send(res, 400, { error: 'Member name is required.' });
    if (!MEMBER_ROLES.has(role)) return send(res, 400, { error: `Role must be one of: ${[...MEMBER_ROLES].join(', ')}.` });
    if (!Array.isArray(workspace.users)) workspace.users = [];
    const digits = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
    const member = { id: `u${digits}`, name, role, initials: name.split(/\s+/).map(s => s[0]).join('').slice(0, 2).toUpperCase(), avatarBg: input.avatarBg || '#1b4d3e', billableHours: 0, utilizationPct: 0, createdAt: new Date().toISOString() };
    workspace.users.push(member);
    await persist();
    return send(res, 201, member);
  }
  const memberRoute = url.pathname.match(/^\/api\/members\/([^/]+)$/);
  if (memberRoute && ['PUT', 'DELETE'].includes(req.method)) {
    const id = decodeURIComponent(memberRoute[1]);
    const members = Array.isArray(workspace.users) ? workspace.users : [];
    const index = members.findIndex(member => String(member.id) === id);
    if (index < 0) return send(res, 404, { error: 'Member not found.' });
    if (req.method === 'DELETE') {
      members.splice(index, 1);
      workspace.users = members;
      await persist();
      res.writeHead(204); return res.end();
    }
    const input = await body(req);
    const role = input.role === undefined ? members[index].role : String(input.role);
    const name = input.name === undefined ? members[index].name : String(input.name).trim();
    if (!name) return send(res, 400, { error: 'Member name is required.' });
    if (!MEMBER_ROLES.has(role)) return send(res, 400, { error: `Role must be one of: ${[...MEMBER_ROLES].join(', ')}.` });
    members[index] = { ...members[index], ...input, id, name, role, initials: name.split(/\s+/).map(s => s[0]).join('').slice(0, 2).toUpperCase(), updatedAt: new Date().toISOString() };
    workspace.users = members;
    await persist();
    return send(res, 200, members[index]);
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
    if (name === 'auditLogs') return send(res, 405, { error: 'Audit entries are append-only through workspace activity.' });
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
    if (name === 'auditLogs') return send(res, 405, { error: 'Audit entries cannot be changed or deleted.' });
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
      const result = await assistantReply(question, input.workspace || workspace, history);
      const answer = result.answer;
      history.push({ role: 'user', content: question }, { role: 'assistant', content: answer });
      conversations.set(id, history.slice(-24));
      return send(res, 200, { conversationId: id, answer, mode: result.mode });
    } catch (error) { return send(res, 502, { error: `Assistant unavailable: ${error.message}` }); }
  }
  if (url.pathname === '/api/assistant/stream' && req.method === 'POST') {
    const input = await body(req);
    if (!String(input.message || '').trim()) return send(res, 400, { error: 'A message is required.' });
    return await streamAssistant(input, res);
  }
  return send(res, 404, { error: 'API route not found.' });
}

const bridge = String.raw`(function(){
  var KEY='acc_workplace_os_data', CONV='acc-assistant-'+(window.crypto&&crypto.randomUUID?crypto.randomUUID():(Date.now()+'-'+Math.random().toString(36).slice(2)));
  var conversation=[];
  try{localStorage.removeItem('acc-assistant-'+(localStorage.getItem('acc_workplace_os_session')||'guest'));}catch(e){}
  try { var r=new XMLHttpRequest(); r.open('GET','/api/workspace',false); r.send(); if(r.status===200){var d=JSON.parse(r.responseText);if(d&&Object.keys(d).length)localStorage.setItem(KEY,JSON.stringify(d));} } catch(e) {}
  var oldSet=Storage.prototype.setItem;
  Storage.prototype.setItem=function(k,v){oldSet.call(this,k,v);if(k===KEY){try{var x=JSON.parse(v);fetch('/api/workspace',{method:'PUT',headers:{'content-type':'application/json'},body:JSON.stringify(x)}).catch(function(){});}catch(e){}}};
  var busy=false;
  function escape(s){var d=document.createElement('div');d.textContent=s;return d.innerHTML;}
  function draw(target, history, answer){var rows=history.map(function(m){return '<div class="assistant-response-card"><strong>'+(m.role==='assistant'?'Assistant':'You')+'</strong><br>'+escape(m.content).replace(/\n/g,'<br>')+'</div>';}).join('');target.innerHTML=rows+(answer?'<div class="assistant-response-card"><strong>Assistant</strong><br>'+escape(answer).replace(/\n/g,'<br>')+'</div>':'');}
  async function ask(button){
    if(busy)return;
    var input=document.getElementById('quick-ask-input')||document.getElementById('ai-ask-input');
    var target=document.getElementById('quick-ask-result')||document.getElementById('ai-response-area');
    if(!input||!target||!input.value.trim())return;
    busy=true;var q=input.value.trim();input.value='';var h=conversation.slice();
    draw(target,h.concat({role:'user',content:q}),'Thinking…');
    try{
      var ws={};try{ws=JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){}
      var r=await fetch('/api/assistant/stream',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({conversationId:CONV,message:q,history:h,workspace:ws})});
      if(!r.ok)throw new Error('Request failed ('+r.status+')');
      var reader=r.body.getReader(),decoder=new TextDecoder(),buffer='',answer='';
      while(true){
        var part=await reader.read();if(part.done)break;
        buffer+=decoder.decode(part.value,{stream:true});
        var events=buffer.split('\n\n');buffer=events.pop()||'';
        events.forEach(function(event){event.split('\n').forEach(function(line){if(!line.startsWith('data: '))return;var d;try{d=JSON.parse(line.slice(6))}catch(e){return;}if(d.error)throw new Error(d.error);if(d.token){answer+=d.token;draw(target,h.concat({role:'user',content:q}),answer);} });});
      }
      if(buffer.trim().startsWith('data: ')){var last=JSON.parse(buffer.trim().slice(6));if(last.token)answer+=last.token;}
      if(!answer)throw new Error('The assistant returned no answer.');
      h.push({role:'user',content:q},{role:'assistant',content:answer});conversation=h.slice(-24);draw(target,conversation);
    }catch(e){draw(target,h.concat({role:'user',content:q}), 'I couldn’t reach the assistant service. '+e.message);}
    finally{busy=false;}
  }
  document.addEventListener('click',function(e){var b=e.target.closest('#btn-ai-ask,#btn-quick-ask');if(!b)return;e.preventDefault();e.stopImmediatePropagation();ask(b);},true);
  document.addEventListener('keydown',function(e){if(e.key!=='Enter'||e.shiftKey)return;var i=e.target;if(!i.matches('#ai-ask-input,#quick-ask-input'))return;e.preventDefault();document.getElementById(i.id==='ai-ask-input'?'btn-ai-ask':'btn-quick-ask')?.click();},true);
  document.addEventListener('click',function(e){if(e.target.closest('[data-view="assistant"]')){setTimeout(function(){var t=document.getElementById('ai-response-area');if(t)draw(t,conversation);},0);}},true);
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
