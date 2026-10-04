const fs = require('fs');
const f = '.freebuff/block_engine.txt';
let s = fs.readFileSync(f, 'utf8');

// 1. `const out` shadowed the outer obligations array inside the gstr-3b branch
s = s.replace(
  "        const out = outputTaxFor(period);\n        const itc = eligibleItc(period);\n        amount = out - itc;\n        detail = 'Output tax ' + inr(out) + ' less eligible ITC ' + inr(itc) +\n                 (itc === 0 && out > 0 ? ' (no reconciliation on file for this period)' : '');",
  "        const outputTax = outputTaxFor(period);\n        const itc = eligibleItc(period);\n        amount = outputTax - itc;\n        detail = 'Output tax ' + inr(outputTax) + ' less eligible ITC ' + inr(itc) +\n                 (itc === 0 && outputTax > 0 ? ' (no reconciliation on file for this period)' : '');"
);

// 2. ITR guard was nonsense; plain range check is what was meant
s = s.replace(
  "    if (it.date < from || date2ok(it.date) && it.date > to) return;",
  "    if (it.date < from || it.date > to) return;"
);
s = s.replace("function date2ok(d) { return d >= '0000-00-00'; }\n\n", "");

// 3. dead declarations
s = s.replace("// Indian financial year runs April to March. FY 2026-27 = 2026-04 .. 2027-03.\nconst FY = { start: '2026-04', startYear: 2026 };\n\nfunction monthKey(year, month) { return year + '-' + String(month).padStart(2, '0'); }\n\n", "// Indian financial year runs April to March. FY 2026-27 = 2026-04 .. 2027-03.\n");
s = s.replace("  const startPeriod = monthKeyKey(startKey.year, startKey.month);\n\n", "");

fs.writeFileSync(f, s);
console.log('fixed');
