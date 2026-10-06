// Minimal dependency-free static file server for the workspace preview.
// Needed because register_preview's htmlPath mode serves index.html but 404s
// its relative siblings (app.js / styles.css), leaving the app inert.
//
// It also exposes one write endpoint, POST /vault/save, so the Document Center
// can put a document on disk instead of leaving it in localStorage. The write
// is deliberately narrow: loopback only, one subfolder, sanitised filename,
// capped size, and a hard check that the resolved path stays inside ROOT.
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PORT = Number(process.argv[2]) || 5173;
const VAULT = path.join(ROOT, 'documents');
const MAX_SAVE_BYTES = 2 * 1024 * 1024; // 2 MB, well inside a localStorage-free disk write

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

// A vault filename is a single flat segment. Everything else — separators,
// dots that would escape, control characters, reserved Windows device names —
// is stripped, so the caller can never steer the write out of documents/.
function safeFileName(raw) {
  let name = String(raw || '')
    .replace(/[\\/]+/g, '_')
    .replace(/[^A-Za-z0-9._ -]/g, '_')
    .replace(/^\.+/, '')
    .trim();
  if (!name) return '';
  if (/^(con|prn|aux|nul|com[1-9]|lpt[1-9])(\.|$)/i.test(name)) name = '_' + name;
  if (name.length > 120) {
    const ext = path.extname(name).slice(0, 12);
    name = name.slice(0, 120 - ext.length) + ext;
  }
  return name;
}

function readBody(req, limit) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', (c) => {
      size += c.length;
      if (size > limit) {
        reject(new Error('payload too large'));
        req.destroy();
        return;
      }
      chunks.push(c);
    });
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

function saveToVault(req, res) {
  readBody(req, MAX_SAVE_BYTES)
    .then((buf) => {
      let payload;
      try {
        payload = JSON.parse(buf.toString('utf8'));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' })
          .end(JSON.stringify({ ok: false, error: 'body was not JSON' }));
        return;
      }
      const name = safeFileName(payload && payload.name);
      if (!name) {
        res.writeHead(400, { 'Content-Type': 'application/json' })
          .end(JSON.stringify({ ok: false, error: 'missing or unusable file name' }));
        return;
      }
      const content = String((payload && payload.content) || '');
      if (Buffer.byteLength(content, 'utf8') > MAX_SAVE_BYTES) {
        res.writeHead(413, { 'Content-Type': 'application/json' })
          .end(JSON.stringify({ ok: false, error: 'document is larger than the 2 MB vault limit' }));
        return;
      }

      // Belt and braces: resolve, then confirm containment. safeFileName already
      // removes separators, but the write path must not depend on one check.
      fs.mkdir(VAULT, { recursive: true }, (mkErr) => {
        if (mkErr) {
          res.writeHead(500, { 'Content-Type': 'application/json' })
            .end(JSON.stringify({ ok: false, error: 'could not create the vault folder' }));
          return;
        }
        const target = path.resolve(VAULT, name);
        if (target !== VAULT && !target.startsWith(VAULT + path.sep)) {
          res.writeHead(403, { 'Content-Type': 'application/json' })
            .end(JSON.stringify({ ok: false, error: 'refused: path escapes the vault' }));
          return;
        }
        fs.writeFile(target, content, 'utf8', (wErr) => {
          if (wErr) {
            res.writeHead(500, { 'Content-Type': 'application/json' })
              .end(JSON.stringify({ ok: false, error: wErr.message }));
            return;
          }
          const rel = path.relative(ROOT, target).split(path.sep).join('/');
          res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' })
            .end(JSON.stringify({ ok: true, path: rel, bytes: Buffer.byteLength(content, 'utf8') }));
        });
      });
    })
    .catch((e) => {
      if (!res.headersSent) {
        res.writeHead(413, { 'Content-Type': 'application/json' })
          .end(JSON.stringify({ ok: false, error: e.message }));
      }
    });
}

http
  .createServer((req, res) => {
    if (req.method === 'POST' && req.url.split('?')[0] === '/vault/save') {
      saveToVault(req, res);
      return;
    }

    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    const rel = urlPath === '/' ? 'index.html' : urlPath.replace(/^\/+/, '');
    const filePath = path.join(ROOT, rel);

    // Refuse anything that escapes the workspace root.
    if (!filePath.startsWith(ROOT)) {
      res.writeHead(403).end('Forbidden');
      return;
    }

    fs.readFile(filePath, (err, buf) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' }).end('Not found: ' + rel);
        return;
      }
      res.writeHead(200, {
        'Content-Type': TYPES[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
        'Cache-Control': 'no-store'
      });
      res.end(buf);
    });
  })
  .listen(PORT, '127.0.0.1', () => {
    console.log('serving ' + ROOT + ' on http://127.0.0.1:' + PORT);
    console.log('vault writes enabled at POST /vault/save -> ' + path.relative(ROOT, VAULT));
  });
