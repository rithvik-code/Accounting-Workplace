const fs = require('fs');
let s = fs.readFileSync('app.js', 'utf8');

// action handlers for the payments window
const anchor = "      else if (act === 'recon-filter') {";
if (!s.includes(anchor)) throw new Error('action anchor missing');
s = s.replace(anchor, `      else if (act === 'pay-refresh') {
        state.payFrom = document.getElementById('pay-from').value;
        state.payTo = document.getElementById('pay-to').value;
        navigateTo('payments');
        toast('Window recomputed');
      }
      else if (act === 'pay-approve') {
        const rec = state.data.payments.find(p => p.id === actBtn.dataset.payId);
        if (!rec) { toast('Payment not found'); return; }
        const verdict = canApprovePayment(rec);
        if (!verdict.ok) { toast(\`Cannot approve · \${verdict.reason}\`); return; }
        rec.approvals = (rec.approvals || []).concat(currentUser().name);
        rec.status = rec.approvals.length >= 2 ? 'Paid' : 'Open';
        state.save();
        state.addAuditLog(currentUser().name, 'Approved Payment', rec.title);
        toast(\`\${rec.title} approved by \${currentUser().name}\`);
        navigateTo('payments');
      }
      else if (act === 'recon-filter') {`);

fs.writeFileSync('app.js', s);
console.log('patch3 ok');

let h = fs.readFileSync('index.html', 'utf8');
const navAnchor = `<button class="nav-item" data-view="gstrecon">
          <span class="nav-icon">🧾</span> <span>GST 2A/2B Recon</span>
        </button>`;
if (!h.includes(navAnchor)) throw new Error('nav anchor missing');
h = h.replace(navAnchor, navAnchor + `
        <button class="nav-item" data-view="payments">
          <span class="nav-icon">💸</span> <span>Payments Out</span>
        </button>`);
fs.writeFileSync('index.html', h);
console.log('patch3 html ok');
