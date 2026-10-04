// Accounting Practice Operating System — app.js

// Default Seed Data Store
const seedData = {
  firm: {
    name: 'Rao & Co.',
    legalName: 'Rao & Co. CPAs',
    monogram: 'R',
    shortName: 'R&C',
    brandColor: '#1b4d3e',
    officeLabel: 'Firm Office',
    address: '4th Floor, Sterling Chambers, 12 Church Street, Bengaluru 560001',
    phone: '+91 80 4123 8890',
    email: 'admin@raoandco.ca',
    gstin: '29AABCR4821M1Z4',
    pan: 'AABCR4821M',
    membershipNo: 'CA-2011-118742',
    regulator: 'ICAI — Bengaluru South',
    footerNote: 'Rao & Co., Chartered Accountants'
  },
  gstRecons: [
    {
      id: 'gr1',
      clientId: 'c1',
      clientName: 'ABC Manufacturing Pvt Ltd',
      gstin: '29AABCR4821M1Z4',
      period: 'August 2026',
      toleranceAbs: 100,
      tolerancePct: 1,
      resolutions: {},
      // Purchase register as recorded in the books.
      purchaseRegister: [
        { line: 1, gstin: '29AABCR4821M1Z4', invoiceNo: 'INV-1001', invoiceDate: '2026-08-02', party: 'Kumar Traders', taxable: 100000, igst: 18000, total: 118000 },
        { line: 2, gstin: '29AABCR4821M1Z4', invoiceNo: 'INV-1002', invoiceDate: '2026-08-04', party: 'Sharma Steel Works', taxable: 100000, igst: 18000, total: 118000 },
        { line: 3, gstin: '29AABCR4821M1Z4', invoiceNo: 'INV-1003', invoiceDate: '2026-08-07', party: 'Deepak Polymers', taxable: 45000, igst: 8100, total: 53100 },
        { line: 4, gstin: '29AABCR4821M1Z4', invoiceNo: 'INV-1004', invoiceDate: '2026-08-09', party: 'Vertex Components', taxable: 186525, igst: 33575, total: 220100 },
        { line: 5, gstin: '29AABCR4821M1Z4', invoiceNo: 'INV-1005', invoiceDate: '2026-08-11', party: 'Nandi Logistics', taxable: 76102, igst: 13698, total: 89800 },
        { line: 6, gstin: '29AABCR4821M1Z4', invoiceNo: 'INV-1006', invoiceDate: '2026-08-13', party: 'Axis Industrial', taxable: 54237, igst: 9763, total: 64000 },
        { line: 7, gstin: '29AABCR4821M1Z4', invoiceNo: 'INV-1007', invoiceDate: '2026-08-15', party: 'Nova Chemicals', taxable: 10593, igst: 1907, total: 12500 },
        { line: 8, gstin: '29AABCR4821M1Z4', invoiceNo: '  inv-1008', invoiceDate: '2026-08-17', party: 'Bharat Electricals', taxable: 60424, igst: 10876, total: 71300 },
        { line: 9, gstin: '29AABCR4821M1Z4', invoiceNo: 'INV-1009', invoiceDate: '2026-08-19', party: 'Sundar Packaging', taxable: 262712, igst: 47288, total: 310000 },
        { line: 10, gstin: '29AABCR4821M1Z4', invoiceNo: 'INV-1010', invoiceDate: '2026-08-21', party: 'Modern Fabrics', taxable: 23220, igst: 4180, total: 27400 },
        { line: 11, gstin: '29AABCR4821M1Z4', invoiceNo: 'INV-1012', invoiceDate: '2026-08-25', party: 'Precision Tools', taxable: 80678, igst: 14522, total: 95200 },
        { line: 12, gstin: '29AABCR4821M1Z4', invoiceNo: 'INV-1014', invoiceDate: '2026-08-28', party: 'Trinity Hardware', taxable: 60593, igst: 10907, total: 71500 },
        { line: 13, gstin: '29AABCR4821M1Z4', invoiceNo: 'INV-1015', invoiceDate: '2026-08-29', party: 'Kalyan Castings', taxable: 50000, igst: 9000, total: 59000 }
      ],
      // GSTR-2B as auto-populated from the portal.
      portal2b: [
        { line: 1, gstin: '29AABCR4821M1Z4', invoiceNo: 'INV-1001', invoiceDate: '2026-08-02', party: 'Kumar Traders', taxable: 100000, igst: 18000, total: 118000 },
        { line: 2, gstin: '29AABCR4821M1Z4', invoiceNo: 'INV-1002', invoiceDate: '2026-08-04', party: 'Sharma Steel Works', taxable: 100000, igst: 18000, total: 118000 },
        { line: 3, gstin: '29AABCR4821M1Z4', invoiceNo: 'INV-1003', invoiceDate: '2026-08-07', party: 'Deepak Polymers', taxable: 45000, igst: 9865, total: 54865 },
        { line: 4, gstin: '29AABCR4821M1Z4', invoiceNo: 'INV-1004', invoiceDate: '2026-08-09', party: 'Vertex Components', taxable: 186525, igst: 33575, total: 220100 },
        { line: 6, gstin: '29AABCR4821M1Z4', invoiceNo: 'INV-1006', invoiceDate: '2026-08-13', party: 'Axis Industrial', taxable: 54237, igst: 9763, total: 64000 },
        { line: 7, gstin: '29AABCR4821M1Z4', invoiceNo: 'INV-1007', invoiceDate: '2026-08-15', party: 'Nova Chemicals', taxable: 10593, igst: 1907, total: 12550 },
        { line: 8, gstin: '29AABCR4821M1Z4', invoiceNo: 'INV-1008', invoiceDate: '2026-08-17', party: 'Bharat Electricals', taxable: 60424, igst: 10876, total: 71300 },
        { line: 10, gstin: '29AABCR4821M1Z4', invoiceNo: 'INV-1010', invoiceDate: '2026-08-21', party: 'Modern Fabrics', taxable: 23220, igst: 4180, total: 27400 },
        { line: 11, gstin: '29AABCR4821M1Z4', invoiceNo: 'INV-1011', invoiceDate: '2026-08-23', party: 'Orbit Castings', taxable: 49153, igst: 8847, total: 58000 },
        { line: 12, gstin: '29AABCR4821M1Z4', invoiceNo: 'INV-1012', invoiceDate: '2026-08-25', party: 'Precision Tools', taxable: 80678, igst: 16722, total: 97400 },
        { line: 13, gstin: '29AABCR4821M1Z4', invoiceNo: 'INV-1013', invoiceDate: '2026-08-26', party: 'Elite Fasteners', taxable: 12119, igst: 2181, total: 14300 },
        { line: 14, gstin: '29AABCR4821M1Z4', invoiceNo: 'INV-1014', invoiceDate: '2026-08-28', party: 'Trinity Hardware', taxable: 60593, igst: 10907, total: 71500 },
        { line: 15, gstin: '27AALCK1234P1Z9', invoiceNo: 'INV-1015', invoiceDate: '2026-08-29', party: 'Kalyan Castings', taxable: 50000, igst: 9000, total: 59000 }
      ]
    }
  ],
  users: [
    { id: 'u1', name: 'Rithvik Shah', role: 'Partner', initials: 'RS', avatarBg: '#6d42c7', billableHours: 22, utilizationPct: 48 },
    { id: 'u2', name: 'Rahul Mehta', role: 'Manager', initials: 'RM', avatarBg: '#1b4d3e', billableHours: 38, utilizationPct: 92 },
    { id: 'u3', name: 'Priya Nair', role: 'Senior', initials: 'PN', avatarBg: '#ca7007', billableHours: 34, utilizationPct: 81 },
    { id: 'u4', name: 'Arjun Rao', role: 'Accountant', initials: 'AR', avatarBg: '#225cb8', billableHours: 40, utilizationPct: 96 },
    { id: 'u5', name: 'Neha Sharma', role: 'Trainee', initials: 'NS', avatarBg: '#1f7a4c', billableHours: 18, utilizationPct: 44 }
  ],

  clients: [
    {
      id: 'c1',
      code: 'ABC',
      name: 'ABC Manufacturing Pvt Ltd',
      status: 'Active',
      contact: 'Mr. Sharma (CFO)',
      email: 'sharma@abcmfg.com',
      manager: 'Rahul Mehta',
      senior: 'Priya Nair',
      industry: 'Manufacturing',
      docsCount: 147,
      color: '#1b4d3e'
    },
    {
      id: 'c2',
      code: 'XYZ',
      name: 'XYZ Software Solutions',
      status: 'Active',
      contact: 'Ms. Kapoor',
      email: 'kapoor@xyztech.io',
      manager: 'Rahul Mehta',
      senior: 'Priya Nair',
      industry: 'Technology',
      docsCount: 42,
      color: '#225cb8'
    },
    {
      id: 'c3',
      code: 'DEF',
      name: 'DEF Professional Services',
      status: 'Attention',
      contact: 'Mr. Verma',
      email: 'verma@defservices.in',
      manager: 'Priya Nair',
      senior: 'Arjun Rao',
      industry: 'Consulting',
      docsCount: 89,
      color: '#c93b34'
    },
    {
      id: 'c4',
      code: 'NM',
      name: 'Nimble Media & Advertising',
      status: 'Active',
      contact: 'Ms. Roy',
      email: 'roy@nimblemedia.com',
      manager: 'Rahul Mehta',
      senior: 'Arjun Rao',
      industry: 'Media',
      docsCount: 31,
      color: '#ca7007'
    },
    {
      id: 'c5',
      code: 'KC',
      name: 'Kapur Real Estate Developers',
      status: 'Active',
      contact: 'Mr. Kapur',
      email: 'kapur@kapurrealty.com',
      manager: 'Priya Nair',
      senior: 'Neha Sharma',
      industry: 'Real Estate',
      docsCount: 65,
      color: '#6d42c7'
    }
  ],

  engagements: [
    {
      id: 'e1',
      clientId: 'c1',
      title: 'FY 2025–26 Statutory Audit',
      type: 'Audit',
      manager: 'Rahul Mehta',
      senior: 'Priya Nair',
      associates: ['Arjun Rao', 'Rithvik Shah'],
      progress: 78,
      feeTotal: 850000, feeBilled: 663000, realizationPct: 78,
      tasksTotal: 34,
      tasksCompleted: 26,
      tasksOverdue: 2,
      docsCount: 147,
      reviewsPending: 2,
      deadline: '2026-09-30'
    },
    {
      id: 'e2',
      clientId: 'c1',
      title: 'Monthly GST Compliance & Filing',
      type: 'GST',
      manager: 'Rahul Mehta',
      senior: 'Priya Nair',
      associates: ['Arjun Rao'],
      progress: 60,
      feeTotal: 240000, feeBilled: 132000, realizationPct: 55,
      tasksTotal: 10,
      tasksCompleted: 6,
      tasksOverdue: 1,
      docsCount: 18,
      reviewsPending: 1,
      deadline: '2026-09-12'
    },
    {
      id: 'e3',
      clientId: 'c2',
      title: 'Q2 Tax Provisioning & Returns',
      type: 'Tax',
      manager: 'Rahul Mehta',
      senior: 'Arjun Rao',
      associates: ['Neha Sharma'],
      progress: 90,
      feeTotal: 420000, feeBilled: 399000, realizationPct: 95,
      tasksTotal: 12,
      tasksCompleted: 11,
      tasksOverdue: 0,
      docsCount: 24,
      reviewsPending: 1,
      deadline: '2026-10-31'
    },
    {
      id: 'e4',
      clientId: 'c3',
      title: 'Internal Financial Control Audit',
      type: 'Audit',
      manager: 'Priya Nair',
      senior: 'Arjun Rao',
      associates: ['Neha Sharma'],
      progress: 35,
      feeTotal: 610000, feeBilled: 189100, realizationPct: 31,
      tasksTotal: 20,
      tasksCompleted: 7,
      tasksOverdue: 2,
      docsCount: 45,
      reviewsPending: 0,
      deadline: '2026-09-25'
    }
  ],

  tasks: [
    {
      id: 't1',
      title: 'Bank Reconciliation – August 2026',
      clientId: 'c1',
      engagementId: 'e1',
      assignedTo: 'Priya Nair',
      reviewer: 'Rahul Mehta',
      createdDate: '2026-09-02',
      dueDate: '2026-09-07',
      priority: 'High',
      status: 'In Progress',
      attachments: ['Bank_Statement_Aug.pdf'],
      commentsCount: 3,
      stage: 'Prep'
    },
    {
      id: 't2',
      title: 'Prepare GST Reconciliation Statement',
      clientId: 'c1',
      engagementId: 'e2',
      assignedTo: 'Rithvik Shah',
      reviewer: 'Priya Nair',
      createdDate: '2026-09-04',
      dueDate: '2026-09-10',
      priority: 'High',
      status: 'Ready for Review',
      attachments: ['GST_Draft_v1.xlsx'],
      commentsCount: 2,
      stage: 'Review'
    },
    {
      id: 't3',
      title: 'Review Payroll Reports & Tax Deductions',
      clientId: 'c2',
      engagementId: 'e3',
      assignedTo: 'Arjun Rao',
      reviewer: 'Rahul Mehta',
      createdDate: '2026-09-03',
      dueDate: '2026-09-08',
      priority: 'Medium',
      status: 'In Progress',
      attachments: ['Payroll_Summary_Aug.xlsx'],
      commentsCount: 1,
      stage: 'Prep'
    },
    {
      id: 't4',
      title: 'Verify Vendor Invoice Register vs GSTR-2B',
      clientId: 'c3',
      engagementId: 'e4',
      assignedTo: 'Neha Sharma',
      reviewer: 'Priya Nair',
      createdDate: '2026-08-30',
      dueDate: '2026-09-05',
      priority: 'High',
      status: 'Changes Requested',
      attachments: ['GSTR2B_Discrepancies.xlsx'],
      commentsCount: 4,
      stage: 'Prep'
    },
    {
      id: 't5',
      title: 'Finalize Income Tax Computation Draft',
      clientId: 'c1',
      engagementId: 'e1',
      assignedTo: 'Priya Nair',
      reviewer: 'Rithvik Shah',
      createdDate: '2026-09-01',
      dueDate: '2026-09-15',
      priority: 'Medium',
      status: 'Not Started',
      attachments: [],
      commentsCount: 0,
      stage: 'Docs'
    }
  ],

  documents: [
    {
      id: 'd1',
      name: 'Bank_Statement_Aug_2026.pdf',
      clientId: 'c1',
      clientName: 'ABC Manufacturing Pvt Ltd',
      engagementTitle: 'FY 2025–26 Statutory Audit',
      uploadedBy: 'Priya Nair',
      uploadDate: '2026-09-06 09:31',
      version: 'v2.0',
      status: 'Waiting for Review',
      reviewer: 'Rahul Mehta',
      size: '2.4 MB',
      category: 'Bank',
      comments: [
        { author: 'Priya Nair', text: 'Please verify transactions #142 to #149 in tab 2.', time: '09:35 AM' }
      ]
    },
    {
      id: 'd2',
      name: 'GST_Returns_Q2_Summary.xlsx',
      clientId: 'c1',
      clientName: 'ABC Manufacturing Pvt Ltd',
      engagementTitle: 'Monthly GST Compliance & Filing',
      uploadedBy: 'Arjun Rao',
      uploadDate: '2026-09-05 14:20',
      version: 'v1.1',
      status: 'Approved',
      reviewer: 'Priya Nair',
      size: '890 KB',
      category: 'GST',
      comments: [
        { author: 'Priya Nair', text: 'All reconciliations match GSTR-3B. Approved.', time: '16:00 PM' }
      ]
    },
    {
      id: 'd3',
      name: 'Purchase_Invoice_Register_Aug.xlsx',
      clientId: 'c3',
      clientName: 'DEF Professional Services',
      engagementTitle: 'Internal Financial Control Audit',
      uploadedBy: 'Neha Sharma',
      uploadDate: '2026-09-04 11:15',
      version: 'v1.0',
      status: 'Returned',
      reviewer: 'Priya Nair',
      size: '1.2 MB',
      category: 'Expenses',
      comments: [
        { author: 'Priya Nair', text: 'Invoice #827 clarification missing. Please return to client.', time: '12:08 PM' }
      ]
    }
  ],

  requests: [
    {
      id: 'r1',
      clientId: 'c1',
      clientName: 'ABC Manufacturing Pvt Ltd',
      title: 'August Financial Documents Request',
      dueDate: '2026-09-08',
      items: [
        { label: 'Bank Statement – August 2026', done: true },
        { label: 'Purchase Register – August 2026', done: true },
        { label: 'Payroll Summary – August 2026', done: true },
        { label: 'Outstanding Invoices Clarification', done: false }
      ],
      status: '3 of 4 received'
    },
    {
      id: 'r2',
      clientId: 'c2',
      clientName: 'XYZ Software Solutions',
      title: 'Q2 Tax Audit Documentation Request',
      dueDate: '2026-09-10',
      items: [
        { label: 'Form 16B Certificates', done: false },
        { label: 'Foreign Remittance Invoices', done: false }
      ],
      status: 'Waiting for response (2 days)'
    }
  ],

  messages: [
    {
      id: 'm1',
      channel: '# General',
      author: 'Rithvik Shah',
      authorInitials: 'RS',
      time: '09:14 AM',
      text: 'Good morning team — reminder that ABC Manufacturing’s GST filing is ready for final manager review today.'
    },
    {
      id: 'm2',
      channel: '# General',
      author: 'Priya Nair',
      authorInitials: 'PN',
      time: '09:18 AM',
      text: 'Uploaded the August bank statement to the ABC client workspace. Assigned Rahul for approval.'
    },
    {
      id: 'm3',
      channel: '# General',
      author: 'Arjun Rao',
      authorInitials: 'AR',
      time: '10:02 AM',
      text: 'Thanks! I will complete the XYZ payroll reconciliation before 1:00 PM.'
    }
  ],

  announcements: [
    {
      id: 'a1',
      title: '📢 Updated Document Naming SOP for Audit Engagements',
      date: '2026-09-04',
      author: 'Rithvik Shah',
      content: 'Please ensure all client upload files follow the pattern [ClientCode]_[DocType]_[Period].pdf.'
    },
    {
      id: 'a2',
      title: '📅 September Tax Deadline Calendar Released',
      date: '2026-09-01',
      author: 'Rahul Mehta',
      content: 'All GST filings due by Sept 12. Advance tax computations due Sept 15.'
    }
  ],

  auditLogs: [
    { id: 'al1', time: '2026-09-06 09:31', user: 'Priya Nair', action: 'Uploaded Document', target: 'Bank_Statement_Aug_2026.pdf (ABC Ltd)' },
    { id: 'al2', time: '2026-09-06 09:47', user: 'Rahul Mehta', action: 'Assigned Task', target: 'Bank Reconciliation to Priya Nair' },
    { id: 'al3', time: '2026-09-06 11:12', user: 'Rithvik Shah', action: 'Submitted Work', target: 'GST Reconciliation Statement' },
    { id: 'al4', time: '2026-09-06 12:08', user: 'Priya Nair', action: 'Returned Document', target: 'Purchase_Invoice_Register_Aug.xlsx' },
    { id: 'al5', time: '2026-09-06 15:01', user: 'Priya Nair', action: 'Approved Document', target: 'GST_Returns_Q2_Summary.xlsx' }
  ],

  knowledgeBase: [
    {
      id: 'kb1',
      category: 'GST & Indirect Tax',
      title: 'GSTR-3B vs GSTR-2B Reconciliation SOP',
      desc: 'Step-by-step procedure to resolve ITC discrepancies between purchase register and GSTR-2B portal downloads.',
      steps: [
        'Download GSTR-2B JSON from GST portal.',
        'Import purchase register into reconciliation tool.',
        'Flag matched invoices, supplier mismatch, and missing ITC.',
        'Prepare discrepancy letter for supplier notification.'
      ]
    },
    {
      id: 'kb2',
      category: 'Statutory Audit',
      title: 'Bank Confirmation & Reconciliation Standard',
      desc: 'Mandatory audit procedures for verifying external bank balances and outstanding cheques.',
      steps: [
        'Obtain balance confirmation directly from bank under SA 505.',
        'Trace unpresented cheques beyond 90 days.',
        'Verify bank charges and interest accruals against bank statements.'
      ]
    },
    {
      id: 'kb3',
      category: 'Internal Policies',
      title: '4-Stage Work Approval & Quality Review Workflow',
      desc: 'Firm SOP outlining responsibilities from Staff Preparation to Manager Approval.',
      steps: [
        'Staff / Associate prepares working papers and uploads attachments.',
        'Senior Accountant conducts technical verification and checks calculations.',
        'Manager conducts engagement review and signs off on compliance.',
        'Partner grants final sign-off before client delivery.'
      ]
    }
  ]
};

// Application State Management
class AppState {
  constructor() {
    this.data = this.loadFromStorage();
    this.currentView = 'home';
    this.activeRole = 'Partner';
    this.appMode = 'firm'; // 'firm' or 'portal'
    this.activeClientId = 'c1'; // Default selected client for mini-office
    this.activeClientSubTab = 'overview';
    this.activeChatChannel = '# General';
    this.searchQuery = '';
    this.workspaceMenuOpen = false;
    this.reconFilter = 'All';
    this.reconExpanded = null;
  }

  loadFromStorage() {
    try {
      const stored = localStorage.getItem('acc_workplace_os_data');
      // Merge over seedData so a stored blob from an older build still gets
      // any newly added top-level collections (e.g. `firm`).
      return stored ? { ...seedData, ...JSON.parse(stored) } : seedData;
    } catch (e) {
      return seedData;
    }
  }

  save() {
    try {
      localStorage.setItem('acc_workplace_os_data', JSON.stringify(this.data));
    } catch (e) {
      console.error('Storage save error:', e);
    }
  }

  addAuditLog(user, action, target) {
    const time = new Date().toISOString().replace('T', ' ').substring(0, 16);
    this.data.auditLogs.unshift({
      id: 'al_' + Date.now(),
      time,
      user,
      action,
      target
    });
    this.save();
  }
}

const state = new AppState();

// Utility Helper Functions
function toast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.innerHTML = `<span>✓</span> <span>${msg}</span>`;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2800);
}

function getClient(id) {
  return state.data.clients.find(c => c.id === id) || state.data.clients[0];
}

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

// ---------- PERMISSION MODEL ----------
// One source of truth. Nothing below reads anything else for authorization.
const ALL_ROLES = ['Partner', 'Manager', 'Senior', 'Accountant', 'Trainee'];

const CAPABILITIES = {
  Partner:    ['view.allClients', 'view.firmFinancials', 'view.clientFinancials', 'view.reports', 'view.auditLog', 'approve.final', 'create.client', 'create.task', 'upload.doc', 'announce', 'manage.users'],
  Manager:    ['view.allClients', 'view.clientFinancials', 'view.reports', 'view.auditLog', 'approve.manager', 'create.client', 'create.task', 'upload.doc', 'announce'],
  Senior:     ['view.clientFinancials', 'approve.senior', 'create.task', 'upload.doc'],
  Accountant: ['create.task', 'upload.doc'],
  Trainee:    ['create.task.own', 'upload.doc']
};

const NAV_ACCESS = {
  home: ALL_ROLES,
  communication: ALL_ROLES,
  clients: ['Partner', 'Manager', 'Senior', 'Accountant'],
  mywork: ALL_ROLES,
  deadlines: ['Partner', 'Manager', 'Senior', 'Accountant'],
  calendar: ALL_ROLES,
  documents: ALL_ROLES,
  reviews: ['Partner', 'Manager', 'Senior'],
  requests: ['Partner', 'Manager', 'Senior', 'Accountant'],
  gstrecon: ['Partner', 'Manager', 'Senior'],
  knowledge: ALL_ROLES,
  reports: ['Partner', 'Manager'],
  assistant: ALL_ROLES,
  announcements: ['Partner', 'Manager'],
  auditlog: ['Partner', 'Manager'],
  search: ALL_ROLES,
  notifications: ALL_ROLES,
  workspace: ['Partner', 'Manager'],
  firmsettings: ['Partner', 'Manager']
};

const ACTION_ACCESS = {
  'quick-create': 'create.task',
  'new-task': 'create.task',
  'new-client': 'create.client',
  'upload-doc': 'upload.doc',
  'new-request': 'create.task',
  'new-event': 'create.task',
  'new-announcement': 'announce',
  'reset-firm': 'manage.users',
  'recon-apply-tolerance': 'approve.manager',
  'workspace-pick': 'view.allClients'
};

const MODAL_ACCESS = {
  // A value may be a list: `create.task.own` is a narrower grant that still
  // permits opening the task modal, so the button and the guard must agree.
  'task': ['create.task', 'create.task.own'],
  'client': ['create.client'],
  'document': ['upload.doc'],
  'client request': ['create.task', 'create.task.own'],
  'calendar event': ['create.task', 'create.task.own'],
  'announcement': ['announce']
};

const VIEW_LABELS = {
  clients: 'the client register', reports: 'Manager Reports', auditlog: 'the Audit Log',
  announcements: 'Announcements', reviews: 'Reviews & Approvals', firmsettings: 'Firm Settings',
  workspace: 'the workspace switcher', gstrecon: 'GST reconciliation', deadlines: 'the Deadline Center',
  requests: 'Client Requests'
};

function currentUser() {
  return state.data.users.find(u => u.role === state.activeRole) || state.data.users[0];
}

function can(cap) {
  return (CAPABILITIES[state.activeRole] || []).includes(cap);
}

function canSee(view) {
  return (NAV_ACCESS[view] || ALL_ROLES).includes(state.activeRole);
}

function denyReason(view) {
  const label = VIEW_LABELS[view] || 'this area';
  return `${state.activeRole} role does not have access to ${label}.`;
}

function canAccessClient(clientId) {
  if (can('view.allClients')) return true;
  const me = currentUser().name;
  return state.data.engagements.some(e =>
    e.clientId === clientId && (e.manager === me || e.senior === me || (e.associates || []).includes(me)));
}

function clientDenyReason(clientId) {
  return `${currentUser().name} is not staffed on ${getClient(clientId).name}.`;
}

// Segregation of duties: you may not review your own work at any level.
function canReviewItem(item) {
  const me = currentUser().name;
  // Documents record the preparer as `uploadedBy`; tasks use `assignedTo`.
  if (item.assignedTo === me || item.uploadedBy === me) {
    return { ok: false, reason: 'You prepared this, so you cannot review it.' };
  }
  if (item.reviewer === me) return { ok: false, reason: 'You are the assigned reviewer; another reviewer must sign off.' };
  if (can('approve.final')) return { ok: true, level: 'final', label: 'Final Sign-off' };
  if (can('approve.manager')) return { ok: true, level: 'manager', label: 'Approve' };
  if (can('approve.senior')) return { ok: true, level: 'senior', label: 'Senior Review' };
  return { ok: false, reason: `${state.activeRole} role cannot approve or sign off work.` };
}

// Roles below Senior only ever see their own queue.
function visibleTasks() {
  const me = currentUser().name;
  if (can('view.allClients')) return state.data.tasks;
  return state.data.tasks.filter(t => t.assignedTo === me || t.reviewer === me);
}

// ---------- FIRM BRANDING ----------
// Everything visual about the firm is configurable; nothing is hardcoded.
function hexToRgb(hex) {
  const h = String(hex || '').replace('#', '').trim();
  const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
  const n = parseInt(full, 16);
  if (Number.isNaN(n) || full.length !== 6) return { r: 27, g: 77, b: 62 };
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function toHex(r, g, b) {
  const clamp = v => Math.max(0, Math.min(255, Math.round(v)));
  return '#' + [r, g, b].map(v => clamp(v).toString(16).padStart(2, '0')).join('');
}

// amount > 0 mixes toward white, < 0 mixes toward black.
function shade(hex, amount) {
  const { r, g, b } = hexToRgb(hex);
  const t = amount > 0 ? 255 : 0;
  const p = Math.abs(amount);
  return toHex(r + (t - r) * p, g + (t - g) * p, b + (t - b) * p);
}

function rgbaOf(hex, alpha) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function firm() {
  return state.data.firm || {};
}

// Derives the full palette from one brand colour, so changing the swatch
// rebrands every var(--emerald*) consumer across the app.
function applyFirmBranding() {
  const f = firm();
  const brand = f.brandColor || '#1b4d3e';
  const root = document.documentElement;

  root.style.setProperty('--emerald', brand);
  root.style.setProperty('--forest', shade(brand, -0.55));
  root.style.setProperty('--emerald-light', shade(brand, 0.18));
  root.style.setProperty('--emerald-soft', shade(brand, 0.88));
  root.style.setProperty('--emerald-border', shade(brand, 0.62));
  root.style.setProperty('--emerald-glow', rgbaOf(brand, 0.25));

  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) themeMeta.setAttribute('content', brand);

  document.querySelectorAll('[data-firm]').forEach(el => {
    const val = f[el.dataset.firm];
    if (val) el.textContent = val;
  });

  const sub = document.getElementById('firm-subtitle');
  if (sub) sub.textContent = `${state.data.users.length} Members · ${f.officeLabel || 'Firm Office'}`;

  if (f.name) document.title = `${f.name} — Operating System for Practice`;
}

function renderBadge(status) {
  if (['Approved', 'Active', 'Completed', 'All received', 'Matched', 'Reconciled'].includes(status)) {
    return `<span class="badge badge-green"><span class="badge-dot-sm"></span>${status}</span>`;
  }
  if (['In Progress', 'Waiting for Review', 'Ready for Review', 'Attention', '3 of 4 received', 'Missing in 2B', 'Variance Accepted'].includes(status)) {
    return `<span class="badge badge-yellow"><span class="badge-dot-sm"></span>${status}</span>`;
  }
  if (['Overdue', 'Returned', 'Changes Requested', 'High', 'Variance'].includes(status)) {
    return `<span class="badge badge-red"><span class="badge-dot-sm"></span>${status}</span>`;
  }
  if (['Missing in Register'].includes(status)) {
    return `<span class="badge badge-blue"><span class="badge-dot-sm"></span>${status}</span>`;
  }
  return `<span class="badge badge-gray"><span class="badge-dot-sm"></span>${status}</span>`;
}

// VIEW RENDERERS

// 1. MAIN HOME WORKSPACE
function renderHome() {
  const overdueTasks = state.data.tasks.filter(t => t.dueDate < '2026-09-06' || t.status === 'Changes Requested');
  const todayTasks = state.data.tasks.filter(t => t.status === 'In Progress' || t.status === 'Ready for Review');
  const reviewDocs = state.data.documents.filter(d => d.status === 'Waiting for Review');
  const pendingRequests = state.data.requests.filter(r => r.status !== 'All received');

  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Monday, September 7, 2026</div>
        <h1>Good morning, ${currentUser().name.split(' ')[0]}</h1>
        <p>Your digital office briefing for today.</p>
      </div>
      <div class="page-actions">
        <button class="btn-secondary" data-action="new-task">＋ New Task</button>
        <button class="btn-primary" data-action="upload-doc">↑ Upload Document</button>
      </div>
    </div>

    <!-- Daily Status Briefing Cards -->
    <div class="grid-4" style="margin-bottom: 24px;">
      <div class="stat-box alert-red">
        <div class="stat-header">Overdue Work <span class="stat-icon-wrap">🔴</span></div>
        <div class="stat-value">${overdueTasks.length}</div>
        <div class="stat-meta"><span>Requires immediate action</span></div>
      </div>
      <div class="stat-box alert-yellow">
        <div class="stat-header">Tasks Due Today <span class="stat-icon-wrap">🟡</span></div>
        <div class="stat-value">${todayTasks.length}</div>
        <div class="stat-meta"><span>In progress across 3 clients</span></div>
      </div>
      <div class="stat-box alert-blue">
        <div class="stat-header">Waiting for Review <span class="stat-icon-wrap">🔵</span></div>
        <div class="stat-value">${reviewDocs.length}</div>
        <div class="stat-meta"><span>Manager review pending</span></div>
      </div>
      <div class="stat-box">
        <div class="stat-header">Client Requests <span class="stat-icon-wrap">🟢</span></div>
        <div class="stat-value">${pendingRequests.length}</div>
        <div class="stat-meta"><span>Active document collection</span></div>
      </div>
    </div>

    <!-- Main Home Split View: My Work vs Calendar & Client Activity -->
    <div class="grid-2-1">
      <div style="display:flex; flex-direction:column; gap: 20px;">
        <!-- Priority Work List -->
        <div class="card">
          <div class="card-title-row">
            <div class="card-title">Priority Tasks &amp; Engagements</div>
            <button class="btn-ghost" data-navigate="mywork">View My Work Queue →</button>
          </div>
          <div class="task-list">
            ${state.data.tasks.map(t => {
              const c = getClient(t.clientId);
              return `
                <div class="task-item">
                  <div class="check-box ${t.status === 'Completed' ? 'checked' : ''}" data-toggle-task="${t.id}">
                    ${t.status === 'Completed' ? '✓' : ''}
                  </div>
                  <div class="task-body">
                    <div class="task-title-line">
                      <span style="font-weight:700;">${t.title}</span>
                    </div>
                    <div class="task-meta-line">
                      <span style="color:var(--emerald);font-weight:600;">${c.name}</span>
                      <span>·</span>
                      <span>Assigned: ${t.assignedTo}</span>
                      <span>·</span>
                      <span>Due: ${t.dueDate}</span>
                    </div>
                  </div>
                  <div>${renderBadge(t.status)}</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Recent Client Activity Feed -->
        <div class="card">
          <div class="card-title-row">
            <div class="card-title">Client Activity Stream</div>
            <button class="btn-ghost" data-navigate="auditlog">View Full Audit Log →</button>
          </div>
          <div class="timeline">
            ${state.data.auditLogs.slice(0, 5).map(log => `
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <strong>${log.user}</strong> ${log.action.toLowerCase()} <em>${log.target}</em>
                  <div class="timeline-time">${log.time}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Right Column: Today's Schedule & Quick Assistant -->
      <div style="display:flex; flex-direction:column; gap: 20px;">
        <div class="card">
          <div class="card-title-row">
            <div class="card-title">Today's Schedule</div>
            <button class="btn-ghost" data-navigate="calendar">Calendar →</button>
          </div>
          <div style="display:flex; flex-direction:column; gap: 12px;">
            <div style="padding: 10px; background: var(--cream); border-left: 3px solid var(--emerald); border-radius: 6px;">
              <div style="font-weight:700; font-size:12px;">09:30 AM — ABC Audit Review Meeting</div>
              <div style="font-size:11px; color:var(--ink-muted);">Rahul Mehta, Priya Nair, Rithvik Shah</div>
            </div>
            <div style="padding: 10px; background: var(--cream); border-left: 3px solid var(--yellow); border-radius: 6px;">
              <div style="font-weight:700; font-size:12px;">11:00 AM — Review GST Reconciliation Draft</div>
              <div style="font-size:11px; color:var(--ink-muted);">ABC Manufacturing Pvt Ltd</div>
            </div>
            <div style="padding: 10px; background: var(--cream); border-left: 3px solid var(--blue); border-radius: 6px;">
              <div style="font-weight:700; font-size:12px;">14:00 PM — Team Sync &amp; Workload Distribution</div>
              <div style="font-size:11px; color:var(--ink-muted);">Firm-wide meeting</div>
            </div>
          </div>
        </div>

        <!-- Assistant Prompt Widget -->
        <div class="assistant-box">
          <h3>🤖 Assistant</h3>
          <p>Ask anything about deadlines, client work, or document statuses.</p>
          <div class="assistant-input-row">
            <input id="quick-ask-input" placeholder="What is overdue today?" />
            <button class="btn-primary" id="btn-quick-ask">Ask</button>
          </div>
          <div id="quick-ask-result"></div>
        </div>
      </div>
    </div>
  `;
}

// 2. COMMUNICATION VIEW
function renderCommunication() {
  const channelMsgs = state.data.messages.filter(m => m.channel === state.activeChatChannel);

  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Firm Communication</div>
        <h1>Messages &amp; Discussions</h1>
        <p>Direct chats, specialized work groups, and client-attached discussions.</p>
      </div>
      <button class="btn-primary" data-action="new-chat">＋ New Conversation</button>
    </div>

    <div class="chat-grid">
      <!-- Sidebar Channels & DMs -->
      <div class="chat-sidebar">
        <div class="chat-group-title">Work Groups</div>
        ${['# General', '# Tax', '# Audit', '# Management'].map(ch => `
          <div class="chat-channel-item ${state.activeChatChannel === ch ? 'active' : ''}" data-select-channel="${ch}">
            <span>💬</span> <span>${ch}</span>
          </div>
        `).join('')}

        <div class="chat-group-title">Client Discussions</div>
        ${state.data.clients.map(c => `
          <div class="chat-channel-item ${state.activeChatChannel === c.name ? 'active' : ''}" data-select-channel="${c.name}">
            <span>🏢</span> <span style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${c.code} Discussion</span>
          </div>
        `).join('')}

        <div class="chat-group-title">Direct Messages</div>
        ${state.data.users.slice(1).map(u => `
          <div class="chat-channel-item ${state.activeChatChannel === u.name ? 'active' : ''}" data-select-channel="${u.name}">
            <span>👤</span> <span>${u.name}</span>
          </div>
        `).join('')}
      </div>

      <!-- Main Message Panel -->
      <div class="chat-main-panel">
        <div class="chat-main-header">
          <div>
            <div style="font-weight:700; font-size:15px; color:var(--forest);">${state.activeChatChannel}</div>
            <div style="font-size:11px; color:var(--ink-muted);">Contextual discussion thread attached to practice work</div>
          </div>
        </div>

        <div class="chat-messages-container" id="chat-stream">
          ${channelMsgs.length === 0 ? `
            <div style="text-align:center; padding: 40px; color:var(--ink-muted);">
              No messages in <strong>${state.activeChatChannel}</strong> yet. Start the discussion below.
            </div>
          ` : channelMsgs.map(m => `
            <div class="msg-row">
              <div class="msg-avatar">${m.authorInitials}</div>
              <div class="msg-body">
                <div class="msg-header">
                  <span class="msg-author">${m.author}</span>
                  <span class="msg-time">${m.time}</span>
                </div>
                <div class="msg-text">${m.text}</div>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="chat-composer-box">
          <form id="chat-composer-form" class="chat-composer-form">
            <input class="chat-input" id="chat-input-text" placeholder="Write a message in ${state.activeChatChannel}..." required />
            <button class="btn-primary" type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  `;
}

// 3. CLIENT MANAGEMENT & MINI-OFFICE VIEW
function renderClients() {
  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Client Portfolio</div>
        <h1>Clients &amp; Mini-Offices</h1>
        <p>The core object of the platform. Select a client to open its digital office.</p>
      </div>
      <button class="btn-primary" data-action="new-client">＋ Add Client</button>
    </div>

    <!-- Client Cards Grid -->
    <div class="grid-3" style="margin-bottom: 24px;">
      ${state.data.clients.map(c => `
        <div class="card card-hover" style="cursor:pointer;" data-open-client="${c.id}">
          <div style="display:flex; align-items:center; gap: 12px; margin-bottom: 14px;">
            <div class="client-lg-logo" style="width:42px;height:42px;font-size:16px;background:${c.color}">${c.code}</div>
            <div>
              <div style="font-weight:700; font-size:15px; color:var(--forest);">${c.name}</div>
              <div style="font-size:11.5px; color:var(--ink-muted);">${c.industry} · ${c.contact}</div>
            </div>
          </div>

          <div style="border-top:1px solid var(--line-light); padding-top: 12px; margin-top: 10px; display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:11.5px; color:var(--ink-muted);">Manager: <strong>${c.manager}</strong></span>
            ${renderBadge(c.status)}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// 4. CLIENT MINI-OFFICE (CLIENT DETAIL VIEW WITH 9 SUB-TABS)
function renderClientDetail(clientId) {
  const c = getClient(clientId);
  const engagements = state.data.engagements.filter(e => e.clientId === c.id);
  const tasks = state.data.tasks.filter(t => t.clientId === c.id);
  const docs = state.data.documents.filter(d => d.clientId === c.id);
  const reqs = state.data.requests.filter(r => r.clientId === c.id);

  return `
    <div class="page-header" style="margin-bottom: 12px;">
      <button class="btn-ghost" data-navigate="clients">← Back to Client Portfolio</button>
    </div>

    <div class="client-office-header">
      <div class="client-office-meta">
        <div class="client-lg-logo" style="background:${c.color}">${c.code}</div>
        <div class="client-office-info">
          <h2>${c.name}</h2>
          <div class="client-office-sub">
            <span>Primary Contact: <strong>${c.contact} (${c.email})</strong></span>
            <span>Manager: <strong>${c.manager}</strong></span>
            <span>Senior: <strong>${c.senior}</strong></span>
            <span>Industry: <strong>${c.industry}</strong></span>
          </div>
        </div>
        <div style="margin-left:auto;">${renderBadge(c.status)}</div>
      </div>

      <!-- 9 Sub-Tabs -->
      <div class="sub-tabs-bar">
        ${[
          ['overview', 'Overview'],
          ['engagements', 'Engagements (' + engagements.length + ')'],
          ['documents', 'Documents (' + docs.length + ')'],
          ['tasks', 'Tasks (' + tasks.length + ')'],
          ['requests', 'Requests (' + reqs.length + ')'],
          ['calendar', 'Calendar'],
          ['discussion', 'Discussion'],
          ['reviews', 'Reviews'],
          ['activity', 'Activity']
        ]
        // Reviews and the full activity trail are Senior-and-above only.
        .filter(([tabId]) => tabId !== 'reviews' && tabId !== 'activity' || can('approve.senior') || can('approve.manager') || can('approve.final'))
        .map(([tabId, tabLabel]) => `
          <button class="sub-tab-btn ${state.activeClientSubTab === tabId ? 'active' : ''}" data-client-tab="${tabId}">
            ${tabLabel}
          </button>
        `).join('')}
      </div>
    </div>

    <!-- Sub-Tab Content -->
    ${renderClientSubTabContent(c, engagements, tasks, docs, reqs)}
  `;
}

function renderClientSubTabContent(client, engagements, tasks, docs, reqs) {
  const subTab = state.activeClientSubTab;

  if (subTab === 'engagements') {
    return `
      <div class="card">
        <div class="card-title-row">
          <div class="card-title">Active Engagements (${engagements.length})</div>
          <button class="btn-primary" data-action="new-engagement">＋ New Engagement</button>
        </div>
        <div style="display:flex; flex-direction:column; gap: 18px;">
          ${engagements.map(e => `
            <div style="border:1px solid var(--line); border-radius: var(--radius); padding: 18px; background:var(--surface-subtle);">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <h3 style="font-size:16px; font-weight:700; color:var(--forest);">${e.title}</h3>
                  <div style="font-size:11.5px; color:var(--ink-muted); margin-top:2px;">
                    Manager: ${e.manager} · Senior: ${e.senior} · Associates: ${e.associates.join(', ')}
                  </div>
                </div>
                <span class="badge badge-green">${e.progress}% Complete</span>
              </div>
              <div class="progress-bar-wrap">
                <div class="progress-bar-fill" style="width: ${e.progress}%"></div>
              </div>
              <div style="display:flex; gap: 20px; font-size:12px; color:var(--ink-muted); margin-top: 8px;">
                <span>Tasks: <strong>${e.tasksCompleted}/${e.tasksTotal}</strong></span>
                <span>Overdue: <strong style="color:var(--red);">${e.tasksOverdue}</strong></span>
                <span>Documents: <strong>${e.docsCount}</strong></span>
                <span>Reviews Pending: <strong>${e.reviewsPending}</strong></span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (subTab === 'documents') {
    return `
      <div class="card">
        <div class="card-title-row">
          <div class="card-title">Client File Room &amp; Folders</div>
          <button class="btn-primary" data-action="upload-doc">↑ Upload File</button>
        </div>
        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Document Name</th>
                <th>Category</th>
                <th>Uploaded By</th>
                <th>Version</th>
                <th>Review Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${docs.length === 0 ? '<tr><td colspan="6">No documents uploaded yet.</td></tr>' : docs.map(d => `
                <tr>
                  <td><strong>${d.name}</strong><br><small style="color:var(--ink-muted);">${d.size} · ${d.uploadDate}</small></td>
                  <td><span class="badge badge-gray">${d.category}</span></td>
                  <td>${d.uploadedBy}</td>
                  <td><strong>${d.version}</strong></td>
                  <td>${renderBadge(d.status)}</td>
                  <td>
                    <button class="btn-secondary" style="padding:4px 8px;font-size:11px;" data-open-review="${d.id}">
                      Review / View
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  if (subTab === 'tasks') {
    return `
      <div class="card">
        <div class="card-title-row">
          <div class="card-title">${client.name} — Task Board</div>
          <button class="btn-primary" data-action="new-task">＋ Add Task</button>
        </div>
        <div class="task-list">
          ${tasks.map(t => `
            <div class="task-item">
              <div class="check-box ${t.status === 'Completed' ? 'checked' : ''}" data-toggle-task="${t.id}">
                ${t.status === 'Completed' ? '✓' : ''}
              </div>
              <div class="task-body">
                <div class="task-title-line">${t.title}</div>
                <div class="task-meta-line">
                  <span>Assigned: ${t.assignedTo}</span> ·
                  <span>Reviewer: ${t.reviewer}</span> ·
                  <span>Due: ${t.dueDate}</span>
                </div>
              </div>
              <div>${renderBadge(t.status)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (subTab === 'requests') {
    return `
      <div class="card">
        <div class="card-title-row">
          <div class="card-title">Client Document Requests</div>
          <button class="btn-primary" data-action="new-request">＋ New Request</button>
        </div>
        ${reqs.map(r => `
          <div style="border:1px solid var(--line); border-radius:8px; padding:16px; margin-bottom:14px; background:var(--cream);">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <h4 style="font-size:14px; font-weight:700;">${r.title}</h4>
              ${renderBadge(r.status)}
            </div>
            <div style="font-size:11.5px; color:var(--ink-muted); margin: 4px 0 12px;">Due Date: ${r.dueDate}</div>
            <div style="display:flex; flex-direction:column; gap:6px;">
              ${r.items.map(item => `
                <div style="display:flex; align-items:center; gap:8px; font-size:12.5px;">
                  <span style="color:${item.done ? 'var(--green)' : 'var(--red)'}">${item.done ? '✅' : '☐'}</span>
                  <span style="${item.done ? 'text-decoration:line-through;color:var(--ink-muted);' : ''}">${item.label}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Default Overview
  return `
    <div class="grid-2-1">
      <div style="display:flex; flex-direction:column; gap:20px;">
        <div class="card">
          <div class="card-title-row">
            <div class="card-title">Current Engagements Overview</div>
          </div>
          ${engagements.map(e => `
            <div style="padding:12px 0; border-bottom:1px solid var(--line-light);">
              <div style="display:flex; justify-content:space-between;">
                <strong>${e.title}</strong>
                <span>${e.progress}%</span>
              </div>
              <div class="progress-bar-wrap">
                <div class="progress-bar-fill" style="width:${e.progress}%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      <div>
        <div class="card">
          <div class="card-title-row">
            <div class="card-title">Upcoming Deadlines</div>
          </div>
          <div style="display:flex; flex-direction:column; gap:10px;">
            <div style="padding:10px; background:var(--yellow-soft); border-radius:6px; font-size:12px;">
              <strong>GST Filing — 12 Sep</strong><br>
              <small>Status: Review Pending</small>
            </div>
            <div style="padding:10px; background:var(--emerald-soft); border-radius:6px; font-size:12px;">
              <strong>Audit Review — 18 Sep</strong><br>
              <small>Status: Working papers in progress</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 5. MY WORK (EMPLOYEE PERSONAL WORKSPACE)
function renderMyWork() {
  const mine = visibleTasks();
  const canCreate = can('create.task') || can('create.task.own');
  const me = currentUser();

  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Personal Workplace</div>
        <h1>My Work Queue</h1>
        <p>${can('view.allClients') ? 'All tasks and reviews across the practice.' : `Only work assigned to ${me.name} or awaiting your review.`}</p>
      </div>
      ${canCreate ? '<button class="btn-primary" data-action="new-task">＋ Create Task</button>' : ''}
    </div>

    <div class="card">
      <div class="card-title-row">
        <div class="card-title">${can('view.allClients') ? 'All Assigned Tasks' : 'My Assigned Tasks'}</div>
      </div>
      <div class="task-list">
        ${mine.length === 0 ? '<div class="empty-state">Nothing is assigned to you.</div>' : mine.map(t => {
          const c = getClient(t.clientId);
          return `
            <div class="task-item">
              <div class="check-box ${t.status === 'Completed' ? 'checked' : ''}" data-toggle-task="${t.id}">
                ${t.status === 'Completed' ? '✓' : ''}
              </div>
              <div class="task-body">
                <div class="task-title-line">${t.title}</div>
                <div class="task-meta-line">
                  <span>Client: <strong>${c.name}</strong></span> ·
                  <span>Priority: <strong>${t.priority}</strong></span> ·
                  <span>Due: <strong>${t.dueDate}</strong></span>
                </div>
              </div>
              <div>${renderBadge(t.status)}</div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// 6. DEADLINE CENTER & INTELLIGENCE
function renderDeadlines() {
  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Practice Operations</div>
        <h1>Deadline Intelligence Center</h1>
        <p>Pre-deadline workflow tracking and statutory deadline management.</p>
      </div>
    </div>

    <!-- Filter Bar -->
    <div class="filter-bar">
      <span>Filter by:</span>
      <select class="filter-select">
        <option>All Clients</option>
        ${state.data.clients.map(c => `<option>${c.name}</option>`).join('')}
      </select>
      <select class="filter-select">
        <option>All Work Types (GST, Audit, Tax, Payroll)</option>
      </select>
      <select class="filter-select">
        <option>All Priorities</option>
      </select>
    </div>

    <div class="card">
      <div class="card-title-row">
        <div class="card-title">Pre-Deadline Stage Pipeline</div>
      </div>
      <div style="display:flex; flex-direction:column; gap: 16px;">
        ${state.data.tasks.map(t => {
          const c = getClient(t.clientId);
          return `
            <div style="border:1px solid var(--line); border-radius:8px; padding:14px; background:var(--surface-subtle);">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <div>
                  <strong>${t.title}</strong> — <span style="color:var(--emerald);">${c.name}</span>
                  <div style="font-size:11px; color:var(--ink-muted);">Deadline: ${t.dueDate}</div>
                </div>
                ${renderBadge(t.status)}
              </div>

              <!-- Workflow Stages -->
              <div class="stage-pipeline">
                <span class="stage-step done">Documents ✅</span>
                <span class="stage-arrow">→</span>
                <span class="stage-step ${t.status === 'In Progress' ? 'active' : 'done'}">Preparation ${t.status === 'In Progress' ? '🟡' : '✅'}</span>
                <span class="stage-arrow">→</span>
                <span class="stage-step ${t.status === 'Ready for Review' ? 'active' : ''}">Review ⏳</span>
                <span class="stage-arrow">→</span>
                <span class="stage-step">Approval 🔴</span>
                <span class="stage-arrow">→</span>
                <span class="stage-step">Submission ⏳</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// 7. CALENDAR
function renderCalendar() {
  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Accounting Schedule</div>
        <h1>Calendar &amp; Tax Deadlines</h1>
        <p>Personal, Team, Client, and Firm-wide multi-layered calendar.</p>
      </div>
      <button class="btn-primary" data-action="new-event">＋ Schedule Meeting / Tax Date</button>
    </div>

    <div class="grid-2-1">
      <div class="card">
        <div class="card-title-row">
          <div class="card-title">September 2026</div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(7,1fr); gap:6px; text-align:center; font-weight:700; font-size:11px; margin-bottom:10px;">
          <div>SUN</div><div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(7,1fr); gap:6px; font-size:12px;">
          ${Array.from({ length: 30 }, (_, i) => i + 1).map(day => `
            <div style="min-height:54px; border:1px solid var(--line); border-radius:6px; padding:4px; background: ${day === 7 || day === 12 || day === 18 ? 'var(--emerald-soft)' : 'var(--surface)'}">
              <div style="font-weight:700; font-size:11px;">${day}</div>
              ${day === 7 ? '<div style="font-size:9px;color:var(--emerald);font-weight:700;">Office Sync</div>' : ''}
              ${day === 12 ? '<div style="font-size:9px;color:var(--yellow);font-weight:700;">GST Filing</div>' : ''}
              ${day === 18 ? '<div style="font-size:9px;color:var(--blue);font-weight:700;">Audit Review</div>' : ''}
            </div>
          `).join('')}
        </div>
      </div>

      <div class="card">
        <div class="card-title-row">
          <div class="card-title">Upcoming Firm Events</div>
        </div>
        <div style="display:flex; flex-direction:column; gap:12px;">
          <div style="padding:10px; border:1px solid var(--line); border-radius:6px;">
            <strong>Sep 7 — Office Sync &amp; Work Allocation</strong>
            <div style="font-size:11px; color:var(--ink-muted);">09:30 AM · All Team</div>
          </div>
          <div style="padding:10px; border:1px solid var(--line); border-radius:6px;">
            <strong>Sep 12 — Statutory GST Filing Deadline</strong>
            <div style="font-size:11px; color:var(--ink-muted);">Firm-wide Tax Deadline</div>
          </div>
          <div style="padding:10px; border:1px solid var(--line); border-radius:6px;">
            <strong>Sep 18 — ABC Audit Working Papers Review</strong>
            <div style="font-size:11px; color:var(--ink-muted);">Rahul Mehta &amp; Priya Nair</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 8. DOCUMENT CENTER & REVIEW DRAWER
function renderDocuments() {
  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Secure File Room</div>
        <h1>Document Center</h1>
        <p>Centralized client repository, versioning control, and review workflows.</p>
      </div>
      <button class="btn-primary" data-action="upload-doc">↑ Upload Document</button>
    </div>

    <div class="card">
      <div class="card-title-row">
        <div class="card-title">All Practice Documents</div>
      </div>
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Document Name</th>
              <th>Client</th>
              <th>Engagement</th>
              <th>Uploaded By</th>
              <th>Version</th>
              <th>Review Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${state.data.documents.map(d => `
              <tr>
                <td><strong>${d.name}</strong><br><small style="color:var(--ink-muted);">${d.size} · ${d.uploadDate}</small></td>
                <td><strong>${d.clientName}</strong></td>
                <td>${d.engagementTitle}</td>
                <td>${d.uploadedBy}</td>
                <td><strong>${d.version}</strong></td>
                <td>${renderBadge(d.status)}</td>
                <td>
                  <button class="btn-primary" style="padding:4px 10px; font-size:11px;" data-open-review="${d.id}">
                    Review / Version
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 9. REVIEWS & APPROVAL WORKFLOW
function renderReviews() {
  const pendingReviews = state.data.documents.filter(d => d.status === 'Waiting for Review');

  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Quality Assurance</div>
        <h1>Reviews &amp; Approvals</h1>
        <p>4-Stage Workflow: Staff → Prepared → Senior Review → Manager Review → Approved.</p>
      </div>
    </div>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-title-row">
        <div class="card-title">4-Stage Practice Approval Visualizer</div>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; background:var(--cream); padding:16px; border-radius:8px;">
        <div style="text-align:center;">
          <div style="font-weight:700; font-size:12px; color:var(--emerald);">1. STAFF PREPARATION</div>
          <small>Working papers uploaded</small>
        </div>
        <span>➔</span>
        <div style="text-align:center;">
          <div style="font-weight:700; font-size:12px; color:var(--yellow);">2. SENIOR REVIEW</div>
          <small>Technical check</small>
        </div>
        <span>➔</span>
        <div style="text-align:center;">
          <div style="font-weight:700; font-size:12px; color:var(--blue);">3. MANAGER REVIEW</div>
          <small>Quality sign-off</small>
        </div>
        <span>➔</span>
        <div style="text-align:center;">
          <div style="font-weight:700; font-size:12px; color:var(--purple);">4. FINAL APPROVAL</div>
          <small>Client delivery ready</small>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-title-row">
        <div class="card-title">Items Awaiting Your Review (${pendingReviews.length})</div>
      </div>
      <div style="display:flex; flex-direction:column; gap:14px;">
        ${pendingReviews.length === 0 ? '<p>No items pending review right now.</p>' : pendingReviews.map(d => `
          <div style="border:1px solid var(--line); border-radius:8px; padding:16px; display:flex; justify-content:space-between; align-items:center;">
            <div>
              <h4 style="font-size:14px; font-weight:700;">${d.name}</h4>
              <div style="font-size:11.5px; color:var(--ink-muted); margin-top:3px;">
                Client: <strong>${d.clientName}</strong> · Prepared by: <strong>${d.uploadedBy}</strong>
              </div>
            </div>
            <button class="btn-primary" data-open-review="${d.id}">Open Review Panel</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 10. CLIENT REQUESTS
function renderRequests() {
  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Client Portal Integration</div>
        <h1>Client Document Requests</h1>
        <p>Send automated checklists to clients and track received files.</p>
      </div>
      <button class="btn-primary" data-action="new-request">＋ New Client Request</button>
    </div>

    <div class="card">
      <div class="card-title-row">
        <div class="card-title">Active Requests Tracking</div>
      </div>
      <div style="display:flex; flex-direction:column; gap:16px;">
        ${state.data.requests.map(r => `
          <div style="border:1px solid var(--line); border-radius:8px; padding:18px; background:var(--surface-subtle);">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <div>
                <h3 style="font-size:15px; font-weight:700; color:var(--forest);">${r.title}</h3>
                <div style="font-size:11.5px; color:var(--ink-muted); margin-top:2px;">Client: <strong>${r.clientName}</strong> · Due: <strong>${r.dueDate}</strong></div>
              </div>
              ${renderBadge(r.status)}
            </div>

            <div style="margin-top:14px; display:flex; flex-direction:column; gap:6px;">
              ${r.items.map(item => `
                <div style="display:flex; align-items:center; gap:8px; font-size:12.5px;">
                  <span>${item.done ? '✅' : '🔴'}</span>
                  <span>${item.label}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 11. KNOWLEDGE BASE
function renderKnowledge() {
  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Firm Knowledge</div>
        <h1>Knowledge Base &amp; Practice SOPs</h1>
        <p>Internal procedures, checklists, tax guides, and quality standards.</p>
      </div>
    </div>

    <div class="kb-grid">
      ${state.data.knowledgeBase.map(kb => `
        <div class="kb-card">
          <div class="kb-icon">📖</div>
          <div style="font-size:10px; font-weight:700; color:var(--emerald); text-transform:uppercase;">${kb.category}</div>
          <h3 style="font-size:15px; font-weight:700; margin: 4px 0 8px;">${kb.title}</h3>
          <p style="font-size:12px; color:var(--ink-muted); margin-bottom:12px;">${kb.desc}</p>
          <div style="border-top:1px solid var(--line-light); padding-top:10px;">
            <strong style="font-size:11px;">Standard Steps:</strong>
            <ul style="font-size:11.5px; padding-left:16px; margin-top:4px; color:var(--ink-muted);">
              ${kb.steps.map(s => `<li>${s}</li>`).join('')}
            </ul>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// 12. MANAGER REPORTS
function renderReports() {
  const showMoney = can('view.firmFinancials');
  const showCapacity = can('view.firmFinancials') || can('view.reports');

  const redact = (v) => showMoney
    ? `<span class="mono">${inr(v)}</span>`
    : `<span class="field-redacted" title="Firm financials require Partner or Manager access">••••••</span>`;

  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Firm Operations</div>
        <h1>Manager Dashboard &amp; Reports</h1>
        <p>Practice KPIs, workload distribution, and bottleneck analysis.</p>
      </div>
    </div>

    <div class="grid-4" style="margin-bottom: 24px;">
      <div class="stat-box">
        <div class="stat-header">Active Clients</div>
        <div class="stat-value">${state.data.clients.length}</div>
        <div class="stat-meta">Across 5 industries</div>
      </div>
      <div class="stat-box">
        <div class="stat-header">Active Engagements</div>
        <div class="stat-value">${state.data.engagements.length}</div>
        <div class="stat-meta">78% avg completion</div>
      </div>
      <div class="stat-box alert-yellow">
        <div class="stat-header">Pending Reviews</div>
        <div class="stat-value">3</div>
        <div class="stat-meta">Quality sign-off queue</div>
      </div>
      <div class="stat-box alert-red">
        <div class="stat-header">Overdue Tasks</div>
        <div class="stat-value">2</div>
        <div class="stat-meta">Action required</div>
      </div>
    </div>

    ${!showMoney ? `<div class="perm-banner">🔒 Firm financials — engagement fees, billing and team capacity — are visible to Partner and Manager only. You are signed in as ${state.activeRole}.</div>` : ''}

    <div class="card" style="margin-bottom:24px;">
      <div class="card-title-row">
        <div class="card-title">Engagement Realization</div>
        <div class="card-title" style="font-size:11px;color:var(--ink-muted);font-weight:500;">Restricted field</div>
      </div>
      <div class="task-list">
        ${state.data.engagements.map(e => `
          <div class="task-item">
            <div class="task-body">
              <div class="task-title-line">${e.title}</div>
              <div class="task-meta-line">${getClient(e.clientId).name}</div>
            </div>
            <div class="recon-amounts">
              <div><small>Fee</small>${redact(e.feeTotal)}</div>
              <div><small>Billed</small>${redact(e.feeBilled)}</div>
              <div><small>Realization</small><strong>${e.realizationPct}%</strong></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    ${showCapacity ? `
      <div class="card">
        <div class="card-title-row"><div class="card-title">Team Capacity</div></div>
        <div class="task-list">
          ${state.data.users.map(u => `
            <div class="task-item">
              <div class="user-avatar" style="width:30px;height:30px;font-size:11px;background:${u.avatarBg};">${u.initials}</div>
              <div class="task-body">
                <div class="task-title-line">${u.name}</div>
                <div class="task-meta-line">${u.role} · ${u.billableHours} billable hrs this period</div>
              </div>
              <div><strong>${u.utilizationPct}%</strong></div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}
  `;
}

// 13. AI ASSISTANT
function renderAssistant() {
  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Permission-Aware AI</div>
        <h1>AI Accounting Assistant</h1>
        <p>Ask natural language queries grounded in your firm's current workspace data.</p>
      </div>
    </div>

    <div class="assistant-box">
      <h3>🤖 Workspace AI Assistant</h3>
      <p>Try asking: “What do I have due this week?” or “What is outstanding for ABC Manufacturing?”</p>
      <div class="assistant-input-row">
        <input id="ai-ask-input" placeholder="Type your query..." />
        <button class="btn-primary" id="btn-ai-ask">Submit Query</button>
      </div>
      <div id="ai-response-area"></div>
    </div>
  `;
}

// 14. ANNOUNCEMENTS
function renderAnnouncements() {
  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Firm News</div>
        <h1>Company Announcements</h1>
        <p>Internal communications and firm updates.</p>
      </div>
      <button class="btn-primary" data-action="new-announcement">＋ New Announcement</button>
    </div>

    <div class="card">
      <div style="display:flex; flex-direction:column; gap:16px;">
        ${state.data.announcements.map(a => `
          <div style="border:1px solid var(--line); border-radius:8px; padding:16px; background:var(--surface-subtle);">
            <h3 style="font-size:16px; font-weight:700; color:var(--forest);">${a.title}</h3>
            <div style="font-size:11px; color:var(--ink-muted); margin: 2px 0 8px;">Posted by ${a.author} on ${a.date}</div>
            <p style="font-size:13px; color:var(--ink);">${a.content}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 15. AUDIT LOG
function renderAuditLog() {
  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Security &amp; Compliance</div>
        <h1>Immutable Audit Log</h1>
        <p>Complete timestamped trail of sensitive firm actions.</p>
      </div>
    </div>

    <div class="card">
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>User</th>
              <th>Action</th>
              <th>Target Resource</th>
            </tr>
          </thead>
          <tbody>
            ${state.data.auditLogs.map(log => `
              <tr>
                <td><code>${log.time}</code></td>
                <td><strong>${log.user}</strong></td>
                <td><span class="badge badge-gray">${log.action}</span></td>
                <td>${log.target}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 16. CLIENT PORTAL RESTRICTED MODE VIEW
function renderClientPortal() {
  const client = state.data.clients[0];
  const reqs = state.data.requests.filter(r => r.clientId === client.id);

  return `
    <div class="client-portal-banner">
      <h2>Welcome, ${client.name}</h2>
      <p>Secure Portal — View document requests, upload files, and see upcoming deadlines.</p>
    </div>

    <div class="grid-2-1">
      <div class="card">
        <div class="card-title-row">
          <div class="card-title">Document Requests from ${firm().legalName || ''}</div>
        </div>
        ${reqs.map(r => `
          <div style="border:1px solid var(--line); border-radius:8px; padding:16px; margin-bottom:14px;">
            <h4>${r.title}</h4>
            <div style="margin-top:10px; display:flex; flex-direction:column; gap:8px;">
              ${r.items.map(item => `
                <div style="display:flex; justify-content:space-between; align-items:center; font-size:12.5px;">
                  <span>${item.label}</span>
                  ${item.done ? '<span class="badge badge-green">Uploaded ✅</span>' : '<button class="btn-primary" style="padding:4px 8px;font-size:11px;" data-action="portal-upload">Upload File</button>'}
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="card">
        <div class="card-title-row">
          <div class="card-title">Your Accounting Team</div>
        </div>
        <div style="display:flex; flex-direction:column; gap:10px; font-size:12.5px;">
          <div>Manager: <strong>${client.manager}</strong></div>
          <div>Senior: <strong>${client.senior}</strong></div>
          <button class="btn-secondary" style="margin-top:10px;" data-action="contact-team">💬 Message Team</button>
        </div>
      </div>
    </div>
  `;
}

// 17. FIRM SETTINGS
const BRAND_PRESETS = ['#1b4d3e', '#1e3a5f', '#4a2c5a', '#7c2d3a', '#0f4c5c', '#2d4a2e', '#3d3520'];

function renderFirmSettings() {
  const f = firm();
  const brand = f.brandColor || '#1b4d3e';

  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Configuration</div>
        <h1>Firm Settings</h1>
        <p>Brand identity and registration details. Applied workspace-wide and saved locally.</p>
      </div>
      <button class="btn-secondary" data-action="reset-firm">Reset to Defaults</button>
    </div>

    <div class="brand-preview-card">
      <div class="brand-preview-row">
        <div class="brand-preview-icon" id="brand-preview-icon" style="background:${brand}">${f.monogram || ''}</div>
        <div>
          <div class="brand-preview-name" id="brand-preview-name">${f.legalName || ''}</div>
          <div class="brand-preview-sub" id="brand-preview-sub">${f.tagline || 'Chartered Accountants'}</div>
        </div>
      </div>
      <div class="brand-preview-swatches">
        ${['--emerald', '--forest', '--emerald-light', '--emerald-soft', '--emerald-border'].map(v => `
          <div class="mini-swatch-row">
            <span class="mini-swatch" style="background:var(${v})"></span>
            <code>${v}</code>
          </div>
        `).join('')}
      </div>
    </div>

    <form id="firm-settings-form">
      <div class="grid-2">
        <div class="card">
          <div class="card-title-row"><div class="card-title">Identity</div></div>
          <div class="form-group">
            <label>Brand Name (short, shown in breadcrumb)</label>
            <input name="name" value="${f.name || ''}" />
          </div>
          <div class="form-group">
            <label>Full Legal Name</label>
            <input name="legalName" value="${f.legalName || ''}" />
          </div>
          <div class="form-group">
            <label>Short Name (badge)</label>
            <input name="shortName" value="${f.shortName || ''}" />
          </div>
          <div class="form-group">
            <label>Monogram / Logo Initial</label>
            <input name="monogram" maxlength="3" value="${f.monogram || ''}" />
          </div>
          <div class="form-group">
            <label>Office Label</label>
            <input name="officeLabel" value="${f.officeLabel || ''}" />
          </div>
        </div>

        <div class="card">
          <div class="card-title-row"><div class="card-title">Brand Colour</div></div>
          <div class="form-group">
            <label>Primary Brand Colour</label>
            <div class="color-input-row">
              <input type="color" name="brandColor" id="firm-color-input" value="${brand}" />
              <input type="text" name="brandColorHex" id="firm-color-hex" value="${brand}" />
            </div>
          </div>
          <div class="form-group">
            <label>Presets</label>
            <div class="preset-row">
              ${BRAND_PRESETS.map(c => `
                <button type="button" class="preset-swatch" data-preset-color="${c}"
                  style="background:${c}" title="${c}"></button>
              `).join('')}
            </div>
          </div>
          <div class="form-group">
            <label>Report Footer</label>
            <input name="footerNote" value="${f.footerNote || ''}" />
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title-row"><div class="card-title">Registration &amp; Contact</div></div>
        <div class="grid-2">
          <div class="form-group">
            <label>GSTIN</label>
            <input name="gstin" value="${f.gstin || ''}" />
          </div>
          <div class="form-group">
            <label>PAN</label>
            <input name="pan" value="${f.pan || ''}" />
          </div>
          <div class="form-group">
            <label>Membership No.</label>
            <input name="membershipNo" value="${f.membershipNo || ''}" />
          </div>
          <div class="form-group">
            <label>Regulator / Region</label>
            <input name="regulator" value="${f.regulator || ''}" />
          </div>
          <div class="form-group">
            <label>Phone</label>
            <input name="phone" value="${f.phone || ''}" />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input name="email" value="${f.email || ''}" />
          </div>
        </div>
        <div class="form-group">
          <label>Registered Address</label>
          <textarea name="address" rows="2">${f.address || ''}</textarea>
        </div>
      </div>

      <div class="modal-actions">
        <button type="submit" class="btn-primary">Save Firm Settings</button>
      </div>
    </form>
  `;
}

// 18. GLOBAL SEARCH
function searchEverything(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const hits = [];
  const push = (type, title, meta, view, payload) => hits.push({ type, title, meta, view, payload });

  state.data.clients.forEach(c => {
    if (`${c.name} ${c.code} ${c.industry} ${c.contact}`.toLowerCase().includes(q)) {
      push('Client', c.name, `${c.code} · ${c.industry} · ${c.status}`, 'clientdetail', c.id);
    }
  });

  state.data.engagements.forEach(e => {
    const c = getClient(e.clientId);
    if (`${e.title} ${e.type} ${c.name}`.toLowerCase().includes(q)) {
      push('Engagement', e.title, `${c.name} · ${e.progress}% complete · due ${e.deadline}`, 'clientdetail', e.clientId);
    }
  });

  state.data.tasks.forEach(t => {
    const c = getClient(t.clientId);
    if (`${t.title} ${c.name} ${t.assignedTo} ${t.status}`.toLowerCase().includes(q)) {
      push('Task', t.title, `${c.name} · ${t.assignedTo} · ${t.status} · due ${t.dueDate}`, 'mywork', null);
    }
  });

  state.data.documents.forEach(d => {
    if (`${d.name} ${d.clientName} ${d.status}`.toLowerCase().includes(q)) {
      push('Document', d.name, `${d.clientName} · ${d.status} · v${d.version}`, 'documents', null);
    }
  });

  state.data.requests.forEach(r => {
    if (`${r.title} ${r.clientName} ${r.status}`.toLowerCase().includes(q)) {
      push('Request', r.title, `${r.clientName} · ${r.status}`, 'requests', null);
    }
  });

  (state.data.knowledgeBase || []).forEach(k => {
    if (`${k.title} ${k.category}`.toLowerCase().includes(q)) {
      push('Knowledge', k.title, k.category, 'knowledge', null);
    }
  });

  return hits;
}

function renderSearch() {
  const query = state.searchQuery || '';
  const results = searchEverything(query);

  const groups = results.reduce((acc, r) => {
    (acc[r.type] = acc[r.type] || []).push(r);
    return acc;
  }, {});

  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Intelligence &amp; Firm</div>
        <h1>Global Search</h1>
        <p>Search across clients, engagements, tasks, documents, requests, and the knowledge base.</p>
      </div>
    </div>

    <div class="search-panel">
      <div class="search-panel-icon">🔎</div>
      <input id="global-search-input" class="search-panel-input" placeholder="Search the whole workspace..." value="${query}" />
      ${query ? `<button class="btn-ghost" id="clear-search">Clear</button>` : ''}
    </div>

    ${!query ? `
      <div class="card">
        <div class="card-title-row"><div class="card-title">Searchable Scope</div></div>
        <div class="grid-4">
          ${[['Clients', state.data.clients.length], ['Engagements', state.data.engagements.length],
             ['Tasks', state.data.tasks.length], ['Documents', state.data.documents.length]]
            .map(([label, n]) => `<div class="stat-box"><div class="stat-header">${label}</div><div class="stat-value">${n}</div></div>`).join('')}
        </div>
      </div>
    ` : results.length === 0 ? `
      <div class="card"><div class="empty-state">No matches for "<strong>${query}</strong>".</div></div>
    ` : `
      <div class="card">
        <div class="card-title-row">
          <div class="card-title">${results.length} result${results.length === 1 ? '' : 's'} for "${query}"</div>
        </div>
        ${Object.keys(groups).map(type => `
          <div class="search-group">
            <div class="search-group-label">${type} (${groups[type].length})</div>
            ${groups[type].map(r => `
              <div class="search-hit" data-action="search-hit" data-view-target="${r.view}" data-client-target="${r.payload || ''}">
                <div class="search-hit-title">${r.title}</div>
                <div class="search-hit-meta">${r.meta}</div>
              </div>
            `).join('')}
          </div>
        `).join('')}
      </div>
    `}
  `;
}

// 19. NOTIFICATIONS
function buildNotifications() {
  const items = [];

  state.data.tasks.filter(t => t.status === 'Overdue' || t.dueDate < '2026-09-06').forEach(t => {
    items.push({ tone: 'red', icon: '🔴', title: `Overdue: ${t.title}`, meta: `${getClient(t.clientId).name} · was due ${t.dueDate}`, view: 'mywork' });
  });

  state.data.documents.filter(d => d.status === 'Waiting for Review').forEach(d => {
    items.push({ tone: 'yellow', icon: '🔵', title: `Awaiting review: ${d.name}`, meta: `${d.clientName} · ${d.uploadedBy}`, view: 'reviews' });
  });

  state.data.requests.filter(r => r.status !== 'Resolved').forEach(r => {
    items.push({ tone: 'green', icon: '📌', title: `Client request: ${r.title}`, meta: `${r.clientName} · ${r.status}`, view: 'requests' });
  });

  state.data.engagements.filter(e => e.tasksOverdue > 0).forEach(e => {
    items.push({ tone: 'yellow', icon: '⚠️', title: `${e.title} has ${e.tasksOverdue} overdue task(s)`, meta: `${getClient(e.clientId).name} · due ${e.deadline}`, view: 'clientdetail' });
  });

  state.data.announcements.forEach(a => {
    items.push({ tone: 'blue', icon: '📢', title: a.title, meta: a.date || '', view: 'announcements' });
  });

  return items;
}

function renderNotifications() {
  const items = buildNotifications();

  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Intelligence &amp; Firm</div>
        <h1>Notifications</h1>
        <p>Derived live from overdue work, review queues, client requests, and firm announcements.</p>
      </div>
    </div>

    ${items.length === 0 ? `
      <div class="card"><div class="empty-state">You're all caught up.</div></div>
    ` : `
      <div class="card">
        <div class="task-list">
          ${items.map(n => `
            <div class="notif-item" data-action="notif-goto" data-view-target="${n.view}">
              <div class="notif-icon notif-${n.tone}">${n.icon}</div>
              <div class="task-body">
                <div class="task-title-line">${n.title}</div>
                <div class="task-meta-line">${n.meta}</div>
              </div>
              <div class="notif-chevron">›</div>
            </div>
          `).join('')}
        </div>
      </div>
    `}
  `;
}

// 20. WORKSPACE SWITCHER
function renderWorkspace() {
  const f = firm();

  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Configuration</div>
        <h1>Switch Workspace</h1>
        <p>Move between the full firm workspace and an individual client's workspace.</p>
      </div>
    </div>

    <div class="card">
      <div class="card-title-row"><div class="card-title">Firm</div></div>
      <div class="workspace-option" data-action="workspace-pick" data-workspace="firm">
        <div class="brand-preview-icon" style="background:var(--emerald);font-size:18px;width:40px;height:40px;">${f.monogram || ''}</div>
        <div class="task-body">
          <div class="task-title-line">${f.legalName || ''}</div>
          <div class="task-meta-line">${state.data.users.length} members · all clients · full visibility</div>
        </div>
        <div class="notif-chevron">›</div>
      </div>
    </div>

    <div class="card">
      <div class="card-title-row"><div class="card-title">Client Workspaces</div></div>
      ${state.data.clients.map(c => `
        <div class="workspace-option" data-action="workspace-pick" data-workspace="${c.id}">
          <div class="brand-preview-icon" style="background:${c.color};font-size:18px;width:40px;height:40px;">${c.code}</div>
          <div class="task-body">
            <div class="task-title-line">${c.name}</div>
            <div class="task-meta-line">${c.industry} · ${c.manager} · ${c.docsCount} documents</div>
          </div>
          <div class="notif-chevron">›</div>
        </div>
      `).join('')}
    </div>
  `;
}

// 21. GST 2A/2B RECONCILIATION
// Matching key is GSTIN + invoice number. GSTIN is deliberately part of the key:
// the same invoice number under a different supplier GSTIN is a different document
// and must never be auto-matched.
function reconKey(row) {
  return String(row.gstin || '').trim().toUpperCase() + '|' + String(row.invoiceNo || '').trim().toUpperCase().replace(/\s+/g, '');
}

function inr(n) {
  const v = Number(n) || 0;
  return '₹' + v.toLocaleString('en-IN', { maximumFractionDigits: 2 });
}

function reconcileGst(gr) {
  const abs = Number(gr.toleranceAbs) || 0;
  const pct = Number(gr.tolerancePct) || 0;
  const results = [];

  const bByKey = new Map();
  gr.portal2b.forEach(b => {
    const k = reconKey(b);
    if (!bByKey.has(k)) bByKey.set(k, b);
  });

  const matchedB = new Set();

  gr.purchaseRegister.forEach(pr => {
    const k = reconKey(pr);
    const b = bByKey.get(k);
    if (!b) {
      results.push({
        key: k, status: 'Missing in 2B', pr, portal: null, variance: pr.total,
        allowed: abs + (pr.total * pct) / 100
      });
      return;
    }
    matchedB.add(k);
    const variance = Math.abs(Number(pr.total) - Number(b.total));
    // Tolerance is the more forgiving of the absolute cap and the percentage cap.
    const allowed = Math.max(abs, (Number(pr.total) * pct) / 100);
    results.push({
      key: k,
      status: variance <= allowed ? 'Matched' : 'Variance',
      pr, portal: b, variance, allowed
    });
  });

  gr.portal2b.forEach(b => {
    if (matchedB.has(reconKey(b))) return;
    results.push({
      key: reconKey(b), status: 'Missing in Register', pr: null, portal: b,
      variance: b.total, allowed: Math.max(abs, (b.total * pct) / 100)
    });
  });

  results.forEach(r => {
    const res = (gr.resolutions || {})[r.key];
    r.resolution = res ? res.status : 'Open';
  });

  return results;
}

function renderGstRecon() {
  const gr = state.data.gstRecons[0];
  const rows = reconcileGst(gr);
  const filter = state.reconFilter || 'All';
  const expanded = state.reconExpanded || null;

  const counts = rows.reduce((a, r) => { a[r.status] = (a[r.status] || 0) + 1; return a; }, {});
  const openCount = rows.filter(r => r.resolution === 'Open').length;
  const exposure = rows
    .filter(r => r.status !== 'Matched' && r.resolution === 'Open')
    .reduce((s, r) => s + (r.variance || 0), 0);

  const tabs = [
    ['All', rows.length], ['Matched', counts.Matched || 0],
    ['Variance', counts.Variance || 0], ['Missing in 2B', counts['Missing in 2B'] || 0],
    ['Missing in Register', counts['Missing in Register'] || 0]
  ];

  const visible = filter === 'All' ? rows : rows.filter(r => r.status === filter);
  const money = n => `<span class="mono">${inr(n)}</span>`;

  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">GST Compliance</div>
        <h1>2A / 2B Reconciliation</h1>
        <p>${gr.clientName} · GSTIN ${gr.gstin} · ${gr.period}</p>
      </div>
    </div>

    <div class="card">
      <div class="card-title-row">
        <div class="card-title">Tolerance Settings</div>
        <div class="card-title" style="font-size:11px;color:var(--ink-muted);font-weight:500;">
          Matching key: GSTIN + Invoice No. · variance allowed if within either cap
        </div>
      </div>
      <div class="tolerance-row">
        <div class="form-group" style="margin:0;">
          <label>Absolute Cap (₹)</label>
          <input type="number" id="tolerance-abs" value="${gr.toleranceAbs}" min="0" />
        </div>
        <div class="form-group" style="margin:0;">
          <label>Percentage Cap (%)</label>
          <input type="number" id="tolerance-pct" value="${gr.tolerancePct}" min="0" step="0.1" />
        </div>
        <button class="btn-primary" data-action="recon-apply-tolerance">Apply</button>
      </div>
    </div>

    <div class="grid-4" style="margin-bottom:24px;">
      <div class="stat-box">
        <div class="stat-header">Total Lines</div>
        <div class="stat-value">${rows.length}</div>
        <div class="stat-meta">${gr.purchaseRegister.length} in register · ${gr.portal2b.length} in 2B</div>
      </div>
      <div class="stat-box">
        <div class="stat-header">Matched</div>
        <div class="stat-value" style="color:var(--green);">${counts.Matched || 0}</div>
        <div class="stat-meta">within tolerance</div>
      </div>
      <div class="stat-box alert-red">
        <div class="stat-header">Exceptions</div>
        <div class="stat-value" style="color:var(--red);">${rows.length - (counts.Matched || 0)}</div>
        <div class="stat-meta">${openCount} still open</div>
      </div>
      <div class="stat-box alert-yellow">
        <div class="stat-header">Value at Risk</div>
        <div class="stat-value" style="font-size:22px;">${inr(exposure)}</div>
        <div class="stat-meta">open exception value</div>
      </div>
    </div>

    <div class="recon-tabs">
      ${tabs.map(([label, n]) => `
        <button class="sub-tab-btn ${filter === label ? 'active' : ''}" data-action="recon-filter" data-filter="${label}">
          ${label} (${n})
        </button>
      `).join('')}
    </div>

    <div class="card">
      <div class="task-list">
        ${visible.length === 0 ? '<div class="empty-state">No lines in this category.</div>' : visible.map(r => `
          <div class="recon-row recon-${r.status.replace(/\s+/g, '-').toLowerCase()}">
            <div class="recon-row-main" data-action="recon-expand" data-recon-key="${r.key}">
              <div class="recon-status-dot"></div>
              <div class="task-body">
                <div class="task-title-line">
                  ${r.pr ? r.pr.invoiceNo : r.portal.invoiceNo}
                  ${r.resolution !== 'Open' ? `<span class="badge badge-gray">${r.resolution}</span>` : ''}
                </div>
                <div class="task-meta-line">
                  ${(r.pr || r.portal).party} · ${(r.pr || r.portal).invoiceDate} ·
                  ${(r.pr || r.portal).gstin}
                </div>
              </div>
              <div class="recon-amounts">
                <div><small>Register</small>${r.pr ? money(r.pr.total) : '<span class="muted">—</span>'}</div>
                <div><small>2B</small>${r.portal ? money(r.portal.total) : '<span class="muted">—</span>'}</div>
                <div><small>Variance</small><strong style="color:${r.status === 'Matched' ? 'var(--green)' : 'var(--red)'}">${money(r.variance)}</strong></div>
              </div>
              <div>${renderBadge(r.status)}</div>
            </div>

            ${expanded === r.key ? `
              <div class="recon-detail">
                <div class="recon-detail-grid">
                  <div class="recon-detail-col">
                    <h5>Purchase Register</h5>
                    ${r.pr ? `
                      <div><span>Invoice</span><strong>${r.pr.invoiceNo}</strong></div>
                      <div><span>Date</span><strong>${r.pr.invoiceDate}</strong></div>
                      <div><span>Supplier GSTIN</span><strong>${r.pr.gstin}</strong></div>
                      <div><span>Taxable</span><strong>${money(r.pr.taxable)}</strong></div>
                      <div><span>IGST</span><strong>${money(r.pr.igst)}</strong></div>
                      <div><span>Total</span><strong>${money(r.pr.total)}</strong></div>
                    ` : '<div class="muted">Not present in the purchase register.</div>'}
                  </div>
                  <div class="recon-detail-col">
                    <h5>GSTR-2B (Portal)</h5>
                    ${r.portal ? `
                      <div><span>Invoice</span><strong>${r.portal.invoiceNo}</strong></div>
                      <div><span>Date</span><strong>${r.portal.invoiceDate}</strong></div>
                      <div><span>Supplier GSTIN</span><strong>${r.portal.gstin}</strong></div>
                      <div><span>Taxable</span><strong>${money(r.portal.taxable)}</strong></div>
                      <div><span>IGST</span><strong>${money(r.portal.igst)}</strong></div>
                      <div><span>Total</span><strong>${money(r.portal.total)}</strong></div>
                    ` : '<div class="muted">Not reflected on the portal yet — supplier has likely not filed.</div>'}
                  </div>
                </div>
                <div class="recon-detail-note">
                  Variance ${money(r.variance)} against an allowed tolerance of ${money(r.allowed)}.
                </div>
                <div class="modal-actions">
                  ${r.resolution === 'Open' ? `
                    <button class="btn-secondary" data-action="recon-resolve" data-recon-key="${r.key}">Mark Reconciled</button>
                    <button class="btn-secondary" data-action="recon-accept" data-recon-key="${r.key}">Accept Variance</button>
                  ` : `
                    <button class="btn-ghost" data-action="recon-reopen" data-recon-key="${r.key}">Reopen</button>
                  `}
                </div>
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Locked-but-visible nav: a restricted item stays in place so the control is
// evident, and explains itself on click.
function applyNavPermissions() {
  document.querySelectorAll('.nav-item[data-view]').forEach(btn => {
    const allowed = canSee(btn.dataset.view);
    btn.classList.toggle('nav-locked', !allowed);
    btn.setAttribute('aria-disabled', allowed ? 'false' : 'true');
    const existing = btn.querySelector('.nav-lock-icon');
    if (!allowed && !existing) {
      const icon = document.createElement('span');
      icon.className = 'nav-lock-icon';
      icon.textContent = '🔒';
      btn.appendChild(icon);
    } else if (allowed && existing) {
      existing.remove();
    }
  });
}

// MAIN APP NAVIGATION RENDER ROUTER
function navigateTo(viewName) {
  if (viewName !== 'home' && !canSee(viewName)) {
    toast(`Access denied · ${denyReason(viewName)}`);
    if (state.currentView && state.currentView !== viewName) return;
  }
  if (viewName === 'clientdetail' && !canAccessClient(state.activeClientId)) {
    toast(`Access denied · ${clientDenyReason(state.activeClientId)}`);
    state.currentView = 'home';
    viewName = 'home';
  }
  state.currentView = viewName;
  const appView = document.getElementById('app-view');
  const pageTitleBc = document.getElementById('bc-page');

  // Highlight Sidebar Button
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === viewName);
  });

  // Update Breadcrumb Text
  const labelMap = {
    home: 'Home',
    communication: 'Communication',
    clients: 'Clients',
    clientdetail: 'Client Office',
    mywork: 'My Work',
    deadlines: 'Deadline Center',
    calendar: 'Calendar',
    documents: 'Documents',
    reviews: 'Reviews & Approvals',
    requests: 'Client Requests',
    knowledge: 'Knowledge Base',
    reports: 'Manager Reports',
    assistant: 'AI Assistant',
    announcements: 'Announcements',
    auditlog: 'Audit Log',
    firmsettings: 'Firm Settings',
    search: 'Search',
    notifications: 'Notifications',
    workspace: 'Switch Workspace',
    gstrecon: 'GST 2A/2B Recon'
  };
  pageTitleBc.textContent = labelMap[viewName] || 'Overview';

  // Render View HTML
  if (state.appMode === 'portal') {
    appView.innerHTML = renderClientPortal();
    return;
  }

  switch (viewName) {
    case 'home': appView.innerHTML = renderHome(); break;
    case 'communication': appView.innerHTML = renderCommunication(); break;
    case 'clients': appView.innerHTML = renderClients(); break;
    case 'clientdetail': appView.innerHTML = renderClientDetail(state.activeClientId); break;
    case 'mywork': appView.innerHTML = renderMyWork(); break;
    case 'deadlines': appView.innerHTML = renderDeadlines(); break;
    case 'calendar': appView.innerHTML = renderCalendar(); break;
    case 'documents': appView.innerHTML = renderDocuments(); break;
    case 'reviews': appView.innerHTML = renderReviews(); break;
    case 'requests': appView.innerHTML = renderRequests(); break;
    case 'knowledge': appView.innerHTML = renderKnowledge(); break;
    case 'reports': appView.innerHTML = renderReports(); break;
    case 'assistant': appView.innerHTML = renderAssistant(); break;
    case 'announcements': appView.innerHTML = renderAnnouncements(); break;
    case 'auditlog': appView.innerHTML = renderAuditLog(); break;
    case 'firmsettings': appView.innerHTML = renderFirmSettings(); break;
    case 'search': appView.innerHTML = renderSearch(); break;
    case 'notifications': appView.innerHTML = renderNotifications(); break;
    case 'workspace': appView.innerHTML = renderWorkspace(); break;
    case 'gstrecon': appView.innerHTML = renderGstRecon(); break;
    default: appView.innerHTML = renderHome(); break;
  }
}

// DOCUMENT REVIEW DRAWER CONTROLLER
function openReviewDrawer(docId) {
  const doc = state.data.documents.find(d => d.id === docId) || state.data.documents[0];
  const root = document.getElementById('review-drawer-root');

  root.innerHTML = `
    <div class="review-drawer">
      <div class="drawer-header">
        <div>
          <h3>Review: ${doc.name}</h3>
          <div style="font-size:11.5px; color:var(--ink-muted);">${doc.clientName} · ${doc.version}</div>
        </div>
        <button class="btn-ghost" id="close-drawer">✕ Close</button>
      </div>

      <div class="drawer-body">
        <div class="doc-preview-box">
          <div class="doc-preview-icon">📄</div>
          <strong>${doc.name}</strong>
          <p style="font-size:11.5px; color:var(--ink-muted); margin-top:4px;">Size: ${doc.size} · Uploaded: ${doc.uploadDate}</p>
        </div>

        <div style="margin-bottom:20px;">
          <h4 style="font-size:13px; font-weight:700; margin-bottom:8px;">Review History &amp; Comments</h4>
          ${doc.comments.map(c => `
            <div style="padding:10px; background:var(--cream); border-radius:6px; margin-bottom:8px; font-size:12px;">
              <strong>${c.author}</strong> <small style="color:var(--ink-muted);">${c.time}</small>
              <p style="margin-top:2px;">"${c.text}"</p>
            </div>
          `).join('')}
        </div>

        <div class="form-group">
          <label>Reviewer Note / Revision Request</label>
          <textarea id="drawer-note-input" rows="3" placeholder="Enter notes for return or approval..."></textarea>
        </div>
      </div>

      <div class="drawer-footer">
        <button class="btn-danger" id="btn-return-changes">Return for Changes</button>
        <button class="btn-primary" id="btn-approve-doc">Approve Document ✅</button>
        ${(function () {
          const verdict = canReviewItem(doc);
          return verdict.ok ? '' : `<div class="perm-locked-reason">🔒 Review unavailable · ${verdict.reason}</div>`;
        })()}
      </div>
    </div>
  `;

  root.classList.add('open');

  // Event Handlers for Review Drawer
  document.getElementById('close-drawer').onclick = () => root.classList.remove('open');
  
  document.getElementById('btn-approve-doc').onclick = () => {
    const verdict = canReviewItem(doc);
    if (!verdict.ok) {
      toast(`Cannot approve · ${verdict.reason}`);
      return;
    }
    doc.status = 'Approved';
    state.addAuditLog(currentUser().name, 'Approved Document', doc.name);
    root.classList.remove('open');
    toast(`Approved ${doc.name}`);
    navigateTo(state.currentView);
  };

  document.getElementById('btn-return-changes').onclick = () => {
    const verdict = canReviewItem(doc);
    if (!verdict.ok) {
      toast(`Cannot return · ${verdict.reason}`);
      return;
    }
    const note = document.getElementById('drawer-note-input').value || 'Changes requested';
    doc.status = 'Returned';
    doc.comments.push({ author: currentUser().name, text: note, time: 'Just now' });
    state.addAuditLog(currentUser().name, 'Returned Document for Changes', doc.name);
    root.classList.remove('open');
    toast(`Returned ${doc.name} for changes`);
    navigateTo(state.currentView);
  };
}

// CREATOR MODAL CONTROLLER
function openCreateModal(type) {
  // Defence in depth: the action dispatch already gates these, but the modal is
  // a privileged write path and must refuse an unauthorized caller directly.
  const needed = MODAL_ACCESS[type];
  if (needed && !needed.some(cap => can(cap))) {
    toast(`Access denied · ${state.activeRole} role cannot create a ${type}.`);
    return;
  }

  const root = document.getElementById('modal-root');

  root.innerHTML = `
    <div class="modal-box">
      <div class="modal-header">
        <h3>Create New ${type.toUpperCase()}</h3>
        <p>Add new accounting work item to practice operating system.</p>
      </div>

      <form id="creator-form">
        <div class="form-group">
          <label>Title / Work Name</label>
          <input required id="form-title-input" placeholder="e.g. Bank Reconciliation — August" />
        </div>

        <div class="form-group">
          <label>Client</label>
          <select id="form-client-select">
            ${state.data.clients.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
          </select>
        </div>

        <div class="form-group">
          <label>Assigned Staff</label>
          <select id="form-staff-select">
            ${state.data.users.map(u => `<option value="${u.name}">${u.name} (${u.role})</option>`).join('')}
          </select>
        </div>

        <div class="modal-actions">
          <button type="button" class="btn-secondary" id="close-modal">Cancel</button>
          <button type="submit" class="btn-primary">Save Work Item</button>
        </div>
      </form>
    </div>
  `;

  root.classList.add('open');

  document.getElementById('close-modal').onclick = () => root.classList.remove('open');
  document.getElementById('creator-form').onsubmit = (e) => {
    e.preventDefault();
    const title = document.getElementById('form-title-input').value;
    const clientId = document.getElementById('form-client-select').value;
    const staff = document.getElementById('form-staff-select').value;

    state.data.tasks.unshift({
      id: 't_' + Date.now(),
      title,
      clientId,
      engagementId: 'e1',
      assignedTo: staff,
      reviewer: 'Rahul Mehta',
      createdDate: '2026-09-06',
      dueDate: '2026-09-12',
      priority: 'High',
      status: 'In Progress',
      attachments: [],
      commentsCount: 0,
      stage: 'Prep'
    });

    state.addAuditLog(currentUser().name, 'Created Task', title);
    root.classList.remove('open');
    toast(`Created task "${title}"`);
    navigateTo(state.currentView);
  };
}

// EVENT LISTENERS & DELEGATION
document.addEventListener('DOMContentLoaded', () => {
  // Navigation Sidebar Click Delegation
  document.querySelectorAll('[data-view]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const v = e.currentTarget.dataset.view;
      if (v !== 'home' && !canSee(v)) {
        toast(`Access denied · ${denyReason(v)}`);
        return;
      }
      navigateTo(v);
    });
  });

  // Global Dynamic Click Handler
  document.body.addEventListener('click', (e) => {
    // Workspace Switcher (the firm card in the sidebar)
    const wsCard = e.target.closest('#workspace-card');
    if (wsCard) {
      navigateTo('workspace');
      return;
    }

    // Open Client Mini-Office
    const clientCard = e.target.closest('[data-open-client]');
    if (clientCard) {
      state.activeClientId = clientCard.dataset.openClient;
      state.activeClientSubTab = 'overview';
      navigateTo('clientdetail');
      return;
    }

    // Client Sub-Tab Navigation
    const subTabBtn = e.target.closest('[data-client-tab]');
    if (subTabBtn) {
      state.activeClientSubTab = subTabBtn.dataset.clientTab;
      navigateTo('clientdetail');
      return;
    }

    // Toggle Task Complete
    const checkBtn = e.target.closest('[data-toggle-task]');
    if (checkBtn) {
      const taskId = checkBtn.dataset.toggleTask;
      const t = state.data.tasks.find(x => x.id === taskId);
      if (t) {
        t.status = t.status === 'Completed' ? 'In Progress' : 'Completed';
        state.addAuditLog(currentUser().name, 'Updated Task Status', t.title);
        toast(`Updated "${t.title}" status to ${t.status}`);
        navigateTo(state.currentView);
      }
      return;
    }

    // Open Document Review Drawer
    const revBtn = e.target.closest('[data-open-review]');
    if (revBtn) {
      openReviewDrawer(revBtn.dataset.openReview);
      return;
    }

    // Chat Channel Select
    const channelItem = e.target.closest('[data-select-channel]');
    if (channelItem) {
      state.activeChatChannel = channelItem.dataset.selectChannel;
      navigateTo('communication');
      return;
    }

    // Quick Action Triggers
    const actBtn = e.target.closest('[data-action]');
    if (actBtn) {
      const act = actBtn.dataset.action;
      const needed = ACTION_ACCESS[act];
      if (needed && !can(needed)) {
        toast(`Access denied · ${state.activeRole} role cannot ${act.replace(/^(new|quick)-/, '').replace(/-/g, ' ')}.`);
        return;
      }
      if (act === 'open-search') {
        state.searchQuery = '';
        navigateTo('search');
        setTimeout(() => {
          const inp = document.getElementById('global-search-input');
          if (inp) inp.focus();
        }, 0);
      }
      else if (act === 'search-hit' || act === 'notif-goto') {
        const target = actBtn.dataset.viewTarget;
        const clientId = actBtn.dataset.clientTarget;
        if (clientId) {
          state.activeClientId = clientId;
          state.activeClientSubTab = 'overview';
        }
        navigateTo(target || 'home');
      }
      else if (act === 'recon-filter') {
        state.reconFilter = actBtn.dataset.filter;
        navigateTo('gstrecon');
      }
      else if (act === 'recon-expand') {
        state.reconExpanded = state.reconExpanded === actBtn.dataset.reconKey ? null : actBtn.dataset.reconKey;
        navigateTo('gstrecon');
      }
      else if (act === 'recon-resolve' || act === 'recon-accept' || act === 'recon-reopen') {
        const gr = state.data.gstRecons[0];
        const key = actBtn.dataset.reconKey;
        const label = act === 'recon-resolve' ? 'Reconciled' : act === 'recon-accept' ? 'Variance Accepted' : 'Open';
        gr.resolutions = gr.resolutions || {};
        if (label === 'Open') delete gr.resolutions[key];
        else gr.resolutions[key] = { status: label, by: currentUser().name, time: new Date().toISOString().replace('T', ' ').substring(0, 16) };
        state.save();
        state.addAuditLog(currentUser().name, act === 'recon-accept' ? 'Accepted GST Variance' : act === 'recon-resolve' ? 'Marked GST Line Reconciled' : 'Reopened GST Line', key);
        toast(`${key.split('|')[1]} → ${label}`);
        navigateTo('gstrecon');
      }
      else if (act === 'workspace-pick') {
        const ws = actBtn.dataset.workspace;
        if (ws === 'firm') {
          state.appMode = 'firm';
          navigateTo('home');
          toast('Switched to Firm Workspace');
        } else {
          state.appMode = 'portal';
          state.activeClientId = ws;
          navigateTo('clientdetail');
          toast(`Switched to ${getClient(ws).name}`);
        }
      }
      else if (act === 'quick-create' || act === 'new-task') openCreateModal('task');
      else if (act === 'new-client') openCreateModal('client');
      else if (act === 'upload-doc') openCreateModal('document');
      else if (act === 'new-request') openCreateModal('client request');
      else if (act === 'new-event') openCreateModal('calendar event');
      else if (act === 'new-announcement') openCreateModal('announcement');
      else if (act === 'reset-firm') {
        state.data.firm = { ...seedData.firm };
        state.save();
        applyFirmBranding();
        toast('Firm settings reset to defaults');
        navigateTo('firmsettings');
      }
      else toast(`Action triggered: ${act}`);
      return;
    }

    // Navigate helper
    const navBtn = e.target.closest('[data-navigate]');
    if (navBtn) {
      navigateTo(navBtn.dataset.navigate);
      return;
    }
  });

  // Role Selector Event
  const roleSelect = document.getElementById('role-select');
  if (roleSelect) {
    roleSelect.addEventListener('change', (e) => {
      state.activeRole = e.target.value;
      const me = currentUser();
      const roleDisplay = document.getElementById('user-role-display');
      const nameDisplay = document.getElementById('user-name-display');
      const avatar = document.getElementById('user-avatar-initials');
      if (roleDisplay) roleDisplay.textContent = me.role;
      if (nameDisplay) nameDisplay.textContent = me.name;
      if (avatar) {
        avatar.textContent = me.initials;
        avatar.style.background = me.avatarBg;
      }
      applyNavPermissions();
      navigateTo(canSee(state.currentView) ? state.currentView : 'home');
      toast(`Now acting as ${me.name} (${me.role})`);
    });
  }

  // Portal vs Firm Workspace Mode Switcher
  const btnFirm = document.getElementById('btn-mode-firm');
  const btnPortal = document.getElementById('btn-mode-portal');
  if (btnFirm && btnPortal) {
    btnFirm.onclick = () => {
      state.appMode = 'firm';
      btnFirm.classList.add('active');
      btnPortal.classList.remove('active');
      navigateTo('home');
      toast('Switched to Firm Workspace Mode');
    };
    btnPortal.onclick = () => {
      state.appMode = 'portal';
      btnPortal.classList.add('active');
      btnFirm.classList.remove('active');
      navigateTo('home');
      toast('Switched to Restricted Client Portal Mode');
    };
  }

  // Global Search — live filtering, and clearing the query.
  document.body.addEventListener('input', (e) => {
    if (e.target.id !== 'global-search-input') return;
    state.searchQuery = e.target.value;
    const caret = e.target.selectionStart;
    navigateTo('search');
    const restored = document.getElementById('global-search-input');
    if (restored) {
      restored.focus();
      try { restored.setSelectionRange(caret, caret); } catch (err) { /* noop */ }
    }
  });

  document.body.addEventListener('click', (e) => {
    if (e.target.id === 'clear-search') {
      state.searchQuery = '';
      navigateTo('search');
    }
  });

// Firm Settings — live brand preview while editing, and persistence on save.
  document.body.addEventListener('input', (e) => {
    const colorInput = document.getElementById('firm-color-input');
    if (!colorInput) return;
    if (e.target.id !== 'firm-color-input' && e.target.id !== 'firm-color-hex') return;

    const raw = e.target.value.trim();
    if (!/^#?[0-9a-fA-F]{6}$/.test(raw)) return;

    const hex = raw.startsWith('#') ? raw : '#' + raw;
    if (e.target.id === 'firm-color-hex') colorInput.value = hex;

    // Preview only — the committed palette still waits for Save.
    document.documentElement.style.setProperty('--emerald', hex);
    document.documentElement.style.setProperty('--forest', shade(hex, -0.55));
    document.documentElement.style.setProperty('--emerald-light', shade(hex, 0.18));
    document.documentElement.style.setProperty('--emerald-soft', shade(hex, 0.88));
    document.documentElement.style.setProperty('--emerald-border', shade(hex, 0.62));
    document.documentElement.style.setProperty('--emerald-glow', rgbaOf(hex, 0.25));

    const previewIcon = document.getElementById('brand-preview-icon');
    if (previewIcon) previewIcon.style.background = hex;
  });

  document.body.addEventListener('click', (e) => {
    const preset = e.target.closest('[data-preset-color]');
    if (preset) {
      const hex = preset.dataset.presetColor;
      document.getElementById('firm-color-input').value = hex;
      document.getElementById('firm-color-hex').value = hex;
      document.getElementById('firm-color-input').dispatchEvent(new Event('input', { bubbles: true }));
    }
  });

  document.body.addEventListener('submit', (e) => {
    if (e.target.id !== 'firm-settings-form') return;
    e.preventDefault();

    const form = e.target;
    const next = { ...firm() };
    ['name', 'legalName', 'shortName', 'monogram', 'officeLabel', 'gstin', 'pan',
     'membershipNo', 'regulator', 'phone', 'email', 'address', 'footerNote']
      .forEach(k => { next[k] = form.elements[k].value.trim(); });

    const hex = form.elements.brandColorHex.value.trim();
    next.brandColor = /^#?[0-9a-fA-F]{6}$/.test(hex)
      ? (hex.startsWith('#') ? hex : '#' + hex)
      : (firm().brandColor || '#1b4d3e');

    state.data.firm = next;
    state.save();
    applyFirmBranding();
    state.addAuditLog(currentUser().name, 'Updated Firm Settings', next.legalName || next.name);
    toast('Firm settings saved');
    navigateTo('firmsettings');
  });

  // GST Recon — tolerance inputs commit via Enter or the Apply button.
  document.body.addEventListener('click', (e) => {
    const applyBtn = e.target.closest('[data-action="recon-apply-tolerance"]');
    if (!applyBtn) return;
    const gr = state.data.gstRecons[0];
    gr.toleranceAbs = Math.max(0, Number(document.getElementById('tolerance-abs').value) || 0);
    gr.tolerancePct = Math.max(0, Number(document.getElementById('tolerance-pct').value) || 0);
    state.save();
    toast(`Tolerance updated: ±${inr(gr.toleranceAbs)} or ${gr.tolerancePct}%`);
    navigateTo('gstrecon');
  });

  // Chat Composer Submission
  document.body.addEventListener('submit', (e) => {
    if (e.target.id === 'chat-composer-form') {
      e.preventDefault();
      const input = document.getElementById('chat-input-text');
      if (!input || !input.value.trim()) return;

      state.data.messages.push({
        id: 'm_' + Date.now(),
        channel: state.activeChatChannel,
        author: currentUser().name,
        authorInitials: currentUser().initials,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: input.value.trim()
      });

      input.value = '';
      navigateTo('communication');
      toast('Message posted');
    }
  });

  // AI Assistant Submission Handlers
  document.body.addEventListener('click', (e) => {
    if (e.target.id === 'btn-quick-ask' || e.target.id === 'btn-ai-ask') {
      const input = document.getElementById('quick-ask-input') || document.getElementById('ai-ask-input');
      const targetRes = document.getElementById('quick-ask-result') || document.getElementById('ai-response-area');

      if (input && targetRes) {
        const query = input.value.toLowerCase();
        let answer = '';

        if (query.includes('overdue') || query.includes('due')) {
          answer = `<strong>Upcoming &amp; Overdue Work Briefing:</strong><br>• 2 tasks overdue (Bank Reconciliation for ABC Ltd, GSTR-2B Verification for DEF Ltd).<br>• 4 tasks due today across GST &amp; Payroll.`;
        } else if (query.includes('abc')) {
          answer = `<strong>ABC Manufacturing Pvt Ltd Status:</strong><br>• Active Engagements: Statutory Audit (78%), GST Compliance (60%).<br>• Documents: 147 uploaded, 1 waiting for manager review.<br>• Next Deadline: GST Filing on Sept 12.`;
        } else {
          answer = `<strong>Workspace Intelligence Answer:</strong><br>Evaluated practice data across 5 active clients and 4 engagements. You have 3 documents awaiting manager review and 2 urgent tax deadlines this week.`;
        }

        targetRes.innerHTML = `<div class="assistant-response-card">${answer}</div>`;
      }
    }
  });

  // Initialize: apply configured firm branding, then render the default view.
  applyFirmBranding();
  applyNavPermissions();
  navigateTo('home');
});
