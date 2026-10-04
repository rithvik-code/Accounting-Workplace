const fs = require('fs');
const p = 'app.js';
let s = fs.readFileSync(p, 'utf8');
const before = s.length;

const engine = fs.readFileSync('.freebuff/block_engine.txt', 'utf8');
const view = fs.readFileSync('.freebuff/block_view.txt', 'utf8');

// insert engine + view ahead of the router
const anchor = '// MAIN APP NAVIGATION RENDER ROUTER';
if (!s.includes(anchor)) throw new Error('router anchor missing');
s = s.replace(anchor, engine + '\n' + view + '\n' + anchor);

// breadcrumb
s = s.replace("    workspace: 'Switch Workspace',", "    workspace: 'Switch Workspace',\n    payments: 'Payments Out',");

// router case
s = s.replace(
  "    case 'gstrecon': appView.innerHTML = renderGstRecon(); break;",
  "    case 'gstrecon': appView.innerHTML = renderGstRecon(); break;\n    case 'payments': appView.innerHTML = renderPayments(); break;"
);

// nav access
s = s.replace(
  "  gstrecon: ['Partner', 'Manager', 'Senior'],",
  "  gstrecon: ['Partner', 'Manager', 'Senior'],\n  payments: ['Partner', 'Manager'],"
);

// capability: payments approval
s = s.replace(
  "'approve.final', 'create.client'",
  "'approve.final', 'approve.payment', 'create.client'"
);
s = s.replace(
  "'approve.manager', 'create.client'",
  "'approve.manager', 'approve.payment', 'create.client'"
);

// action access
s = s.replace(
  "  'workspace-pick': 'view.allClients'",
  "  'workspace-pick': 'view.allClients',\n  'pay-approve': 'approve.payment'"
);

fs.writeFileSync(p, s);
console.log('bytes', before, '->', s.length);
