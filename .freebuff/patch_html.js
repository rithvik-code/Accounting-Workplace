const fs = require('fs');
let h = fs.readFileSync('index.html', 'utf8');
if (h.includes('data-view="payments"')) { console.log('nav already present'); process.exit(0); }
const anchor = '<button class="nav-item" data-view="gstrecon">';
if (!h.includes(anchor)) throw new Error('gstrecon nav missing');
const idx = h.indexOf(anchor);
const close = h.indexOf('</button>', idx) + '</button>'.length;
h = h.slice(0, close) + '\n        <button class="nav-item" data-view="payments">\n          <span class="nav-icon">💸</span> <span>Payments Out</span>\n        </button>' + h.slice(close);
fs.writeFileSync('index.html', h);
console.log('nav inserted');
