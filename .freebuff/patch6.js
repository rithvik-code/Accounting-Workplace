const fs = require('fs');
let s = fs.readFileSync('app.js', 'utf8');
const before = s.length;

const old = `      const verdict = canApprovePayment(o.record);
      const approvals = o.record.approvals || [];
      if (o.record.status === 'Paid') {
        approvalCell = '<span class="badge badge-green">Paid</span>';
      } else if (approvals.length > 0) {
        approvalCell = '<span class="badge badge-green">Approved · ' + approvals.join(', ') + '</span>';
      } else if (verdict.ok) {
        approvalCell = '<button class="btn-secondary" data-action="pay-approve" data-pay-id="' + o.record.id + '">Approve</button>';
      } else {
        approvalCell = '<span class="field-redacted" title="' + verdict.reason + '">🔒 ' + verdict.reason + '</span>';
      }`;

const neu = `      const approvals = o.record.approvals || [];
      const needsApproval = paymentNeedsApproval(o.record);
      if (o.record.status === 'Paid') {
        approvalCell = '<span class="badge badge-green">Paid</span>';
      } else if (!needsApproval) {
        // Below threshold: authorised without a second signature.
        approvalCell = '<span class="muted">auto · below threshold</span>';
      } else if (approvals.length > 0) {
        approvalCell = '<span class="badge badge-green">Approved · ' + approvals.join(', ') + '</span>';
      } else {
        const verdict = canApprovePayment(o.record);
        approvalCell = verdict.ok
          ? '<button class="btn-secondary" data-action="pay-approve" data-pay-id="' + o.record.id + '">Approve</button>'
          : '<span class="field-redacted" title="' + verdict.reason + '">🔒 ' + verdict.reason + '</span>';
      }`;

if (!s.includes(old)) throw new Error('approval cell anchor not found');
s = s.replace(old, neu);
fs.writeFileSync('app.js', s);
console.log('patched', before, '->', s.length);
