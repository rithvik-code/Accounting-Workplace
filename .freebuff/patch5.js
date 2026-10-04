const fs = require('fs');
let s = fs.readFileSync('app.js', 'utf8');
const before = s.length;

// 1. tag each row with its kind instead of splitting the list in two
const oldRow = `      <div class="task-item pay-row">
        <div class="pay-date">\${o.dueDate.slice(8, 10) || shortDate(o.dueDate)}</div>`;
const unusedOld = `      <div class="task-item pay-row">
        <div class="pay-date">\${shortDate(o.dueDate)}</div>
        <div class="task-body">
          <div class="task-title-line">\${o.title} <span class="badge badge-gray">\${o.category}</span></div>`;
const newRow = `      <div class="task-item pay-row">
        <div class="pay-date">\${shortDate(o.dueDate)}</div>
        <div class="task-body">
          <div class="task-title-line">
            <span class="pay-kind pay-kind-\${o.kind.toLowerCase()}">\${o.kind}</span>
            \${o.title} <span class="badge badge-gray">\${o.category}</span>
          </div>`;
if (!s.includes(unusedOld)) throw new Error('row anchor not found');
s = s.replace(unusedOld, newRow);

// 2. one chronological list — the running balance only reads correctly in date order
const oldSections = s.slice(
  s.indexOf('    <div class="card" style="margin-bottom:24px;">\n      <div class="card-title-row">\n        <div class="card-title">Statutory ('),
  s.indexOf('  `;\n}\n\n// MAIN APP NAVIGATION RENDER ROUTER')
);
if (!oldSections) throw new Error('sections anchor not found');

const newSections = `    <div class="card">
      <div class="card-title-row">
        <div class="card-title">Timeline (\${obligations.length})</div>
        <div class="card-title" style="font-size:11px;color:var(--ink-muted);font-weight:500;">
          \${statutory.length} statutory · \${operational.length} operational ·
          over \${inr(PAYMENT_APPROVAL_THRESHOLD)} needs approval
        </div>
      </div>
      <div class="task-list">
        \${obligations.length === 0 ? '<div class="empty-state">No obligations fall due in this window.</div>' : obligations.map(rowFor).join('')}
      </div>
    </div>
`;
s = s.replace(oldSections, newSections);

fs.writeFileSync('app.js', s);
console.log('patched', before, '->', s.length);
