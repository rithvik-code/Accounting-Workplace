const fs = require('fs');
const p = 'app.js';
let s = fs.readFileSync(p, 'utf8');
const before = s.length;

const seed = fs.readFileSync('.freebuff/block_seed.txt', 'utf8');

// 1. insert new seed collections immediately before `  users: [`
const anchor = '\n  users: [\n';
if (!s.includes(anchor)) throw new Error('users anchor not found');
s = s.replace(anchor, '\n' + seed + '  users: [\n');

// 2. give the reconciliation a clean join key
const recAnchor = "      period: 'August 2026',";
if (!s.includes(recAnchor)) throw new Error('period anchor not found');
s = s.replace(recAnchor, recAnchor + "\n      month: '2026-08',");

fs.writeFileSync(p, s);
console.log('bytes', before, '->', s.length);
