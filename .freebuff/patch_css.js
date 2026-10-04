const fs = require('fs');
let c = fs.readFileSync('styles.css', 'utf8');
const before = c.length;

// the stale breakpoint still matches desktop viewports; retarget it
c = c.replace('@media (max-width: 1100px) {\n  .pay-row { flex-wrap: wrap; }', '@media (max-width: 860px) {\n  .pay-row { flex-wrap: wrap; }');

// drop the duplicate override I appended a moment ago
c = c.replace(/\n\/\* Desktop holds the approval cell[\s\S]*?\n\}\n/, '\n');

fs.writeFileSync('styles.css', c);
console.log('css', before, '->', c.length);
console.log('1100px rules left:', (c.match(/max-width: 1100px/g) || []).length);
console.log('860px rules left:', (c.match(/max-width: 860px/g) || []).length);
