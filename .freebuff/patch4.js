const fs = require('fs');
let s = fs.readFileSync('app.js', 'utf8');
const before = s.length;

const broken = "  return monthKey(ny, nm) + '-' + String(day).padStart(2, '0');";
if (!s.includes(broken)) throw new Error('dueDateForPeriod return not found');
s = s.replace(broken, "  return monthKeyKey(ny, nm) + '-' + String(day).padStart(2, '0');");

fs.writeFileSync('app.js', s);
console.log('patched', before, '->', s.length);
console.log('remaining monthKey( refs:', (s.match(/\bmonthKey\(/g) || []).length);
