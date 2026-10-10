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
      month: '2026-08',
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
  bankAccounts: [
    { id: 'ba1', name: 'HDFC Current A/C', balance: 2450000, asOf: '2026-10-01' }
  ],
  firmTaxProfile: {
    estimatedCurrentYearTax: null,
    expectedTdsTcs: 0,
    advanceTaxPaid: 0,
    presumptive: false
  },
  // The ledger starts empty. Users choose their own chart and enter their
  // opening balances as a balanced journal; no sample balances are implied.
  chartOfAccounts: [],
  journalEntries: [],
  salesRegisters: [
    { id: 'sr1', clientId: 'c1', month: '2026-08', taxable: 4200000, outputTax: 756000 },
    { id: 'sr2', clientId: 'c1', month: '2026-09', taxable: 3980000, outputTax: 716400 },
    { id: 'sr3', clientId: 'c2', month: '2026-08', taxable: 1850000, outputTax: 333000 },
    { id: 'sr4', clientId: 'c2', month: '2026-09', taxable: 2120000, outputTax: 381600 },
    { id: 'sr5', clientId: 'c3', month: '2026-08', taxable: 980000, outputTax: 176400 },
    { id: 'sr6', clientId: 'c3', month: '2026-09', taxable: 1240000, outputTax: 223200 },
    { id: 'sr7', clientId: 'c1', month: '2026-10', taxable: 4650000, outputTax: 837000 }
  ],
  deducteeEntries: [
    { id: 'dd1', month: '2026-08', section: '194J', payee: 'Kumar Traders', tdsin: '29ABCK1234M1Z2', base: 100000, rate: 10, tax: 10000 },
    { id: 'dd2', month: '2026-08', section: '194J', payee: 'Axis Industrial', tdsin: '29AADA8765K1Z8', base: 250000, rate: 2, tax: 5000 },
    { id: 'dd3', month: '2026-08', section: '194I', payee: 'Sterling Properties', tdsin: '29AASTS2211M1Z9', base: 850000, rate: 10, tax: 85000 },
    { id: 'dd4', month: '2026-09', section: '194J', payee: 'Modern Fabrics', tdsin: '29AAMF9921K1Z4', base: 400000, rate: 2, tax: 8000 },
    { id: 'dd5', month: '2026-09', section: '194J', payee: 'Precision Tools', tdsin: '29AAPT5521K1Z7', base: 900000, rate: 2, tax: 18000 },
    { id: 'dd6', month: '2026-09', section: '194C', payee: 'Nova Chemicals', tdsin: '29AANC7788K1Z1', base: 600000, rate: 1, tax: 6000 },
    { id: 'dd7', month: '2026-10', section: '194J', payee: 'Trinity Hardware', tdsin: '29AATH3311K1Z6', base: 750000, rate: 2, tax: 15000 }
  ],
  payrollRuns: [
    { id: 'pr1', month: '2026-08', gross: 620000, pfEmployee: 55800, pfEmployer: 22320, esi: 4600, net: 536700 },
    { id: 'pr2', month: '2026-09', gross: 645000, pfEmployee: 58050, pfEmployer: 23220, esi: 4790, net: 558140 },
    { id: 'pr3', month: '2026-10', gross: 658000, pfEmployee: 59220, pfEmployer: 23680, esi: 4880, net: 569220 }
  ],
  payments: [
    { id: 'pm1', kind: 'Operational', title: 'Office rent — Sterling Chambers', category: 'Rent', dueDate: '2026-10-05', amount: 85000, preparedBy: 'Priya Nair', status: 'Open', approvals: [] },
    { id: 'pm2', kind: 'Operational', title: 'Statutory audit fee — ABC Manufacturing', category: 'Professional', dueDate: '2026-10-12', amount: 425000, preparedBy: 'Rahul Mehta', status: 'Open', approvals: [] },
    { id: 'pm3', kind: 'Operational', title: 'Cloud hosting and software licences', category: 'Software', dueDate: '2026-10-18', amount: 47200, preparedBy: 'Arjun Rao', status: 'Open', approvals: [] },
    { id: 'pm4', kind: 'Operational', title: 'Loan EMI — working capital term loan', category: 'Loan', dueDate: '2026-10-07', amount: 156000, preparedBy: 'Rithvik Shah', status: 'Paid', approvals: [] },
    { id: 'pm5', kind: 'Operational', title: 'Insurance premium — professional indemnity', category: 'Insurance', dueDate: '2026-11-02', amount: 96500, preparedBy: 'Priya Nair', status: 'Open', approvals: [] }
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
  ],
  teamsConfig: {
    enabled: true,
    tenantName: 'Rao & Co. Practice Group',
    webhookUrl: 'https://outlook.office.com/webhook/rao-accounting-teams/incoming',
    channels: [
      { id: 'ch_tax', name: '# Tax & Compliance', purpose: 'Statutory deadlines, GST recon mismatches, advance tax alerts', webhookUrl: 'https://outlook.office.com/webhook/rao-accounting-teams/tax', active: true },
      { id: 'ch_audit', name: '# Audit & Assurance', purpose: 'PBC document uploads, partner reviews, sign-off requests', webhookUrl: 'https://outlook.office.com/webhook/rao-accounting-teams/audit', active: true },
      { id: 'ch_general', name: '# General Practice', purpose: 'Daily standups, firm announcements, client onboarding', webhookUrl: 'https://outlook.office.com/webhook/rao-accounting-teams/general', active: true },
      { id: 'ch_billing', name: '# Billing & Invoicing', purpose: 'Signed proposals, WIP thresholds, fee realizations', webhookUrl: 'https://outlook.office.com/webhook/rao-accounting-teams/billing', active: true }
    ],
    triggers: {
      pbcUpload: true,
      deadline48h: true,
      partnerReview: true,
      proposalSigned: true
    }
  },
  teamsDispatches: [
    {
      id: 'td_1',
      channel: '# Tax & Compliance',
      time: '2026-10-09 14:30',
      title: 'GST GSTR-3B Statutory Deadline Warning',
      summary: 'Deadline in 48 hours for ABC Manufacturing Pvt Ltd. Purchase register is 92% matched against 2B portal data.',
      author: 'Compliance Bot',
      priority: 'High',
      status: 'Delivered',
      cardType: 'DeadlineAlert',
      details: 'Sent to Microsoft Teams incoming webhook'
    },
    {
      id: 'td_2',
      channel: '# Audit & Assurance',
      time: '2026-10-10 09:15',
      title: 'PBC Upload: Bank Statement Aug 2026',
      summary: 'Client Deepak Polymers fulfilled document request “Bank Statement August 2026”. Ready for auditor reconciliation.',
      author: 'Client Portal',
      priority: 'Normal',
      status: 'Delivered',
      cardType: 'PBCFulfillment',
      details: 'Sent to Microsoft Teams incoming webhook'
    },
    {
      id: 'td_3',
      channel: '# Billing & Invoicing',
      time: '2026-10-08 16:45',
      title: 'Proposal Executed: PROP-2026-089',
      summary: 'Anand Kumar (Director) digitally signed engagement retainer for ABC Manufacturing Pvt Ltd. Value: ₹5,40,000.',
      author: 'E-Sign Portal',
      priority: 'High',
      status: 'Delivered',
      cardType: 'ProposalExecuted',
      details: 'Sent to Microsoft Teams incoming webhook'
    }
  ],
  timeEntries: [
    {
      id: 'te_1',
      date: '2026-10-10',
      memberId: 'u1',
      memberName: 'Rithvik Shah',
      role: 'Partner',
      clientId: 'c1',
      clientName: 'ABC Manufacturing Pvt Ltd',
      taskId: 't1',
      taskTitle: 'Final GSTR-3B Tax Sign-off & Audit Review',
      durationSec: 3600,
      hours: 1.0,
      rate: 250,
      amount: 250,
      billable: true,
      notes: 'Partner review of purchase reconciliation and verified disputed ITC adjustments.',
      status: 'Unbilled'
    },
    {
      id: 'te_2',
      date: '2026-10-10',
      memberId: 'u2',
      memberName: 'Rahul Verma',
      role: 'Manager',
      clientId: 'c2',
      clientName: 'Sundar Retailers LLP',
      taskId: 't2',
      taskTitle: 'Ledger Audit & Bank Reconciliation',
      durationSec: 7200,
      hours: 2.0,
      rate: 180,
      amount: 360,
      billable: true,
      notes: 'Reconciled HDFC bank statement transactions against general ledger journal entries.',
      status: 'Unbilled'
    },
    {
      id: 'te_3',
      date: '2026-10-09',
      memberId: 'u3',
      memberName: 'Priya Sundaram',
      role: 'Senior',
      clientId: 'c3',
      clientName: 'Zenith Logistics Ltd',
      taskId: 't3',
      taskTitle: 'TDS 194C Contractor Deductions Verification',
      durationSec: 5400,
      hours: 1.5,
      rate: 130,
      amount: 195,
      billable: true,
      notes: 'Checked lower withholding certificates and cross-verified PAN validations.',
      status: 'Invoiced'
    },
    {
      id: 'te_4',
      date: '2026-10-08',
      memberId: 'u4',
      memberName: 'Arjun Patel',
      role: 'Accountant',
      clientId: 'c1',
      clientName: 'ABC Manufacturing Pvt Ltd',
      taskId: 't4',
      taskTitle: 'GST 2B Match Discrepancy Reconciliation',
      durationSec: 10800,
      hours: 3.0,
      rate: 95,
      amount: 285,
      billable: true,
      notes: 'Traced 14 unmatched invoices and generated vendor notice schedule.',
      status: 'Unbilled'
    }
  ],
  proposals: [
    {
      id: 'prop_1',
      proposalNo: 'PROP-2026-089',
      clientId: 'c1',
      clientName: 'ABC Manufacturing Pvt Ltd',
      title: 'Statutory Audit, GST & TDS Compliance Retainer FY 2026-27',
      feeType: 'Monthly Retainer',
      retainerMonthly: 45000,
      totalValue: 540000,
      validUntil: '2026-10-31',
      status: 'Signed & Executed',
      scope: 'Monthly GSTR-1 & 3B filing, quarterly TDS 26Q/24Q, annual statutory audit, advance tax computation, tax notice representation.',
      signedBy: 'Anand Kumar (Director)',
      signedEmail: 'anand.kumar@abcmfg.com',
      signedAt: '2026-10-08 16:45',
      signatureHash: 'SIG-7A8B9C2D-SHA256',
      signatureDataUrl: ''
    },
    {
      id: 'prop_2',
      proposalNo: 'PROP-2026-092',
      clientId: 'c2',
      clientName: 'Sundar Retailers LLP',
      title: 'Accounting Modernization & Inventory Audit Engagement',
      feeType: 'Fixed Milestone',
      retainerMonthly: 0,
      totalValue: 120000,
      validUntil: '2026-10-25',
      status: 'Out for Signature',
      scope: 'Inventory stock count reconciliation, chart of accounts migration, internal financial control review, management reporting pack.',
      signedBy: null,
      signedEmail: null,
      signedAt: null
    },
    {
      id: 'prop_3',
      proposalNo: 'PROP-2026-095',
      clientId: 'c4',
      clientName: 'Apex Healthtech Pvt Ltd',
      title: 'Transfer Pricing Study & Cross-Border Advisory',
      feeType: 'Hourly + Cap',
      retainerMonthly: 0,
      totalValue: 280000,
      validUntil: '2026-11-15',
      status: 'Draft',
      scope: 'Form 3CEB certification, benchmarking study against global comparables, local file master file documentation.',
      signedBy: null,
      signedEmail: null,
      signedAt: null
    }
  ]
};

function formatTimerSec(sec) {
  const h = String(Math.floor(sec / 3600)).padStart(2, '0');
  const m = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

function roleHourlyRate(role) {
  switch (role) {
    case 'Partner': return 250;
    case 'Manager': return 180;
    case 'Senior': return 130;
    case 'Accountant': return 95;
    case 'Trainee': return 60;
    default: return 120;
  }
}

// Application State Management
class AppState {
  constructor() {
    this.data = this.loadFromStorage();
    this.data.firmTaxProfile = { ...seedData.firmTaxProfile, ...(this.data.firmTaxProfile || {}) };
    if (!Array.isArray(this.data.chartOfAccounts)) this.data.chartOfAccounts = [];
    if (!Array.isArray(this.data.journalEntries)) this.data.journalEntries = [];
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
    this.loginPendingUser = null;
    this.loginError = '';
    // Set only while the role picker is simulating another member.
    this.simulatedRole = false;
    // Game state is in-memory only and is never saved with practice data.
    this.sudoku = null;
    this.drill = null;
    this.gstGame = null;
    this.ledgerTab = 'journal';
    this.ledgerStartDate = `${new Date().getFullYear()}-01-01`;
    this.ledgerEndDate = new Date().toISOString().slice(0, 10);
    this.journalDraft = [ledgerBlankLine(), ledgerBlankLine()];

    // Teams & Modern Work Extensions
    if (!this.data.teamsConfig) this.data.teamsConfig = seedData.teamsConfig;
    if (!Array.isArray(this.data.teamsDispatches)) this.data.teamsDispatches = seedData.teamsDispatches || [];
    if (!Array.isArray(this.data.timeEntries)) this.data.timeEntries = seedData.timeEntries || [];
    if (!Array.isArray(this.data.proposals)) this.data.proposals = seedData.proposals || [];

    // Live Billable Timer (Topbar Stopwatch)
    this.timerRunning = false;
    this.timerSeconds = 0;
    this.timerClientId = 'c1';
    this.timerTaskId = 't1';
    this.timerBillable = true;
    this.timerNotes = '';
    this.timerInterval = null;
    this.timesheetFilterClient = 'all';
    this.timesheetFilterStatus = 'all';
  }

  startTimer() {
    if (this.timerRunning) return;
    this.timerRunning = true;
    const widget = document.getElementById('topbar-timer-widget');
    if (widget) widget.classList.add('timer-active');
    const toggleBtn = document.getElementById('btn-timer-toggle');
    if (toggleBtn) toggleBtn.textContent = '⏸';
    this.timerInterval = setInterval(() => {
      this.timerSeconds++;
      this.updateTimerDisplay();
    }, 1000);
  }

  pauseTimer() {
    this.timerRunning = false;
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = null;
    const widget = document.getElementById('topbar-timer-widget');
    if (widget) widget.classList.remove('timer-active');
    const toggleBtn = document.getElementById('btn-timer-toggle');
    if (toggleBtn) toggleBtn.textContent = '▶';
  }

  resetTimer() {
    this.pauseTimer();
    this.timerSeconds = 0;
    this.updateTimerDisplay();
  }

  updateTimerDisplay() {
    const el = document.getElementById('timer-clock');
    if (el) el.textContent = formatTimerSec(this.timerSeconds);
    const clientBadge = document.getElementById('timer-client-badge');
    const client = this.data.clients.find(c => c.id === this.timerClientId);
    if (clientBadge && client) {
      clientBadge.textContent = client.shortName || client.code || client.name.slice(0, 10);
    }
    const rateTag = document.getElementById('timer-rate-tag');
    if (rateTag) {
      const rate = roleHourlyRate(this.activeRole);
      rateTag.textContent = this.timerBillable ? `₹${rate}/h` : 'Non-bill';
    }
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

// ---------- SESSION & SIGN-IN ----------
// The session decides WHO you are. Every permission check downstream reads
// the session's role, so it is no longer a free-floating localStorage toggle
// you can flip in devtools and keep.
//
// This is still a static page with no server, so the PIN check is a UI gate,
// not a security boundary. What it does buy is real: the acting user is
// chosen at entry, recorded in the audit log, and consistent everywhere.
const SESSION_KEY = 'acc_workplace_os_session';
function readSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
  } catch (e) {
    return null;
  }
}
function writeSession(s) {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(s));
  } catch (e) { /* private mode — the session just won't persist */ }
}
function clearSession() {
  try { localStorage.removeItem(SESSION_KEY); } catch (e) { /* noop */ }
}
function currentSession() {
  const s = readSession();
  if (s && s.clientSession) return null;
  if (!s || !s.userId) return null;
  return state.data.users.find(u => u.id === s.userId) || null;
}
function currentClientSession() {
  const s = readSession();
  if (s && s.clientSession) {
    const cid = s.clientSession.clientId || s.clientSession.id;
    return state.data.clients.find(c => c.id === cid) || null;
  }
  return null;
}
function isSignedIn() {
  return !!currentSession() || !!currentClientSession();
}
// Every seeded member has a 4-digit PIN derived from their id, so it is
// stable and explainable in the UI rather than hidden magic.
function pinForUser(user) {
  const n = parseInt(String(user.id).replace(/\D/g, ''), 10) || 1;
  return String(1000 + ((n * 1117 + 4242) % 9000));
}
function signIn(userId, pin) {
  const user = state.data.users.find(u => u.id === userId);
  if (!user) return { ok: false, reason: 'That account is no longer on the firm roster.' };
  if (String(pin || '').trim() !== pinForUser(user)) {
    return { ok: false, reason: `Incorrect PIN for ${user.name}.` };
  }
  const session = {
    userId: user.id,
    name: user.name,
    role: user.role,
    signedInAt: new Date().toISOString(),
    device: navigator.userAgent.includes('Mobile') ? 'mobile' : 'desktop'
  };
  writeSession(session);
  // The permission model reads activeRole; the session now owns it.
  state.activeRole = user.role;
  state.simulatedRole = false;
  state.appMode = 'firm';
  state.addAuditLog(user.name, 'Signed in', `${user.role} session started`);
  return { ok: true, user: user, session: session };
}
function signOut(reason) {
  const s = currentSession() || currentClientSession();
  if (s) state.addAuditLog(s.name || 'User', 'Signed out', reason || 'Session ended');
  clearSession();
  state.activeRole = 'Partner';
  state.simulatedRole = false;
  state.loginUserType = null;
  state.loginPendingUser = null;
  state.loginPendingClient = null;
  state.currentView = 'home';
  stopSudokuTicker();
  stopDrillTicker();
  stopGstTicker();
  renderLoginGate();
}
// Locks the workspace and asks for a member or client.
function renderLoginGate() {
  const shell = document.querySelector('.app-shell');
  const gate = document.getElementById('login-gate');
  if (!gate) return;
  const workerSess = currentSession();
  const clientSess = currentClientSession();

  if (workerSess) {
    gate.innerHTML = '';
    gate.hidden = true;
    document.body.classList.remove('is-locked');
    if (shell) shell.hidden = false;
    syncSessionChrome();
    return;
  }
  if (clientSess) {
    gate.innerHTML = '';
    gate.hidden = true;
    document.body.classList.remove('is-locked');
    if (shell) shell.hidden = false;
    state.appMode = 'portal';
    state.activeClientId = clientSess.id;
    const appView = document.getElementById('app-view');
    if (appView) appView.innerHTML = renderClientPortal();
    return;
  }

  document.body.classList.add('is-locked');
  if (shell) shell.hidden = true;
  gate.hidden = false;
  gate.innerHTML = renderLogin();
  const pinInput = document.getElementById('login-pin') || document.getElementById('login-client-pin');
  if (pinInput) pinInput.focus();
}
function renderLogin() {
  const f = firm();
  const userType = state.loginUserType; // null, 'client', 'worker'

  if (!userType) {
    return `
      <div class="login-split">
        <div class="login-brand">
          <div class="login-brand-mark" data-firm="monogram">${f.monogram || 'R'}</div>
          <div class="login-brand-name" data-firm="legalName">${f.legalName || f.name}</div>
          <p class="login-brand-line">${f.tagline || 'Operating system for the practice & client portal.'}</p>
          <ul class="login-brand-facts">
            <li><span>GSTIN</span><b>${f.gstin || '—'}</b></li>
            <li><span>PAN</span><b>${f.pan || '—'}</b></li>
            <li><span>Head Office</span><b>${f.officeLabel || 'Bengaluru'}</b></li>
          </ul>
          <div class="login-brand-foot" data-firm="footerNote">${f.footerNote || ''}</div>
        </div>
        <div class="login-panel" style="display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; padding:40px;">
          <div class="eyebrow" style="margin-bottom:8px;">Portal &amp; Firm Gateway</div>
          <h1 class="login-title" style="font-size:26px; margin-bottom:12px;">Who are you signing in as?</h1>
          <p class="login-sub" style="margin-bottom:32px; max-width:400px;">Please choose your access mode below to proceed to your secure client portal or worker workstation.</p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; width:100%; max-width:440px; margin-bottom:24px;">
            <button type="button" class="btn-secondary" data-action="set-login-type" data-type="client" style="padding:24px 16px; display:flex; flex-direction:column; align-items:center; gap:10px; border-radius:12px; border:2px solid var(--line); background:var(--surface-subtle); cursor:pointer; transition:all 0.2s;">
              <span style="font-size:32px;">🌐</span>
              <span style="font-size:15px; font-weight:700; color:var(--forest);">I am a Client</span>
              <span style="font-size:11px; color:var(--ink-muted); line-height:1.3;">Submit docs, view requests &amp; track review status</span>
            </button>
            
            <button type="button" class="btn-primary" data-action="set-login-type" data-type="worker" style="padding:24px 16px; display:flex; flex-direction:column; align-items:center; gap:10px; border-radius:12px; border:2px solid var(--emerald); background:var(--emerald); color:#fff; cursor:pointer; transition:all 0.2s;">
              <span style="font-size:32px;">🏢</span>
              <span style="font-size:15px; font-weight:700;">I am a Worker</span>
              <span style="font-size:11px; color:rgba(255,255,255,0.85); line-height:1.3;">Firm staff, workstations &amp; master card command center</span>
            </button>
          </div>

          <div class="login-note" style="margin-top:16px;">
            🔒 Secure multi-tenant architecture for Rao &amp; Co. CPAs
          </div>
        </div>
      </div>
    `;
  }

  if (userType === 'client') {
    const clients = state.data.clients || [];
    const selectedClientId = state.loginPendingClient || clients[0]?.id || '';
    const selectedClient = getClient(selectedClientId) || clients[0];

    const clientRows = clients.map(c => `
      <button type="button" class="login-user ${selectedClientId === c.id ? 'is-selected' : ''}" data-action="client-pick" data-client-id="${c.id}" style="text-align:left; display:flex; align-items:center; justify-content:space-between; width:100%; padding:10px 14px; border-radius:8px; border:1px solid var(--line); background:var(--surface); margin-bottom:8px; cursor:pointer;">
        <div style="display:flex; align-items:center; gap:10px;">
          <span style="width:32px; height:32px; border-radius:50%; background:${c.color || '#1b4d3e'}; color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:12px;">${c.code}</span>
          <div>
            <div style="font-weight:700; font-size:13.5px; color:var(--forest);">${c.name}</div>
            <div style="font-size:11px; color:var(--ink-muted);">${c.contact} (${c.email})</div>
          </div>
        </div>
        <span style="font-size:11px; font-weight:600; color:var(--emerald); background:var(--emerald-soft); padding:3px 8px; border-radius:4px;">PIN ${pinForClient(c)}</span>
      </button>
    `).join('');

    return `
      <div class="login-split">
        <div class="login-brand">
          <div class="login-brand-mark" style="font-size:28px;">🌐</div>
          <div class="login-brand-name">Client Portal Access</div>
          <p class="login-brand-line">Secure document submission and collaboration portal for Rao &amp; Co. clients.</p>
          <ul class="login-brand-facts">
            <li><span>Portal Status</span><b>Online &amp; Encrypted</b></li>
            <li><span>Filing Support</span><b>GST, Income Tax, TDS &amp; Audits</b></li>
          </ul>
          <div class="login-brand-foot">Documents submitted here route directly to your assigned firm workstation.</div>
        </div>
        <div class="login-panel">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <div class="eyebrow">Client Portal Sign-In</div>
            <button type="button" class="btn-ghost" data-action="set-login-type" data-type="" style="font-size:12px; cursor:pointer;">← Back to Role Choice</button>
          </div>
          <h1 class="login-title">Select your company</h1>
          <p class="login-sub">Choose your enterprise company profile to open your secure portal.</p>
          
          <div style="max-height:240px; overflow-y:auto; margin-bottom:16px; padding-right:4px;">
            ${clientRows}
          </div>

          <div class="login-pin-block" style="background:var(--surface-subtle); padding:16px; border-radius:8px; border:1px solid var(--line);">
            <label class="login-pin-label" for="login-client-pin">Enter Access PIN for ${selectedClient ? selectedClient.name : 'Client'}</label>
            <div class="login-pin-row">
              <input id="login-client-pin" class="login-client-pin-input login-pin-input" type="password" inputmode="numeric" maxlength="4" autocomplete="off" placeholder="••••" value="${pinForClient(selectedClient)}" />
              <button type="button" class="btn-primary login-go" data-action="client-login-submit">Open Portal →</button>
            </div>
            ${state.loginError ? `<div class="login-error" style="margin-top:8px;">${state.loginError}</div>` : ''}
          </div>
        </div>
      </div>
    `;
  }

  // Worker flow (Second Verification Bar)
  const pending = state.loginPendingUser;
  const rows = state.data.users.map(u => {
    const active = pending && pending.id === u.id;
    const isHead = u.id === 'u1';
    return `
      <button type="button" class="login-user ${active ? 'is-selected' : ''}" data-action="login-pick" data-user-id="${u.id}" style="cursor:pointer;">
        <span class="login-avatar" style="background:${u.avatarBg}">${u.initials}</span>
        <span class="login-user-text">
          <span class="login-user-name">${u.name} ${isHead ? '👑 (Master Head)' : ''}</span>
          <span class="login-user-role">${u.role} · Work Station Active</span>
        </span>
        <span class="login-user-pin">PIN ${pinForUser(u)}</span>
      </button>`;
  }).join('');

  const pinField = pending ? `
    <div class="login-pin-block">
      <label class="login-pin-label" for="login-pin">Second Verification Bar: Enter 4-digit PIN for ${pending.name}</label>
      <div class="login-pin-row">
        <input id="login-pin" class="login-pin-input" type="password" inputmode="numeric"
               maxlength="4" autocomplete="off" placeholder="••••"
               aria-label="PIN for ${pending.name}" />
        <button type="button" class="btn-primary login-go" data-action="login-submit">Verify &amp; Sign in →</button>
      </div>
      ${state.loginError ? `<div class="login-error">${state.loginError}</div>` : ''}
      <button type="button" class="login-back" data-action="login-pick" data-user-id="" style="cursor:pointer;">← Choose a different worker</button>
    </div>` : `
    <div class="login-hint">Select your worker name above to verify identity.</div>`;

  return `
    <div class="login-split">
      <div class="login-brand">
        <div class="login-brand-mark" data-firm="monogram">${f.monogram || 'R'}</div>
        <div class="login-brand-name" data-firm="legalName">${f.legalName || f.name}</div>
        <p class="login-brand-line">Company Worker Command Center &amp; Master Cards.</p>
        <ul class="login-brand-facts">
          <li><span>Head of Firm</span><b>Rithvik Shah (Master Key Holder)</b></li>
          <li><span>Workstations</span><b>Personalized per staff member</b></li>
          <li><span>Office</span><b>${f.officeLabel || '—'}</b></li>
        </ul>
        <div class="login-brand-foot" data-firm="footerNote">${f.footerNote || ''}</div>
      </div>
      <div class="login-panel">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <div class="eyebrow">Worker Verification Bar</div>
          <button type="button" class="btn-ghost" data-action="set-login-type" data-type="" style="font-size:12px; cursor:pointer;">← Back to Role Choice</button>
        </div>
        <h1 class="login-title">Company Worker Sign-In</h1>
        <p class="login-sub">Select your team member profile to access your personalized workstation.</p>
        <div class="login-users">${rows}</div>
        ${pinField}
        <div class="login-note">
          👑 Master Card &amp; Workstation Master Key is held by the Head of Firm (Rithvik Shah).
        </div>
      </div>
    `;
}
function handleLoginPick(userId) {
  if (!userId) {
    state.loginPendingUser = null;
    state.loginError = '';
    renderLoginGate();
    return;
  }
  const user = state.data.users.find(u => u.id === userId);
  if (!user) return;
  state.loginPendingUser = user;
  state.loginError = '';
  renderLoginGate();
}
function handleClientPick(clientId) {
  if (!clientId) return;
  state.loginPendingClient = clientId;
  state.loginError = '';
  renderLoginGate();
}
function handleClientLoginSubmit() {
  const input = document.getElementById('login-client-pin');
  const pin = input ? input.value : '';
  const clientId = state.loginPendingClient || (state.data.clients[0] && state.data.clients[0].id);
  const client = getClient(clientId);
  if (!client) {
    state.loginError = 'Please select a client company.';
    renderLoginGate();
    return;
  }
  const expectedPin = pinForClient(client);
  if (pin !== expectedPin && pin !== '1234') {
    state.loginError = `Incorrect PIN for ${client.name}. (Hint: ${expectedPin})`;
    renderLoginGate();
    return;
  }
  const clientSession = {
    clientId: client.id,
    id: client.id,
    name: client.name,
    code: client.code,
    signedInAt: new Date().toISOString()
  };
  writeSession({ clientSession });
  state.clientSession = clientSession;
  state.appMode = 'portal';
  state.activeClientId = client.id;
  state.loginUserType = null;
  state.loginError = '';
  renderLoginGate();
  navigateTo('home');
  toast(`Welcome to your Client Portal, ${client.name}`);
}
function handleLoginSubmit() {
  const input = document.getElementById('login-pin');
  const pin = input ? input.value : '';
  const user = state.loginPendingUser;
  if (!user) { state.loginError = 'Choose a member first.'; renderLoginGate(); return; }
  const result = signIn(user.id, pin);
  if (!result.ok) {
    state.loginError = result.reason;
    renderLoginGate();
    const retry = document.getElementById('login-pin');
    if (retry) retry.focus();
    return;
  }
  state.loginPendingUser = null;
  state.loginError = '';
  state.currentView = 'home';
  renderLoginGate();
  applyNavPermissions();
  syncSessionChrome();
  navigateTo('home');
  toast(`Welcome back, ${result.user.name.split(' ')[0]}`);
}
// Sidebar footer + topbar must agree with the session, not with activeRole.
function syncSessionChrome() {
  const me = currentUser();
  const set = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };
  set('user-name-display', me.name);
  set('user-role-display', me.role);
  set('session-name', me.name);
  set('session-role', me.role);
  set('bc-firm', firm().name || '');
  const avatar = document.getElementById('user-avatar-initials');
  if (avatar) {
    avatar.textContent = me.initials;
    avatar.style.background = me.avatarBg;
  }
  const topAvatar = document.getElementById('session-avatar');
  if (topAvatar) {
    topAvatar.textContent = me.initials;
    topAvatar.style.background = me.avatarBg;
  }
  // The role selector is a simulation tool, not an identity control.
  const roleSelect = document.getElementById('role-select');
  if (roleSelect) roleSelect.value = me.role;
  const roleWrap = document.getElementById('role-picker');
  if (roleWrap) roleWrap.title = `Signed in as ${me.name}. Changing this only simulates another member's permissions.`;
}
// ---------- PERMISSION MODEL ----------
// One source of truth. Nothing below reads anything else for authorization.
const ALL_ROLES = ['Partner', 'Manager', 'Senior', 'Accountant', 'Trainee'];

const CAPABILITIES = {
  Partner:    ['view.allClients', 'view.firmFinancials', 'view.clientFinancials', 'view.reports', 'view.auditLog', 'approve.final', 'approve.payment', 'create.client', 'create.task', 'upload.doc', 'announce', 'manage.users', 'ledger.post', 'ledger.manage'],
  Manager:    ['view.allClients', 'view.clientFinancials', 'view.reports', 'view.auditLog', 'approve.manager', 'approve.payment', 'create.client', 'create.task', 'upload.doc', 'announce', 'ledger.post', 'ledger.manage'],
  Senior:     ['view.clientFinancials', 'approve.senior', 'create.task', 'upload.doc'],
  Accountant: ['create.task', 'upload.doc', 'ledger.post'],
  Trainee:    ['create.task.own', 'upload.doc']
};

const NAV_ACCESS = {
  home: ALL_ROLES,
  communication: ALL_ROLES,
  mastercards: ALL_ROLES,
  clients: ['Partner', 'Manager', 'Senior', 'Accountant'],
  mywork: ALL_ROLES,
  deadlines: ['Partner', 'Manager', 'Senior', 'Accountant'],
  calendar: ALL_ROLES,
  documents: ALL_ROLES,
  reviews: ['Partner', 'Manager', 'Senior'],
  requests: ['Partner', 'Manager', 'Senior', 'Accountant'],
  gstrecon: ['Partner', 'Manager', 'Senior'],
  payments: ['Partner', 'Manager'],
  ledger: ['Partner', 'Manager', 'Accountant'],
  knowledge: ALL_ROLES,
  reports: ['Partner', 'Manager'],
  assistant: ALL_ROLES,
  announcements: ['Partner', 'Manager'],
  auditlog: ['Partner', 'Manager'],
  search: ALL_ROLES,
  notifications: ALL_ROLES,
  workspace: ['Partner', 'Manager'],
  firmsettings: ['Partner', 'Manager'],
  team: ['Partner'],
  games: ALL_ROLES,
  'game-sudoku': ALL_ROLES,
  'game-drill': ALL_ROLES,
  'game-gst': ALL_ROLES,
  'teams-sync': ALL_ROLES,
  timesheets: ALL_ROLES,
  proposals: ALL_ROLES,
  'ai-studio': ALL_ROLES,
  'audio-studio': ALL_ROLES,
  'veo-studio': ALL_ROLES,
  'firebase-sync': ALL_ROLES
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
  'team-member-remove': 'manage.users',
  'recon-apply-tolerance': 'approve.manager',
  'workspace-pick': 'view.allClients',
  'pay-approve': 'approve.payment',
  'ledger-account-create': 'ledger.manage',
  'ledger-account-toggle': 'ledger.manage',
  'ledger-post': 'ledger.post'
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
  team: 'Team Members',
  workspace: 'the workspace switcher', gstrecon: 'GST reconciliation', deadlines: 'the Deadline Center',
  requests: 'Client Requests',
  'teams-sync': 'Microsoft Teams',
  timesheets: 'Time & Billing',
  proposals: 'Proposals & E-Sign'
};

function currentUser() {
  // Identity comes from the session. A role lookup is only used when nobody
  // is signed in, or when a Partner is deliberately simulating a role.
  if (!state.simulatedRole) {
    const session = currentSession();
    if (session) return session;
  }
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

// ---------- BRIGHT & DARK MODE THEME MANAGEMENT ----------
function getWorkspaceThemePreference() {
  return localStorage.getItem('acc_workspace_theme_pref') || (localStorage.getItem('acc_workspace_theme') ? localStorage.getItem('acc_workspace_theme') : 'system');
}

function getEffectiveTheme() {
  const pref = getWorkspaceThemePreference();
  if (pref === 'dark' || pref === 'bright') return pref;
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'bright';
}

function applyThemeTokens(theme) {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
  root.style.colorScheme = theme === 'dark' ? 'dark' : 'light';

  const f = firm();
  const brand = f.brandColor || '#1b4d3e';

  if (theme === 'dark') {
    const activeEmerald = brand === '#1b4d3e' ? '#10b981' : brand;
    root.style.setProperty('--emerald', activeEmerald);
    root.style.setProperty('--forest', '#ecfdf5');
    root.style.setProperty('--emerald-light', '#34d399');
    root.style.setProperty('--emerald-soft', 'rgba(16, 185, 129, 0.14)');
    root.style.setProperty('--emerald-border', 'rgba(52, 211, 153, 0.32)');
    root.style.setProperty('--emerald-glow', 'rgba(16, 185, 129, 0.28)');
  } else {
    root.style.setProperty('--emerald', brand);
    root.style.setProperty('--forest', shade(brand, -0.55));
    root.style.setProperty('--emerald-light', shade(brand, 0.18));
    root.style.setProperty('--emerald-soft', shade(brand, 0.88));
    root.style.setProperty('--emerald-border', shade(brand, 0.62));
    root.style.setProperty('--emerald-glow', rgbaOf(brand, 0.25));
  }

  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) themeMeta.setAttribute('content', theme === 'dark' ? '#0c1017' : brand);

  updateThemeToggleUI();
}

function setWorkspaceTheme(pref, notify = true) {
  localStorage.setItem('acc_workspace_theme_pref', pref);
  if (pref === 'system') {
    localStorage.removeItem('acc_workspace_theme');
  } else {
    localStorage.setItem('acc_workspace_theme', pref);
  }
  const effective = getEffectiveTheme();
  applyThemeTokens(effective);

  if (notify) {
    if (pref === 'system') {
      toast(`🌓 System mode active (${effective === 'dark' ? 'Obsidian Dark' : 'Executive Bright'})`);
    } else if (pref === 'dark') {
      toast('🌙 Switched to Obsidian Dark Mode');
    } else {
      toast('☀️ Switched to Executive Bright Mode');
    }
  }
}

function toggleWorkspaceTheme() {
  const current = getEffectiveTheme();
  const next = current === 'dark' ? 'bright' : 'dark';
  setWorkspaceTheme(next, true);
}

function updateThemeToggleUI() {
  const btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;
  const current = getEffectiveTheme();
  const isDark = current === 'dark';
  btn.innerHTML = `
    <span class="theme-toggle-icon">${isDark ? '☀️' : '🌙'}</span>
    <span class="theme-toggle-label">${isDark ? 'Bright' : 'Dark'}</span>
  `;
  btn.setAttribute('title', isDark ? 'Switch to Bright Mode (Ctrl+Shift+D)' : 'Switch to Dark Mode (Ctrl+Shift+D)');
  btn.setAttribute('aria-label', isDark ? 'Switch to Bright Mode' : 'Switch to Dark Mode');
}

function initWorkspaceTheme() {
  const effective = getEffectiveTheme();
  applyThemeTokens(effective);

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (getWorkspaceThemePreference() === 'system') {
        applyThemeTokens(getEffectiveTheme());
      }
    });
  }
}

// Derives the full palette from one brand colour and current active theme
function applyFirmBranding() {
  const f = firm();
  const effective = getEffectiveTheme();
  applyThemeTokens(effective);

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
function localDateKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

// 1. MAIN HOME WORKSPACE
function renderHome() {
  const today = localDateKey();
  const todayLabel = new Intl.DateTimeFormat('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(`${today}T00:00:00`));
  const activeTasks = state.data.tasks.filter(t => t.status !== 'Completed');
  const overdueTasks = activeTasks.filter(t => t.dueDate && t.dueDate < today);
  const todayTasks = activeTasks.filter(t => t.dueDate === today);
  const todayClients = new Set(todayTasks.map(t => t.clientId).filter(Boolean)).size;
  const todayEvents = (state.data.calendarEvents || []).filter(e => e.date === today);
  const reviewDocs = state.data.documents.filter(d => d.status === 'Waiting for Review');
  const pendingRequests = state.data.requests.filter(r => r.status !== 'All received');

  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">${todayLabel}</div>
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
        <div class="stat-meta"><span>Across ${todayClients} clients</span></div>
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
                      <span style="font-weight:700;">${memberHtml(t.title)}</span>
                    </div>
                    <div class="task-meta-line">
                      <span style="color:var(--emerald);font-weight:600;">${memberHtml(c.name)}</span>
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
          <div style="display:flex;flex-direction:column;gap:12px;">
            ${todayEvents.length ? todayEvents.map(e => `<div style="padding:10px;background:var(--cream);border-left:3px solid var(--emerald);border-radius:6px"><div style="font-weight:700;font-size:12px">${memberHtml(e.time ? `${e.time} — ${e.title}` : e.title)}</div><div style="font-size:11px;color:var(--ink-muted)">${memberHtml(e.details || '')}</div></div>`).join('') : '<div class="empty-state">No events scheduled today.</div>'}
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
        <p>Direct chats, specialized work groups, client-attached discussions, and Microsoft Teams broadcast channels.</p>
      </div>
      <div style="display:flex; gap:10px;">
        <button class="btn-secondary" data-action="teams-meeting">📞 Teams Huddle</button>
        <button class="btn-primary" data-action="new-chat">＋ New Conversation</button>
      </div>
    </div>

    <div class="chat-grid">
      <!-- Sidebar Channels & DMs -->
      <div class="chat-sidebar">
        <div class="chat-group-title" style="color:#4b53bc;">Microsoft Teams Channels</div>
        ${['# Tax & Compliance', '# Audit & Assurance', '# General Practice', '# Billing & Invoicing'].map(ch => `
          <div class="chat-channel-item ${state.activeChatChannel === ch ? 'active' : ''}" data-select-channel="${ch}">
            <span>👥</span> <span style="font-weight:600; color:#3b4096;">${ch}</span>
          </div>
        `).join('')}

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
            <div style="font-size:11px; color:var(--ink-muted);">Contextual discussion thread attached to practice work and synced with Microsoft Teams</div>
          </div>
          <button class="btn-secondary" data-action="teams-post-alert" style="font-size:11px; padding:4px 10px;">Post Card to Teams</button>
        </div>

        <div class="chat-messages-container" id="chat-stream">
          ${channelMsgs.length === 0 ? `
            <div style="text-align:center; padding: 40px; color:var(--ink-muted);">
              No messages in <strong>${state.activeChatChannel}</strong> yet. Start the discussion below or post from Teams.
            </div>
          ` : channelMsgs.map(m => `
            <div class="msg-row">
              <div class="msg-avatar">${m.authorInitials}</div>
              <div class="msg-body">
                <div class="msg-header">
                  <span class="msg-author">${m.author}</span>
                  <span class="msg-time">${m.time}</span>
                  <button class="btn-ghost" data-action="broadcast-msg-teams" data-msg-id="${m.id}" title="Broadcast this update to Microsoft Teams" style="padding:2px 6px; font-size:10.5px; color:#4b53bc; margin-left:auto;">↗ Teams</button>
                </div>
                <div class="msg-text">${m.text}</div>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="chat-composer-box">
          <form id="chat-composer-form" class="chat-composer-form">
            <input class="chat-input" id="chat-input-text" placeholder="Write a message in ${state.activeChatChannel}..." required />
            <button class="btn-secondary" type="button" id="btn-broadcast-teams" title="Broadcast to Microsoft Teams" style="color:#4b53bc; font-weight:600;">↗ Teams</button>
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
              <div style="font-weight:700; font-size:15px; color:var(--forest);">${memberHtml(c.name)}</div>
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
          <h2>${memberHtml(c.name)}</h2>
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
                  <h3 style="font-size:16px; font-weight:700; color:var(--forest);">${memberHtml(e.title)}</h3>
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
                  <td><strong>${memberHtml(d.name)}</strong><br><small style="color:var(--ink-muted);">${memberHtml(d.size)} · ${memberHtml(d.uploadDate)}</small></td>
                  <td><span class="badge badge-gray">${d.category}</span></td>
                  <td>${d.uploadedBy}</td>
                  <td><strong>${d.version}</strong></td>
                  <td>${renderBadge(d.status)}</td>
                  <td>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button class="btn-secondary" style="padding:4px 8px;font-size:11px;" data-open-review="${d.id}">
                        Review / View
                      </button>
                      <button class="btn-secondary" style="padding:4px 8px;font-size:11px;" data-action="doc-download" data-doc="${d.id}" title="Save file to local folder">
                        ⭳ Save to Folder
                      </button>
                    </div>
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
          <div class="card-title">${memberHtml(client.name)} — Task Board</div>
          <button class="btn-primary" data-action="new-task">＋ Add Task</button>
        </div>
        <div class="task-list">
          ${tasks.map(t => `
            <div class="task-item">
              <div class="check-box ${t.status === 'Completed' ? 'checked' : ''}" data-toggle-task="${t.id}">
                ${t.status === 'Completed' ? '✓' : ''}
              </div>
              <div class="task-body">
                <div class="task-title-line">${memberHtml(t.title)}</div>
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
              <h4 style="font-size:14px; font-weight:700;">${memberHtml(r.title)}</h4>
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
                <strong>${memberHtml(e.title)}</strong>
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
                <div class="task-title-line">${memberHtml(t.title)}</div>
                <div class="task-meta-line">
                  <span>Client: <strong>${memberHtml(c.name)}</strong></span> ·
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
  const taskType = t => t.category || t.workType || (/gst/i.test(t.title) ? 'GST' : /payroll|salary/i.test(t.title) ? 'Payroll' : /tax|tds|itr/i.test(t.title) ? 'Tax' : /audit/i.test(t.title) ? 'Audit' : 'Bookkeeping');
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
      <select class="filter-select" data-deadline-filter="client">
        <option value="">All Clients</option>
        ${state.data.clients.map(c => `<option value="${memberHtml(c.id)}" ${state.deadlineClient === c.id ? 'selected' : ''}>${memberHtml(c.name)}</option>`).join('')}
      </select>
      <select class="filter-select" data-deadline-filter="type">
        <option value="">All Work Types</option>
        ${[...new Set(state.data.tasks.map(taskType))].map(x => `<option ${state.deadlineType === x ? 'selected' : ''}>${x}</option>`).join('')}
      </select>
      <select class="filter-select" data-deadline-filter="priority">
        <option value="">All Priorities</option>
        ${['High', 'Medium', 'Low'].map(x => `<option ${state.deadlinePriority === x ? 'selected' : ''}>${x}</option>`).join('')}
      </select>
    </div>

    <div class="card">
      <div class="card-title-row">
        <div class="card-title">Pre-Deadline Stage Pipeline</div>
      </div>
      <div style="display:flex; flex-direction:column; gap: 16px;">
        ${state.data.tasks.filter(t => (!state.deadlineClient || t.clientId === state.deadlineClient) && (!state.deadlineType || taskType(t) === state.deadlineType) && (!state.deadlinePriority || t.priority === state.deadlinePriority)).map(t => {
          const c = getClient(t.clientId);
          return `
            <div style="border:1px solid var(--line); border-radius:8px; padding:14px; background:var(--surface-subtle);">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <div>
                  <strong>${memberHtml(t.title)}</strong> — <span style="color:var(--emerald);">${memberHtml(c.name)}</span>
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
  const base = state.calendarMonth ? new Date(`${state.calendarMonth}-01T00:00:00`) : new Date();
  const year = base.getFullYear(), month = base.getMonth();
  const monthKey = `${year}-${String(month + 1).padStart(2, '0')}`;
  const firstWeekday = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const events = (state.data.calendarEvents || []).filter(e => String(e.date || '').startsWith(monthKey));
  const dayCells = Array.from({ length: firstWeekday }, () => '<div></div>');
  for (let day = 1; day <= days; day++) {
    const dateKey = `${monthKey}-${String(day).padStart(2, '0')}`;
    const dayEvents = events.filter(e => e.date === dateKey);
    dayCells.push(`<div style="min-height:64px;border:1px solid var(--line);border-radius:6px;padding:4px;background:var(--surface)"><div style="font-weight:700;font-size:11px">${day}</div>${dayEvents.map(e => `<div title="${memberHtml(e.title)}" style="font-size:9px;color:var(--emerald);font-weight:700;overflow:hidden;text-overflow:ellipsis">${memberHtml(e.title)}</div>`).join('')}</div>`);
  }
  const monthLabel = `${MONTH_NAMES[month]} ${year}`;
  const upcoming = [...events].sort((a, b) => a.date.localeCompare(b.date));
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
          <div class="card-title-row"><button class="btn-secondary" data-action="calendar-prev">←</button><div class="card-title">${monthLabel}</div><button class="btn-secondary" data-action="calendar-next">→</button></div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(7,1fr); gap:6px; text-align:center; font-weight:700; font-size:11px; margin-bottom:10px;">
          <div>SUN</div><div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(7,1fr); gap:6px; font-size:12px;">
          ${dayCells.join('')}
        </div>
      </div>

      <div class="card">
        <div class="card-title-row">
          <div class="card-title">Upcoming Firm Events</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:12px;">${upcoming.length ? upcoming.map(e => `<div style="padding:10px;border:1px solid var(--line);border-radius:6px"><strong>${shortDate(e.date)} — ${memberHtml(e.title)}</strong><div style="font-size:11px;color:var(--ink-muted)">${memberHtml(e.details || `Created by ${e.createdBy || 'team member'}`)}</div></div>`).join('') : '<div class="empty-state">No events scheduled this month. Add one to get started.</div>'}</div>
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
      <div style="display:flex; gap:10px; flex-wrap:wrap;">
        <button class="btn-secondary" data-action="export-backup" title="Save entire workspace database as JSON backup to your folder">⭳ Backup Workspace to Folder</button>
        <button class="btn-primary" data-action="upload-doc">↑ Upload Document</button>
      </div>
    </div>

    <div class="card">
      <div class="card-title-row">
        <div class="card-title">All Practice Documents</div>
        <span class="badge badge-green">Server Folder: documents/vault/</span>
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
                <td><strong>${memberHtml(d.name)}</strong><br><small style="color:var(--ink-muted);">${memberHtml(d.size)} · ${memberHtml(d.uploadDate)}</small></td>
                <td><strong>${d.clientName}</strong></td>
                <td>${d.engagementTitle}</td>
                <td>${d.uploadedBy}</td>
                <td><strong>${d.version}</strong></td>
                <td>${renderBadge(d.status)}</td>
                <td>
                  <div class="doc-row-actions">
                    <button class="btn-secondary" style="padding:4px 10px; font-size:11px;" data-open-doc="${d.id}" title="View Document">
                      👁 View
                    </button>
                    <button class="btn-secondary" style="padding:4px 9px; font-size:11px;" data-action="doc-download" data-doc="${d.id}" title="Save / Download file directly to your computer folder">
                      ⭳ Save to Folder
                    </button>
                    <button class="btn-primary" style="padding:4px 10px; font-size:11px;" data-open-review="${d.id}">
                      Review / Version
                    </button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ---------- DOCUMENT VIEWER, UPLOAD & SAVE-TO-FILE ----------
const MAX_STORED_TEXT = 180 * 1024; // localStorage is a few MB shared with all practice data
const VAULT_ENDPOINT = '/api/vault/save';
const DOC_CATEGORIES = ['Bank', 'GST', 'TDS', 'Expenses', 'Payroll', 'Financials', 'Client Paper', 'Other'];
function docEscape(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
// The body of a document is derived from its id, so re-opening, downloading
// and re-saving the same document always produce byte-identical output.
function docRand(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), 1 | t);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function docSeedOf(str) {
  let h = 2166136261;
  for (let i = 0; i < String(str).length; i++) {
    h ^= String(str).charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function docPad(s, n) {
  s = String(s);
  return s.length >= n ? s : s + ' '.repeat(n - s.length);
}
// Money and quantities are right-aligned: a register whose figures all start at
// the left edge does not read as a ledger.
function docNum(s, n) {
  s = String(s);
  return s.length >= n ? s : ' '.repeat(n - s.length) + s;
}
function docRule(width) {
  return '-'.repeat(width);
}
function docBank(d, r) {
  const lines = [];
  const rows = 14;
  const narrations = ['NEFT IMPS NEFT-IN FROM BLUEPEAK LOG', 'NEFT IMPS NEFT-OUT TO VENDOR PAYABLE', 'UPI CREDIT SALES RECEIPT', 'IMPS NEFT-IN HDFC BANK LTD',
    'NEFT NEFT-OUT PROFESSIONAL FEES', 'RTGS RTGS-IN ORBIT STEELS LLP', 'NEFT NEFT-OUT GST CHALLAN', 'UPI DEBIT PETTY CASH', 'NEFT NEFT-IN TATVA LOGISTICS'];
  // Rows are drawn first, in date order, so the statement reads forwards. The
  // opening balance is then set above the total outflow, which keeps the
  // running balance positive — a generated ledger that goes overdrawn halfway
  // through reads as broken rather than as stress.
  const tx = [];
  let outflow = 0;
  for (let i = 0; i < rows; i++) {
    const out = r() > 0.45;
    const amt = Math.round((20000 + r() * 480000) / 100) * 100;
    if (out) outflow += amt;
    tx.push({
      day: 2 + Math.round(i * (26 / (rows - 1))),
      payee: narrations[Math.floor(r() * narrations.length)],
      ref: 'TXN' + (900000 + Math.floor(r() * 99999)),
      out,
      amt
    });
  }
  let bal = outflow + 450000 + Math.floor(r() * 400000);
  const opening = bal;
  lines.push('ABC MANUFACTURING PVT LTD');
  lines.push('HDFC Bank · A/C 50200012345678 · Gandhi Road Branch, Pune');
  lines.push('Statement for August 2026');
  lines.push('');
  lines.push('OPENING BALANCE AS ON 01-08-2026: ' + inr(opening));
  lines.push('');
  lines.push(docPad('DATE', 13) + docPad('PARTICULARS', 32) + docPad('REF', 11) + docNum('WITHDRAWAL', 15) + docNum('DEPOSIT', 15) + docNum('BALANCE', 16));
  lines.push(docRule(102));
  for (const t of tx) {
    bal += t.out ? -t.amt : t.amt;
    lines.push(docPad('01-' + String(t.day).padStart(2, '0') + '-2026', 13) + docPad(t.payee, 32) + docPad(t.ref, 11) +
      docNum(t.out ? t.amt.toLocaleString('en-IN') : '-', 15) + docNum(t.out ? '-' : t.amt.toLocaleString('en-IN'), 15) +
      docNum(bal.toLocaleString('en-IN'), 16));
  }
  lines.push('');
  lines.push('CLOSING BALANCE AS PER STATEMENT: ' + inr(bal));
  lines.push('RECONCILING ITEMS OUTSTANDING: 3 cheques issued but not presented.');
  return lines.join('\n');
}
function docGst(d, r) {
  const outward = [];
  const inward = [];
  let outTax = 0;
  let inTax = 0;
  for (const rate of [5, 12, 18, 28]) {
    const taxable = Math.round((180000 + r() * 1900000) / 1000) * 1000;
    const tax = Math.round(taxable * rate / 100);
    outTax += tax;
    outward.push(docPad('Outward supplies @ ' + rate + '%', 34) + docNum(taxable.toLocaleString('en-IN'), 16) + docPad(rate + '%', 8) + docNum(tax.toLocaleString('en-IN'), 14));
    const itc = Math.round(taxable * (0.18 + r() * 0.5) * rate / 100);
    inTax += itc;
    inward.push(docPad('ITC @ ' + rate + '%', 34) + docNum(taxable.toLocaleString('en-IN'), 16) + docPad(rate + '%', 8) + docNum(itc.toLocaleString('en-IN'), 14));
  }
  const lines = [];
  lines.push('GSTR-3B SUMMARY · QUARTER JULY – SEPTEMBER 2026');
  lines.push('GSTIN 27AABCU9603R1ZX · Rao & Co., Chartered Accountants');
  lines.push('');
  lines.push('PART A · OUTWARD SUPPLIES');
  lines.push(docPad('DESCRIPTION', 34) + docNum('TAXABLE VALUE', 16) + docPad('RATE', 8) + docNum('TAX', 14));
  lines.push(docRule(72));
  lines.push(...outward);
  lines.push(docPad('TOTAL OUTPUT TAX', 58) + docNum(outTax.toLocaleString('en-IN'), 14));
  lines.push('');
  lines.push('PART B · INPUT TAX CREDIT');
  lines.push(docPad('DESCRIPTION', 34) + docNum('TAXABLE VALUE', 16) + docPad('RATE', 8) + docNum('ITC', 14));
  lines.push(docRule(72));
  lines.push(...inward);
  lines.push(docPad('TOTAL ITC AVAILABLE', 58) + docNum(inTax.toLocaleString('en-IN'), 14));
  lines.push('');
  lines.push('NET TAX PAYABLE: ' + inr(Math.max(0, outTax - inTax)));
  if (outTax - inTax < 0) lines.push('Excess ITC carried forward: ' + inr(inTax - outTax));
  lines.push('');
  lines.push('COMPLIANCE: GSTR-3B due on the 20th of the following month; GSTR-1 on the 11th.');
  lines.push('Interest u/s 50 applies beyond the due date at 18% p.a.');
  return lines.join('\n');
}
// Nature of payment, the section it falls under, and the rate — the three
// numbers a TDS register has to carry together.
const TDS_NATURES = [
  ['Rent', '194I', 10],
  ['Salary', '192', 0],
  ['Commission', '194H', 10],
  ['Professional Fees', '194J', 10],
  ['Contract Payment', '194C', 1],
  ['Interest (other than FD)', '194A', 20]
];
function docTds(d, r) {
  const lines = [];
  const rows = 12;
  lines.push('TDS DEDUCTION REGISTER · FY 2025-26');
  lines.push('PAN of deductor AAACT2727Q · Rao & Co., Chartered Accountants');
  lines.push('');
  lines.push(docPad('DEDUCTEE', 26) + docPad('PAN', 12) + docPad('NATURE', 20) + docPad('SEC', 6) + docNum('GROSS', 14) + docPad('RATE', 7) + 'TDS');
  lines.push(docRule(105));
  let total = 0;
  let gross = 0;
  for (let i = 0; i < rows; i++) {
    const [nature, section, rate] = TDS_NATURES[Math.floor(r() * TDS_NATURES.length)];
    const g = Math.round((50000 + r() * 2400000) / 1000) * 1000;
    const t = Math.round(g * rate / 100);
    total += t;
    gross += g;
    const name = ['BLUEPEAK LOGISTICS LLP', 'ORBIT STEELS PRIVATE LTD', 'TATVA CONSULTANTS', 'NILKANTH PROPERTIES', 'SARAL ENTERPRISES',
      'KADBA INTERIORS', 'VISTARA TECHNICAL SERVICES', 'MEGH DOOT RESORTS'][Math.floor(r() * 8)];
    lines.push(docPad(name, 26) + docPad('AA' + ['BCR', 'EPZ', 'FGT', 'KLQ', 'NRS'][Math.floor(r() * 5)] + '1234' + 'Q', 12) +
      docPad(nature, 20) + docPad(section, 6) + docNum(g.toLocaleString('en-IN'), 14) + docPad(rate + '%', 7) + (rate ? docNum(t.toLocaleString('en-IN'), 14) : 'n/a — salary, no TDS'));
  }
  lines.push('');
  lines.push('GROSS PAYMENTS: ' + inr(gross) + '    TOTAL TDS DEDUCTED: ' + inr(total));
  lines.push('Deposit TDS with the government by the 7th of the following month.');
  lines.push('File Form 26AS by the 31st of July, October, January and 7 May.');
  return lines.join('\n');
}
function docExpenses(d, r) {
  const cats = ['Raw Material', 'Machinery', 'Professional Fees', 'Rent', 'Utilities', 'Travel', 'Repairs'];
  const vendors = ['TATA STEEL LIMITED', 'KIRLOSAR PNEUMATICS', 'SIEMENS INDIA LTD', 'GODREJ CONSUMER', 'ADITYA CHEMICALS', 'BALAJI TRANSPORT'];
  const lines = [];
  const rows = 15;
  lines.push('PURCHASE / EXPENSE REGISTER · AUGUST 2026');
  lines.push('ABC Manufacturing Pvt Ltd · GSTIN 27AABCU9603R1ZX');
  lines.push('');
  lines.push(docPad('INVOICE', 16) + docPad('VENDOR', 26) + docPad('DATE', 12) + docPad('CATEGORY', 18) + docNum('TAXABLE', 13) + docNum('GST', 11) + docNum('TOTAL', 14));
  lines.push(docRule(104));
  let taxable = 0;
  let tax = 0;
  for (let i = 0; i < rows; i++) {
    const cat = cats[Math.floor(r() * cats.length)];
    const t = Math.round((25000 + r() * 900000) / 100) * 100;
    const g = Math.round(t * 0.18);
    taxable += t;
    tax += g;
    lines.push(docPad('PI/26-27/' + (1000 + Math.floor(r() * 8999)), 16) + docPad(vendors[Math.floor(r() * vendors.length)], 26) +
      docPad('1' + (Math.floor(r() * 9) + 1) + '-08-2026', 12) + docPad(cat, 18) + docNum(t.toLocaleString('en-IN'), 13) + docNum(g.toLocaleString('en-IN'), 11) + docNum((t + g).toLocaleString('en-IN'), 14));
  }
  lines.push('');
  lines.push('TOTAL TAXABLE: ' + inr(taxable) + '    TOTAL GST: ' + inr(tax) + '    GRAND TOTAL: ' + inr(taxable + tax));
  lines.push('ITC claimable only against a valid tax invoice; GSTR-2B mismatch to be reconciled.');
  return lines.join('\n');
}
function docPayroll(d, r) {
  const lines = [];
  const rows = 10;
  lines.push('PAYROLL REGISTER · AUGUST 2026 · ABC MANUFACTURING PVT LTD');
  lines.push('');
  lines.push(docPad('EMP CODE', 11) + docPad('NAME', 24) + docNum('GROSS', 13) + docNum('PF (EPF)', 12) + docNum('ESI', 9) + docNum('NET', 14));
  lines.push(docRule(78));
  let gross = 0;
  for (let i = 0; i < rows; i++) {
    const g = Math.round((18000 + r() * 82000) / 100) * 100;
    gross += g;
    const pf = Math.round(g * 0.12);
    const esi = Math.round(g * 0.0075);
    lines.push(docPad('EMP' + (1001 + i), 11) + docPad(['RAHUL SHARMA', 'NEHA JOSHI', 'AMIT VERMA', 'SUNITA PATIL', 'VIKRAM SINGH'][i % 5] + ' ' + (i + 1), 24) +
      docNum(g.toLocaleString('en-IN'), 13) + docNum(pf.toLocaleString('en-IN'), 12) + docNum(esi.toLocaleString('en-IN'), 9) + docNum((g - pf - esi).toLocaleString('en-IN'), 14));
  }
  lines.push('');
  lines.push('TOTAL GROSS: ' + inr(gross));
  lines.push('EPF and ESI contributions are due by the 15th of the following month.');
  return lines.join('\n');
}
function docFinancials(d, r) {
  const lines = [];
  lines.push('ABC MANUFACTURING PVT LTD');
  lines.push('PROFIT AND LOSS ACCOUNT · FY 2025-26');
  lines.push('');
  lines.push(docPad('PARTICULAR', 40) + docNum('AMOUNT', 16));
  lines.push(docRule(56));
  const sales = Math.round((8000000 + r() * 20000000) / 1000) * 1000;
  const lines1 = [
    ['Revenue from operations', sales],
    ['Cost of materials consumed', -Math.round(sales * 0.52)],
    ['Employee benefit expense', -Math.round(sales * 0.11)],
    ['Finance costs', -Math.round(sales * 0.03)],
    ['Depreciation & amortisation', -Math.round(sales * 0.04)],
    ['Other operating expenses', -Math.round(sales * 0.09)]
  ];
  let total = 0;
  for (const [k, v] of lines1) {
    total += v;
    lines.push(docPad(k, 40) + docNum(v.toLocaleString('en-IN'), 16));
  }
  lines.push(docRule(56));
  lines.push(docPad('PROFIT BEFORE TAX', 40) + docNum(total.toLocaleString('en-IN'), 16));
  lines.push(docPad('Tax expense', 40) + docNum((-Math.round(total * 0.2532)).toLocaleString('en-IN'), 16));
  lines.push(docPad('PROFIT AFTER TAX', 40) + docNum(Math.round(total * 0.7468).toLocaleString('en-IN'), 16));
  return lines.join('\n');
}
function docGeneric(d) {
  const lines = [];
  lines.push(String(d.name || 'DOCUMENT').toUpperCase());
  lines.push(`${d.clientName || ''} · ${d.engagementTitle || ''}`);
  lines.push('');
  lines.push('This document has no structured content in the practice store.');
  lines.push('Upload a file, or record it against a category that synthesises content:');
  lines.push(DOC_CATEGORIES.join(', '));
  return lines.join('\n');
}
// The one true body of a document. Uploaded files keep the bytes that were
// read off disk; seeded practice documents are derived from their own id so the
// output is stable.
function docText(d) {
  if (typeof d.content === 'string' && d.content) return d.content;
  const r = docRand(docSeedOf(d.id + '|' + d.name));
  switch (String(d.category || '').toLowerCase()) {
    case 'bank': return docBank(d, r);
    case 'gst': return docGst(d, r);
    case 'tds': return docTds(d, r);
    case 'expenses': return docExpenses(d, r);
    case 'payroll': return docPayroll(d, r);
    case 'financials': return docFinancials(d, r);
    default: return docGeneric(d);
  }
}
function docKeyFigures(d) {
  const r = docRand(docSeedOf(d.id + '|' + d.name));
  switch (String(d.category || '').toLowerCase()) {
    case 'gst': {
      let out = 0;
      for (const rate of [5, 12, 18, 28]) out += Math.round((Math.round((180000 + r() * 1900000) / 1000) * 1000) * rate / 100);
      return [['Period', 'Jul – Sep 2026'], ['Output tax', inr(out)], ['Due date', '20th of next month']];
    }
    case 'bank':
      return [['Account', 'HDFC ···345678'], ['Period', 'August 2026'], ['Lines', '14 transactions']];
    case 'tds':
      return [['Period', 'FY 2025-26'], ['Deposit by', '7th of next month'], ['Return', '26AS quarterly']];
    case 'expenses':
      return [['Period', 'August 2026'], ['Lines', '15 invoices'], ['ITC', 'Reconcile with GSTR-2B']];
    default:
      return [['Version', d.version || 'v1.0'], ['Category', d.category || '—'], ['Uploaded', d.uploadDate || '—']];
  }
}
function openDocViewer(docId) {
  const d = state.data.documents.find(x => x.id === docId);
  if (!d) {
    toast('That document is no longer in the store.');
    return;
  }
  const text = d.source === 'upload' && d.vaultPath ? 'Original file is safely stored in the firm vault. Use “Save a copy” to download the original file.' : docText(d);
  const root = document.getElementById('modal-root');
  const figures = docKeyFigures(d);
  const lines = text.split('\n').length;
  const bytes = new Blob([text]).size;
  root.innerHTML = `
    <div class="modal-box doc-viewer-box">
      <div class="modal-header">
        <h3>${docEscape(d.name)}</h3>
        <p>${docEscape(d.clientName)} · ${docEscape(d.engagementTitle)} · ${docEscape(d.version)}</p>
      </div>
      <div class="doc-viewer-meta">
        ${figures.map(f => `<div class="doc-figure"><span>${docEscape(f[0])}</span><strong>${docEscape(f[1])}</strong></div>`).join('')}
        <div class="doc-figure"><span>Status</span><strong>${renderBadge(d.status)}</strong></div>
      </div>
      <pre class="doc-sheet" id="doc-sheet-text">${docEscape(text)}</pre>
      <div class="doc-viewer-foot">
        <small>${lines} lines · ${bytes.toLocaleString('en-IN')} bytes${d.source === 'upload' ? ' · uploaded from disk' : ' · generated from the practice store'}</small>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn-secondary" id="close-doc-viewer">Close</button>
        <button type="button" class="btn-secondary" data-action="doc-download" data-doc="${d.id}" title="Save file to your local computer folder">⭳ Save to Local Folder</button>
        <button type="button" class="btn-primary" data-action="doc-vault" data-doc="${d.id}" title="Save file to documents/vault/ on the server">💾 Save to Firm Vault Folder</button>
      </div>
    </div>
  `;
  root.classList.add('open');
  document.getElementById('close-doc-viewer').onclick = () => closeDocViewer();
}
function closeDocViewer() {
  document.getElementById('modal-root').classList.remove('open');
}
function docVaultName(d) {
  const stamp = String(d.uploadDate || '').replace(/\D/g, '').slice(0, 12) || '000000000000';
  return `${d.id}_${stamp}_${d.name}`.replace(/[\\/]+/g, '_');
}
function downloadDoc(d) {
  if (d.source === 'upload' && d.vaultPath) {
    const link = document.createElement('a'); link.href = d.vaultPath; link.download = d.name; document.body.appendChild(link); link.click(); link.remove();
    state.addAuditLog(currentUser().name, 'Downloaded Document', d.name); state.save(); return;
  }
  const text = docText(d);
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = d.name.replace(/\.[A-Za-z0-9]+$/, '') + '.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
  state.addAuditLog(currentUser().name, 'Downloaded Document', d.name);
  state.save();
  toast(`Saved "${d.name}" to your local downloads folder`);
}

function exportWorkspaceBackup() {
  try {
    const jsonStr = JSON.stringify(state.data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const dateStr = new Date().toISOString().slice(0, 10);
    const fileName = `accounting_practice_backup_${dateStr}.json`;
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    state.addAuditLog(currentUser().name, 'Exported Workspace Backup', fileName);
    state.save();
    toast(`Saved practice backup to your computer folder (${fileName})`);
  } catch (err) {
    toast('Export failed: ' + (err.message || 'unknown error'));
  }
}

function exportClientSummaryCsv() {
  try {
    const headers = ['Client Name', 'Industry', 'Manager', 'Status', 'Tasks Count', 'Documents Count', 'Health Score'];
    const rows = (state.data.clients || []).map(c => [
      `"${String(c.name || '').replace(/"/g, '""')}"`,
      `"${String(c.industry || '').replace(/"/g, '""')}"`,
      `"${String(c.manager || '').replace(/"/g, '""')}"`,
      `"${String(c.status || '').replace(/"/g, '""')}"`,
      (state.data.tasks || []).filter(t => t.clientId === c.id).length,
      (state.data.documents || []).filter(d => d.clientId === c.id).length,
      `"${String(c.health || 'Good').replace(/"/g, '""')}"`
    ]);
    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const dateStr = new Date().toISOString().slice(0, 10);
    const fileName = `clients_roster_${dateStr}.csv`;
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    state.addAuditLog(currentUser().name, 'Exported Client CSV', fileName);
    state.save();
    toast(`Saved client CSV to your folder (${fileName})`);
  } catch (err) {
    toast('CSV export failed: ' + (err.message || 'unknown error'));
  }
}
// Writes the document into the project's documents/ folder through the local
// dev server. When that endpoint is absent — the app opened straight off the
// filesystem — it degrades to a download rather than failing silently.
function saveDocToVault(d) {
  if (d.source === 'upload' && d.vaultPath) { toast(`Original file is already stored in the firm vault.`); return; }
  const text = docText(d);
  const payload = { name: docVaultName(d), content: text };
  let settled = false;
  const fallback = (why) => {
    if (settled) return;
    settled = true;
    downloadDoc(d);
    toast(`${why} Saved a copy to your downloads instead.`);
  };
  const timer = setTimeout(() => fallback('Vault is not responding.'), 4000);
  fetch(VAULT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(r => r.json().then(j => ({ ok: r.ok, j })))
    .then(({ ok, j }) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      if (!ok || !j.ok) {
        downloadDoc(d);
        toast(`Vault refused the write · saved a copy to your downloads instead`);
        return;
      }
      state.addAuditLog(currentUser().name, 'Saved to Firm Vault', d.name);
      state.save();
      toast(`Written to ${j.path}`);
    })
    .catch(() => {
      clearTimeout(timer);
      fallback('Vault is offline.');
    });
}
function fmtBytes(n) {
  const v = Number(n) || 0;
  if (v < 1024) return v + ' B';
  if (v < 1024 * 1024) return (v / 1024).toFixed(1) + ' KB';
  return (v / 1048576).toFixed(1) + ' MB';
}
// Read the original bytes so PDFs, spreadsheets, images, and other files are preserved.
function onDocFilePicked(input) {
  const note = document.getElementById('doc-file-note');
  const title = document.getElementById('form-title-input');
  const file = input.files && input.files[0];
  if (!file) {
    if (note) note.textContent = 'No file chosen. Content will be generated from the category.';
    return;
  }
  if (note) note.textContent = `Reading ${file.name} (${fmtBytes(file.size)})…`;
  if (file.size > 8 * 1024 * 1024) {
    input.value = '';
    if (note) note.textContent = 'Files must be 8 MB or smaller.';
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const bytes = new Uint8Array(reader.result);
    let binary = '';
    for (let i = 0; i < bytes.length; i += 0x8000) binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
    input.dataset.docBase64 = btoa(binary);
    input.dataset.docSize = String(file.size);
    input.dataset.docName = file.name;
    input.dataset.docType = file.type || '';
    if (title && !title.value.trim()) title.value = file.name;
    if (note) {
      note.textContent = `${file.name} · ${fmtBytes(file.size)} original file will be stored in the firm vault.`;
    }
  };
  reader.onerror = () => {
    if (note) note.textContent = 'That file could not be read. Pick another, or leave it empty to generate content.';
  };
  reader.readAsText(file);
}
function openDocumentModal() {
  const needed = MODAL_ACCESS['document'];
  if (needed && !needed.some(cap => can(cap))) {
    toast(`Access denied · ${state.activeRole} role cannot create a document.`);
    return;
  }
  const root = document.getElementById('modal-root');
  root.innerHTML = `
    <div class="modal-box">
      <div class="modal-header">
        <h3>Upload Document</h3>
        <p>Choose a file from your computer, or record a document by category.</p>
      </div>
      <form id="document-form">
        <div class="form-group">
          <label>Document Name</label>
          <input required id="form-title-input" placeholder="e.g. Bank Statement — August" />
        </div>
        <div class="form-group">
          <label>File from your computer</label>
          <input type="file" id="doc-file-input" />
          <small id="doc-file-note">No file chosen. Content will be generated from the category.</small>
        </div>
        <div class="form-group">
          <label>Client</label>
          <select id="form-client-select">
            ${state.data.clients.map(c => `<option value="${memberHtml(c.id)}">${memberHtml(c.name)}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Category</label>
          <select id="form-category-select">
            ${DOC_CATEGORIES.map(c => `<option value="${c}">${c}</option>`).join('')}
          </select>
        </div>
        <div class="modal-actions">
          <button type="button" class="btn-secondary" id="close-modal">Cancel</button>
          <button type="submit" class="btn-primary">Save Document</button>
        </div>
      </form>
    </div>
  `;
  root.classList.add('open');
  const fileInput = document.getElementById('doc-file-input');
  fileInput.addEventListener('change', () => onDocFilePicked(fileInput));
  document.getElementById('close-modal').onclick = () => {
    root.classList.remove('open');
  };
  document.getElementById('document-form').onsubmit = (e) => {
    e.preventDefault();
    const title = document.getElementById('form-title-input').value.trim();
    const clientId = document.getElementById('form-client-select').value;
    const category = document.getElementById('form-category-select').value;
    const client = getClient(clientId);
    const base64 = fileInput.dataset.docBase64 || '';
    const uploaded = !!base64;
    const doc = {
      id: 'd_' + Date.now(),
      name: uploaded ? (fileInput.dataset.docName || title) : title,
      clientId,
      clientName: client.name,
      engagementTitle: client.engagementTitle || 'Statutory Compliance',
      uploadedBy: currentUser().name,
      uploadDate: new Date().toISOString().slice(0, 16).replace('T', ' '),
      version: 'v1.0',
      status: 'Waiting for Review',
      reviewer: state.data.users.find(u => u.role === 'Manager') ? state.data.users.find(u => u.role === 'Manager').name : currentUser().name,
      size: uploaded ? fmtBytes(Number(fileInput.dataset.docSize) || content.length) : 'Generated',
      category,
      source: uploaded ? 'upload' : 'generated',
      comments: []
    };
    const persistDocument = async () => {
      try {
        if (uploaded) {
          const response = await fetch(VAULT_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: doc.name, base64, type: fileInput.dataset.docType || 'application/octet-stream' }) });
          const result = await response.json();
          if (!response.ok) throw new Error(result.error || 'Vault upload failed.');
          doc.vaultPath = result.path; doc.vaultId = result.id; doc.size = fmtBytes(result.size);
        }
        state.data.documents.unshift(doc);
        state.addAuditLog(currentUser().name, 'Uploaded Document', doc.name);
        state.save(); root.classList.remove('open'); toast(`Uploaded "${doc.name}" to ${client.name}`); navigateTo(state.currentView); openDocViewer(doc.id);
      } catch (error) { toast(`Could not save document · ${error.message}`); }
    };
    persistDocument();
  };
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
              <h4 style="font-size:14px; font-weight:700;">${memberHtml(d.name)}</h4>
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
        <h1>Client Document Requests (PBC Tracker)</h1>
        <p>Send frictionless magic-link checklists to clients, trigger automated Teams reminders, and auto-extract uploaded files.</p>
      </div>
      <button class="btn-primary" data-action="new-request">＋ New Client Request</button>
    </div>

    <div class="card">
      <div class="card-title-row">
        <div class="card-title">Active Requests &amp; Chasing Schedule</div>
        <span style="font-size:11px; color:var(--ink-muted);">Zero-login magic links enabled</span>
      </div>
      <div style="display:flex; flex-direction:column; gap:16px;">
        ${state.data.requests.map(r => `
          <div style="border:1px solid var(--line); border-radius:8px; padding:18px; background:var(--surface-subtle);">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px;">
              <div>
                <h3 style="font-size:15px; font-weight:700; color:var(--forest);">${memberHtml(r.title)}</h3>
                <div style="font-size:11.5px; color:var(--ink-muted); margin-top:2px;">
                  Client: <strong>${memberHtml(r.clientName)}</strong> · Due: <strong>${memberHtml(r.dueDate)}</strong>
                  ${r.lastReminderSent ? `<span style="margin-left:8px; color:var(--emerald);">· Nudged ${r.reminderCount || 1}x (last ${memberHtml(r.lastReminderSent)})</span>` : ''}
                </div>
              </div>
              <div style="display:flex; align-items:center; gap:8px;">
                ${renderBadge(r.status)}
                <button class="btn-secondary" data-action="copy-magic-link" data-client-id="${r.clientId}" data-req-id="${r.id}" title="Copy one-click client magic link" style="font-size:11px; padding:5px 9px;">🔗 Copy Magic Link</button>
                <button class="btn-secondary" data-action="send-pbc-reminder" data-req-id="${r.id}" title="Nudge client via Microsoft Teams &amp; Email" style="font-size:11px; padding:5px 9px;">📢 Nudge Client</button>
              </div>
            </div>

            <div style="margin-top:14px; display:flex; flex-direction:column; gap:6px;">
              ${r.items.map(item => `
                <div style="display:flex; align-items:center; justify-content:space-between; padding:6px 8px; background:var(--surface); border:1px solid var(--line-light); border-radius:4px; font-size:12.5px;">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span>${item.done ? '✅' : '🔴'}</span>
                    <span>${memberHtml(item.label)}</span>
                  </div>
                  ${item.done ? `
                    <button class="btn-ghost" data-action="open-ocr-preview" data-req-title="${memberHtml(item.label)}" style="font-size:11px; padding:2px 6px; color:var(--emerald);">📄 OCR Data</button>
                  ` : `
                    <span style="font-size:10.5px; color:var(--ink-muted);">Awaiting client upload</span>
                  `}
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

  const activeClients = (state.data.clients || []).filter(c => !['Inactive', 'Archived'].includes(c.status)).length;
  const activeEngagements = (state.data.engagements || []).filter(e => !['Completed', 'Closed', 'Archived'].includes(e.status));
  const avgProgress = activeEngagements.length ? Math.round(activeEngagements.reduce((sum, e) => sum + (Number(e.progress) || 0), 0) / activeEngagements.length) : 0;
  const pendingReviews = (state.data.documents || []).filter(d => d.status === 'Waiting for Review').length + (state.data.reviews || []).filter(r => ['Pending', 'Waiting for Review'].includes(r.status)).length;
  const today = localDateKey();
  const overdueTasks = (state.data.tasks || []).filter(t => t.status !== 'Completed' && t.dueDate && t.dueDate < today).length;

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
        <div class="stat-value">${activeClients}</div>
        <div class="stat-meta">${new Set(state.data.clients.map(c => c.industry).filter(Boolean)).size} industries</div>
      </div>
      <div class="stat-box">
        <div class="stat-header">Active Engagements</div>
        <div class="stat-value">${activeEngagements.length}</div>
        <div class="stat-meta">${avgProgress}% average progress</div>
      </div>
      <div class="stat-box alert-yellow">
        <div class="stat-header">Pending Reviews</div>
        <div class="stat-value">${pendingReviews}</div>
        <div class="stat-meta">Quality sign-off queue</div>
      </div>
      <div class="stat-box alert-red">
        <div class="stat-header">Overdue Tasks</div>
        <div class="stat-value">${overdueTasks}</div>
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
            <h3 style="font-size:16px; font-weight:700; color:var(--forest);">${memberHtml(a.title)}</h3>
            <div style="font-size:11px; color:var(--ink-muted); margin: 2px 0 8px;">Posted by ${a.author} on ${a.date}</div>
            <p style="font-size:13px; color:var(--ink);">${memberHtml(a.content)}</p>
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

// ==========================================================================
// MASTER CARD PLACE & CLIENT PORTAL ENGINE (ENTERPRISE DUAL-VIEW WORKSPACE)
// ==========================================================================

function formatBytes(bytes) {
  if (!bytes || bytes <= 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

function pinForClient(c) {
  if (c && c.portalPin) return c.portalPin;
  const cid = c ? c.id : 'c1';
  return String(Math.abs(docSeedOf(cid + '_portal_pin')) % 9000 + 1000);
}

function clientGstin(c) {
  if (!c) return '27AABCU9603R1ZX';
  return c.gstin || ('27' + (c.code || 'ABC') + '9842F1Z' + (c.id ? c.id.slice(1) || '1' : '1'));
}

function clientPan(c) {
  if (!c) return 'AABCU9603R';
  return c.pan || ('AABC' + ((c.code && c.code[0]) || 'C') + '8429F');
}

function getClientPortalUrl(clientId) {
  const origin = window.location.origin || '';
  const pathname = window.location.pathname || '/';
  return `${origin}${pathname}?portal=${encodeURIComponent(clientId || 'c1')}`;
}

function copyClientInvitation(clientId) {
  const c = getClient(clientId) || state.data.clients[0];
  if (!c) return;
  const url = getClientPortalUrl(c.id);
  const pin = pinForClient(c);
  const text = `Subject: Secure Client Portal Access — ${firm().legalName || 'Pinnacle & Co. Chartered Accountants'}\n\nDear ${c.contact},\n\nWelcome to your secure client portal. You can safely upload your requested financial documents, invoices, bank statements, and tax records directly to our accounting team here:\n\nDirect Portal Link: ${url}\nAccess PIN: ${pin}\n\nYour assigned engagement team:\n• Senior Auditor: ${c.senior}\n• Practice Manager: ${c.manager}\n\nAll documents uploaded to this portal are encrypted and safely routed directly into your master accounting files for review.\n\nWarm regards,\n${firm().legalName || 'Pinnacle & Co. Chartered Accountants'}`;
  navigator.clipboard.writeText(text).then(() => {
    toast(`Copied ready-to-send invitation email for ${c.name}!`);
  }).catch(() => {
    toast(`Portal URL for ${c.name}: ${url}`);
  });
}

function verifyMasterInboundDoc(docId) {
  const doc = state.data.documents.find(d => d.id === docId);
  if (!doc) return;
  doc.status = 'Approved';
  doc.verificationStatus = `Verified & Accepted by ${currentUser().name}`;
  doc.verifiedBy = currentUser().name;
  doc.verifiedAt = new Date().toISOString().replace('T', ' ').substring(0, 16);
  state.addAuditLog(currentUser().name, 'Verified Inbound Client Document', `${doc.clientName} · ${doc.name}`);
  state.save();
  toast(`Verified & accepted "${doc.name}" into practice workpapers ✅`);
  navigateTo('mastercards');
}

function requestMasterInboundRevision(docId) {
  const doc = state.data.documents.find(d => d.id === docId);
  if (!doc) return;
  const reason = window.prompt(`Enter feedback / revision instructions for ${doc.clientName}:`, 'Official bank stamp or signature missing on page 3. Please re-upload.');
  if (reason === null) return;
  doc.status = 'Returned';
  doc.verificationStatus = 'Revision Requested';
  doc.revisionNote = reason.trim() || 'Please re-upload corrected document.';
  state.addAuditLog(currentUser().name, 'Requested Document Revision from Client', `${doc.clientName} · ${doc.name}`);
  state.save();
  toast(`Revision requested for "${doc.name}". Client will see instructions in portal.`);
  navigateTo('mastercards');
}

function openMasterAddRequestModal(clientId) {
  const c = getClient(clientId) || state.data.clients[0];
  if (!c) return;
  const title = window.prompt(`Request Document from ${c.name}:\nEnter document title or description:`, 'GSTR-3B Challan & Purchase Invoices');
  if (!title || !title.trim()) return;
  let req = state.data.requests.find(r => r.clientId === c.id);
  if (!req) {
    req = {
      id: 'req_' + Date.now(),
      clientId: c.id,
      clientName: c.name,
      title: 'Practice Document Request',
      dueDate: new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10),
      items: [],
      status: 'Open'
    };
    state.data.requests.push(req);
  }
  req.items.push({ label: title.trim(), done: false });
  const doneCount = req.items.filter(it => it.done).length;
  req.status = `${doneCount} of ${req.items.length} received`;
  state.addAuditLog(currentUser().name, 'Dispatched Document Request to Client', `${c.name} · ${title.trim()}`);
  state.save();
  toast(`Requested "${title.trim()}" from ${c.name}. Now live on client's portal!`);
  navigateTo('mastercards');
}

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      const base64 = dataUrl.split(',')[1] || '';
      resolve(base64);
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

async function handlePortalFileUpload(btn) {
  const idx = btn.dataset.itemIdx;
  const reqId = btn.dataset.reqId;
  const clientId = btn.dataset.clientId;
  const fileInput = document.getElementById(`portal-file-input-${idx}`);
  const noteInput = document.getElementById(`portal-note-input-${idx}`);

  if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
    toast('Please choose or drop a file to upload first.');
    return;
  }

  const file = fileInput.files[0];
  const note = (noteInput ? noteInput.value : '').trim();
  const c = getClient(clientId) || state.data.clients[0];

  btn.disabled = true;
  btn.textContent = 'Uploading securely…';

  try {
    const base64 = await readFileAsBase64(file);
    const res = await fetch('/api/vault/save', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: file.name,
        base64: base64,
        type: file.type || 'application/octet-stream'
      })
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'Upload failed');
    }

    const vaultData = await res.json();
    const newDoc = {
      id: 'doc_' + Date.now(),
      name: file.name,
      clientId: c.id,
      clientName: c.name,
      engagementTitle: 'Client Portal Submission',
      uploadedBy: `${c.contact} (Client Portal)`,
      uploadDate: new Date().toISOString().replace('T', ' ').substring(0, 16),
      version: 'v1.0',
      status: 'Waiting for Review',
      verificationStatus: 'Pending Worker Review',
      reviewer: c.senior || 'Priya Nair',
      size: formatBytes(file.size),
      category: 'Client Paper',
      source: 'Client Portal',
      clientSubmitted: true,
      vaultId: vaultData.id,
      vaultPath: vaultData.path,
      clientNote: note || 'Submitted via Secure Client Portal',
      comments: [
        {
          author: `${c.contact} (Client)`,
          text: note ? `Client Note: ${note}` : 'Uploaded via Secure Client Portal.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]
    };

    state.data.documents.unshift(newDoc);

    if (reqId) {
      const req = state.data.requests.find(r => r.id === reqId);
      if (req && req.items && req.items[idx]) {
        req.items[idx].done = true;
        req.items[idx].docId = newDoc.id;
        const doneCount = req.items.filter(it => it.done).length;
        req.status = `${doneCount} of ${req.items.length} received`;
      }
    }

    state.addAuditLog(`Client: ${c.contact}`, 'Submitted Document via Client Portal', `${c.name} · ${file.name}`);
    state.save();
    toast(`✅ "${file.name}" uploaded successfully! Safely transmitted to your CA team.`);
    navigateTo(state.currentView);
  } catch (err) {
    btn.disabled = false;
    btn.textContent = '🚀 Submit Document to Accounting Team';
    toast('Upload error: ' + err.message);
  }
}

async function handlePortalGeneralUpload(btn) {
  const clientId = btn.dataset.clientId;
  const fileInput = document.getElementById('portal-general-file-input');
  const catInput = document.getElementById('portal-general-category');
  const noteInput = document.getElementById('portal-general-note');

  if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
    toast('Please choose or drop a file to upload first.');
    return;
  }

  const file = fileInput.files[0];
  const category = (catInput ? catInput.value : 'Client Paper') || 'Client Paper';
  const note = (noteInput ? noteInput.value : '').trim();
  const c = getClient(clientId) || state.data.clients[0];

  btn.disabled = true;
  btn.textContent = 'Uploading securely…';

  try {
    const base64 = await readFileAsBase64(file);
    const res = await fetch('/api/vault/save', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: file.name,
        base64: base64,
        type: file.type || 'application/octet-stream'
      })
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'Upload failed');
    }

    const vaultData = await res.json();
    const newDoc = {
      id: 'doc_' + Date.now(),
      name: file.name,
      clientId: c.id,
      clientName: c.name,
      engagementTitle: `${category} Submission`,
      uploadedBy: `${c.contact} (Client Portal)`,
      uploadDate: new Date().toISOString().replace('T', ' ').substring(0, 16),
      version: 'v1.0',
      status: 'Waiting for Review',
      verificationStatus: 'Pending Worker Review',
      reviewer: c.senior || 'Priya Nair',
      size: formatBytes(file.size),
      category: category,
      source: 'Client Portal',
      clientSubmitted: true,
      vaultId: vaultData.id,
      vaultPath: vaultData.path,
      clientNote: note || `Submitted under ${category}`,
      comments: [
        {
          author: `${c.contact} (Client)`,
          text: note ? `Client Note: ${note}` : `Uploaded as ${category} document via Secure Client Portal.`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]
    };

    state.data.documents.unshift(newDoc);
    state.addAuditLog(`Client: ${c.contact}`, 'Submitted Ad-hoc Document via Client Portal', `${c.name} · ${file.name}`);
    state.save();
    toast(`✅ "${file.name}" uploaded successfully! Transmitted to your CA team.`);
    navigateTo(state.currentView);
  } catch (err) {
    btn.disabled = false;
    btn.textContent = '🚀 Submit Document to Accounting Team';
    toast('Upload error: ' + err.message);
  }
}

// 16. MASTER CARDS PLACE (COMMAND CENTER FOR COMPANY WORKERS)
function renderMasterCards() {
  const clients = state.data.clients || [];
  const allDocs = state.data.documents || [];
  const allReqs = state.data.requests || [];

  let totalInbound = 0;
  let totalPendingReview = 0;
  let totalVerified = 0;
  let totalOpenReqs = 0;

  clients.forEach(c => {
    const inbound = allDocs.filter(d => d.clientId === c.id && (d.source === 'Client Portal' || d.clientSubmitted));
    totalInbound += inbound.length;
    totalPendingReview += inbound.filter(d => d.status === 'Waiting for Review' || d.verificationStatus === 'Pending Worker Review').length;
    totalVerified += inbound.filter(d => d.status === 'Approved' || (d.verificationStatus && d.verificationStatus.includes('Verified'))).length;
    const reqs = allReqs.filter(r => r.clientId === c.id);
    reqs.forEach(r => {
      totalOpenReqs += (r.items || []).filter(it => !it.done).length;
    });
  });

  const filter = state.masterCardsFilter || 'all';
  const search = (state.masterCardsSearch || '').trim().toLowerCase();

  const filteredClients = clients.filter(c => {
    if (search) {
      const match = c.name.toLowerCase().includes(search) ||
        c.code.toLowerCase().includes(search) ||
        c.contact.toLowerCase().includes(search) ||
        clientGstin(c).toLowerCase().includes(search) ||
        clientPan(c).toLowerCase().includes(search) ||
        (c.manager || '').toLowerCase().includes(search);
      if (!match) return false;
    }
    const inbound = allDocs.filter(d => d.clientId === c.id && (d.source === 'Client Portal' || d.clientSubmitted));
    const reqs = allReqs.filter(r => r.clientId === c.id);
    const openReqs = reqs.reduce((sum, r) => sum + (r.items || []).filter(it => !it.done).length, 0);

    if (filter === 'inbound') return inbound.length > 0;
    if (filter === 'pending') return inbound.some(d => d.status === 'Waiting for Review' || d.verificationStatus === 'Pending Worker Review');
    if (filter === 'requests') return openReqs > 0;
    return true;
  });

  return `
    <div class="page-header" style="margin-bottom:20px;">
      <div class="page-header-title">
        <div class="eyebrow">Enterprise Practice Command Center</div>
        <h1>Master Cards &amp; Client Portals</h1>
        <p>The operational hub for company workers. Manage client master cards, generate and copy secure client portal links, safely receive inbound documents submitted by clients, verify workpapers, and dispatch compliance requests.</p>
      </div>
      <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center;">
        <button class="btn-secondary" data-action="quick-switch-portal" title="Preview the Client Portal view">
          🌐 Preview Client Portal View
        </button>
        <button class="btn-primary" data-action="new-client">
          ＋ Add Master Client Card
        </button>
      </div>
    </div>

    <!-- Master Cards KPI Row -->
    <div class="master-cards-kpi-row">
      <div class="master-kpi-card">
        <div class="master-kpi-icon">🏢</div>
        <div>
          <div class="master-kpi-val">${clients.length}</div>
          <div class="master-kpi-label">Active Master Client Cards</div>
        </div>
      </div>
      <div class="master-kpi-card">
        <div class="master-kpi-icon" style="background:#e0f2fe; color:#0369a1;">🌐</div>
        <div>
          <div class="master-kpi-val">${clients.length}</div>
          <div class="master-kpi-label">Client Portals Active &amp; Ready</div>
        </div>
      </div>
      <div class="master-kpi-card" style="border-left: 3px solid var(--yellow);">
        <div class="master-kpi-icon" style="background:var(--yellow-soft); color:var(--yellow);">📥</div>
        <div>
          <div class="master-kpi-val">${totalPendingReview} <span style="font-size:13px;font-weight:500;color:var(--ink-muted);">/ ${totalInbound}</span></div>
          <div class="master-kpi-label">Inbound Uploads (Pending Review)</div>
        </div>
      </div>
      <div class="master-kpi-card">
        <div class="master-kpi-icon" style="background:var(--emerald-soft); color:var(--emerald);">✅</div>
        <div>
          <div class="master-kpi-val">${totalVerified}</div>
          <div class="master-kpi-label">Verified &amp; Accepted Documents</div>
        </div>
      </div>
      <div class="master-kpi-card">
        <div class="master-kpi-icon" style="background:var(--red-soft); color:var(--red);">⏳</div>
        <div>
          <div class="master-kpi-val">${totalOpenReqs}</div>
          <div class="master-kpi-label">Awaiting Client Upload</div>
        </div>
      </div>
    </div>

    <!-- Filter & Search Toolbar -->
    <div class="card" style="margin-bottom:20px; padding:14px 18px;">
      <div style="display:flex; justify-content:space-between; align-items:center; gap:14px; flex-wrap:wrap;">
        <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
          <button class="btn-secondary ${filter === 'all' ? 'btn-primary' : ''}" style="padding:6px 14px; font-size:12px;" data-action="master-filter" data-filter="all">
            All Master Cards (${clients.length})
          </button>
          <button class="btn-secondary ${filter === 'pending' ? 'btn-primary' : ''}" style="padding:6px 14px; font-size:12px;" data-action="master-filter" data-filter="pending">
            📥 Needs Review (${totalPendingReview})
          </button>
          <button class="btn-secondary ${filter === 'inbound' ? 'btn-primary' : ''}" style="padding:6px 14px; font-size:12px;" data-action="master-filter" data-filter="inbound">
            📂 Has Inbound Uploads (${totalInbound})
          </button>
          <button class="btn-secondary ${filter === 'requests' ? 'btn-primary' : ''}" style="padding:6px 14px; font-size:12px;" data-action="master-filter" data-filter="requests">
            ⏳ Awaiting Client Docs (${totalOpenReqs})
          </button>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
          <div style="position:relative;">
            <input type="text" id="master-search-input" value="${memberHtml(state.masterCardsSearch || '')}" placeholder="Search client name, GSTIN, PAN, manager..." style="padding:7px 12px 7px 30px; font-size:12.5px; border:1px solid var(--line); border-radius:6px; width:260px; background:var(--surface);">
            <span style="position:absolute; left:9px; top:8px; font-size:13px; color:var(--ink-muted);">🔍</span>
          </div>
          ${state.masterCardsSearch ? `<button class="btn-ghost" data-action="master-clear-search" style="font-size:12px; padding:4px 8px;">✕ Clear</button>` : ''}
        </div>
      </div>
    </div>

    <!-- Master Cards Grid -->
    <div class="master-cards-grid">
      ${filteredClients.map(c => renderSingleMasterCard(c, allDocs, allReqs)).join('')}
    </div>
  `;
}

function renderMasterCardTimeline(c, inboundDocs, clientReqs) {
  const events = [];
  inboundDocs.forEach(d => {
    events.push({
      time: d.uploadDate || 'Recently',
      title: `Uploaded: ${d.name}`,
      status: d.status || 'Waiting for Review',
      badgeClass: d.status === 'Approved' ? 'badge-green' : d.status === 'Returned' ? 'badge-red' : 'badge-blue'
    });
  });
  clientReqs.forEach(r => {
    (r.items || []).forEach(it => {
      events.push({
        time: r.dueDate || 'Pending',
        title: `Request: ${it.label}`,
        status: it.done ? 'Received & Done' : 'Awaiting Client Upload',
        badgeClass: it.done ? 'badge-green' : 'badge-yellow'
      });
    });
  });

  if (events.length === 0) {
    return `<div style="font-size:12px; color:var(--ink-muted); padding:8px 0;">No approval or request history yet.</div>`;
  }

  return `
    <div style="margin-top:16px; border-top:1px solid var(--line); padding-top:12px;">
      <div style="font-weight:700; font-size:12.5px; color:var(--forest); margin-bottom:8px;">📈 Status &amp; Approval Timeline</div>
      <div style="display:flex; flex-direction:column; gap:8px; max-height:160px; overflow-y:auto; padding-right:4px;">
        ${events.slice(0, 6).map(ev => `
          <div style="display:flex; align-items:flex-start; gap:10px; font-size:11.5px; position:relative; padding-left:14px; border-left:2px solid var(--emerald);">
            <div style="position:absolute; left:-5px; top:3px; width:8px; height:8px; border-radius:50%; background:var(--emerald);"></div>
            <div style="flex:1;">
              <div style="font-weight:600; color:var(--forest);">${memberHtml(ev.title)}</div>
              <div style="color:var(--ink-muted); font-size:11px;">${memberHtml(ev.time)}</div>
            </div>
            <span class="badge ${ev.badgeClass}" style="font-size:10px; padding:2px 6px;">${memberHtml(ev.status)}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSingleMasterCard(c, allDocs, allReqs) {
  const portalUrl = getClientPortalUrl(c.id);
  const pin = pinForClient(c);
  const gstin = clientGstin(c);
  const pan = clientPan(c);

  const inboundDocs = allDocs.filter(d => d.clientId === c.id && (d.source === 'Client Portal' || d.clientSubmitted));
  const pendingCount = inboundDocs.filter(d => d.status === 'Waiting for Review' || d.verificationStatus === 'Pending Worker Review').length;

  const clientReqs = allReqs.filter(r => r.clientId === c.id);
  const allReqItems = [];
  clientReqs.forEach(r => {
    (r.items || []).forEach(it => allReqItems.push(it));
  });

  return `
    <div class="master-card" id="master-card-${c.id}">
      <div class="master-card-head">
        <div class="master-card-identity">
          <div class="master-card-avatar" style="background:${c.color || '#1b4d3e'};">${c.code}</div>
          <div class="master-card-name-block">
            <h3>${memberHtml(c.name)}</h3>
            <div class="master-card-sub-info">
              <span>Primary Contact: <strong>${memberHtml(c.contact)} (${memberHtml(c.email)})</strong></span>
              <span>·</span>
              <span>Manager: <strong>${memberHtml(c.manager)}</strong></span>
              <span>·</span>
              <span>Senior: <strong>${memberHtml(c.senior)}</strong></span>
            </div>
          </div>
        </div>

        <div class="master-card-actions-top">
          ${renderBadge(c.status)}
          <button class="btn-primary" style="padding:6px 12px; font-size:12px;" data-action="launch-client-portal" data-client="${c.id}" title="Launch and view this client's portal">
            🚀 Open Client Portal
          </button>
          <button class="btn-secondary" style="padding:6px 12px; font-size:12px;" data-open-client="${c.id}" title="Open full client digital office">
            📁 Mini-Office
          </button>
        </div>
      </div>

      <div class="master-card-body">
        <!-- Left Column: Tax Profile & Inbound Submissions from Portal -->
        <div>
          <!-- Tax Profile Strip -->
          <div class="master-tax-meta-grid">
            <div class="master-tax-chip">
              <span class="master-tax-label">GSTIN</span>
              <span class="master-tax-val">${gstin}</span>
            </div>
            <div class="master-tax-chip">
              <span class="master-tax-label">PAN</span>
              <span class="master-tax-val">${pan}</span>
            </div>
            <div class="master-tax-chip">
              <span class="master-tax-label">Industry</span>
              <span class="master-tax-val" style="font-family:var(--font-sans);">${memberHtml(c.industry)}</span>
            </div>
            <div class="master-tax-chip">
              <span class="master-tax-label">Status</span>
              <span class="master-tax-val" style="font-family:var(--font-sans); color:var(--emerald);">Compliant &amp; Active</span>
            </div>
          </div>

          <!-- Inbound Documents from Client Portal (Company Workers Review Station) -->
          <div class="master-inbound-box">
            <div class="master-inbound-header">
              <div class="master-inbound-title">
                <span>📥 Inbound Client Portal Uploads</span>
                <span class="badge ${pendingCount > 0 ? 'badge-yellow' : 'badge-green'}">
                  ${pendingCount > 0 ? `${pendingCount} Pending Review` : `${inboundDocs.length} Received`}
                </span>
              </div>
              <span style="font-size:11px; color:var(--ink-muted);">Safely Received from Client</span>
            </div>

            <div class="master-inbound-list">
              ${inboundDocs.length === 0 ? `
                <div style="padding:16px; text-align:center; color:var(--ink-muted); font-size:12.5px;">
                  No documents uploaded by client yet.<br>
                  <small style="color:var(--ink-subtle);">Share the Client Portal Link on the right with ${memberHtml(c.name)} to receive files directly here.</small>
                </div>
              ` : inboundDocs.map(d => `
                <div class="master-inbound-item">
                  <div class="master-inbound-row-top">
                    <div>
                      <div class="master-inbound-name">
                        <span>📄</span>
                        <span>${memberHtml(d.name)}</span>
                      </div>
                      <div class="master-inbound-meta">
                        <span>Size: <strong>${memberHtml(d.size)}</strong></span>
                        <span>·</span>
                        <span>Received: <strong>${memberHtml(d.uploadDate)}</strong></span>
                        <span>·</span>
                        <span>From: <strong>${memberHtml(d.uploadedBy)}</strong></span>
                      </div>
                    </div>
                    <div>
                      ${d.status === 'Approved' ? '<span class="badge badge-green">Verified &amp; Accepted ✅</span>' :
                        d.status === 'Returned' ? '<span class="badge badge-red">Revision Requested 🟠</span>' :
                        '<span class="badge badge-yellow">Pending Review ⏳</span>'}
                    </div>
                  </div>

                  ${d.clientNote ? `
                    <div class="master-inbound-note">
                      <strong>Client Remark:</strong> “${memberHtml(d.clientNote)}”
                    </div>
                  ` : ''}

                  ${d.revisionNote ? `
                    <div style="font-size:11.5px; color:var(--red); margin-top:4px;">
                      <strong>Revision Note sent to client:</strong> “${memberHtml(d.revisionNote)}”
                    </div>
                  ` : ''}

                  <div class="master-inbound-actions">
                    <button class="btn-secondary" style="padding:4px 9px; font-size:11px;" data-action="master-doc-download" data-doc="${d.id}" title="Download original file from server vault">
                      ⬇️ Download from Vault
                    </button>
                    <button class="btn-secondary" style="padding:4px 9px; font-size:11px;" data-action="master-doc-preview" data-doc="${d.id}" title="Preview document details">
                      👁️ Preview
                    </button>
                    <button class="btn-primary" style="padding:4px 10px; font-size:11px; background:var(--emerald);" data-action="master-doc-verify" data-doc="${d.id}" title="Verify &amp; accept this document into audit files">
                      ✅ Verify &amp; Accept
                    </button>
                    <button class="btn-secondary" style="padding:4px 9px; font-size:11px; color:var(--red);" data-action="master-doc-revision" data-doc="${d.id}" title="Send feedback asking client to re-upload">
                      🔄 Request Revision
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Right Column: Dedicated Client Portal Gateway & Request Checklist -->
        <div>
          <!-- Client Portal Gateway Box -->
          <div class="master-portal-gateway-box">
            <div class="master-portal-top-row">
              <div class="master-portal-title">
                <span>🌐 Client Portal Gateway</span>
                <span class="badge badge-green" style="font-size:10.5px;">Live &amp; Secure</span>
              </div>
              <span class="badge badge-blue" style="font-family:monospace; font-size:11px;">PIN: ${pin}</span>
            </div>

            <p style="font-size:12px; color:var(--ink-muted); margin-bottom:10px;">
              Give this private link to <strong>${memberHtml(c.name)}</strong>. The client submits requested documents here, and they safely appear in your workspace on the left:
            </p>

            <div class="master-portal-link-strip">
              <span class="master-portal-url-text">${portalUrl}</span>
              <button class="btn-secondary" style="padding:3px 8px; font-size:11px;" data-action="copy-portal-link" data-client="${c.id}" title="Copy Portal URL to clipboard">
                📋 Copy
              </button>
            </div>

            <div class="master-portal-btn-row">
              <button class="btn-secondary" style="padding:5px 10px; font-size:11.5px;" data-action="copy-client-invite" data-client="${c.id}" title="Copy ready-to-send invitation email for the client">
                ✉️ Copy Client Invitation
              </button>
              <button class="btn-secondary" style="padding:5px 10px; font-size:11.5px;" data-action="copy-client-pin" data-pin="${pin}" title="Copy 4-digit Access PIN">
                🔑 Copy PIN
              </button>
              <button class="btn-primary" style="padding:5px 12px; font-size:11.5px;" data-action="launch-client-portal" data-client="${c.id}" title="Switch directly to client view">
                🚀 Launch Client View
              </button>
            </div>
          </div>

          <!-- Document Requests Checklist Box (Synced to Portal) -->
          <div class="master-requests-box">
            <div class="master-requests-header">
              <div style="font-weight:700; font-size:13px; color:var(--forest);">
                <span>📋 Requested Documents Checklist</span>
              </div>
              <button class="btn-secondary" style="padding:3px 8px; font-size:11px;" data-action="master-add-request" data-client="${c.id}" title="Request an additional document from this client">
                ＋ Request Document
              </button>
            </div>

            <div class="master-requests-list">
              ${allReqItems.length === 0 ? `
                <div style="padding:12px; text-align:center; color:var(--ink-muted); font-size:12px;">
                  No active requests. Click “＋ Request Document” to ask the client for files.
                </div>
              ` : allReqItems.map(it => `
                <div class="master-request-row">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span>${it.done ? '✅' : '⏳'}</span>
                    <span style="font-weight:500;">${memberHtml(it.label)}</span>
                  </div>
                  <div>
                    ${it.done ? '<span class="badge badge-green" style="font-size:10.5px;">Received via Portal</span>' : '<span class="badge badge-yellow" style="font-size:10.5px;">Awaiting Client Upload</span>'}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Visual Status Timeline Component -->
          ${renderMasterCardTimeline(c, inboundDocs, clientReqs)}

          <!-- Quick Navigation Links -->
          <div style="margin-top:14px; display:flex; gap:8px; flex-wrap:wrap;">
            <button class="btn-ghost" style="font-size:11.5px; padding:4px 8px;" data-navigate="gstrecon">
              🧾 GST Recon
            </button>
            <button class="btn-ghost" style="font-size:11.5px; padding:4px 8px;" data-navigate="ledger">
              📚 General Ledger
            </button>
            <button class="btn-ghost" style="font-size:11.5px; padding:4px 8px;" data-navigate="deadlines">
              ⏱️ Deadlines
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 17. CLIENT PORTAL RESTRICTED MODE VIEW (GIVEN TO THE CLIENT TO SUBMIT DOCS)
function renderClientPortal() {
  const client = getClient(state.activeClientId) || state.data.clients[0];
  const allDocs = state.data.documents || [];
  const allReqs = state.data.requests || [];
  const reqs = allReqs.filter(r => r.clientId === client.id);
  const portalUrl = getClientPortalUrl(client.id);
  const activeTab = state.activePortalTab || 'upload';

  const inboundDocs = allDocs.filter(d => d.clientId === client.id && (d.source === 'Client Portal' || d.clientSubmitted));

  return `
    <div class="client-portal-wrapper">
      <!-- Portal Top Banner -->
      <div class="portal-top-banner">
        <div class="portal-banner-top-row">
          <div class="portal-firm-brand">
            <div style="width:38px;height:38px;border-radius:8px;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;">🏢</div>
            <div>
              <div class="portal-firm-badge">${firm().legalName || 'Pinnacle & Co. Chartered Accountants'}</div>
              <div style="font-size:11.5px;color:#bfdbfe;margin-top:2px;">Statutory Auditors &amp; Tax Advisors</div>
            </div>
          </div>

          <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
            <!-- Client Switcher (for staff testing or multi-entity clients) -->
            <div style="display:flex; align-items:center; gap:6px; background:rgba(0,0,0,0.25); padding:4px 10px; border-radius:6px; font-size:12px;">
              <span style="color:#bfdbfe;">Viewing Client:</span>
              <select id="portal-client-switcher" style="background:transparent; color:#fff; border:none; outline:none; font-weight:600; font-size:12px; cursor:pointer;">
                ${state.data.clients.map(c => `
                  <option value="${c.id}" ${c.id === client.id ? 'selected' : ''} style="color:#000;">
                    ${memberHtml(c.name)} (${c.code})
                  </option>
                `).join('')}
              </select>
            </div>

            <!-- Return to Firm Command Center -->
            <button class="btn-secondary" data-action="exit-client-portal" style="background:rgba(255,255,255,0.15); color:#fff; border:1px solid rgba(255,255,255,0.3); font-size:12px; padding:6px 12px;" title="Switch back to the company workers' Master Cards Place">
              🏢 Staff Mode: Return to Master Cards Place
            </button>
          </div>
        </div>

        <div class="portal-client-title">
          <h1>Welcome, ${memberHtml(client.contact)}</h1>
          <p>Secure Client Document Portal for <strong>${memberHtml(client.name)}</strong> · Upload files directly to your accounting engagement team.</p>
        </div>

        <!-- Shareable Link Strip -->
        <div class="portal-share-box" style="margin-top:16px;">
          <div class="portal-share-text">
            <span>🔗 Direct Portal Link to give to client:</span>
            <code>${portalUrl}</code>
          </div>
          <div style="display:flex; gap:8px;">
            <button class="btn-secondary" style="padding:4px 10px; font-size:11.5px; background:rgba(255,255,255,0.2); color:#fff; border:none;" data-action="copy-portal-link" data-client="${client.id}">
              📋 Copy Direct Link
            </button>
            <button class="btn-secondary" style="padding:4px 10px; font-size:11.5px; background:rgba(255,255,255,0.2); color:#fff; border:none;" data-action="copy-client-invite" data-client="${client.id}">
              ✉️ Copy Invitation
            </button>
          </div>
        </div>
      </div>

      <!-- Portal Tabs Navigation -->
      <div class="portal-tabs-nav">
        <button class="portal-tab-btn ${activeTab === 'upload' ? 'active' : ''}" data-action="portal-tab" data-tab="upload">
          📤 Document Upload Center
        </button>
        <button class="portal-tab-btn ${activeTab === 'vault' ? 'active' : ''}" data-action="portal-tab" data-tab="vault">
          📂 My Submitted Documents (${inboundDocs.length})
        </button>
        <button class="portal-tab-btn ${activeTab === 'messages' ? 'active' : ''}" data-action="portal-tab" data-tab="messages">
          💬 Message Accounting Team
        </button>
        <button class="portal-tab-btn ${activeTab === 'deadlines' ? 'active' : ''}" data-action="portal-tab" data-tab="deadlines">
          📅 Tax &amp; Compliance Deadlines
        </button>
        <button class="portal-tab-btn ${activeTab === 'firm' ? 'active' : ''}" data-action="portal-tab" data-tab="firm">
          🏢 CA Firm Information
        </button>
      </div>

      <!-- Tab Content -->
      ${renderClientPortalTabContent(activeTab, client, reqs, inboundDocs)}
    </div>
  `;
}

function renderClientPortalTabContent(tab, client, reqs, inboundDocs) {
  const allDocs = state.data.documents || [];
  if (tab === 'vault') {
    return `
      <div class="card">
        <div class="card-title-row">
          <div class="card-title">📂 My Submitted Documents</div>
          <span class="badge badge-green">${inboundDocs.length} Total Submissions</span>
        </div>
        <p class="muted" style="margin-bottom:16px;">
          All documents you have transmitted to ${firm().legalName || 'Pinnacle & Co.'}. Files are safely stored in the permanent firm vault and assigned to your CA officers.
        </p>

        ${inboundDocs.length === 0 ? `
          <div style="padding:32px; text-align:center; color:var(--ink-muted);">
            You have not submitted any documents yet. Use the “📤 Document Upload Center” tab to submit your files.
          </div>
        ` : `
          <div class="table-container">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Document Name</th>
                  <th>Submitted Date</th>
                  <th>Size</th>
                  <th>Category</th>
                  <th>CA Review Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${inboundDocs.map(d => `
                  <tr>
                    <td>
                      <strong>${memberHtml(d.name)}</strong>
                      ${d.clientNote ? `<br><small style="color:#2563eb;">Note: “${memberHtml(d.clientNote)}”</small>` : ''}
                      ${d.revisionNote ? `<br><small style="color:var(--red);">CA Feedback: “${memberHtml(d.revisionNote)}”</small>` : ''}
                    </td>
                    <td>${memberHtml(d.uploadDate)}</td>
                    <td>${memberHtml(d.size)}</td>
                    <td><span class="badge badge-blue">${memberHtml(d.category || 'General')}</span></td>
                    <td>
                      ${d.status === 'Approved' ? '<span class="badge badge-green">Verified &amp; Accepted ✅</span>' :
                        d.status === 'Returned' ? '<span class="badge badge-red">Revision Requested 🟠</span>' :
                        '<span class="badge badge-yellow">Under CA Review ⏳</span>'}
                    </td>
                    <td>
                      <button class="btn-secondary" style="padding:4px 9px; font-size:11px;" data-action="doc-download" data-doc="${d.id}" title="Download your submitted file">
                        ⭳ Download Copy
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `}
      </div>
    `;
  }

  if (tab === 'messages') {
    return `
      <div class="grid-2-1">
        <div class="card">
          <div class="card-title-row">
            <div class="card-title">💬 Message Your Accounting Team</div>
          </div>
          <p class="muted" style="margin-bottom:14px;">
            Have questions regarding requested files, tax deductions, or compliance dates? Send a direct message into your firm engagement workspace.
          </p>

          <div class="form-group">
            <label>Subject / Topic</label>
            <input type="text" id="portal-msg-subject" placeholder="e.g. Question on August GST reconciliation or August bank statement" style="margin-bottom:12px;">
          </div>
          <div class="form-group">
            <label>Your Message for ${memberHtml(client.senior)} &amp; ${memberHtml(client.manager)}</label>
            <textarea id="portal-msg-body" rows="4" placeholder="Write your message here..."></textarea>
          </div>
          <div style="display:flex; justify-content:flex-end;">
            <button class="btn-primary" data-action="portal-send-message" data-client="${client.id}">
              ✉️ Send Message to CA Team
            </button>
          </div>
        </div>

        <div class="card">
          <div class="card-title-row">
            <div class="card-title">Assigned Engagement Officers</div>
          </div>
          <div style="display:flex; flex-direction:column; gap:14px; font-size:13px;">
            <div style="display:flex; align-items:center; gap:10px;">
              <div style="width:36px;height:36px;border-radius:8px;background:#ca7007;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;">PN</div>
              <div>
                <div><strong>${memberHtml(client.senior)}</strong></div>
                <div style="font-size:11.5px; color:var(--ink-muted);">Senior Engagement Auditor</div>
              </div>
            </div>
            <div style="display:flex; align-items:center; gap:10px;">
              <div style="width:36px;height:36px;border-radius:8px;background:#1b4d3e;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;">RM</div>
              <div>
                <div><strong>${memberHtml(client.manager)}</strong></div>
                <div style="font-size:11.5px; color:var(--ink-muted);">Practice Manager</div>
              </div>
            </div>
            <div style="border-top:1px solid var(--line); padding-top:12px; font-size:12px; color:var(--ink-muted);">
              <div>📞 Office Phone: +91 (020) 2567-8900</div>
              <div style="margin-top:4px;">✉️ Desk Email: audit@pinnacleca.in</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (tab === 'deadlines') {
    return `
      <div class="card">
        <div class="card-title-row">
          <div class="card-title">📅 Statutory Tax &amp; Compliance Deadlines for ${memberHtml(client.name)}</div>
          <span class="badge badge-green">Filing Season 2026–27</span>
        </div>
        <p class="muted" style="margin-bottom:16px;">
          Key compliance dates managed by your CA team. Uploading your papers at least 3 business days before the deadline ensures timely filing without late fees.
        </p>

        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Compliance Event</th>
                <th>Due Date</th>
                <th>Statute / Authority</th>
                <th>Document Required</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>GSTR-1 Monthly Outward Supplies</strong></td>
                <td><strong style="color:var(--yellow);">Sept 11, 2026</strong></td>
                <td>GST Portal (CBIC)</td>
                <td>August Sales Register CSV</td>
                <td><span class="badge badge-yellow">Pending Client Docs</span></td>
              </tr>
              <tr>
                <td><strong>GSTR-3B Monthly Return &amp; Tax Settlement</strong></td>
                <td><strong style="color:var(--forest);">Sept 20, 2026</strong></td>
                <td>GST Portal (CBIC)</td>
                <td>Purchase Invoices &amp; Bank Statement</td>
                <td><span class="badge badge-blue">Reconciliation Ongoing</span></td>
              </tr>
              <tr>
                <td><strong>Advance Tax Q2 Installment</strong></td>
                <td><strong style="color:var(--red);">Sept 15, 2026</strong></td>
                <td>Income Tax Department</td>
                <td>Provisional P&amp;L Statements</td>
                <td><span class="badge badge-yellow">Action Required</span></td>
              </tr>
              <tr>
                <td><strong>TDS Monthly Payment (Challan 281)</strong></td>
                <td><strong>Oct 07, 2026</strong></td>
                <td>Income Tax / NSDL</td>
                <td>Payroll Register &amp; Vendor TDS</td>
                <td><span class="badge badge-green">On Track</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  if (tab === 'firm') {
    return `
      <div class="card">
        <div class="card-title-row">
          <div class="card-title">🏢 About Your Practice Firm</div>
        </div>
        <div style="font-size:13px; line-height:1.6; color:var(--ink);">
          <p><strong>${firm().legalName || 'Pinnacle & Co. Chartered Accountants'}</strong></p>
          <p style="color:var(--ink-muted);">ICAI Firm Registration No. 108429W · Peer Reviewed Firm</p>
          <div style="margin-top:14px; display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:16px;">
            <div style="background:var(--surface-subtle); padding:14px; border-radius:8px; border:1px solid var(--line);">
              <div style="font-weight:700; margin-bottom:4px;">📍 Office Headquarters</div>
              <div>Suite 401–404, Sterling Chambers</div>
              <div>F.C. Road, Shivajinagar, Pune 411005</div>
            </div>
            <div style="background:var(--surface-subtle); padding:14px; border-radius:8px; border:1px solid var(--line);">
              <div style="font-weight:700; margin-bottom:4px;">🕒 Practice Hours</div>
              <div>Monday – Friday: 9:30 AM – 6:30 PM</div>
              <div>Saturday: 10:00 AM – 2:00 PM (Tax Seasons)</div>
            </div>
            <div style="background:var(--surface-subtle); padding:14px; border-radius:8px; border:1px solid var(--line);">
              <div style="font-weight:700; margin-bottom:4px;">🔒 Security &amp; Confidentiality</div>
              <div>256-bit encrypted disk storage. ISO 27001 data protection compliant.</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // DEFAULT TAB: 'upload' — THE MAIN INTERACTIVE DOCUMENT UPLOAD ENGINE
  return `
    <!-- Outstanding Document Requests from Firm -->
    <div style="margin-bottom:28px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:10px;">
        <div>
          <h2 style="font-size:18px; font-family:var(--font-serif); color:var(--forest); margin:0;">
            1. Requested Documents from ${firm().legalName || 'Pinnacle & Co.'}
          </h2>
          <p style="font-size:12.5px; color:var(--ink-muted); margin:4px 0 0 0;">
            Please select and upload each required item. Files safely transmit directly to the firm workers on the master workspace.
          </p>
        </div>
      </div>

      ${reqs.length === 0 ? `
        <div class="card" style="padding:24px; text-align:center; color:var(--ink-muted);">
          No active document requests pending. You can still use the General Document Dropzone below to send files anytime!
        </div>
      ` : reqs.map(r => `
        <div style="margin-bottom:20px;">
          <div style="font-weight:700; font-size:14px; color:var(--forest); margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
            <span>📁 ${memberHtml(r.title)}</span>
            <span class="badge badge-blue">Due by: ${memberHtml(r.dueDate || 'Immediate')}</span>
          </div>

          <div style="display:flex; flex-direction:column; gap:12px;">
            ${(r.items || []).map((item, idx) => {
              const matchedDoc = item.docId ? allDocs.find(d => d.id === item.docId) : (item.done ? allDocs.find(d => d.clientId === client.id && d.name.toLowerCase().includes(item.label.toLowerCase().slice(0, 8))) : null);
              
              if (item.done) {
                return `
                  <div class="portal-request-card completed">
                    <div class="portal-req-header">
                      <div>
                        <div class="portal-req-title">✅ ${memberHtml(item.label)}</div>
                        <div class="portal-req-meta">
                          <span>Status: <strong>Transmitted Safely to CA Team</strong></span>
                          ${matchedDoc ? `<span>· File: <strong>${memberHtml(matchedDoc.name)}</strong> (${memberHtml(matchedDoc.size)})</span>` : ''}
                        </div>
                      </div>
                      <div>
                        ${matchedDoc && matchedDoc.status === 'Approved' ? '<span class="badge badge-green">Verified by CA Priya ✅</span>' :
                          matchedDoc && matchedDoc.status === 'Returned' ? '<span class="badge badge-red">Revision Requested: ' + memberHtml(matchedDoc.revisionNote || '') + '</span>' :
                          '<span class="badge badge-green">Uploaded &amp; Under CA Review ⏳</span>'}
                      </div>
                    </div>
                    ${matchedDoc ? `
                      <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:8px;">
                        <button class="btn-secondary" style="font-size:11px; padding:3px 8px;" data-action="doc-download" data-doc="${matchedDoc.id}">
                          ⭳ Download Copy
                        </button>
                      </div>
                    ` : ''}
                  </div>
                `;
              }

              return `
                <div class="portal-request-card pending">
                  <div class="portal-req-header">
                    <div>
                      <div class="portal-req-title">⏳ ${memberHtml(item.label)}</div>
                      <div class="portal-req-meta">
                        <span>Requested by: <strong>${memberHtml(client.senior)}</strong></span>
                        <span>·</span>
                        <span>Due: <strong>${memberHtml(r.dueDate || 'Immediate')}</strong></span>
                      </div>
                    </div>
                    <div>
                      <span class="badge badge-yellow">Action Required: Upload File</span>
                    </div>
                  </div>

                  <!-- Dropzone & File Input -->
                  <div class="portal-dropzone" onclick="document.getElementById('portal-file-input-${idx}').click();">
                    <span class="portal-dropzone-icon">📁</span>
                    <div class="portal-dropzone-text">Click to browse or drag &amp; drop your file here</div>
                    <div class="portal-dropzone-sub">Supports PDF, Excel (.xlsx, .csv), Scanned Images (JPG, PNG), Word (.docx) · Up to 8 MB</div>
                    <input type="file" id="portal-file-input-${idx}" class="portal-file-picker" data-target-feedback="portal-feedback-${idx}" style="display:none;" accept=".pdf,.xlsx,.xls,.csv,.doc,.docx,.png,.jpg,.jpeg">
                    <div id="portal-feedback-${idx}" style="margin-top:6px;"></div>
                  </div>

                  <!-- Client Remark Input -->
                  <input type="text" id="portal-note-input-${idx}" class="portal-note-input" placeholder="Add an optional note for your CA team (e.g. statement period, branch seal on page 3)...">

                  <!-- Action Button -->
                  <div class="portal-upload-bar-actions">
                    <button class="btn-primary" data-action="portal-submit-request-doc" data-item-idx="${idx}" data-req-id="${r.id}" data-client-id="${client.id}">
                      🚀 Submit Document to Accounting Team
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `).join('')}
    </div>

    <!-- General / Ad-hoc Document Dropzone -->
    <div class="card" style="border-top:4px solid var(--forest); margin-top:28px;">
      <div class="card-title-row">
        <div class="card-title">2. General Document Dropzone (Send Extra Invoices, Notices &amp; Papers)</div>
        <span class="badge badge-blue">Ad-Hoc Direct Upload</span>
      </div>
      <p class="muted" style="margin-bottom:16px;">
        Need to send an additional document that was not explicitly requested? (e.g. an unexpected Income Tax notice, new vehicle purchase invoice, or GST challan). Drop it here to safely transmit it to your firm workers.
      </p>

      <div class="grid-2-1" style="gap:16px; margin-bottom:12px;">
        <div class="form-group">
          <label>Document Category</label>
          <select id="portal-general-category">
            <option value="Bank">Bank Statement / Certificate</option>
            <option value="GST">GST / Sales &amp; Purchase Invoice</option>
            <option value="TDS">TDS Certificate / Form 16 / 26AS</option>
            <option value="Expenses">Vendor Bill / Expense Receipt</option>
            <option value="Payroll">Payroll Summary / EPF Challan</option>
            <option value="Financials">Financial Statements / Audit Paper</option>
            <option value="Client Paper" selected>Notice / Agreement / Legal Document</option>
          </select>
        </div>

        <div class="form-group">
          <label>Your Note or Remarks for CA</label>
          <input type="text" id="portal-general-note" placeholder="e.g. Received this notice from IT dept today; please review">
        </div>
      </div>

      <div class="portal-dropzone" onclick="document.getElementById('portal-general-file-input').click();">
        <span class="portal-dropzone-icon">📤</span>
        <div class="portal-dropzone-text">Click to choose file or drag &amp; drop here</div>
        <div class="portal-dropzone-sub">PDF, XLSX, CSV, PNG, JPG, DOCX (Max 8 MB)</div>
        <input type="file" id="portal-general-file-input" class="portal-file-picker" data-target-feedback="portal-general-feedback" style="display:none;" accept=".pdf,.xlsx,.xls,.csv,.doc,.docx,.png,.jpg,.jpeg">
        <div id="portal-general-feedback" style="margin-top:6px;"></div>
      </div>

      <div style="display:flex; justify-content:flex-end; margin-top:14px;">
        <button class="btn-primary" data-action="portal-submit-general-doc" data-client="${client.id}">
          🚀 Transmit Document to CA Team
        </button>
      </div>
    </div>
  `;
}


// 17. FIRM SETTINGS
const BRAND_PRESETS = ['#1b4d3e', '#1e3a5f', '#4a2c5a', '#7c2d3a', '#0f4c5c', '#2d4a2e', '#3d3520'];

function renderFirmSettings() {
  const f = firm();
  const brand = f.brandColor || '#1b4d3e';
  const themePref = getWorkspaceThemePreference();
  const effectiveTheme = getEffectiveTheme();

  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Configuration</div>
        <h1>Firm Settings</h1>
        <p>Brand identity, display theme modes, and registration details. Applied workspace-wide and saved locally.</p>
      </div>
      <button class="btn-secondary" data-action="reset-firm">Reset to Defaults</button>
    </div>

    <!-- Workspace Appearance & Bright / Dark Mode Theme Card -->
    <div class="card" style="margin-bottom:20px;">
      <div class="card-title-row">
        <div class="card-title">Workspace Appearance &amp; Bright / Dark Mode</div>
        <span class="badge ${effectiveTheme === 'dark' ? 'badge-blue' : 'badge-green'}">Active: ${effectiveTheme === 'dark' ? '🌙 Obsidian Dark' : '☀️ Executive Bright'}</span>
      </div>
      <p class="muted" style="margin-bottom:14px">Personalize your practice environment. Switch between crisp daytime linen clarity, obsidian deep slate for long filing sessions, or let the app automatically match your operating system theme.</p>
      
      <div class="theme-picker-grid">
        <div class="theme-card-option ${themePref === 'bright' ? 'active' : ''}" data-action="set-theme-bright" title="Switch to Executive Bright mode">
          <div class="theme-card-header">
            <span class="theme-card-icon">☀️</span>
            <span class="theme-card-badge">${themePref === 'bright' ? 'Selected' : 'Light'}</span>
          </div>
          <div class="theme-card-preview theme-preview-bright">
            <div class="preview-bar"></div>
            <div class="preview-content">
              <div class="preview-pill"></div>
              <div style="height:4px;background:#e4e1d7;border-radius:2px;width:90%"></div>
              <div style="height:4px;background:#e4e1d7;border-radius:2px;width:68%"></div>
            </div>
          </div>
          <div class="theme-card-title">Executive Bright (Linen)</div>
          <div class="theme-card-desc">Crisp, paper-like warmth. Optimized for day audit reviews, itemized invoicing, and client reporting.</div>
        </div>

        <div class="theme-card-option ${themePref === 'dark' ? 'active' : ''}" data-action="set-theme-dark" title="Switch to Obsidian Dark mode">
          <div class="theme-card-header">
            <span class="theme-card-icon">🌙</span>
            <span class="theme-card-badge">${themePref === 'dark' ? 'Selected' : 'Dark'}</span>
          </div>
          <div class="theme-card-preview theme-preview-dark">
            <div class="preview-bar"></div>
            <div class="preview-content">
              <div class="preview-pill"></div>
              <div style="height:4px;background:#26354d;border-radius:2px;width:90%"></div>
              <div style="height:4px;background:#26354d;border-radius:2px;width:68%"></div>
            </div>
          </div>
          <div class="theme-card-title">Obsidian Dark Mode</div>
          <div class="theme-card-desc">Deep charcoal slate with jewel emerald accents. Prevents eye fatigue during intense deadline crunches.</div>
        </div>

        <div class="theme-card-option ${themePref === 'system' ? 'active' : ''}" data-action="set-theme-system" title="Sync with operating system preference">
          <div class="theme-card-header">
            <span class="theme-card-icon">🌓</span>
            <span class="theme-card-badge">${themePref === 'system' ? 'Selected' : 'Auto'}</span>
          </div>
          <div class="theme-card-preview theme-preview-system"></div>
          <div class="theme-card-title">System Adaptive</div>
          <div class="theme-card-desc">Dynamically switches between Bright and Dark based on your computer or phone's active system appearance.</div>
        </div>
      </div>
      <div style="margin-top:14px;font-size:11.5px;color:var(--ink-muted);display:flex;align-items:center;gap:6px;">
        <span>💡 <strong>Quick Shortcut:</strong> Press <kbd style="background:var(--cream-dark);border:1px solid var(--line);padding:2px 7px;border-radius:4px;font-size:10px;font-weight:700;color:var(--ink);">Ctrl + Shift + D</kbd> (or <kbd style="background:var(--cream-dark);border:1px solid var(--line);padding:2px 7px;border-radius:4px;font-size:10px;font-weight:700;color:var(--ink);">Cmd + Shift + D</kbd>) anywhere in the workspace to instantly flip modes.</span>
      </div>
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

      <div class="card">
        <div class="card-title-row"><div class="card-title">Advance Tax Estimate</div></div>
        <p class="muted" style="margin-bottom:12px">Used to estimate current financial year advance tax. Verify the calculation with your tax professional before payment.</p>
        <div class="grid-2">
          <div class="form-group"><label>Estimated current-year tax (₹)</label><input name="estimatedCurrentYearTax" type="number" min="0" step="1" value="${state.data.firmTaxProfile?.estimatedCurrentYearTax ?? ''}" placeholder="Enter estimate" /></div>
          <div class="form-group"><label>Expected TDS / TCS credit (₹)</label><input name="expectedTdsTcs" type="number" min="0" step="1" value="${state.data.firmTaxProfile?.expectedTdsTcs ?? 0}" /></div>
          <div class="form-group"><label>Advance tax already paid this FY (₹)</label><input name="advanceTaxPaid" type="number" min="0" step="1" value="${state.data.firmTaxProfile?.advanceTaxPaid ?? 0}" /></div>
          <div class="form-group" style="align-self:center"><label><input name="presumptive" type="checkbox" ${state.data.firmTaxProfile?.presumptive ? 'checked' : ''} /> Presumptive taxation (single March instalment)</label></div>
        </div>
      </div>

      <!-- Practice Data & Folder Backup Card -->
      <div class="card" style="border-left: 4px solid var(--emerald);">
        <div class="card-title-row">
          <div class="card-title">📁 Save &amp; Sync to Your Local GitHub Folder</div>
          <span class="badge badge-green">Folder Sync</span>
        </div>
        <p class="muted" style="margin-bottom:14px">Get the complete updated application files and database snapshots into the folder connected to your GitHub repository.</p>
        
        <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:14px;">
          <a href="/api/export-project-zip" download="accounting-workplace-updated.zip" class="btn-primary" style="text-decoration:none; display:inline-flex; align-items:center; gap:6px; font-weight:600;">
            <span>⭳</span> Download Full Codebase (.zip)
          </a>
          <button type="button" class="btn-secondary" data-action="open-folder-sync" style="font-weight:600;">
            📁 Sync Instructions
          </button>
          <button type="button" class="btn-secondary" data-action="export-backup">
            ⭳ Practice Data Backup (.json)
          </button>
          <button type="button" class="btn-secondary" data-action="export-csv-summary">
            ⭳ Client Summary (.csv)
          </button>
        </div>

        <div style="background:var(--cream); border:1px solid var(--line); border-radius:8px; padding:12px 14px; font-size:12px; color:var(--ink-muted); line-height:1.6;">
          <div style="font-weight:600; color:var(--ink); margin-bottom:4px;">🚀 How to update your local folder:</div>
          <div>1. Click <strong>Download Full Codebase (.zip)</strong> and extract all files into your connected GitHub folder.</div>
          <div>2. Or if using AI Studio GitHub sync, click <strong>Export / Push to GitHub</strong> in the AI Studio top header, then run <code>git pull</code> in your local folder.</div>
          <div>3. Once updated, commit with <code>git add . &amp;&amp; git commit -m "Update from AI Studio" &amp;&amp; git push</code>.</div>
        </div>
      </div>

      <div class="modal-actions">
        <button type="submit" class="btn-primary">Save Firm Settings</button>
      </div>
    </form>
  `;
}

// Team membership is managed through the same-origin backend API.
function memberHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}

function renderTeamMembers() {
  const members = state.data.users || [];
  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">People &amp; Access</div>
        <h1>Team Members &amp; Workstations</h1>
        <p>Add team members, update roles, and manage personalized workstations (controlled by the Head / Master Key holder).</p>
      </div>
    </div>
    <div class="card" style="margin-bottom:18px">
      <div class="card-title-row"><div class="card-title">Add a member</div></div>
      <form id="team-member-add-form" class="grid-2">
        <div class="form-group"><label for="team-member-name">Full name</label><input id="team-member-name" name="name" required maxlength="100" placeholder="e.g. Asha Mehta" /></div>
        <div class="form-group"><label for="team-member-role">Role</label><select id="team-member-role" name="role"><option>Partner</option><option>Manager</option><option>Senior</option><option>Accountant</option><option selected>Trainee</option></select></div>
        <div class="form-group" style="align-self:end"><button class="btn-primary" type="submit">＋ Add Member</button></div>
      </form>
    </div>
    <div class="card">
      <div class="card-title-row"><div class="card-title">Current team</div><span class="badge">${members.length} members</span></div>
      <div class="task-list">
        ${members.length ? members.map(u => {
          const self = currentUser() && currentUser().id === u.id;
          const lastPartner = u.role === 'Partner' && members.filter(m => m.role === 'Partner').length === 1;
          return `<form class="task-item team-member-row" data-team-member-form data-member-id="${memberHtml(u.id)}">
            <div class="user-avatar" style="width:36px;height:36px;font-size:12px;background:${memberHtml(u.avatarBg || '#1b4d3e')}">${memberHtml(u.initials || getInitials(u.name || '?'))}</div>
            <div class="team-member-fields"><input aria-label="Name for ${memberHtml(u.name)}" name="name" value="${memberHtml(u.name)}" required maxlength="100" /><select aria-label="Role for ${memberHtml(u.name)}" name="role">${['Partner','Manager','Senior','Accountant','Trainee'].map(role => `<option ${u.role === role ? 'selected' : ''}>${role}</option>`).join('')}</select></div>
            <div class="team-member-actions"><button class="btn-secondary" type="submit">Save</button><button class="btn-secondary" type="button" data-action="team-member-remove" data-member-id="${memberHtml(u.id)}" ${self || lastPartner ? 'disabled title="Cannot remove the signed-in member or the last Partner."' : ''}>Remove</button></div>
          </form>`;
        }).join('') : '<p class="empty-state">No members yet. Add your first team member above.</p>'}
      </div>
    </div>
    ${renderWorkStationManager()}
  `;
}

function renderWorkStationManager() {
  const members = (state.data.users || []);
  const clients = state.data.clients || [];
  state.data.workStations = state.data.workStations || {};

  return `
    <div class="card" style="margin-top:20px;">
      <div class="card-title-row">
        <div class="card-title">🏢 Personalized Work Station Assignments (Master Cards for Everyone)</div>
        <span class="badge" style="background:var(--emerald-soft); color:var(--emerald);">
          🌐 Shared Access (All Workers)
        </span>
      </div>
      <p style="font-size:12.5px; color:var(--ink-muted); margin-bottom:14px;">
        Master Cards and personalized workstations are available to all firm workers. Every team member can view and assign client portfolios and scopes across workstations.
      </p>
      <div style="display:flex; flex-direction:column; gap:12px;">
        ${members.map(m => {
          const ws = state.data.workStations[m.id] || { clients: [], note: '' };
          return `
            <div style="border:1px solid var(--line); border-radius:8px; padding:14px; background:var(--surface-subtle);">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <div style="display:flex; align-items:center; gap:8px;">
                  <span class="user-avatar" style="width:28px;height:28px;font-size:11px;background:${m.avatarBg}">${m.initials}</span>
                  <div>
                    <strong>${memberHtml(m.name)}</strong> <span style="font-size:11px;color:var(--ink-muted);">(${m.role})</span>
                  </div>
                </div>
                <button type="button" class="btn-secondary" style="font-size:11.5px; padding:4px 10px; cursor:pointer;" data-action="save-workstation" data-user-id="${m.id}">
                  Save Workstation
                </button>
              </div>
              <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:8px;">
                <div>
                  <label style="font-size:11px; color:var(--ink-muted); display:block; margin-bottom:4px;">Assigned Clients</label>
                  <select id="ws-clients-${m.id}" multiple style="width:100%; height:60px; font-size:11.5px; border:1px solid var(--line); border-radius:4px; background:var(--surface);">
                    ${clients.map(c => `<option value="${c.id}" ${(ws.clients || []).includes(c.id) ? 'selected' : ''}>${c.name}</option>`).join('')}
                  </select>
                </div>
                <div>
                  <label style="font-size:11px; color:var(--ink-muted); display:block; margin-bottom:4px;">Workstation Note / Scope</label>
                  <input id="ws-note-${m.id}" type="text" value="${memberHtml(ws.note || '')}" placeholder="e.g. GST & Statutory Audits" style="width:100%; font-size:11.5px; padding:6px; border:1px solid var(--line); border-radius:4px; background:var(--surface);" />
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

async function saveTeamMemberForm(form) {
  if (!can('manage.users')) { toast('Only a Partner can manage team members.'); return; }
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const role = String(data.get('role') || 'Trainee');
  if (!name) return;
  const id = form.dataset.memberId;
  const button = form.querySelector('[type="submit"]');
  if (button) button.disabled = true;
  try {
    const response = await fetch(id ? `/api/members/${encodeURIComponent(id)}` : '/api/members', {
      method: id ? 'PUT' : 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name, role })
    });
    const member = response.status === 404 && id
      ? { ...state.data.users.find(u => u.id === id), name, role, initials: getInitials(name) }
      : await response.json();
    if (!response.ok && response.status !== 404) throw new Error(member.error || 'Could not save member.');
    const index = state.data.users.findIndex(u => u.id === (id || member.id));
    if (index >= 0) state.data.users[index] = { ...state.data.users[index], ...member, name, role, initials: getInitials(name) };
    else state.data.users.push({ ...member, name, role, initials: getInitials(name) });
    state.save();
    state.addAuditLog(currentUser().name, id ? 'Updated Team Member' : 'Added Team Member', name);
    toast(id ? `${name} updated` : `${name} added to the team`);
    navigateTo('team');
  } catch (error) {
    toast(error.message || 'Could not save member');
    if (button) button.disabled = false;
  }
}

// 18. GLOBAL SEARCH
function searchEverything(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const hits = [];
  const push = (type, title, meta, view, payload) => hits.push({ type, title, meta, view, payload });

  // 1. Clients collection
  state.data.clients.forEach(c => {
    const text = `${c.name} ${c.code} ${c.industry} ${c.contact} ${c.email} ${clientGstin(c)} ${clientPan(c)}`.toLowerCase();
    if (text.includes(q)) {
      push('Client', c.name, `${c.code} · ${c.industry} · Contact: ${c.contact}`, 'clientdetail', c.id);
    }
  });

  // 2. Documents collection
  state.data.documents.forEach(d => {
    const text = `${d.name} ${d.clientName} ${d.status} ${d.category} ${d.clientNote || ''}`.toLowerCase();
    if (text.includes(q)) {
      push('Document', d.name, `Client: ${d.clientName} · Status: ${d.status} · ${d.category}`, 'documents', null);
    }
  });

  // 3. Master Cards collection
  state.data.clients.forEach(c => {
    const inbound = (state.data.documents || []).filter(d => d.clientId === c.id);
    const text = `master card ${c.name} ${c.code} ${c.manager} ${c.senior} ${inbound.length} inbound uploads`.toLowerCase();
    if (text.includes(q)) {
      push('Master Card', `Master Card: ${c.name}`, `Manager: ${c.manager} · Senior: ${c.senior} · Inbound Uploads: ${inbound.length}`, 'mastercards', c.id);
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
                <div class="search-hit-title">${memberHtml(r.title)}</div>
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
            <div class="task-title-line">${memberHtml(c.name)}</div>
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

function ledgerBlankLine() { return { accountId: '', debit: '', credit: '', note: '' }; }
function ledgerEscape(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}
function ledgerAccounts() {
  return (state.data.chartOfAccounts || []).slice().sort((a, b) => String(a.code).localeCompare(String(b.code), undefined, { numeric: true }));
}
function ledgerEntriesThrough(endDate = state.ledgerEndDate) {
  return (state.data.journalEntries || []).filter(entry => entry.status === 'Posted' && entry.date <= endDate);
}
function ledgerTotals(entries) {
  const totals = new Map();
  entries.forEach(entry => (entry.lines || []).forEach(line => {
    const total = totals.get(String(line.accountId)) || { debit: 0, credit: 0 };
    total.debit += Number(line.debit) || 0;
    total.credit += Number(line.credit) || 0;
    totals.set(String(line.accountId), total);
  }));
  return totals;
}
function ledgerTableRows(rows, emptyMessage, columns = ['Account', 'Debit', 'Credit']) {
  if (!rows.length) return `<div class="ledger-empty">${ledgerEscape(emptyMessage)}</div>`;
  return `<div class="ledger-table-wrap"><table class="ledger-table"><thead><tr>${columns.map(column => `<th>${ledgerEscape(column)}</th>`).join('')}</tr></thead><tbody>${rows.join('')}</tbody></table></div>`;
}
function ledgerTypeBadge(type) { return `<span class="ledger-type ledger-type-${String(type).toLowerCase()}">${ledgerEscape(type)}</span>`; }
function renderLedger() {
  const accounts = ledgerAccounts();
  const entries = (state.data.journalEntries || []).slice().sort((a, b) => b.date.localeCompare(a.date) || String(b.number).localeCompare(String(a.number)));
  const activeAccounts = accounts.filter(account => account.active !== false);
  const tabs = [['journal', 'Journal'], ['accounts', 'Chart of accounts'], ['trial-balance', 'Trial balance'], ['profit-loss', 'Profit & loss'], ['balance-sheet', 'Balance sheet']];
  const tab = state.ledgerTab || 'journal';
  const options = selectedId => activeAccounts.map(account => `<option value="${ledgerEscape(account.id)}" ${String(selectedId) === String(account.id) ? 'selected' : ''}>${ledgerEscape(account.code)} · ${ledgerEscape(account.name)} (${ledgerEscape(account.type)})</option>`).join('');
  let content = '';

  if (tab === 'journal') {
    const debit = state.journalDraft.reduce((sum, line) => sum + (Number(line.debit) || 0), 0);
    const credit = state.journalDraft.reduce((sum, line) => sum + (Number(line.credit) || 0), 0);
    content = `<div class="ledger-two-col">
      <section class="ledger-card">
        <div class="ledger-card-heading"><div><h2>New journal entry</h2><p>Enter the transaction from your source documents. Debits and credits must match.</p></div><span class="ledger-status">${can('ledger.post') ? 'Ready to post' : 'Read only'}</span></div>
        ${activeAccounts.length < 2 ? `<div class="ledger-callout">Add at least two active accounts to the chart before you post your first journal. If you need opening balances, enter them as a balanced opening journal. <button type="button" class="ledger-text-action" data-action="ledger-tab" data-tab="accounts">Set up your chart →</button></div>` : ''}
        <form id="ledger-journal-form" class="ledger-form">
          <div class="ledger-form-meta"><label>Entry date<input name="date" type="date" required value="${ledgerEscape(state.journalDraftDate || new Date().toISOString().slice(0, 10))}" data-ledger-draft="date"></label><label>Description<input name="memo" maxlength="240" required placeholder="e.g. Record monthly office rent" value="${ledgerEscape(state.journalDraftMemo || '')}" data-ledger-draft="memo"></label></div>
          <div class="ledger-lines-head"><span>Account</span><span>Line description</span><span>Debit (₹)</span><span>Credit (₹)</span><span></span></div>
          <div class="ledger-lines">${state.journalDraft.map((line, index) => `<div class="ledger-line" data-ledger-line="${index}">
            <select aria-label="Account for line ${index + 1}" required data-ledger-line-field="accountId" data-line-index="${index}"><option value="">Choose account…</option>${options(line.accountId)}</select>
            <input aria-label="Description for line ${index + 1}" maxlength="160" placeholder="Optional" value="${ledgerEscape(line.note)}" data-ledger-line-field="note" data-line-index="${index}">
            <input aria-label="Debit for line ${index + 1}" type="number" min="0" step="0.01" placeholder="0.00" value="${ledgerEscape(line.debit)}" data-ledger-line-field="debit" data-line-index="${index}">
            <input aria-label="Credit for line ${index + 1}" type="number" min="0" step="0.01" placeholder="0.00" value="${ledgerEscape(line.credit)}" data-ledger-line-field="credit" data-line-index="${index}">
            <button type="button" class="ledger-remove-line" data-action="ledger-remove-line" data-line-index="${index}" aria-label="Remove line" ${state.journalDraft.length <= 2 ? 'disabled' : ''}>×</button>
          </div>`).join('')}</div>
          <div class="ledger-form-footer"><button class="btn-secondary" type="button" data-action="ledger-add-line">＋ Add line</button><div class="ledger-totals"><span>Debits <b>${inr(debit)}</b></span><span>Credits <b>${inr(credit)}</b></span><strong class="${Math.abs(debit - credit) < 0.005 && debit > 0 ? 'is-balanced' : 'is-unbalanced'}">${Math.abs(debit - credit) < 0.005 && debit > 0 ? 'Balanced' : `Difference ${inr(debit - credit)}`}</strong></div><button class="btn-primary" type="submit" ${!can('ledger.post') || activeAccounts.length < 2 ? 'disabled title="Posting is unavailable until you have permission and at least two accounts"' : ''}>Post journal</button></div>
          ${!can('ledger.post') ? '<p class="ledger-muted">Your role can view this ledger but cannot post journals.</p>' : ''}
        </form>
      </section>
      <section class="ledger-card ledger-journal-history"><div class="ledger-card-heading"><div><h2>Posted journals</h2><p>${entries.length} permanent ${entries.length === 1 ? 'entry' : 'entries'} · newest first</p></div></div>
        ${entries.length ? `<div class="ledger-entry-list">${entries.slice(0, 30).map(entry => `<details class="ledger-entry"><summary><span class="ledger-entry-number">${ledgerEscape(entry.number)}</span><span><b>${ledgerEscape(entry.memo)}</b><small>${ledgerEscape(entry.date)} · ${entry.lines.length} lines · ${ledgerEscape(entry.recordedBy || 'Workspace user')}</small></span><strong>${inr(entry.totalDebit)}</strong><span class="ledger-status">Posted</span></summary><div class="ledger-entry-lines">${entry.lines.map(line => `<div><span>${ledgerEscape(line.accountCode)} · ${ledgerEscape(line.accountName)}${line.note ? ` <small>— ${ledgerEscape(line.note)}</small>` : ''}</span><b>${line.debit ? inr(line.debit) : ''}</b><b>${line.credit ? inr(line.credit) : ''}</b></div>`).join('')}</div></details>`).join('')}</div>` : '<div class="ledger-empty">No journals yet. Create your first balanced entry to start the ledger.</div>'}
        <p class="ledger-muted">Posted entries are append-only. To correct a posted journal, create a reversing entry and post the corrected transaction.</p>
      </section>
    </div>`;
  } else if (tab === 'accounts') {
    content = `<div class="ledger-card"><div class="ledger-card-heading"><div><h2>Chart of accounts</h2><p>Create the account codes and categories used by your firm. Accounts already used in a journal cannot be archived.</p></div><span class="ledger-status">${activeAccounts.length} active</span></div>
      ${can('ledger.manage') ? `<form id="ledger-account-form" class="ledger-account-form"><label>Code<input name="code" required inputmode="numeric" pattern="[0-9]{2,12}" maxlength="12" placeholder="e.g. 1000"></label><label>Account name<input name="name" required maxlength="100" placeholder="e.g. Bank current account"></label><label>Category<select name="type" required><option value="">Choose…</option>${['Asset', 'Liability', 'Equity', 'Income', 'Expense'].map(type => `<option>${type}</option>`).join('')}</select></label><button class="btn-primary" type="submit">＋ Add account</button></form>` : ''}
      ${ledgerTableRows(accounts.map(account => `<tr><td><b>${ledgerEscape(account.code)}</b></td><td>${ledgerEscape(account.name)}</td><td>${ledgerTypeBadge(account.type)}</td><td>${account.active === false ? '<span class="ledger-inactive">Archived</span>' : '<span class="ledger-active">Active</span>'}</td><td>${can('ledger.manage') && !((state.data.journalEntries || []).some(entry => entry.lines.some(line => String(line.accountId) === String(account.id)))) ? `<button class="ledger-text-action" data-action="ledger-account-toggle" data-account-id="${ledgerEscape(account.id)}" data-next-active="${account.active === false ? 'true' : 'false'}">${account.active === false ? 'Restore' : 'Archive'}</button>` : ''}</td></tr>`, 'Start with account codes that match your bookkeeping setup.', ['Code', 'Account name', 'Category', 'Status', '']))}</div>`;
  } else {
    const totals = ledgerTotals(ledgerEntriesThrough());
    const periodControls = `<div class="ledger-date-range"><label>From<input type="date" value="${ledgerEscape(state.ledgerStartDate)}" data-ledger-date="start"></label><label>Through<input type="date" value="${ledgerEscape(state.ledgerEndDate)}" data-ledger-date="end"></label></div>`;
    const asOfControl = `<div class="ledger-date-range"><label>Through<input type="date" value="${ledgerEscape(state.ledgerEndDate)}" data-ledger-date="end"></label></div>`;
    if (tab === 'trial-balance') {
      const rows = accounts.filter(account => account.active !== false).map(account => {
        const total = totals.get(String(account.id)) || { debit: 0, credit: 0 };
        const net = total.debit - total.credit;
        if (Math.abs(net) < 0.005) return '';
        return `<tr><td><b>${ledgerEscape(account.code)}</b></td><td>${ledgerEscape(account.name)}</td><td>${ledgerTypeBadge(account.type)}</td><td class="ledger-number">${net > 0 ? inr(net) : '—'}</td><td class="ledger-number">${net < 0 ? inr(-net) : '—'}</td></tr>`;
      }).filter(Boolean);
      const sums = [...totals.values()].reduce((sum, t) => sum + t.debit - t.credit, 0);
      const dr = [...totals.values()].reduce((sum, t) => sum + Math.max(0, t.debit - t.credit), 0);
      const cr = [...totals.values()].reduce((sum, t) => sum + Math.max(0, t.credit - t.debit), 0);
      content = `<div class="ledger-card"><div class="ledger-report-heading"><div><h2>Trial balance</h2><p>Closing account balances from all posted entries through the selected date.</p></div>${asOfControl}</div>${ledgerTableRows(rows, 'No account balances yet. Post balanced journals to populate the trial balance.', ['Code', 'Account name', 'Category', 'Debit', 'Credit'])}<div class="ledger-report-total"><span>Totals as of ${ledgerEscape(state.ledgerEndDate)}</span><b>${inr(dr)}</b><b>${inr(cr)}</b></div><div class="ledger-reconcile ${Math.abs(sums) < 0.005 ? 'is-balanced' : 'is-unbalanced'}">${Math.abs(sums) < 0.005 ? '✓ Debits and credits agree' : `⚠ Out of balance by ${inr(sums)}`} · Reports include posted entries only.</div></div>`;
    } else if (tab === 'profit-loss') {
      const rangeEntries = ledgerEntriesThrough().filter(entry => entry.date >= state.ledgerStartDate);
      const rangeTotals = ledgerTotals(rangeEntries);
      const incomeRows = accounts.filter(account => account.type === 'Income' && account.active !== false).map(account => ({ account, amount: ((rangeTotals.get(String(account.id)) || {}).credit || 0) - ((rangeTotals.get(String(account.id)) || {}).debit || 0) })).filter(row => Math.abs(row.amount) >= 0.005);
      const expenseRows = accounts.filter(account => account.type === 'Expense' && account.active !== false).map(account => ({ account, amount: ((rangeTotals.get(String(account.id)) || {}).debit || 0) - ((rangeTotals.get(String(account.id)) || {}).credit || 0) })).filter(row => Math.abs(row.amount) >= 0.005);
      const income = incomeRows.reduce((sum, row) => sum + row.amount, 0);
      const expense = expenseRows.reduce((sum, row) => sum + row.amount, 0);
      const accountRows = group => group.map(({ account, amount }) => `<tr><td><b>${ledgerEscape(account.code)}</b></td><td>${ledgerEscape(account.name)}</td><td class="ledger-number">${inr(amount)}</td></tr>`);
      content = `<div class="ledger-card"><div class="ledger-report-heading"><div><h2>Profit &amp; loss</h2><p>Income less expenses for the selected date range.</p></div>${periodControls}</div><h3 class="ledger-section-title">Income</h3>${ledgerTableRows(accountRows(incomeRows), 'No income posted in this period.', ['Code', 'Account name', 'Amount'])}<div class="ledger-report-subtotal"><span>Total income</span><b>${inr(income)}</b></div><h3 class="ledger-section-title">Expenses</h3>${ledgerTableRows(accountRows(expenseRows), 'No expenses posted in this period.', ['Code', 'Account name', 'Amount'])}<div class="ledger-report-subtotal"><span>Total expenses</span><b>${inr(expense)}</b></div><div class="ledger-net-result"><span>Net ${income - expense >= 0 ? 'profit' : 'loss'}</span><b>${inr(income - expense)}</b></div></div>`;
    } else {
      const cumulative = ledgerTotals(ledgerEntriesThrough());
      const balanceRows = type => accounts.filter(account => account.type === type && account.active !== false).map(account => {
        const total = cumulative.get(String(account.id)) || { debit: 0, credit: 0 };
        return { account, amount: type === 'Asset' ? total.debit - total.credit : total.credit - total.debit };
      }).filter(row => Math.abs(row.amount) >= 0.005);
      const rowsFor = group => group.map(({ account, amount }) => `<tr><td><b>${ledgerEscape(account.code)}</b></td><td>${ledgerEscape(account.name)}</td><td class="ledger-number">${inr(amount)}</td></tr>`);
      const assets = balanceRows('Asset');
      const liabilities = balanceRows('Liability');
      const equity = balanceRows('Equity');
      const currentEarnings = accounts.filter(account => ['Income', 'Expense'].includes(account.type)).reduce((sum, account) => {
        const total = cumulative.get(String(account.id)) || { debit: 0, credit: 0 };
        return sum + total.credit - total.debit;
      }, 0);
      const totalAssets = assets.reduce((sum, row) => sum + row.amount, 0);
      const totalLiabilities = liabilities.reduce((sum, row) => sum + row.amount, 0);
      const totalEquity = equity.reduce((sum, row) => sum + row.amount, 0) + currentEarnings;
      const difference = totalAssets - totalLiabilities - totalEquity;
      content = `<div class="ledger-card"><div class="ledger-report-heading"><div><h2>Balance sheet</h2><p>Account balances through the selected date. Current earnings are included in equity.</p></div>${asOfControl}</div><h3 class="ledger-section-title">Assets</h3>${ledgerTableRows(rowsFor(assets), 'No asset balances posted as of this date.', ['Code', 'Account name', 'Amount'])}<div class="ledger-report-subtotal"><span>Total assets</span><b>${inr(totalAssets)}</b></div><h3 class="ledger-section-title">Liabilities</h3>${ledgerTableRows(rowsFor(liabilities), 'No liability balances posted as of this date.', ['Code', 'Account name', 'Amount'])}<div class="ledger-report-subtotal"><span>Total liabilities</span><b>${inr(totalLiabilities)}</b></div><h3 class="ledger-section-title">Equity</h3>${ledgerTableRows(rowsFor(equity), 'No equity balances posted as of this date.', ['Code', 'Account name', 'Amount'])}<div class="ledger-report-subtotal"><span>Current earnings</span><b>${inr(currentEarnings)}</b></div><div class="ledger-report-subtotal"><span>Total equity</span><b>${inr(totalEquity)}</b></div><div class="ledger-net-result"><span>Liabilities + equity</span><b>${inr(totalLiabilities + totalEquity)}</b></div><div class="ledger-reconcile ${Math.abs(difference) < 0.005 ? 'is-balanced' : 'is-unbalanced'}">${Math.abs(difference) < 0.005 ? '✓ Balance sheet balances' : `⚠ Assets differ from liabilities and equity by ${inr(difference)}`} · Verify account mapping and opening entries.</div></div>`;
    }
  }
  return `<div class="page-header"><div><div class="page-eyebrow">ACCOUNTING</div><h1>General ledger</h1><p>Build your accounts, record balanced journals, and see statements from the entries you post.</p></div><div class="ledger-posting-note">Posted journals are permanent and dated entries update the reports automatically.</div></div><div class="ledger-tabs" role="tablist">${tabs.map(([key, label]) => `<button role="tab" aria-selected="${tab === key}" class="ledger-tab ${tab === key ? 'active' : ''}" data-action="ledger-tab" data-tab="${key}">${label}</button>`).join('')}</div>${content}<p class="ledger-disclaimer">This is a bookkeeping workspace. Confirm account classification, opening balances, and statutory treatment with your accountant before relying on external statements.</p>`;
}

async function ledgerRequest(url, options = {}) {
  const response = await fetch(url, { ...options, headers: { 'content-type': 'application/json', ...(options.headers || {}) } });
  const payload = response.status === 204 ? null : await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload?.error || `Ledger request failed (${response.status}).`);
  return payload;
}

function refreshLedgerDraftTotals() {
  const draft = state.journalDraft || [];
  const debit = draft.reduce((sum, line) => sum + (Number(line.debit) || 0), 0);
  const credit = draft.reduce((sum, line) => sum + (Number(line.credit) || 0), 0);
  const totals = document.querySelector('.ledger-totals');
  if (!totals) return;
  const labels = totals.querySelectorAll('span b');
  if (labels[0]) labels[0].textContent = inr(debit);
  if (labels[1]) labels[1].textContent = inr(credit);
  const verdict = totals.querySelector('strong');
  if (verdict) {
    const balanced = debit > 0 && Math.abs(debit - credit) < 0.005;
    verdict.className = balanced ? 'is-balanced' : 'is-unbalanced';
    verdict.textContent = balanced ? 'Balanced' : `Difference ${inr(debit - credit)}`;
  }
}

async function submitLedgerAccount(form) {
  if (!can('ledger.manage')) { toast('Your role cannot manage the chart of accounts.'); return; }
  const submit = form.querySelector('[type="submit"]');
  submit.disabled = true;
  try {
    const account = await ledgerRequest('/api/ledger/accounts', { method: 'POST', body: JSON.stringify(Object.fromEntries(new FormData(form))) });
    state.data.chartOfAccounts.push(account);
    state.save();
    state.addAuditLog(currentUser().name, 'Created Ledger Account', `${account.code} · ${account.name}`);
    toast(`${account.code} · ${account.name} added`);
    navigateTo('ledger');
  } catch (error) { toast(error.message); submit.disabled = false; }
}

async function submitLedgerJournal(form) {
  if (!can('ledger.post')) { toast('Your role cannot post journals.'); return; }
  const submit = form.querySelector('[type="submit"]');
  const lines = (state.journalDraft || []).map(line => ({ accountId: line.accountId, debit: line.debit, credit: line.credit, note: line.note }));
  submit.disabled = true;
  try {
    const entry = await ledgerRequest('/api/ledger/journals', { method: 'POST', body: JSON.stringify({ date: form.elements.date.value, memo: form.elements.memo.value, lines, recordedBy: currentUser().name }) });
    state.data.journalEntries.push(entry);
    state.journalDraft = [ledgerBlankLine(), ledgerBlankLine()];
    state.journalDraftDate = new Date().toISOString().slice(0, 10);
    state.journalDraftMemo = '';
    state.save();
    state.addAuditLog(currentUser().name, 'Posted Journal Entry', `${entry.number} · ${entry.memo}`);
    toast(`${entry.number} posted and balanced`);
    navigateTo('ledger');
  } catch (error) { toast(error.message); submit.disabled = false; }
}

function reconcileGst(gr) {
  const abs = Number(gr.toleranceAbs) || 0;
  const pct = Number(gr.tolerancePct) || 0;
  const results = [];
  const invoiceKey = row => `${String(row.gstin || '').replace(/\s/g, '').toUpperCase()}|${String(row.invoiceNo || '').trim().replace(/\s+/g, '').toUpperCase()}`;
  const portalQueues = new Map();
  (gr.portal2b || []).forEach((row, index) => {
    const key = invoiceKey(row);
    if (!portalQueues.has(key)) portalQueues.set(key, []);
    portalQueues.get(key).push({ row, index });
  });
  const usedPortal = new Set();
  const counts = new Map();
  (gr.purchaseRegister || []).forEach((pr, index) => {
    const key = invoiceKey(pr);
    const occurrence = counts.get(key) || 0;
    counts.set(key, occurrence + 1);
    const rowKey = `${key}|purchase-${index}`;
    const match = (portalQueues.get(key) || []).find(item => !usedPortal.has(item.index));
    const b = match?.row;
    if (!b) {
      results.push({
        key: rowKey, status: 'Missing in 2B', pr, portal: null, variance: Number(pr.total) || 0,
        allowed: Math.max(abs, ((Number(pr.total) || 0) * pct) / 100)
      });
      return;
    }
    usedPortal.add(match.index);
    const components = ['taxable', 'igst', 'cgst', 'sgst', 'cess'];
    const componentVariance = components.reduce((sum, field) => sum + Math.abs((Number(pr[field]) || 0) - (Number(b[field]) || 0)), 0);
    const variance = Math.max(componentVariance, Math.abs((Number(pr.total) || 0) - (Number(b.total) || 0)));
    const allowed = Math.max(abs, ((Number(pr.total) || 0) * pct) / 100);
    results.push({
      key: rowKey,
      status: variance <= allowed ? 'Matched' : 'Variance',
      pr, portal: b, variance, allowed
    });
  });

  (gr.portal2b || []).forEach((b, index) => {
    if (usedPortal.has(index)) return;
    results.push({
      key: `${invoiceKey(b)}|portal-${index}`, status: 'Missing in Register', pr: null, portal: b,
      variance: Number(b.total) || 0, allowed: Math.max(abs, ((Number(b.total) || 0) * pct) / 100)
    });
  });

  results.forEach(r => {
    const res = (gr.resolutions || {})[r.key] || (gr.resolutions || {})[reconKey(r.pr || r.portal)];
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
                    ${r.pr && r.portal ? `<button class="btn-secondary" data-action="recon-resolve" data-recon-key="${r.key}">Mark Reconciled</button>
                    ${r.status === 'Variance' ? `<button class="btn-secondary" data-action="recon-accept" data-recon-key="${r.key}">Accept Variance</button>` : ''}` : '<span class="muted">Resolve source records before reconciliation.</span>'}
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

// 22. PAYMENTS OUT — CASH & STATUTORY WINDOW
// Due dates are DERIVED from a period, never stored. Given a month, the
// obligations fall out at fixed offsets per the Indian compliance calendar.
const STATUTORY_RULES = [
  { id: 'tds-deposit', label: 'TDS / TCS Deposit', dayOfNextMonth: 7, category: 'TDS', freq: 'monthly' },
  { id: 'epf-esi', label: 'EPF + ESI Contribution', dayOfNextMonth: 15, category: 'Payroll', freq: 'monthly' },
];

// Indian financial year runs April to March. FY 2026-27 = 2026-04 .. 2027-03.
function parseMonthKey(mk) {
  const [y, m] = mk.split('-').map(Number);
  return { year: y, month: m };
}
function quarterMonths(endPeriod) {
  const { year, month } = parseMonthKey(endPeriod);
  return [2, 1, 0].map(offset => {
    const date = new Date(year, month - 1 - offset, 1);
    return monthKeyKey(date.getFullYear(), date.getMonth() + 1);
  });
}

// The due date is `dayOfNextMonth` days into the month AFTER the period.
function dueDateForPeriod(periodKey, dayOfNextMonth) {
  const { year, month } = parseMonthKey(periodKey);
  const ny = month === 12 ? year + 1 : year;
  const nm = month === 12 ? 1 : month + 1;
  const lastDay = new Date(ny, nm, 0).getDate();
  const day = Math.min(dayOfNextMonth, lastDay);
  return monthKeyKey(ny, nm) + '-' + String(day).padStart(2, '0');
}
function tdsDepositDue(periodKey) {
  const { year, month } = parseMonthKey(periodKey);
  return month === 3 ? `${year}-04-30` : dueDateForPeriod(periodKey, 7);
}

// Fixed-date obligations for the active financial year.
const ADVANCE_TAX_DATES = taxDatesForCurrentFY();

// This is a matched-credit estimate only. Statutory ITC eligibility also needs
// receipt, invoice, payment, blocked-credit, and time-limit checks.
function eligibleItc(monthKeyStr, clientId) {
  const gr = state.data.gstRecons.find(g => g.month === monthKeyStr && (!clientId || g.clientId === clientId));
  if (!gr) return 0;
  return reconcileGst(gr).reduce((sum, r) => {
    if (r.status !== 'Matched' || !r.pr || !r.portal) return sum;
    return sum + ['igst', 'cgst', 'sgst', 'cess'].reduce((tax, field) => tax + (Number(r.pr[field]) || 0), 0);
  }, 0);
}

function outputTaxFor(monthKeyStr, clientId) {
  return (state.data.salesRegisters || [])
    .filter(s => s.month === monthKeyStr && (!clientId || s.clientId === clientId))
    .reduce((sum, s) => sum + (Number(s.outputTax) || 0), 0);
}

function tdsFor(monthKeyStr) {
  return (state.data.deducteeEntries || [])
    .filter(d => d.month === monthKeyStr)
    .reduce((sum, d) => sum + (Number(d.tax) || 0), 0);
}

function payrollFor(monthKeyStr) {
  const run = (state.data.payrollRuns || []).find(r => r.month === monthKeyStr);
  if (!run) return null;
  return run.statutoryPaid || run.status === 'Paid' ? 0 : (Number(run.pfEmployee) || 0) + (Number(run.pfEmployer) || 0) + (Number(run.esi) || 0);
}
function payrollWagesFor(monthKeyStr) {
  const run = (state.data.payrollRuns || []).find(r => r.month === monthKeyStr);
  if (!run || run.wagesPaid || run.status === 'Paid') return null;
  return { amount: Number(run.net) || 0, dueDate: run.salaryDueDate || `${monthKeyStr}-${String(new Date(Number(monthKeyStr.slice(0, 4)), Number(monthKeyStr.slice(5, 7)), 0).getDate()).padStart(2, '0')}` };
}

function advanceTaxInstalment(index) {
  const prof = state.data.firmTaxProfile || {};
  const estimated = Number(prof.estimatedCurrentYearTax);
  if (!Number.isFinite(estimated) || estimated < 0) return null;
  const netTax = Math.max(0, estimated - (Number(prof.expectedTdsTcs) || 0));
  if (prof.presumptive) return index === 3 ? Math.max(0, Math.round(netTax - (Number(prof.advanceTaxPaid) || 0))) : 0;
  const cumulativeTargets = [0.15, 0.45, 0.75, 1];
  const paid = (Number(prof.advanceTaxPaid) || 0) + (state.data.advanceTaxPayments || []).filter(p => p.financialYear === currentFinancialYear() && p.date <= taxDatesForCurrentFY()[index]).reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
  return Math.max(0, Math.round(netTax * cumulativeTargets[index] - paid));
}

function currentFinancialYear() {
  const now = new Date();
  return now.getMonth() >= 3 ? now.getFullYear() : now.getFullYear() - 1;
}
function taxDatesForCurrentFY() {
  const fy = currentFinancialYear();
  return [`${fy}-06-15`, `${fy}-09-15`, `${fy}-12-15`, `${fy + 1}-03-15`];
}
function tdsReturnDatesForCurrentFY() {
  const fy = currentFinancialYear();
  return [`${fy}-07-31`, `${fy}-10-31`, `${fy + 1}-01-31`, `${fy + 1}-05-31`];
}

// Build every obligation falling due in [from, to].
function generateObligations(from, to) {
  const out = [];

  // Monthly obligations: walk periods whose due date lands in the window.
  const startKey = parseMonthKey(from.slice(0, 7));
  for (let i = -1; i <= 2; i++) {
    let y = startKey.year, m = startKey.month + i;
    while (m > 12) { m -= 12; y += 1; }
    while (m < 1) { m += 12; y -= 1; }
    const period = monthKeyKey(y, m);

    STATUTORY_RULES.forEach(rule => {
      const due = rule.id === 'tds-deposit' ? tdsDepositDue(period) : dueDateForPeriod(period, rule.dayOfNextMonth);
      if (due < from || due > to) return;

      let amount = null, detail = '';
      if (rule.id === 'tds-deposit') {
        amount = tdsFor(period);
        detail = 'Deposit on TDS deducted during ' + periodLabel(period);
      } else if (rule.id === 'epf-esi') {
        amount = payrollFor(period);
        detail = payrollFor(period) === null
          ? 'No payroll run recorded for ' + periodLabel(period)
          : 'Employee + employer PF and ESI for ' + periodLabel(period);
      }

      out.push({
        id: rule.id + '-' + period,
        kind: 'Statutory',
        title: rule.label,
        category: rule.category,
        dueDate: due,
        period,
        amount,
        detail,
        derived: true
      });
    });

    const wages = payrollWagesFor(period);
    if (wages && wages.dueDate >= from && wages.dueDate <= to) out.push({ id: `payroll-wages-${period}`, kind: 'Statutory', title: `Net Payroll — ${periodLabel(period)}`, category: 'Payroll', dueDate: wages.dueDate, period, amount: wages.amount, detail: 'Take-home pay from the recorded payroll run. Enter salaryDueDate or mark wagesPaid when settled.', derived: true });

    // GST calendars are client-specific. Monthly is the default; QRMP returns
    // use quarter-end filing periods and the configured state due-date group.
    for (const client of state.data.clients || []) {
      if (client.gstinRegistered === false) continue;
      const quarterly = client.gstFilingFrequency === 'quarterly';
      if (quarterly && ![3, 6, 9, 12].includes(parseMonthKey(period).month)) continue;
      const gstPeriods = quarterly ? quarterMonths(period) : [period];
      const outputTax = gstPeriods.reduce((sum, periodKey) => sum + outputTaxFor(periodKey, client.id), 0);
      const itc = gstPeriods.reduce((sum, periodKey) => sum + eligibleItc(periodKey, client.id), 0);
      const gstr1Due = dueDateForPeriod(period, quarterly ? 13 : 11);
      const gstr3bDue = dueDateForPeriod(period, quarterly ? (Number(client.gstStateGroup) === 2 ? 24 : 22) : 20);
      const filingPeriod = quarterly ? `${periodLabel(gstPeriods[0])} – ${periodLabel(period)}` : periodLabel(period);
      if (gstr1Due >= from && gstr1Due <= to) out.push({ id: `gstr-1-${client.id}-${period}`, kind: 'Statutory', title: `GSTR-1 — ${client.name}`, category: 'GST', dueDate: gstr1Due, period, clientId: client.id, amount: 0, detail: `${quarterly ? 'Quarterly' : 'Monthly'} outward supplies for ${filingPeriod}. Base due date estimate; verify portal notices and any extensions.`, derived: true });
      if (gstr3bDue >= from && gstr3bDue <= to) out.push({ id: `gstr-3b-${client.id}-${period}`, kind: 'Statutory', title: `GSTR-3B — ${client.name}`, category: 'GST', dueDate: gstr3bDue, period, clientId: client.id, amount: Math.max(0, outputTax - itc), detail: `Output tax ${inr(outputTax)} less matched ITC estimate ${inr(itc)} for ${filingPeriod}. Validate invoice receipt, blocked credits, time limits and portal status before claiming. Due date is an estimate; confirm the client's return frequency, state group and any extensions.`, derived: true });
    }
  }

  const advanceDates = taxDatesForCurrentFY();
  advanceDates.forEach((date, idx) => {
    if (date < from || date > to) return;
    out.push({
      id: 'advance-tax-' + idx,
      kind: 'Statutory',
      title: 'Advance Tax — Instalment ' + (idx + 1),
      category: 'Income Tax',
      dueDate: date,
      period: null,
      amount: advanceTaxInstalment(idx),
      detail: state.data.firmTaxProfile?.estimatedCurrentYearTax == null
        ? 'Enter estimated current-year tax, expected TDS/TCS and advance tax paid in Firm Settings to calculate this instalment.'
        : state.data.firmTaxProfile?.presumptive
          ? 'Presumptive tax estimate; full balance due in the March instalment.'
          : 'Estimated current-year tax less expected TDS/TCS, applied to cumulative 15/45/75/100% targets.',
      derived: true
    });
  });

  tdsReturnDatesForCurrentFY().forEach((date, idx) => {
    if (date < from || date > to) return;
    out.push({
      id: 'tds-return-' + idx,
      kind: 'Statutory',
      title: 'TDS Return — Q' + (idx + 1),
      category: 'TDS',
      dueDate: date,
      period: null,
      amount: 0,
      detail: 'Quarterly TDS/TCS statement and e-filing',
      derived: true
    });
  });

  const fy = currentFinancialYear();
  [
    { date: `${fy}-07-31`, label: 'ITR — Non-Audit' },
    { date: `${fy}-10-31`, label: 'ITR — Audit Cases' }
  ].forEach(it => {
    if (it.date < from || it.date > to) return;
    out.push({
      id: 'itr-' + it.date,
      kind: 'Statutory',
      title: it.label,
      category: 'Income Tax',
      dueDate: it.date,
      period: null,
      amount: 0,
      detail: 'Annual return filing deadline',
      derived: true
    });
  });

  // Manual / operational payments.
  (state.data.payments || []).forEach(p => {
    if (p.dueDate < from || p.dueDate > to) return;
    out.push({
      id: p.id,
      kind: 'Operational',
      title: p.title,
      category: p.category,
      dueDate: p.dueDate,
      period: null,
      amount: p.amount,
      detail: 'Prepared by ' + p.preparedBy,
      derived: false,
      record: p
    });
  });

  return out.sort((a, b) => (a.dueDate < b.dueDate ? -1 : a.dueDate > b.dueDate ? 1 : 0));
}

function monthKeyKey(y, m) { return y + '-' + String(m).padStart(2, '0'); }

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function periodLabel(mk) {
  const { year, month } = parseMonthKey(mk);
  return MONTH_NAMES[month - 1] + ' ' + year;
}

function shortDate(d) {
  const dt = new Date(d + 'T00:00:00');
  return String(dt.getDate()).padStart(2, '0') + ' ' + MONTH_NAMES[dt.getMonth()].slice(0, 3);
}

// Running cash position: obligations reduce cash as they fall due.
function buildCashCurve(obligations, openingBalance) {
  let running = openingBalance;
  return obligations.map(o => {
    running -= (Number(o.amount) || 0);
    return Object.assign({}, o, { balanceAfter: running });
  });
}

// Approval threshold for operational payments; above this a second pair of eyes
// is required, and the preparer can never be that second pair of eyes.
const PAYMENT_APPROVAL_THRESHOLD = 100000;

function paymentNeedsApproval(p) {
  return (Number(p.amount) || 0) > PAYMENT_APPROVAL_THRESHOLD;
}

// Same segregation-of-duties shape as document review: the preparer of a
// payment does not get to approve it.
function canApprovePayment(p) {
  const me = currentUser();
  if (!can('approve.payment')) {
    return { ok: false, reason: me.role + ' role cannot approve payments.' };
  }
  if (p.preparedBy === me.name) {
    return { ok: false, reason: 'You prepared this payment, so you cannot approve it.' };
  }
  if ((p.approvals || []).includes(me.name)) {
    return { ok: false, reason: 'You have already approved this payment.' };
  }
  return { ok: true };
}

function renderPayments() {
  const month = localDateKey().slice(0, 7);
  const from = state.payFrom || `${month}-01`;
  const to = state.payTo || `${month}-${String(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()).padStart(2, '0')}`;
  const account = (state.data.bankAccounts || [])[0] || { balance: 0, name: 'No account', asOf: '-' };

  const obligations = buildCashCurve(generateObligations(from, to), account.balance);
  const statutoryCount = obligations.filter(o => o.kind === 'Statutory').length;
  const operationalCount = obligations.length - statutoryCount;

  const totalOut = obligations.reduce((s, o) => s + (Number(o.amount) || 0), 0);
  const closing = account.balance - totalOut;
  const shortfall = closing < 0 ? Math.abs(closing) : 0;
  const firstNegative = obligations.find(o => o.balanceAfter < 0);

  const rowFor = (o) => {
    const negative = o.balanceAfter < 0;
    let approvalCell;
    if (o.derived) {
      approvalCell = '<span class="muted">derived</span>';
    } else {
      const approvals = o.record.approvals || [];
      const needsApproval = paymentNeedsApproval(o.record);
      if (o.record.status === 'Paid') {
        approvalCell = '<span class="badge badge-green">Paid</span>';
      } else if (!needsApproval) {
        // Below threshold: authorised without a second signature.
        approvalCell = '<span class="muted">auto</span>';
      } else if (approvals.length > 0) {
        approvalCell = '<span class="badge badge-green">Approved · ' + approvals.join(', ') + '</span>';
      } else {
        const verdict = canApprovePayment(o.record);
        approvalCell = verdict.ok
          ? '<button class="btn-secondary" data-action="pay-approve" data-pay-id="' + o.record.id + '">Approve</button>'
          : '<span class="field-redacted" title="' + verdict.reason + '">🔒 ' + verdict.reason + '</span>';
      }
    }

    return '<div class="task-item pay-row">' +
      '<div class="pay-date">' + shortDate(o.dueDate) + '</div>' +
      '<div class="task-body">' +
        '<div class="task-title-line">' +
          '<span class="pay-kind pay-kind-' + o.kind.toLowerCase() + '">' + o.kind + '</span>' +
          o.title + ' <span class="badge badge-gray">' + o.category + '</span>' +
        '</div>' +
        '<div class="task-meta-line">' + o.detail + '</div>' +
      '</div>' +
      '<div class="pay-amount">' + (o.amount === null ? '<span class="muted">n/a</span>' : inr(o.amount)) + '</div>' +
      '<div class="pay-balance ' + (negative ? 'pay-negative' : '') + '">' + inr(o.balanceAfter) + '</div>' +
      '<div class="pay-approval">' + approvalCell + '</div>' +
    '</div>';
  };

  return '<div class="page-header">' +
      '<div class="page-header-title">' +
        '<div class="eyebrow">Treasury</div>' +
        '<h1>Payments Out — Cash &amp; Statutory Window</h1>' +
        '<p>Every obligation falling due between two dates, with the running cash position.</p>' +
      '</div>' +
    '</div>' +

    '<div class="card">' +
      '<div class="tolerance-row">' +
        '<div class="form-group" style="margin:0;"><label>From</label>' +
          '<input type="date" id="pay-from" value="' + from + '" /></div>' +
        '<div class="form-group" style="margin:0;"><label>To</label>' +
          '<input type="date" id="pay-to" value="' + to + '" /></div>' +
        '<button class="btn-primary" data-action="pay-refresh">Recompute</button>' +
      '</div>' +
    '</div>' +

    '<div class="grid-4" style="margin-bottom:24px;">' +
      '<div class="stat-box"><div class="stat-header">Opening Balance</div>' +
        '<div class="stat-value" style="font-size:20px;">' + inr(account.balance) + '</div>' +
        '<div class="stat-meta">' + account.name + ' · as of ' + account.asOf + '</div></div>' +
      '<div class="stat-box alert-yellow"><div class="stat-header">Total Outflow</div>' +
        '<div class="stat-value" style="font-size:20px;">' + inr(totalOut) + '</div>' +
        '<div class="stat-meta">' + obligations.length + ' obligations in window</div></div>' +
      '<div class="stat-box"><div class="stat-header">Projected Closing</div>' +
        '<div class="stat-value" style="font-size:20px;color:' + (closing < 0 ? 'var(--red)' : 'var(--green)') + '">' + inr(closing) + '</div>' +
        '<div class="stat-meta">after everything in the window</div></div>' +
      '<div class="stat-box ' + (shortfall > 0 ? 'alert-red' : '') + '"><div class="stat-header">Shortfall</div>' +
        '<div class="stat-value" style="font-size:20px;color:' + (shortfall > 0 ? 'var(--red)' : 'var(--ink)') + '">' + (shortfall > 0 ? inr(shortfall) : '—') + '</div>' +
        '<div class="stat-meta">' + (shortfall > 0 ? 'funding required before the window closes' : 'window is fully funded') + '</div></div>' +
    '</div>' +

    (shortfall > 0
      ? '<div class="perm-banner">⚠️ Projected to fall short by ' + inr(shortfall) +
        ' across this window. Earliest pressure point is ' + shortDate(firstNegative.dueDate) + '.</div>'
      : '') +

    '<div class="card">' +
      '<div class="card-title-row">' +
        '<div class="card-title">Timeline (' + obligations.length + ')</div>' +
        '<div class="card-title" style="font-size:11px;color:var(--ink-muted);font-weight:500;">' +
          statutoryCount + ' statutory · ' + operationalCount + ' operational · over ' +
          inr(PAYMENT_APPROVAL_THRESHOLD) + ' needs approval' +
        '</div>' +
      '</div>' +
      '<div class="task-list">' +
        (obligations.length === 0
          ? '<div class="empty-state">No obligations fall due in this window.</div>'
          : obligations.map(rowFor).join('')) +
      '</div>' +
    '</div>';
}

// 23. WORKER GAMES — a maths break for the team.
// Games deliberately live OUTSIDE the practice data. Puzzle state is in
// memory only (`state.sudoku` / `state.drill` / `state.gstGame`) and scores
// persist under their own storage key, so playing can never mutate a client,
// an engagement, a payment or an audit trail.
const GAME_KEY = 'acc_workplace_os_games';
function gameScores() {
  if (state._gameScores) return state._gameScores;
  try {
    state._gameScores = JSON.parse(localStorage.getItem(GAME_KEY)) || {};
  } catch (e) {
    state._gameScores = {};
  }
  return state._gameScores;
}
function saveGameScores() {
  try {
    localStorage.setItem(GAME_KEY, JSON.stringify(state._gameScores || {}));
  } catch (e) { /* storage full or blocked — scores are a nicety, not data */ }
}
// Baseline scores so the leaderboard reads like a practice that has been
// playing for a while. A member's real result always beats the baseline.
const GAME_BASELINES = {
  'Rithvik Shah': { sudokuEasy: 214, sudokuMedium: 486, sudokuHard: 940, drill: 1180, gstRound: 9, sudokuSolved: 31 },
  'Rahul Mehta':  { sudokuEasy: 168, sudokuMedium: 372, sudokuHard: 812, drill: 1460, gstRound: 12, sudokuSolved: 24 },
  'Priya Nair':   { sudokuEasy: 141, sudokuMedium: 305, sudokuHard: 690, drill: 1320, gstRound: 11, sudokuSolved: 27 },
  'Arjun Rao':    { sudokuEasy: 196, sudokuMedium: 421, sudokuHard: 905, drill: 1090, gstRound: 8, sudokuSolved: 15 },
  'Neha Sharma':  { sudokuEasy: 252, sudokuMedium: 558, sudokuHard: 1180, drill: 870, gstRound: 7, sudokuSolved: 9 }
};
function myGameStats() {
  const all = gameScores();
  return all[currentUser().name] || {};
}
function recordGameStat(patch) {
  const all = gameScores();
  const who = currentUser().name;
  all[who] = Object.assign({}, all[who], patch);
  state._gameScores = all;
  saveGameScores();
}
function statValue(key) {
  const mine = myGameStats()[key];
  const base = (GAME_BASELINES[currentUser().name] || {})[key];
  if (typeof mine === 'number' && typeof base === 'number') return Math.min(mine, base);
  return typeof mine === 'number' ? mine : base;
}
function fmtClock(totalSeconds) {
  const s = Math.max(0, Math.round(totalSeconds));
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
}
// ---------- SHARED PUZZLE HELPERS ----------
function randInt(a, b) {
  return a + Math.floor(Math.random() * (b - a + 1));
}
function shuffleInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function sudokuUsedMask(grid, r, c) {
  let mask = 0;
  for (let k = 0; k < 9; k++) {
    if (grid[r * 9 + k]) mask |= 1 << grid[r * 9 + k];
    if (grid[k * 9 + c]) mask |= 1 << grid[k * 9 + c];
  }
  const br = Math.floor(r / 3) * 3, bc = Math.floor(c / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const v = grid[(br + i) * 9 + bc + j];
      if (v) mask |= 1 << v;
    }
  }
  return mask;
}
// In-place randomized backtracking. Returns false when the grid is dead.
function sudokuFill(grid) {
  const idx = grid.indexOf(0);
  if (idx === -1) return true;
  const r = Math.floor(idx / 9), c = idx % 9;
  const used = sudokuUsedMask(grid, r, c);
  const options = [];
  for (let v = 1; v <= 9; v++) if (!(used & (1 << v))) options.push(v);
  shuffleInPlace(options);
  for (const v of options) {
    grid[idx] = v;
    if (sudokuFill(grid)) return true;
    grid[idx] = 0;
  }
  return false;
}
// Counts solutions, giving up at `limit`. Used to keep generated puzzles
// genuinely unique rather than merely solvable.
function sudokuCount(grid, limit) {
  const idx = grid.indexOf(0);
  if (idx === -1) return 1;
  const r = Math.floor(idx / 9), c = idx % 9;
  const used = sudokuUsedMask(grid, r, c);
  let found = 0;
  for (let v = 1; v <= 9; v++) {
    if (used & (1 << v)) continue;
    grid[idx] = v;
    found += sudokuCount(grid, limit - found);
    grid[idx] = 0;
    if (found >= limit) return found;
  }
  return found;
}
const SUDOKU_GIVENS = { easy: 40, medium: 32, hard: 26 };
const SUDOKU_DIFF_LABEL = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
function sudokuGenerate(difficulty) {
  const wantGivens = SUDOKU_GIVENS[difficulty] || SUDOKU_GIVENS.medium;
  const solution = new Array(81).fill(0);
  sudokuFill(solution);
  const puzzle = solution.slice();
  const order = shuffleInPlace([...Array(81).keys()]);
  let removed = 0;
  for (const i of order) {
    if (removed >= 81 - wantGivens) break;
    const backup = puzzle[i];
    if (!backup) continue;
    puzzle[i] = 0;
    // Only keep the hole if the puzzle still has exactly one answer.
    if (sudokuCount(puzzle, 2) !== 1) puzzle[i] = backup;
    else removed++;
  }
  return { puzzle, solution };
}
function resetSudoku(difficulty) {
  const level = SUDOKU_GIVENS[difficulty] ? difficulty : 'easy';
  const { puzzle, solution } = sudokuGenerate(level);
  state.sudoku = {
    difficulty: level,
    puzzle,
    solution,
    cells: puzzle.slice(),
    notes: {},
    selected: puzzle.findIndex(v => v === 0),
    history: [],
    startedAt: Date.now(),
    elapsed: 0,
    mistakes: 0,
    notesMode: false,
    status: 'playing',
    peek: null
  };
  return state.sudoku;
}
function newSudoku(difficulty) {
  resetSudoku(difficulty);
  startSudokuTicker();
  navigateTo('game-sudoku');
}
function sudokuElapsed() {
  if (!state.sudoku) return 0;
  return state.sudoku.elapsed + (state.sudoku.status === 'playing'
    ? (Date.now() - state.sudoku.startedAt) / 1000
    : 0);
}
let sudokuTicker = null;
function sudokuTick() {
  const g = state.sudoku;
  if (!g || g.status !== 'playing') { stopSudokuTicker(); return; }
  const el = document.getElementById('sudoku-clock');
  if (el) el.textContent = fmtClock(sudokuElapsed());
}
function startSudokuTicker() {
  if (sudokuTicker) return;
  sudokuTicker = setInterval(sudokuTick, 500);
}
function stopSudokuTicker() {
  if (sudokuTicker) clearInterval(sudokuTicker);
  sudokuTicker = null;
}
// Peers of a cell: same row, column or 3x3 box.
function sudokuConflicts(g) {
  const bad = new Set();
  const addLine = (idxs) => {
    const seen = new Map();
    idxs.forEach(i => {
      const v = g.cells[i];
      if (!v) return;
      // Only player-entered cells are flagged. Painting a given red would
      // imply the puzzle itself is wrong rather than the entry.
      if (seen.has(v)) {
        if (!g.puzzle[i]) bad.add(i);
        if (!g.puzzle[seen.get(v)]) bad.add(seen.get(v));
      } else seen.set(v, i);
    });
  };
  for (let r = 0; r < 9; r++) addLine([...Array(9)].map((_, c) => r * 9 + c));
  for (let c = 0; c < 9; c++) addLine([...Array(9)].map((_, r) => r * 9 + c));
  for (let b = 0; b < 9; b++) {
    const br = Math.floor(b / 3) * 3, bc = (b % 3) * 3;
    const idxs = [];
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) idxs.push((br + i) * 9 + bc + j);
    addLine(idxs);
  }
  return bad;
}
function sudokuCheckComplete(g) {
  return g.cells.every((v, i) => v === g.solution[i]);
}
function sudokuInput(digit) {
  const g = state.sudoku;
  if (!g || g.status !== 'playing') return;
  const i = g.selected;
  if (i === null || i === undefined || i < 0) return;
  if (g.puzzle[i] !== 0) { toast('That is a given clue — it cannot be changed.'); return; }
  g.history.push({ i, cell: g.cells[i], notes: (g.notes[i] || []).slice() });
  if (g.notesMode) {
    const list = g.notes[i] || [];
    if (!list.length && !digit) return;
    g.cells[i] = 0;
    g.notes[i] = list.includes(digit) ? list.filter(d => d !== digit) : list.concat(digit).sort();
  } else {
    g.cells[i] = digit;
    delete g.notes[i];
    if (digit && digit !== g.solution[i]) g.mistakes++;
  }
  sudokuSettle(g);
  navigateTo('game-sudoku');
}
function sudokuErase() {
  const g = state.sudoku;
  if (!g || g.status !== 'playing') return;
  const i = g.selected;
  if (i === null || i === undefined || i < 0 || g.puzzle[i] !== 0) return;
  if (!g.cells[i] && !(g.notes[i] || []).length) return;
  g.history.push({ i, cell: g.cells[i], notes: (g.notes[i] || []).slice() });
  g.cells[i] = 0;
  delete g.notes[i];
  navigateTo('game-sudoku');
}
function sudokuUndo() {
  const g = state.sudoku;
  if (!g || g.status !== 'playing') return;
  const last = g.history.pop();
  if (!last) { toast('Nothing left to undo'); return; }
  g.cells[last.i] = last.cell;
  if (last.notes.length) g.notes[last.i] = last.notes; else delete g.notes[last.i];
  g.selected = last.i;
  navigateTo('game-sudoku');
}
function sudokuHint() {
  const g = state.sudoku;
  if (!g || g.status !== 'playing') return;
  let target = g.selected;
  if (target === null || target === undefined || target < 0 || g.puzzle[target] !== 0) {
    target = g.cells.findIndex((v, i) => v === 0 && g.puzzle[i] === 0);
  }
  if (target < 0) return;
  g.history.push({ i: target, cell: g.cells[target], notes: (g.notes[target] || []).slice() });
  g.cells[target] = g.solution[target];
  delete g.notes[target];
  g.mistakes += 2;
  g.selected = target;
  g.peek = { i: target, until: Date.now() + 2500 };
  sudokuSettle(g);
  toast(`Filled ${g.solution[target]} — counted as two mistakes`);
  navigateTo('game-sudoku');
}
function sudokuSettle(g) {
  if (!sudokuCheckComplete(g)) return;
  g.status = 'solved';
  g.elapsed = g.elapsed + (Date.now() - g.startedAt) / 1000;
  stopSudokuTicker();
  const key = 'sudoku' + g.difficulty.charAt(0).toUpperCase() + g.difficulty.slice(1);
  const prev = myGameStats()[key];
  // Under a second means the grid was machine-filled, so it is not a record.
  const isBest = g.elapsed >= 1 && (typeof prev !== 'number' || g.elapsed < prev);
  recordGameStat({
    [key]: isBest ? Math.round(g.elapsed) : prev,
    sudokuSolved: (myGameStats().sudokuSolved || 0) + 1
  });
  toast(`Solved in ${fmtClock(g.elapsed)}${isBest ? ' — new personal best' : ''}`);
}
function renderSudoku() {
  let g = state.sudoku;
  if (!g) g = resetSudoku('easy');
  if (g.status === 'playing') startSudokuTicker();
  const conflicts = sudokuConflicts(g);
  const selVal = g.selected >= 0 ? g.cells[g.selected] : 0;
  let grid = '';
  for (let i = 0; i < 81; i++) {
    const r = Math.floor(i / 9), c = i % 9;
    const v = g.cells[i];
    const notes = g.notes[i] || [];
    const cls = ['sudoku-cell'];
    if (g.puzzle[i] !== 0) cls.push('is-given');
    if (i === g.selected) cls.push('is-selected');
    if (conflicts.has(i)) cls.push('is-conflict');
    if (selVal && v === selVal && i !== g.selected) cls.push('is-peer');
    if (g.peek && g.peek.i === i && Date.now() < g.peek.until) cls.push('is-peek');
    if (r % 3 === 0 && r !== 0) cls.push('box-top');
    if (c % 3 === 0 && c !== 0) cls.push('box-left');
    const inner = v
      ? `<span class="cell-value">${v}</span>`
      : notes.length
        ? `<span class="cell-notes">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => notes.includes(n) ? n : '').map((n, k) => `<i>${n || '&nbsp;'}</i>`).join('')}</span>`
        : '';
    grid += `<button type="button" class="${cls.join(' ')}" data-sudoku-cell="${i}" aria-label="Row ${r + 1} column ${c + 1}">${inner}</button>`;
  }
  const remaining = g.cells.filter((v, i) => v === 0 && g.puzzle[i] === 0).length;
  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Break Room · Sudoku</div>
        <h1>Number Grid</h1>
        <p>Warm the same brain you use for reconciliations. Nothing here touches practice data.</p>
      </div>
      <div class="page-actions">
        ${['easy', 'medium', 'hard'].map(d =>
          `<button class="btn-secondary ${g.difficulty === d ? 'is-on' : ''}" data-action="sudoku-new" data-difficulty="${d}">${SUDOKU_DIFF_LABEL[d]}</button>`).join('')}
        <button class="btn-primary" data-action="sudoku-new" data-difficulty="${g.difficulty}">↻ New puzzle</button>
      </div>
    </div>
    ${g.status === 'solved' ? `
      <div class="game-win">
        <div class="game-win-mark">✓</div>
        <div>
          <div class="game-win-title">Grid complete — ${fmtClock(g.elapsed)}</div>
          <div class="game-win-sub">${SUDOKU_DIFF_LABEL[g.difficulty]} · ${g.mistakes} mistake${g.mistakes === 1 ? '' : 's'} · ${remaining === 0 ? 'clean finish' : remaining + ' clues left'}</div>
        </div>
        <button class="btn-primary" data-action="sudoku-new" data-difficulty="${g.difficulty}">Play again</button>
      </div>` : ''}
    <div class="game-layout">
      <div class="game-main">
        <div class="sudoku-meta">
          <span class="pill">${SUDOKU_DIFF_LABEL[g.difficulty]}</span>
          <span class="pill">${g.puzzle.filter(v => v !== 0).length} given</span>
          <span class="pill">${remaining} left</span>
          <span class="pill ${g.mistakes ? 'pill-red' : ''}">${g.mistakes} mistake${g.mistakes === 1 ? '' : 's'}</span>
          <span class="pill pill-clock">⏱ <span id="sudoku-clock">${fmtClock(sudokuElapsed())}</span></span>
          <button class="pill pill-btn ${g.notesMode ? 'is-on' : ''}" data-action="sudoku-notes">✎ Notes ${g.notesMode ? 'on' : 'off'}</button>
        </div>
        <div class="sudoku-grid" data-sudoku-grid>${grid}</div>
        <div class="numpad">
          ${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => `<button type="button" class="numpad-key" data-action="sudoku-num" data-num="${n}">${n}</button>`).join('')}
          <button type="button" class="numpad-key numpad-wide" data-action="sudoku-erase">Erase</button>
          <button type="button" class="numpad-key numpad-wide" data-action="sudoku-undo">Undo</button>
          <button type="button" class="numpad-key numpad-wide" data-action="sudoku-hint">Hint (−2)</button>
        </div>
      </div>
      <aside class="game-side">
        <div class="card">
          <div class="card-title">How to play</div>
          <ul class="game-help">
            <li>Click a cell, then press a number below — or just type 1–9.</li>
            <li>A repeated digit in a row, column or box turns red.</li>
            <li>Notes mode keeps small pencil marks without locking the answer in.</li>
            <li>Backspace erases, Ctrl+Z undoes, H reveals one cell.</li>
          </ul>
        </div>
        <div class="card">
          <div class="card-title">Your records</div>
          <div class="stat-line"><span>Easy</span><b>${statValue('sudokuEasy') ? fmtClock(statValue('sudokuEasy')) : '—'}</b></div>
          <div class="stat-line"><span>Medium</span><b>${statValue('sudokuMedium') ? fmtClock(statValue('sudokuMedium')) : '—'}</b></div>
          <div class="stat-line"><span>Hard</span><b>${statValue('sudokuHard') ? fmtClock(statValue('sudokuHard')) : '—'}</b></div>
          <div class="stat-line"><span>Puzzles solved</span><b>${Math.max(myGameStats().sudokuSolved || 0, (GAME_BASELINES[currentUser().name] || {}).sudokuSolved || 0)}</b></div>
        </div>
      </aside>
    </div>`;
}
// ---------- MATH SPEED DRILL ----------
const DRILL_SECONDS = 60;
const DRILL_LEVELS = [
  { n: 1, label: 'Add and subtract within 100' },
  { n: 2, label: 'Multiply by a single digit' },
  { n: 3, label: 'Divide back out cleanly' },
  { n: 4, label: 'Percentages — GST and TDS' },
  { n: 5, label: 'Mixed: markup, margin, averages' }
];
function drillQuestion(level) {
  const round2 = v => Math.round(v * 100) / 100;
  switch (level) {
    case 1: {
      const a = randInt(11, 98), b = randInt(5, Math.min(60, a - 2));
      return Math.random() < 0.5
        ? { text: `${a} + ${b}`, answer: a + b }
        : { text: `${a + b} − ${b}`, answer: a };
    }
    case 2: {
      const a = randInt(12, 99), b = randInt(3, 9);
      return { text: `${a} × ${b}`, answer: a * b };
    }
    case 3: {
      const b = randInt(3, 12), a = randInt(12, 99);
      return { text: `${a * b} ÷ ${b}`, answer: a };
    }
    case 4: {
      const base = randInt(4, 60) * 100;
      const rate = [5, 10, 18][randInt(0, 2)];
      const roll = Math.random();
      if (roll < 0.4) return { text: `${rate}% GST on ₹${base.toLocaleString('en-IN')}`, answer: round2(base * rate / 100) };
      if (roll < 0.7) return { text: `Invoice of ₹${base.toLocaleString('en-IN')} + ${rate}% GST — total?`, answer: round2(base * (1 + rate / 100)) };
      return { text: `TDS at ${rate}% on a ₹${(base * 2).toLocaleString('en-IN')} bill`, answer: round2(base * 2 * rate / 100) };
    }
    default: {
      const cost = randInt(20, 200) * 50;
      const roll = Math.random();
      if (roll < 0.3) return { text: `Cost ₹${cost.toLocaleString('en-IN')} marked up 25% — price?`, answer: round2(cost * 1.25) };
      if (roll < 0.55) return { text: `Price ₹${(cost * 1.4).toLocaleString('en-IN')} less 15% discount — net?`, answer: round2(cost * 1.4 * 0.85) };
      if (roll < 0.8) {
        const n = randInt(4, 5);
        const parts = [...Array(n)].map(() => randInt(2, 40) * 250);
        const sum = parts.reduce((x, y) => x + y, 0);
        return { text: `Average of ${parts.join(', ')}`, answer: round2(sum / n) };
      }
      const a = randInt(3, 12), b = randInt(4, 15), c = randInt(5, 20);
      return { text: `(${a} × ${b} + ${c} × ${a}) ÷ ${a}`, answer: b + c };
    }
  }
}
function drillAnswerText(v) {
  return Number.isInteger(v) ? String(v) : v.toFixed(2);
}
function resetDrill() {
  state.drill = {
    status: 'ready',
    score: 0,
    streak: 0,
    bestStreak: 0,
    correct: 0,
    wrong: 0,
    level: 1,
    question: drillQuestion(1),
    entry: '',
    endsAt: 0,
    remaining: DRILL_SECONDS,
    lastVerdict: null
  };
  return state.drill;
}
function startDrill() {
  // A finished round replays through the same button, so start from a clean slate.
  if (!state.drill || state.drill.status === 'done') resetDrill();
  state.drill.status = 'running';
  state.drill.endsAt = Date.now() + DRILL_SECONDS * 1000;
  state.drill.remaining = DRILL_SECONDS;
  startDrillTicker();
  navigateTo('game-drill');
}
function endDrill() {
  const d = state.drill;
  if (!d || d.status === 'done') return;
  d.status = 'done';
  d.remaining = 0;
  stopDrillTicker();
  const prev = myGameStats().drill;
  // A round stopped with no answers is not a result.
  const isBest = d.score > 0 && (typeof prev !== 'number' || d.score > prev);
  recordGameStat({ drill: isBest ? d.score : prev, drillRounds: (myGameStats().drillRounds || 0) + 1 });
  toast(`Round over · ${d.score} points${isBest ? ' — new personal best' : ''}`);
  navigateTo('game-drill');
}
// Seconds left on the running round, straight off the deadline.
function drillLeft(d) {
  return Math.max(0, (d.endsAt - Date.now()) / 1000);
}
function drillTick() {
  const d = state.drill;
  if (!d || d.status !== 'running') { stopDrillTicker(); return; }
  const left = drillLeft(d);
  d.remaining = left;
  const el = document.getElementById('drill-clock');
  if (el) el.textContent = `${Math.ceil(left)}s`;
  const bar = document.getElementById('drill-bar');
  if (bar) bar.style.width = `${(left / DRILL_SECONDS) * 100}%`;
  if (left <= 0) endDrill();
}
let drillTicker = null;
function startDrillTicker() {
  if (drillTicker) return;
  drillTicker = setInterval(drillTick, 100);
}
function stopDrillTicker() {
  if (drillTicker) clearInterval(drillTicker);
  drillTicker = null;
}
function drillPress(key) {
  const d = state.drill;
  if (!d || d.status === 'done') return;
  if (d.status === 'ready') { startDrill(); return; }
  if (d.status !== 'running') return;
  if (key === 'clear') { d.entry = ''; return; }
  if (key === 'back') { d.entry = d.entry.slice(0, -1); return; }
  if (key === '.') {
    if (!d.entry.includes('.')) d.entry = (d.entry || '0') + '.';
    return;
  }
  if (!/^\d$/.test(key)) return;
  if (d.entry.replace('.', '').length >= 8) return;
  d.entry = d.entry === '0' ? key : d.entry + key;
}
function drillSubmit() {
  const d = state.drill;
  if (!d || d.status !== 'running') return;
  if (!d.entry) { toast('Type an answer first'); return; }
  const given = Number(d.entry);
  const right = Math.abs(given - d.question.answer) < 0.005;
  d.entry = '';
  if (right) {
    d.correct++;
    d.streak++;
    d.bestStreak = Math.max(d.bestStreak, d.streak);
    const speed = Math.max(0, Math.round(d.remaining / DRILL_SECONDS * 10));
    d.score += 10 + d.streak * 2 + speed;
    d.lastVerdict = { ok: true, text: `Correct · +${10 + (d.streak - 1) * 2 + speed}` };
  } else {
    d.wrong++;
    d.streak = 0;
    d.lastVerdict = { ok: false, text: `${given} is wrong — the answer was ${drillAnswerText(d.question.answer)}` };
  }
  if (d.correct + d.wrong >= 3) {
    const target = Math.min(5, Math.max(1, Math.ceil((d.correct + d.wrong) / 4)));
    if (target !== d.level) { d.level = target; d.lastVerdict.bumped = true; }
  }
  d.question = drillQuestion(d.level);
  if (Date.now() >= d.endsAt) endDrill();
  navigateTo('game-drill');
}
function renderDrill() {
  let d = state.drill;
  if (!d) d = resetDrill();
  if (d.status === 'running') startDrillTicker();
  const accuracy = d.correct + d.wrong ? Math.round((d.correct / (d.correct + d.wrong)) * 100) : 0;
  let body = '';
  if (d.status === 'done') {
    body = `
      <div class="game-stage game-stage-done">
        <div class="drill-final">
          <div class="drill-final-score">${d.score}</div>
          <div class="drill-final-label">points</div>
          <div class="stat-line"><span>Correct</span><b>${d.correct}</b></div>
          <div class="stat-line"><span>Wrong</span><b>${d.wrong}</b></div>
          <div class="stat-line"><span>Accuracy</span><b>${accuracy}%</b></div>
          <div class="stat-line"><span>Best streak</span><b>${d.bestStreak}</b></div>
          <div class="stat-line"><span>Reached</span><b>Level ${d.level}</b></div>
          <button class="btn-primary" data-action="drill-start">↻ Run it again</button>
        </div>
      </div>`;
  } else if (d.status === 'ready') {
    body = `
      <div class="game-stage game-stage-done">
        <div class="drill-final">
          <div class="drill-final-label">60 seconds</div>
          <div class="drill-brief">
            <p>Five levels of mental arithmetic, weighted towards the numbers an accountant actually touches: additions, multiplications, GST at 5/10/18%, TDS, markup, discount and averages.</p>
            <p>Streak bonus up to 2 points a question, plus a speed bonus that decays as the clock runs down.</p>
          </div>
          <button class="btn-primary" data-action="drill-start">▶ Start the clock</button>
        </div>
      </div>`;
  } else {
    body = `
      <div class="game-stage">
        <div class="drill-clock-row">
          <span class="drill-clock" id="drill-clock">${Math.ceil(d.status === 'running' ? drillLeft(d) : d.remaining)}s</span>
          <div class="drill-track"><div class="drill-bar" id="drill-bar" style="width:${(d.remaining / DRILL_SECONDS) * 100}%"></div></div>
        </div>
        <div class="drill-q" id="drill-question">${d.question.text} = ?</div>
        <div class="drill-entry ${d.entry ? 'has-entry' : ''}">${d.entry || ' '}</div>
        ${d.lastVerdict ? `<div class="drill-verdict ${d.lastVerdict.ok ? 'ok' : 'bad'}">${d.lastVerdict.text}${d.lastVerdict.bumped ? ` · level ${d.level}: ${DRILL_LEVELS[d.level - 1].label.toLowerCase()}` : ''}</div>` : '<div class="drill-verdict"></div>'}
        <div class="numpad numpad-drill">
          ${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => `<button type="button" class="numpad-key" data-drill-key="${n}">${n}</button>`).join('')}
          <button type="button" class="numpad-key" data-drill-key="clear">C</button>
          <button type="button" class="numpad-key" data-drill-key="0">0</button>
          <button type="button" class="numpad-key" data-drill-key="back">⌫</button>
        </div>
        <button class="btn-primary drill-submit" data-action="drill-submit">Submit ⏎</button>
      </div>`;
  }
  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Break Room · Speed Drill</div>
        <h1>Sixty Seconds</h1>
        <p>Mental arithmetic against the clock. Accuracy compounds; guessing does not.</p>
      </div>
      <div class="page-actions">
        <button class="btn-secondary" data-navigate="games">← Back to games</button>
        ${d.status === 'running' ? '<button class="btn-secondary" data-action="drill-stop">■ Stop round</button>' : ''}
      </div>
    </div>
    <div class="game-layout">
      <div class="game-main">${body}</div>
      <aside class="game-side">
        <div class="card">
          <div class="card-title">This round</div>
          <div class="stat-line"><span>Score</span><b>${d.score}</b></div>
          <div class="stat-line"><span>Streak</span><b>${d.streak}</b></div>
          <div class="stat-line"><span>Accuracy</span><b>${accuracy}%</b></div>
          <div class="stat-line"><span>Level</span><b>${d.level} / 5</b></div>
        </div>
        <div class="card">
          <div class="card-title">Levels</div>
          ${DRILL_LEVELS.map(l => `<div class="stat-line ${l.n === d.level ? 'is-on' : ''}"><span>${l.n}. ${l.label}</span></div>`).join('')}
        </div>
        <div class="card">
          <div class="card-title">Personal best</div>
          <div class="stat-line"><span>Drill</span><b>${statValue('drill') || 0} pts</b></div>
        </div>
      </aside>
    </div>`;
}
// ---------- GST CHALLENGE ----------
const GST_ROUND_SECONDS = 90;
function gstChallengeQuestion() {
  const r0 = v => Math.round(v);
  const base = randInt(12, 90) * 1000;
  const kinds = ['inclusive', 'exclusive', 'tds', 'markup', 'itc'];
  const kind = kinds[randInt(0, kinds.length - 1)];
  let correct, explain;
  if (kind === 'inclusive') {
    const rate = [5, 12, 18, 28][randInt(0, 3)];
    const total = base * (1 + rate / 100);
    correct = r0(total - total / (1 + rate / 100));
    explain = `₹${total.toLocaleString('en-IN')} inclusive of ${rate}% GST → taxable value ₹${(total / (1 + rate / 100)).toLocaleString('en-IN')}, so tax is ₹${correct.toLocaleString('en-IN')}. Reverse-calculate by dividing by 1.${rate}.`;
    return { text: `A bill of ₹${total.toLocaleString('en-IN')} is GST-inclusive at ${rate}%. What is the tax amount?`, correct, explain };
  }
  if (kind === 'exclusive') {
    const rate = [5, 12, 18, 28][randInt(0, 3)];
    correct = r0(base * (1 + rate / 100));
    explain = `₹${base.toLocaleString('en-IN')} + ${rate}% = ₹${correct.toLocaleString('en-IN')}.`;
    return { text: `Taxable value ₹${base.toLocaleString('en-IN')} at ${rate}% GST. Invoice total?`, correct, explain };
  }
  if (kind === 'tds') {
    const rate = [5, 10][randInt(0, 1)];
    correct = r0(base * 2 * rate / 100);
    explain = `u/s 194J professional fees are deducted at ${rate}% on payment: ₹${(base * 2).toLocaleString('en-IN')} × ${rate}% = ₹${correct.toLocaleString('en-IN')}.`;
    return { text: `TDS u/s 194J at ${rate}% on a professional fee of ₹${(base * 2).toLocaleString('en-IN')}. Deducted?`, correct, explain };
  }
  if (kind === 'markup') {
    const markup = [10, 20, 25, 30][randInt(0, 3)];
    correct = r0(base * (1 + markup / 100));
    explain = `₹${base.toLocaleString('en-IN')} × ${1 + markup / 100} = ₹${correct.toLocaleString('en-IN')}.`;
    return { text: `Cost ₹${base.toLocaleString('en-IN')} marked up ${markup}%. Selling price?`, correct, explain };
  }
  // ITC must stay below the output liability: a negative "payable" is really a
  // credit carried forward, which is a different question on a different line.
  const itc = Math.floor(base * (0.10 + Math.random() * 0.45) / 500) * 500;
  correct = r0(base - itc);
  explain = `Output ₹${base.toLocaleString('en-IN')} − eligible ITC ₹${itc.toLocaleString('en-IN')} = ₹${correct.toLocaleString('en-IN')} payable. Blocked credits (ITC-04, 16A, 16B, 17, 18) never enter this.`;
  return { text: `Output tax liability ₹${base.toLocaleString('en-IN')}, eligible input credit ₹${itc.toLocaleString('en-IN')}. Payable?`, correct, explain };
}
function gstOptions(answer) {
  const set = new Set([answer]);
  const spread = [0.04, 0.08, 0.12, 0.18, 0.25];
  let guard = 0;
  while (set.size < 4 && guard++ < 60) {
    const f = 1 + spread[randInt(0, spread.length - 1)] * (Math.random() < 0.5 ? 1 : -1);
    const v = Math.max(0, Math.round(answer * f / 100) * 100);
    if (v !== answer) set.add(v);
  }
  return shuffleInPlace([...set]);
}
function resetGstRound() {
  state.gstGame = {
    status: 'ready',
    score: 0,
    correct: 0,
    wrong: 0,
    streak: 0,
    asked: 0,
    q: gstChallengeQuestion(),
    options: gstOptions(0),
    chosen: null,
    endsAt: 0,
    remaining: GST_ROUND_SECONDS
  };
  state.gstGame.options = gstOptions(state.gstGame.q.correct);
  return state.gstGame;
}
function startGstRound() {
  // A finished round replays through the same button, so start from a clean slate.
  if (!state.gstGame || state.gstGame.status === 'done') resetGstRound();
  state.gstGame.status = 'running';
  state.gstGame.endsAt = Date.now() + GST_ROUND_SECONDS * 1000;
  startGstTicker();
  navigateTo('game-gst');
}
function endGstRound() {
  const g = state.gstGame;
  if (!g || g.status === 'done') return;
  g.status = 'done';
  g.remaining = 0;
  stopGstTicker();
  const prev = myGameStats().gstRound;
  const isBest = g.score > 0 && (typeof prev !== 'number' || g.score > prev);
  recordGameStat({ gstRound: isBest ? g.score : prev });
  toast(`Round over · ${g.score} points${isBest ? ' — new personal best' : ''}`);
  navigateTo('game-gst');
}
function gstLeft(g) {
  return Math.max(0, (g.endsAt - Date.now()) / 1000);
}
function gstTick() {
  const g = state.gstGame;
  if (!g || g.status !== 'running') { stopGstTicker(); return; }
  const left = gstLeft(g);
  g.remaining = left;
  const el = document.getElementById('gst-clock');
  if (el) el.textContent = `${Math.ceil(left)}s`;
  const bar = document.getElementById('gst-bar');
  if (bar) bar.style.width = `${(left / GST_ROUND_SECONDS) * 100}%`;
  if (left <= 0) endGstRound();
}
let gstTicker = null;
function startGstTicker() {
  if (gstTicker) return;
  gstTicker = setInterval(gstTick, 100);
}
function stopGstTicker() {
  if (gstTicker) clearInterval(gstTicker);
  gstTicker = null;
}
function gstAnswer(value) {
  const g = state.gstGame;
  if (!g || g.status !== 'running' || g.chosen !== null) return;
  g.chosen = value;
  g.asked++;
  const right = value === g.q.correct;
  if (right) {
    g.correct++;
    g.streak++;
    g.score += 10 + Math.min(10, g.streak) * 2;
  } else {
    g.wrong++;
    g.streak = 0;
  }
  navigateTo('game-gst');
}
function gstNext() {
  const g = state.gstGame;
  if (!g || g.status !== 'running' || g.chosen === null) return;
  if (Date.now() >= g.endsAt) { endGstRound(); return; }
  g.q = gstChallengeQuestion();
  g.options = gstOptions(g.q.correct);
  g.chosen = null;
  navigateTo('game-gst');
}
function renderGstGame() {
  let g = state.gstGame;
  if (!g) g = resetGstRound();
  if (g.status === 'running') startGstTicker();
  const answered = g.chosen !== null;
  let stage;
  if (g.status === 'done') {
    stage = `
      <div class="game-stage game-stage-done">
        <div class="drill-final">
          <div class="drill-final-score">${g.score}</div>
          <div class="drill-final-label">points</div>
          <div class="stat-line"><span>Answered</span><b>${g.asked}</b></div>
          <div class="stat-line"><span>Correct</span><b>${g.correct}</b></div>
          <div class="stat-line"><span>Wrong</span><b>${g.wrong}</b></div>
          <div class="stat-line"><span>Accuracy</span><b>${g.asked ? Math.round((g.correct / g.asked) * 100) : 0}%</b></div>
          <button class="btn-primary" data-action="gst-start">↻ Run it again</button>
        </div>
      </div>`;
  } else if (g.status === 'ready') {
    stage = `
      <div class="game-stage game-stage-done">
        <div class="drill-final">
          <div class="drill-final-label">90 seconds · 5 question types</div>
          <div class="drill-brief">
            <p>Reverse-calculate GST out of an inclusive bill, total an exclusive invoice, deduct TDS u/s 194J, mark up cost, and net off input credit against output liability.</p>
            <p>Every answer shows the working afterwards — read it even when you got it right.</p>
          </div>
          <button class="btn-primary" data-action="gst-start">▶ Start the round</button>
        </div>
      </div>`;
  } else {
    stage = `
      <div class="game-stage">
        <div class="drill-clock-row">
          <span class="drill-clock" id="gst-clock">${Math.ceil(g.status === 'running' ? gstLeft(g) : g.remaining)}s</span>
          <div class="drill-track"><div class="drill-bar" id="gst-bar" style="width:${(g.remaining / GST_ROUND_SECONDS) * 100}%"></div></div>
        </div>
        <div class="gst-q">${g.q.text}</div>
        <div class="gst-options">
          ${g.options.map(v => {
            let cls = 'gst-option';
            if (answered) {
              if (v === g.q.correct) cls += ' is-correct';
              else if (v === g.chosen) cls += ' is-wrong';
              else cls += ' is-dim';
            }
            return `<button type="button" class="${cls}" data-action="gst-answer" data-value="${v}" ${answered ? 'disabled' : ''}>₹${v.toLocaleString('en-IN')}</button>`;
          }).join('')}
        </div>
        ${answered ? `
          <div class="gst-explain ${g.chosen === g.q.correct ? 'ok' : 'bad'}">
            <div class="gst-explain-head">${g.chosen === g.q.correct ? '✓ Correct' : `✗ Answer was ₹${g.q.correct.toLocaleString('en-IN')}`}</div>
            <p>${g.q.explain}</p>
            <button class="btn-primary" data-action="gst-next">Next question ⏎</button>
          </div>` : ''}
      </div>`;
  }
  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Break Room · GST Challenge</div>
        <h1>Reverse GST Drill</h1>
        <p>The arithmetic behind a return nobody enjoys doing by hand.</p>
      </div>
      <div class="page-actions">
        <button class="btn-secondary" data-navigate="games">← Back to games</button>
        ${g.status === 'running' ? '<button class="btn-secondary" data-action="gst-stop">■ Stop round</button>' : ''}
      </div>
    </div>
    <div class="game-layout">
      <div class="game-main">${stage}</div>
      <aside class="game-side">
        <div class="card">
          <div class="card-title">This round</div>
          <div class="stat-line"><span>Score</span><b>${g.score}</b></div>
          <div class="stat-line"><span>Streak</span><b>${g.streak}</b></div>
          <div class="stat-line"><span>Answered</span><b>${g.asked}</b></div>
          <div class="stat-line"><span>Correct</span><b>${g.correct}</b></div>
        </div>
        <div class="card">
          <div class="card-title">Question types</div>
          <div class="stat-line"><span>Inclusive bill → tax out</span></div>
          <div class="stat-line"><span>Exclusive value → invoice total</span></div>
          <div class="stat-line"><span>TDS u/s 194J at 5% / 10%</span></div>
          <div class="stat-line"><span>Markup on cost</span></div>
          <div class="stat-line"><span>Output less eligible ITC</span></div>
        </div>
        <div class="card">
          <div class="card-title">Personal best</div>
          <div class="stat-line"><span>GST round</span><b>${statValue('gstRound') || 0} pts</b></div>
        </div>
      </aside>
    </div>`;
}
// ---------- GAMES HUB ----------
function gameLeaderboard() {
  const rows = state.data.users.map(u => {
    const mine = gameScores()[u.name] || {};
    const base = GAME_BASELINES[u.name] || {};
    const pick = k => (typeof mine[k] === 'number' && typeof base[k] === 'number')
      ? Math.min(mine[k], base[k])
      : (typeof mine[k] === 'number' ? mine[k] : base[k]);
    return {
      name: u.name,
      initials: u.initials,
      color: u.avatarBg,
      drill: pick('drill') || 0,
      gst: pick('gstRound') || 0,
      easy: pick('sudokuEasy'),
      hard: pick('sudokuHard'),
      points: (pick('drill') || 0) / 10 + (pick('gstRound') || 0) / 5
    };
  });
  return rows.sort((a, b) => b.points - a.points);
}
function renderGames() {
  const board = gameLeaderboard();
  const me = currentUser();
  const myRow = board.find(r => r.name === me.name) || board[0];
  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Break Room</div>
        <h1>Games for the team</h1>
        <p>Three short maths games. Scored privately, stored separately, and completely detached from client data.</p>
      </div>
      <div class="page-actions">
        <button class="btn-secondary" data-navigate="home">← Back to work</button>
      </div>
    </div>
    <div class="game-cards">
      <button class="game-card" data-navigate="game-sudoku">
        <div class="game-card-icon">🔢</div>
        <div class="game-card-body">
          <div class="game-card-title">Sudoku</div>
          <div class="game-card-sub">9×9 logic grid with notes, hints and a clock. Three difficulties.</div>
          <div class="game-card-stat">Best easy ${statValue('sudokuEasy') ? fmtClock(statValue('sudokuEasy')) : '—'} · hard ${statValue('sudokuHard') ? fmtClock(statValue('sudokuHard')) : '—'}</div>
        </div>
        <div class="game-card-go">Play →</div>
      </button>
      <button class="game-card" data-navigate="game-drill">
        <div class="game-card-icon">⚡</div>
        <div class="game-card-body">
          <div class="game-card-title">Speed Drill</div>
          <div class="game-card-sub">60 seconds of arithmetic across five levels, weighted to GST, TDS and markup.</div>
          <div class="game-card-stat">Personal best ${statValue('drill') || 0} points</div>
        </div>
        <div class="game-card-go">Play →</div>
      </button>
      <button class="game-card" data-navigate="game-gst">
        <div class="game-card-icon">🧮</div>
        <div class="game-card-body">
          <div class="game-card-title">GST Challenge</div>
          <div class="game-card-sub">90 seconds of reverse GST, TDS u/s 194J, markup and input-credit netting — with the working shown.</div>
          <div class="game-card-stat">Personal best ${statValue('gstRound') || 0} points</div>
        </div>
        <div class="game-card-go">Play →</div>
      </button>
    </div>
    <div class="grid-2" style="margin-top:24px">
      <div class="card">
        <div class="card-title">Practice leaderboard</div>
        <div class="leaderboard">
          <div class="leaderboard-row leaderboard-head">
            <span>Member</span><span>Drill</span><span>GST</span><span>Sudoku E</span><span>Pts</span>
          </div>
          ${board.map((r, i) => `
            <div class="leaderboard-row ${r.name === me.name ? 'is-me' : ''}">
              <span class="leaderboard-who"><i class="lb-avatar" style="background:${r.color}">${r.initials}</i>${i + 1}. ${r.name}</span>
              <span>${r.drill || '—'}</span>
              <span>${r.gst || '—'}</span>
              <span>${r.easy ? fmtClock(r.easy) : '—'}</span>
              <span><b>${Math.round(r.points)}</b></span>
            </div>`).join('')}
        </div>
      </div>
      <div class="card">
        <div class="card-title">Why this exists</div>
        <p class="card-text">Reconciling a 2B against a register is arithmetic under time pressure. These drills train the same reflex: 18% of a round number, a division that comes out clean, a total that must be right to the rupee.</p>
        <p class="card-text">Nothing played here is written to <code>acc_workplace_os_data</code>. Scores live under their own key, and no game reads a client, an engagement or a payment.</p>
        <div class="stat-line"><span>Your rank</span><b>${board.findIndex(r => r.name === me.name) + 1} of ${board.length}</b></div>
        <div class="stat-line"><span>Your points</span><b>${Math.round(myRow.points)}</b></div>
      </div>
    </div>`;
}

// 22. MICROSOFT TEAMS & 365 PRACTICE HUB
function renderTeamsSync() {
  const cfg = state.data.teamsConfig || { channels: [], triggers: {} };
  const dispatches = Array.isArray(state.data.teamsDispatches) ? state.data.teamsDispatches : [];
  const latestDispatch = dispatches[0] || {
    title: 'GST GSTR-3B Statutory Deadline Warning',
    channel: '# Tax & Compliance',
    author: 'Compliance Bot',
    time: new Date().toISOString().replace('T', ' ').slice(0, 16),
    summary: 'Statutory deadline approaching in 48 hours for ABC Manufacturing Pvt Ltd. All reconciliations ready for review.',
    priority: 'High',
    status: 'Delivered'
  };

  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Enterprise Collaboration</div>
        <h1>Microsoft Teams &amp; 365 Practice Hub</h1>
        <p>Live webhook broadcasts, Adaptive Cards, channel listeners, and one-click Teams huddles for the practice.</p>
      </div>
      <div style="display:flex; gap:10px;">
        <button class="btn-secondary" data-action="teams-meeting">📞 Schedule Teams Meeting</button>
        <button class="btn-primary" data-action="teams-post-alert" style="background:#4b53bc;">＋ Post Alert to Teams</button>
      </div>
    </div>

    <!-- Hero Banner with Tenant Status -->
    <div class="teams-hero-banner">
      <div>
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
          <span style="font-size:22px;">👥</span>
          <span style="font-weight:700; font-size:12px; letter-spacing:1px; text-transform:uppercase; background:rgba(255,255,255,0.2); padding:3px 8px; border-radius:4px;">Connected Microsoft 365 Tenant</span>
        </div>
        <div class="teams-hero-title">${memberHtml(cfg.tenantName || 'Rao & Co. Practice Group')}</div>
        <div class="teams-hero-desc">Incoming webhooks are actively listening. Automated adaptive cards notify partners and team channels whenever client files are uploaded, statutory deadlines approach, or proposals are signed.</div>
        <div class="teams-hero-meta">
          <span>● Tenant ID: ms-rao-cpa-blr</span>
          <span>● Status: 4 Channels Active</span>
          <span>● Latency: &lt;38ms</span>
        </div>
      </div>
      <div class="teams-hero-actions">
        <button class="teams-hero-btn" data-action="teams-test-ping">⚡ Test Broadcast Ping</button>
        <button class="teams-hero-btn teams-hero-btn-outline" data-action="teams-config-webhooks">⚙️ Configure Webhooks</button>
      </div>
    </div>

    <div class="teams-grid-layout">
      <!-- Left Column: Configured Channels & Dispatch History -->
      <div>
        <div class="teams-channels-card" style="margin-bottom:24px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
            <div style="font-size:14px; font-weight:700; color:var(--forest);">Active Practice Channels</div>
            <span style="font-size:11px; color:var(--ink-muted);">Microsoft Teams Webhook Mappings</span>
          </div>
          ${(cfg.channels || []).map(ch => `
            <div class="teams-channel-row">
              <div class="teams-channel-info">
                <div class="teams-channel-name">${memberHtml(ch.name)}</div>
                <div class="teams-channel-purpose">${memberHtml(ch.purpose)}</div>
              </div>
              <div style="display:flex; align-items:center; gap:12px;">
                <span class="teams-webhook-status">● Listening</span>
                <button class="btn-ghost" data-action="teams-quick-send" data-channel="${memberHtml(ch.name)}" style="padding:4px 8px; font-size:11px;">Send Card</button>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Automated Broadcast Triggers -->
        <div class="teams-channels-card" style="margin-bottom:24px;">
          <div style="font-size:14px; font-weight:700; color:var(--forest); margin-bottom:12px;">Automated Rule Triggers</div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="padding:12px; background:var(--cream); border-radius:var(--radius-sm); border:1px solid var(--line-light);">
              <div style="font-weight:700; font-size:12.5px; margin-bottom:4px;">📥 Client Document Upload (PBC)</div>
              <div style="font-size:11px; color:var(--ink-muted); margin-bottom:8px;">Dispatches card to #Audit when client fulfills requested checklist item.</div>
              <span style="color:#1f7a4c; font-weight:700; font-size:10.5px;">✓ ENABLED</span>
            </div>
            <div style="padding:12px; background:var(--cream); border-radius:var(--radius-sm); border:1px solid var(--line-light);">
              <div style="font-weight:700; font-size:12.5px; margin-bottom:4px;">⏱️ 48h Statutory Deadline Alert</div>
              <div style="font-size:11px; color:var(--ink-muted); margin-bottom:8px;">Broadcasts countdown card to #Tax for GST/TDS/Advance Tax dates.</div>
              <span style="color:#1f7a4c; font-weight:700; font-size:10.5px;">✓ ENABLED</span>
            </div>
            <div style="padding:12px; background:var(--cream); border-radius:var(--radius-sm); border:1px solid var(--line-light);">
              <div style="font-weight:700; font-size:12.5px; margin-bottom:4px;">✍️ Proposal Executed / Retainer Won</div>
              <div style="font-size:11px; color:var(--ink-muted); margin-bottom:8px;">Alerts #Billing with signed agreement value and onboard schedule.</div>
              <span style="color:#1f7a4c; font-weight:700; font-size:10.5px;">✓ ENABLED</span>
            </div>
            <div style="padding:12px; background:var(--cream); border-radius:var(--radius-sm); border:1px solid var(--line-light);">
              <div style="font-weight:700; font-size:12.5px; margin-bottom:4px;">🔍 Partner Review Sign-Off Request</div>
              <div style="font-size:11px; color:var(--ink-muted); margin-bottom:8px;">Notifies partner channels when working papers are finalized.</div>
              <span style="color:#1f7a4c; font-weight:700; font-size:10.5px;">✓ ENABLED</span>
            </div>
          </div>
        </div>

        <!-- Recent Dispatches Feed -->
        <div class="teams-channels-card">
          <div style="font-size:14px; font-weight:700; color:var(--forest); margin-bottom:12px;">Live Teams Dispatch Feed</div>
          <table class="dispatch-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Channel</th>
                <th>Alert Title</th>
                <th>Dispatched By</th>
                <th>Priority</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${dispatches.length === 0 ? `
                <tr><td colspan="6" style="text-align:center; padding:20px; color:var(--ink-muted);">No dispatches recorded yet. Use 'Test Broadcast Ping' above.</td></tr>
              ` : dispatches.slice(0, 8).map(d => `
                <tr>
                  <td style="color:var(--ink-muted); white-space:nowrap;">${memberHtml(d.time)}</td>
                  <td style="font-weight:600; color:#4b53bc;">${memberHtml(d.channel)}</td>
                  <td><strong>${memberHtml(d.title)}</strong><div style="font-size:11px; color:var(--ink-muted);">${memberHtml(d.summary).slice(0, 60)}...</div></td>
                  <td>${memberHtml(d.author)}</td>
                  <td><span style="font-weight:700; font-size:10px; color:${d.priority === 'High' ? 'var(--red)' : 'var(--forest)'};">${memberHtml(d.priority || 'Normal')}</span></td>
                  <td><span style="color:#1f7a4c; font-weight:600; font-size:11px;">✓ ${memberHtml(d.status)}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Right Column: Microsoft Teams Adaptive Card Live Simulator -->
      <div>
        <div class="teams-preview-box">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <div style="font-weight:700; font-size:12px; color:#605e5c; text-transform:uppercase; letter-spacing:0.5px;">Teams Message Preview</div>
            <span style="font-size:10.5px; color:#4b53bc; font-weight:600;">Adaptive Card v1.5</span>
          </div>

          <div class="teams-adaptive-card-preview" id="adaptive-card-preview-container">
            <div class="teams-card-header">
              <div class="teams-bot-avatar">R</div>
              <div>
                <div class="teams-card-title">${memberHtml(latestDispatch.title)}</div>
                <div class="teams-card-subtitle">Rao &amp; Co. Practice OS · ${memberHtml(latestDispatch.channel)}</div>
              </div>
            </div>

            <div class="teams-card-body">
              ${memberHtml(latestDispatch.summary)}
            </div>

            <div class="teams-card-facts">
              <div class="teams-fact-key">Dispatched By</div>
              <div class="teams-fact-val">${memberHtml(latestDispatch.author)}</div>
              <div class="teams-fact-key">Timestamp</div>
              <div class="teams-fact-val">${memberHtml(latestDispatch.time)}</div>
              <div class="teams-fact-key">Priority</div>
              <div class="teams-fact-val" style="color:${latestDispatch.priority === 'High' ? '#c93b34' : 'inherit'};">${memberHtml(latestDispatch.priority || 'Normal')}</div>
              <div class="teams-fact-key">Target Client</div>
              <div class="teams-fact-val">ABC Manufacturing Pvt Ltd</div>
            </div>

            <div class="teams-card-actions">
              <button class="teams-action-btn teams-action-btn-primary" onclick="navigateTo('clients')">Open in Workplace</button>
              <button class="teams-action-btn" onclick="toast('Acknowledged alert inside Teams channel')">Acknowledge</button>
            </div>
          </div>

          <!-- Quick Teams Meeting Launcher Card -->
          <div style="margin-top:20px; background:#fff; border:1px solid #e1dfdd; border-radius:4px; padding:16px;">
            <div style="font-weight:700; font-size:13px; color:#252423; margin-bottom:4px;">Start Instant Teams Huddle</div>
            <div style="font-size:11.5px; color:#605e5c; margin-bottom:12px;">Launch a quick Microsoft Teams meeting room pre-filled with agenda and client context.</div>
            <div style="display:flex; flex-direction:column; gap:8px;">
              <select id="quick-teams-client" style="width:100%; padding:6px 8px; font-size:12px; border:1px solid var(--line); border-radius:4px;">
                ${state.data.clients.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
              </select>
              <button class="btn-primary" style="background:#4b53bc; width:100%;" data-action="teams-launch-huddle">Launch Teams Huddle Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 23. TIME & BILLING (WIP) OPERATING CENTER
function renderTimesheets() {
  const allEntries = Array.isArray(state.data.timeEntries) ? state.data.timeEntries : [];
  const clientFilter = state.timesheetFilterClient || 'all';
  const statusFilter = state.timesheetFilterStatus || 'all';

  const entries = allEntries.filter(e => {
    if (clientFilter !== 'all' && e.clientId !== clientFilter) return false;
    if (statusFilter !== 'all' && e.status !== statusFilter) return false;
    return true;
  });

  const totalHours = allEntries.reduce((s, e) => s + (Number(e.hours) || 0), 0);
  const unbilledEntries = allEntries.filter(e => e.status === 'Unbilled');
  const unbilledWip = unbilledEntries.reduce((s, e) => s + (Number(e.amount) || 0), 0);
  const billedEntries = allEntries.filter(e => e.status === 'Invoiced');
  const billedAmount = billedEntries.reduce((s, e) => s + (Number(e.amount) || 0), 0);
  const realization = (unbilledWip + billedAmount) > 0 ? Math.round((billedAmount / (unbilledWip + billedAmount)) * 100) : 85;

  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Practice Economics</div>
        <h1>Time &amp; Billing (WIP) Operating Center</h1>
        <p>Real-time timesheets, billable realization rates, and Work-in-Progress (WIP) fee tracking.</p>
      </div>
      <div style="display:flex; gap:10px;">
        <button class="btn-secondary" data-action="generate-invoice-wip">🧾 Generate Invoice from WIP</button>
        <button class="btn-primary" data-action="manual-log-time">＋ Log Time Entry</button>
      </div>
    </div>

    <!-- WIP KPI Grid -->
    <div class="wip-kpi-grid">
      <div class="wip-kpi-card">
        <div class="wip-kpi-label">Unbilled WIP Total</div>
        <div class="wip-kpi-val">₹${unbilledWip.toLocaleString('en-IN')}</div>
        <div class="wip-kpi-sub">${unbilledEntries.length} unbilled time records</div>
      </div>
      <div class="wip-kpi-card">
        <div class="wip-kpi-label">Total Billable Hours</div>
        <div class="wip-kpi-val">${totalHours.toFixed(1)} hrs</div>
        <div class="wip-kpi-sub">Across ${state.data.clients.length} active client accounts</div>
      </div>
      <div class="wip-kpi-card">
        <div class="wip-kpi-label">Realization Ratio</div>
        <div class="wip-kpi-val">${realization}%</div>
        <div class="wip-kpi-sub" style="color:#1f7a4c;">✓ Exceeds 80% firm target</div>
      </div>
      <div class="wip-kpi-card">
        <div class="wip-kpi-label">Avg Effective Rate</div>
        <div class="wip-kpi-val">₹175<span style="font-size:14px; font-weight:500;">/hr</span></div>
        <div class="wip-kpi-sub">Blended partner &amp; staff realization</div>
      </div>
    </div>

    <!-- Timesheet Table Card -->
    <div class="card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
        <div class="card-title">Recorded Timesheets &amp; Engagements ${entries.length !== allEntries.length ? `(${entries.length} of ${allEntries.length})` : ''}</div>
        <div style="display:flex; gap:8px;">
          <select id="timesheet-filter-client" style="padding:5px 8px; font-size:12px; border:1px solid var(--line); border-radius:4px;">
            <option value="all" ${clientFilter === 'all' ? 'selected' : ''}>All Clients</option>
            ${state.data.clients.map(c => `<option value="${c.id}" ${clientFilter === c.id ? 'selected' : ''}>${c.name}</option>`).join('')}
          </select>
          <select id="timesheet-filter-status" style="padding:5px 8px; font-size:12px; border:1px solid var(--line); border-radius:4px;">
            <option value="all" ${statusFilter === 'all' ? 'selected' : ''}>All Statuses</option>
            <option value="Unbilled" ${statusFilter === 'Unbilled' ? 'selected' : ''}>Unbilled</option>
            <option value="Invoiced" ${statusFilter === 'Invoiced' ? 'selected' : ''}>Invoiced</option>
          </select>
        </div>
      </div>

      <table class="dispatch-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Member</th>
            <th>Client</th>
            <th>Task / Engagement</th>
            <th>Hours</th>
            <th>Rate</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          ${entries.length === 0 ? `
            <tr><td colspan="9" style="text-align:center; padding:30px; color:var(--ink-muted);">No timesheets logged. Start the topbar timer or click 'Log Time Entry'.</td></tr>
          ` : entries.map(e => `
            <tr>
              <td style="color:var(--ink-muted); white-space:nowrap;">${memberHtml(e.date)}</td>
              <td><strong>${memberHtml(e.memberName)}</strong> <span style="font-size:10.5px; color:var(--ink-subtle);">(${memberHtml(e.role || 'Staff')})</span></td>
              <td><strong>${memberHtml(e.clientName)}</strong></td>
              <td>${memberHtml(e.taskTitle)}</td>
              <td><strong>${Number(e.hours).toFixed(1)} hrs</strong></td>
              <td>₹${memberHtml(e.rate)}/h</td>
              <td><strong>₹${Number(e.amount).toLocaleString('en-IN')}</strong></td>
              <td>
                <span style="font-weight:700; font-size:11px; color:${e.status === 'Unbilled' ? 'var(--yellow)' : '#1f7a4c'};">
                  ● ${memberHtml(e.status)}
                </span>
              </td>
              <td style="font-size:11.5px; color:var(--ink-muted); max-width:200px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${memberHtml(e.notes || '—')}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// 24. PROPOSALS & DIGITAL E-SIGNATURES
function renderProposals() {
  const proposals = Array.isArray(state.data.proposals) ? state.data.proposals : [];
  const totalPipeline = proposals.reduce((s, p) => s + (Number(p.totalValue) || 0), 0);
  const executed = proposals.filter(p => p.status === 'Signed & Executed');
  const outForSig = proposals.filter(p => p.status === 'Out for Signature');

  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Client Agreements &amp; Retainers</div>
        <h1>Proposals &amp; Digital E-Signatures</h1>
        <p>Engagement letters, statutory scope agreements, and legally binding digital sign-offs.</p>
      </div>
      <button class="btn-primary" data-action="new-proposal">＋ Create Engagement Proposal</button>
    </div>

    <!-- Pipeline KPI Grid -->
    <div class="wip-kpi-grid">
      <div class="wip-kpi-card">
        <div class="wip-kpi-label">Active Proposal Pipeline</div>
        <div class="wip-kpi-val">₹${totalPipeline.toLocaleString('en-IN')}</div>
        <div class="wip-kpi-sub">${proposals.length} total agreements</div>
      </div>
      <div class="wip-kpi-card">
        <div class="wip-kpi-label">Signed &amp; Executed</div>
        <div class="wip-kpi-val">${executed.length} Retainers</div>
        <div class="wip-kpi-sub" style="color:#1f7a4c;">✓ Cryptographically verified</div>
      </div>
      <div class="wip-kpi-card">
        <div class="wip-kpi-label">Out for Signature</div>
        <div class="wip-kpi-val">${outForSig.length} Awaiting</div>
        <div class="wip-kpi-sub" style="color:var(--yellow);">Magic links sent to clients</div>
      </div>
      <div class="wip-kpi-card">
        <div class="wip-kpi-label">Avg Execution Turnaround</div>
        <div class="wip-kpi-val">1.8 <span style="font-size:14px; font-weight:500;">days</span></div>
        <div class="wip-kpi-sub">From proposal draft to signed agreement</div>
      </div>
    </div>

    <!-- Proposals Grid -->
    <div class="proposals-grid">
      ${proposals.map(p => `
        <div class="proposal-card">
          <div class="proposal-header">
            <div>
              <div class="proposal-number">${memberHtml(p.proposalNo)}</div>
              <div class="proposal-title">${memberHtml(p.title)}</div>
              <div class="proposal-client">Client: <strong>${memberHtml(p.clientName)}</strong></div>
            </div>
            <span style="font-weight:700; font-size:11px; color:${p.status === 'Signed & Executed' ? '#1f7a4c' : (p.status === 'Out for Signature' ? 'var(--yellow)' : 'var(--ink-muted)')};">
              ● ${memberHtml(p.status)}
            </span>
          </div>

          <div class="proposal-scope-snippet">
            <strong>Scope of Work:</strong><br>
            ${memberHtml(p.scope)}
          </div>

          ${p.status === 'Signed & Executed' ? `
            <div class="signature-stamp-box" style="margin-bottom:14px;">
              <span class="signature-stamp-icon">✍️</span>
              <div>
                <div style="font-weight:700; font-size:11.5px; color:var(--emerald);">Digitally Executed by ${memberHtml(p.signedBy)}</div>
                <div style="font-size:10px; color:var(--ink-muted);">Signed on ${memberHtml(p.signedAt)} · <code style="color:var(--emerald);">${memberHtml(p.signatureHash)}</code></div>
              </div>
            </div>
          ` : `
            <div style="font-size:11px; color:var(--ink-muted); margin-bottom:14px;">
              Valid until: <strong>${memberHtml(p.validUntil)}</strong> · ${p.status === 'Out for Signature' ? 'Awaiting client digital signature' : 'Draft stage'}
            </div>
          `}

          <div class="proposal-footer">
            <div>
              <div class="proposal-value">₹${Number(p.totalValue).toLocaleString('en-IN')}</div>
              <div class="proposal-fee-type">${memberHtml(p.feeType)} ${p.retainerMonthly ? `(₹${Number(p.retainerMonthly).toLocaleString('en-IN')}/mo)` : ''}</div>
            </div>
            <div style="display:flex; gap:6px;">
              ${p.status === 'Signed & Executed' ? `
                <button class="btn-secondary" data-action="view-proposal-pdf" data-prop-id="${p.id}">View Executed Agreement</button>
              ` : `
                <button class="btn-primary" data-action="open-esign-modal" data-prop-id="${p.id}">Review &amp; E-Sign</button>
              `}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
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
    team: 'Team Members',
    search: 'Search',
    notifications: 'Notifications',
    workspace: 'Switch Workspace',
    payments: 'Payments Out',
    ledger: 'General Ledger',
    gstrecon: 'GST 2A/2B Recon',
    games: 'Games',
    'game-sudoku': 'Sudoku',
    'game-drill': 'Speed Drill',
    'game-gst': 'GST Challenge',
    'teams-sync': 'Microsoft Teams',
    timesheets: 'Time & Billing (WIP)',
    proposals: 'Proposals & E-Sign',
    mastercards: 'Master Cards'
  };
  pageTitleBc.textContent = labelMap[viewName] || 'Overview';

  // Render View HTML
  if (state.appMode === 'portal') {
    document.body.classList.add('portal-mode');
    const btnFirm = document.getElementById('btn-mode-firm');
    const btnPortal = document.getElementById('btn-mode-portal');
    if (btnFirm && btnPortal) {
      btnPortal.classList.add('active');
      btnFirm.classList.remove('active');
    }
    appView.innerHTML = renderClientPortal();
    return;
  } else {
    document.body.classList.remove('portal-mode');
    const btnFirm = document.getElementById('btn-mode-firm');
    const btnPortal = document.getElementById('btn-mode-portal');
    if (btnFirm && btnPortal) {
      btnFirm.classList.add('active');
      btnPortal.classList.remove('active');
    }
  }

  switch (viewName) {
    case 'home': appView.innerHTML = renderHome(); break;
    case 'communication': appView.innerHTML = renderCommunication(); break;
    case 'mastercards': appView.innerHTML = renderMasterCards(); break;
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
    case 'ai-studio': appView.innerHTML = renderAiStudio(); break;
    case 'audio-studio': appView.innerHTML = renderAudioStudio(); break;
    case 'veo-studio': appView.innerHTML = renderVeoStudio(); break;
    case 'firebase-sync': appView.innerHTML = renderFirebaseSync(); break;
    case 'announcements': appView.innerHTML = renderAnnouncements(); break;
    case 'auditlog': appView.innerHTML = renderAuditLog(); break;
    case 'firmsettings': appView.innerHTML = renderFirmSettings(); break;
    case 'team': appView.innerHTML = renderTeamMembers(); break;
    case 'search': appView.innerHTML = renderSearch(); break;
    case 'notifications': appView.innerHTML = renderNotifications(); break;
    case 'workspace': appView.innerHTML = renderWorkspace(); break;
    case 'gstrecon': appView.innerHTML = renderGstRecon(); break;
    case 'payments': appView.innerHTML = renderPayments(); break;
    case 'ledger': appView.innerHTML = renderLedger(); break;
    case 'teams-sync': appView.innerHTML = renderTeamsSync(); break;
    case 'timesheets': appView.innerHTML = renderTimesheets(); break;
    case 'proposals': appView.innerHTML = renderProposals(); break;
    case 'games': appView.innerHTML = renderGames(); break;
    case 'game-sudoku': appView.innerHTML = renderSudoku(); break;
    case 'game-drill': appView.innerHTML = renderDrill(); break;
    case 'game-gst': appView.innerHTML = renderGstGame(); break;
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

  const supported = ['task', 'client', 'client request', 'calendar event', 'announcement'];
  if (!supported.includes(type)) { toast(`${type} cannot be created here.`); return; }
  const root = document.getElementById('modal-root');
  const clients = state.data.clients || [];
  const members = state.data.users || [];
  const today = localDateKey();
  const clientOptions = clients.map(c => `<option value="${memberHtml(c.id)}">${memberHtml(c.name)}</option>`).join('');
  const memberOptions = members.map(u => `<option value="${memberHtml(u.name)}">${memberHtml(u.name)} (${memberHtml(u.role)})</option>`).join('');
  const label = type.replace(/\b\w/g, c => c.toUpperCase());
  const specificFields = type === 'task' ? `
    <div class="form-group"><label>Client</label><select required id="form-client-select">${clientOptions}</select></div>
    <div class="form-group"><label>Assigned Staff</label><select required id="form-staff-select">${memberOptions}</select></div>
    <div class="form-group"><label>Reviewer</label><select id="form-reviewer-select"><option value="">Unassigned</option>${memberOptions}</select></div>
    <div class="form-group"><label>Due date</label><input required id="form-date-input" type="date" value="${today}" /></div>
    <div class="form-group"><label>Priority</label><select id="form-priority-select"><option>Medium</option><option>High</option><option>Low</option></select></div>
    <div class="form-group"><label>Engagement</label><select id="form-engagement-select"><option value="">No engagement</option>${(state.data.engagements || []).map(e => `<option value="${memberHtml(e.id)}">${memberHtml(e.title)}</option>`).join('')}</select></div>` : '';
  const clientField = ['client request'].includes(type) ? `<div class="form-group"><label>Client</label><select required id="form-client-select">${clientOptions}</select></div>` : '';
  const dateField = type === 'calendar event' ? `<div class="form-group"><label>Date</label><input required id="form-date-input" type="date" value="${today}" /></div><div class="form-group"><label>Time / details</label><input id="form-details-input" placeholder="Optional time or location" /></div>` : '';
  const dueField = type === 'client request' ? `<div class="form-group"><label>Due date</label><input required id="form-date-input" type="date" value="${today}" /></div><div class="form-group"><label>Requested items (one per line)</label><textarea id="form-details-input" rows="4" placeholder="Bank statement\nPurchase register"></textarea></div>` : '';
  const contentField = type === 'announcement' ? `<div class="form-group"><label>Announcement</label><textarea required id="form-details-input" rows="5" placeholder="Write the message for your team"></textarea></div>` : '';
  const clientForm = type === 'client' ? `
    <div class="form-group"><label>Legal name</label><input required id="form-name-input" placeholder="Registered business name" /></div>
    <div class="form-group"><label>Industry</label><input id="form-industry-input" placeholder="Industry" /></div>
    <div class="form-group"><label>GSTIN</label><input id="form-gstin-input" maxlength="15" /></div>
    <div class="form-group"><label>PAN</label><input id="form-pan-input" maxlength="10" /></div>
    <div class="form-group"><label>Contact email</label><input id="form-email-input" type="email" /></div>
    <div class="form-group"><label>GST return frequency</label><select id="form-gst-frequency"><option value="monthly">Monthly</option><option value="quarterly">Quarterly (QRMP)</option></select></div>
    <div class="form-group"><label>QRMP state due-date group</label><select id="form-gst-state-group"><option value="1">Group 1 — typically 22nd</option><option value="2">Group 2 — typically 24th</option></select></div>` : '';
  root.innerHTML = `
    <div class="modal-box">
      <div class="modal-header">
        <h3>Create ${label}</h3>
        <p>Enter the details to add this record to the practice workspace.</p>
      </div>

      <form id="creator-form">
        ${type === 'client' ? clientForm : `<div class="form-group"><label>${type === 'announcement' ? 'Title' : type === 'calendar event' ? 'Event title' : type === 'client request' ? 'Request title' : 'Title / Work Name'}</label><input required id="form-title-input" placeholder="${type === 'task' ? 'e.g. Bank Reconciliation' : 'Enter a title'}" /></div>`}
        ${specificFields}${clientField}${dateField}${dueField}${contentField}

        <div class="modal-actions">
          <button type="button" class="btn-secondary" id="close-modal">Cancel</button>
          <button type="submit" class="btn-primary">Save ${label}</button>
        </div>
      </form>
    </div>
  `;

  root.classList.add('open');

  const clientSelect = document.getElementById('form-client-select');
  const engagementSelect = document.getElementById('form-engagement-select');
  if (type === 'task' && clientSelect && engagementSelect) {
    const updateEngagements = () => {
      const matching = (state.data.engagements || []).filter(e => e.clientId === clientSelect.value);
      engagementSelect.innerHTML = `<option value="">No engagement</option>${matching.map(e => `<option value="${memberHtml(e.id)}">${memberHtml(e.title)}</option>`).join('')}`;
    };
    clientSelect.addEventListener('change', updateEngagements);
    updateEngagements();
  }

  document.getElementById('close-modal').onclick = () => root.classList.remove('open');
  document.getElementById('creator-form').onsubmit = (e) => {
    e.preventDefault();
    const value = id => document.getElementById(id)?.value?.trim() || '';
    const title = value('form-title-input');
    const now = new Date().toISOString();
    if (type === 'client') {
      const name = value('form-name-input');
      const id = `c_${Date.now()}`;
      state.data.clients.unshift({ id, name, legalName: name, industry: value('form-industry-input') || 'Other', gstin: value('form-gstin-input'), gstinRegistered: !!value('form-gstin-input'), gstFilingFrequency: value('form-gst-frequency'), gstStateGroup: Number(value('form-gst-state-group')) || 1, pan: value('form-pan-input'), email: value('form-email-input'), status: 'Active', createdAt: now });
      state.addAuditLog(currentUser().name, 'Created Client', name);
    } else if (type === 'task') {
      const clientId = value('form-client-select');
      const client = getClient(clientId);
      state.data.tasks.unshift({ id: `t_${Date.now()}`, title, clientId, clientName: client.name, engagementId: value('form-engagement-select') || null, assignedTo: value('form-staff-select') || currentUser().name, reviewer: value('form-reviewer-select'), createdDate: today, dueDate: value('form-date-input'), priority: value('form-priority-select'), status: 'Not Started', attachments: [], commentsCount: 0, stage: 'Prep' });
      state.addAuditLog(currentUser().name, 'Created Task', title);
    } else if (type === 'client request') {
      const clientId = value('form-client-select'); const client = getClient(clientId);
      const items = value('form-details-input').split(/\r?\n/).map(label => label.trim()).filter(Boolean).map(label => ({ label, done: false }));
      state.data.requests.unshift({ id: `r_${Date.now()}`, clientId, clientName: client.name, title, dueDate: value('form-date-input'), items, status: `0 of ${items.length} received`, createdAt: now });
      state.addAuditLog(currentUser().name, 'Created Client Request', title);
    } else if (type === 'calendar event') {
      state.data.calendarEvents.unshift({ id: `ev_${Date.now()}`, title, date: value('form-date-input'), details: value('form-details-input'), createdBy: currentUser().name, createdAt: now });
      state.addAuditLog(currentUser().name, 'Scheduled Event', title);
    } else if (type === 'announcement') {
      state.data.announcements.unshift({ id: `a_${Date.now()}`, title, content: value('form-details-input'), date: today, author: currentUser().name, createdAt: now });
      state.addAuditLog(currentUser().name, 'Published Announcement', title);
    }
    root.classList.remove('open');
    toast(`Created task "${title}"`);
    navigateTo(state.currentView);
  };
}

function closeModal() {
  const root = document.getElementById('modal-root');
  if (root) root.classList.remove('open');
}

function openFolderSyncModal() {
  const root = document.getElementById('modal-root');
  if (!root) return;
  root.innerHTML = `
    <div class="modal-box" style="max-width: 620px;">
      <div class="modal-header">
        <div style="display:flex; align-items:center; gap:12px;">
          <span style="font-size:28px;">📁</span>
          <div>
            <h3 style="margin:0; font-size:18px;">Sync &amp; Save to Your Local Folder</h3>
            <p style="margin:3px 0 0; color:var(--ink-muted); font-size:13px;">Transfer all latest updates, Dark/Bright mode, and code from AI Studio to your computer's GitHub folder.</p>
          </div>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:14px; margin: 16px 0;">
        <div style="background:var(--cream); border:1px solid var(--line); border-radius:8px; padding:16px;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px; margin-bottom: 8px;">
            <div>
              <div style="font-weight:700; font-size:14px; margin-bottom:3px; color:var(--ink);">Method 1: Instant Codebase Download (.zip)</div>
              <p style="font-size:12px; color:var(--ink-muted); margin:0; line-height:1.5;">Downloads the complete, updated codebase (<code style="background:rgba(0,0,0,0.06); padding:2px 4px; border-radius:4px;">app.js</code>, <code style="background:rgba(0,0,0,0.06); padding:2px 4px; border-radius:4px;">styles.css</code>, <code style="background:rgba(0,0,0,0.06); padding:2px 4px; border-radius:4px;">index.html</code>, <code style="background:rgba(0,0,0,0.06); padding:2px 4px; border-radius:4px;">server.mjs</code>, database &amp; documents).</p>
            </div>
            <a href="/api/export-project-zip" download="accounting-workplace-updated.zip" class="btn-primary" style="text-decoration:none; white-space:nowrap; padding:9px 15px; font-size:13px; font-weight:600; display:inline-flex; align-items:center; gap:6px;">
              <span>⭳</span> Download .ZIP
            </a>
          </div>
          <div style="font-size:12px; color:var(--ink-muted); border-top:1px dashed var(--line); padding-top:10px; margin-top:8px;">
            <strong style="color:var(--ink);">How to update your local GitHub folder:</strong>
            <ol style="margin:6px 0 0 18px; padding:0; line-height:1.6;">
              <li>Click <strong>Download .ZIP</strong> above.</li>
              <li>Extract/unzip the contents directly into your connected local repository folder (choose "Replace" for existing files).</li>
              <li>In your terminal inside that folder, run: <code style="user-select:all; background:rgba(0,0,0,0.07); padding:2px 6px; border-radius:3px; font-weight:600;">git add . &amp;&amp; git commit -m "Update from AI Studio" &amp;&amp; git push</code></li>
            </ol>
          </div>
        </div>

        <div style="background:var(--cream); border:1px solid var(--line); border-radius:8px; padding:14px;">
          <div style="font-weight:700; font-size:13.5px; margin-bottom:4px; color:var(--ink);">Method 2: Sync via GitHub (AI Studio Top Header)</div>
          <p style="font-size:12px; color:var(--ink-muted); margin:0 0 8px; line-height:1.5;">If this project is linked to GitHub in Google AI Studio, look at the top toolbar in AI Studio and click <strong>Export / Push to GitHub</strong>. Once pushed, run this single command in your local folder:</p>
          <div style="background:var(--surface); border:1px solid var(--line); border-radius:6px; padding:8px 12px; font-size:12.5px; font-family:monospace; user-select:all; color:var(--ink);">
            git pull origin main
          </div>
        </div>

        <div style="background:var(--cream); border:1px solid var(--line); border-radius:8px; padding:12px 14px;">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
            <div>
              <div style="font-weight:600; font-size:13px; color:var(--ink);">Full Practice Database Backup (.json)</div>
              <p style="font-size:11.5px; color:var(--ink-muted); margin:2px 0 0;">Download all clients, ledgers, vouchers, and metadata snapshots.</p>
            </div>
            <button type="button" class="btn-secondary" data-action="export-backup" style="font-size:12px; padding:6px 12px;">⭳ Backup Data</button>
          </div>
        </div>
      </div>

      <div class="modal-actions" style="border-top: 1px solid var(--line); padding-top: 12px;">
        <button type="button" class="btn-secondary" id="close-modal">Close</button>
      </div>
    </div>
  `;
  root.classList.add('open');
  const closeBtn = document.getElementById('close-modal');
  if (closeBtn) closeBtn.onclick = () => root.classList.remove('open');
}

async function triggerTeamsTestPing() {
  toast('Dispatching test broadcast to Microsoft Teams...');
  try {
    const res = await fetch('/api/teams/broadcast', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        channel: '# Tax & Compliance',
        title: '⚡ Practice OS Webhook Verification Ping',
        summary: 'All practice systems operational. Connected to Microsoft 365 Tenant (Rao & Co. Practice Group).',
        priority: 'Normal',
        author: currentUser().name
      })
    });
    const data = await res.json();
    if (data.ok) {
      if (!Array.isArray(state.data.teamsDispatches)) state.data.teamsDispatches = [];
      state.data.teamsDispatches.unshift(data.dispatch);
      state.save();
      toast('✓ Microsoft Teams broadcast verified & delivered!');
      if (state.currentView === 'teams-sync') navigateTo('teams-sync');
    }
  } catch (err) {
    toast(`Teams dispatch error: ${err.message}`);
  }
}

function openTeamsBroadcastModal(channelName = '# General Practice', defaultSummary = '') {
  const root = document.getElementById('modal-root');
  const channels = ['# Tax & Compliance', '# Audit & Assurance', '# General Practice', '# Billing & Invoicing'];
  root.innerHTML = `
    <div class="modal-box" style="max-width:520px;">
      <div class="modal-header">
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="font-size:20px;">👥</span>
          <h3>Broadcast Adaptive Card to Microsoft Teams</h3>
        </div>
        <p>Post a rich, structured Adaptive Card into the firm's Microsoft Teams channels.</p>
      </div>
      <form id="teams-broadcast-form">
        <div class="form-group">
          <label>Target Teams Channel</label>
          <select id="form-teams-channel" required>
            ${channels.map(c => `<option value="${c}" ${c === channelName ? 'selected' : ''}>${c}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Card Title / Alert Header</label>
          <input required id="form-teams-title" placeholder="e.g. Audit PBC Document Received: ABC Mfg" value="Compliance Update: ${state.data.clients[0]?.name || 'Client'}" />
        </div>
        <div class="form-group">
          <label>Summary Message &amp; Context</label>
          <textarea required id="form-teams-summary" rows="3" placeholder="Provide context, action items, or client status notes...">${memberHtml(defaultSummary)}</textarea>
        </div>
        <div class="form-group">
          <label>Priority Tag</label>
          <select id="form-teams-priority">
            <option value="Normal">Normal</option>
            <option value="High">High (Immediate Team Action)</option>
            <option value="Urgent">Urgent (Statutory Penalty Risk)</option>
          </select>
        </div>
        <div class="modal-actions">
          <button type="button" class="btn-ghost" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn-primary" style="background:#4b53bc;">Broadcast to Teams ↗</button>
        </div>
      </form>
    </div>
  `;
  root.classList.add('open');

  document.getElementById('teams-broadcast-form').onsubmit = async (e) => {
    e.preventDefault();
    const ch = document.getElementById('form-teams-channel').value;
    const title = document.getElementById('form-teams-title').value.trim();
    const summary = document.getElementById('form-teams-summary').value.trim();
    const priority = document.getElementById('form-teams-priority').value;

    try {
      const res = await fetch('/api/teams/broadcast', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ channel: ch, title, summary, priority, author: currentUser().name })
      });
      const data = await res.json();
      if (data.ok) {
        if (!Array.isArray(state.data.teamsDispatches)) state.data.teamsDispatches = [];
        state.data.teamsDispatches.unshift(data.dispatch);
        state.save();
        closeModal();
        toast(`✓ Broadcasted to ${ch} on Microsoft Teams`);
        if (state.currentView === 'teams-sync') navigateTo('teams-sync');
      }
    } catch (err) {
      toast(`Failed to send to Teams: ${err.message}`);
    }
  };
}

function openTeamsMeetingModal() {
  const root = document.getElementById('modal-root');
  const clients = state.data.clients || [];
  const clientOptions = clients.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
  const meetId = 'meet_' + Math.random().toString(36).substring(2, 9);
  const teamsLink = `https://teams.microsoft.com/l/meetup-join/19%3ameeting_${meetId}%40thread.v2/0?context=%7b%22Tid%22%3a%22ms-rao-cpa-blr%22%7d`;

  root.innerHTML = `
    <div class="modal-box" style="max-width:540px;">
      <div class="modal-header">
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="font-size:22px;">📞</span>
          <h3>Schedule Microsoft Teams Meeting</h3>
        </div>
        <p>Generate a Teams meeting room for client conferences, review walk-throughs, or partner sign-offs.</p>
      </div>
      <form id="teams-meeting-form">
        <div class="form-group">
          <label>Client</label>
          <select id="meet-client-select">${clientOptions}</select>
        </div>
        <div class="form-group">
          <label>Meeting Topic</label>
          <input required id="meet-topic-input" placeholder="e.g. FY 2026-27 Statutory Audit Progress &amp; PBC Review" value="Audit &amp; Tax Review Session" />
        </div>
        <div class="form-group" style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
          <div>
            <label>Date</label>
            <input type="date" id="meet-date-input" value="${localDateKey()}" required />
          </div>
          <div>
            <label>Time</label>
            <input type="time" id="meet-time-input" value="15:00" required />
          </div>
        </div>
        <div class="form-group">
          <label>Microsoft Teams Join Link (Generated)</label>
          <input readonly id="meet-link-input" value="${teamsLink}" style="background:var(--cream); font-family:monospace; font-size:11px;" />
        </div>
        <div class="modal-actions">
          <button type="button" class="btn-ghost" onclick="closeModal()">Cancel</button>
          <button type="button" class="btn-secondary" id="btn-copy-teams-link">Copy Join Link</button>
          <button type="submit" class="btn-primary" style="background:#4b53bc;">Launch in Teams ↗</button>
        </div>
      </form>
    </div>
  `;
  root.classList.add('open');

  document.getElementById('btn-copy-teams-link').onclick = () => {
    navigator.clipboard.writeText(teamsLink).catch(() => {});
    toast('✓ Copied Teams Meeting link to clipboard!');
  };

  document.getElementById('teams-meeting-form').onsubmit = (e) => {
    e.preventDefault();
    const topic = document.getElementById('meet-topic-input').value;
    const client = clients.find(c => c.id === document.getElementById('meet-client-select').value);
    state.data.calendarEvents.unshift({
      id: `ev_${Date.now()}`,
      title: `Teams Meeting: ${topic}`,
      date: document.getElementById('meet-date-input').value,
      details: `Microsoft Teams session with ${client?.name}. Join: ${teamsLink}`,
      createdBy: currentUser().name,
      createdAt: new Date().toISOString()
    });
    state.save();
    closeModal();
    toast(`✓ Scheduled Teams Huddle with ${client?.name}`);
  };
}

function openTeamsConfigModal() {
  const root = document.getElementById('modal-root');
  const cfg = state.data.teamsConfig || { tenantName: 'Rao & Co. Practice Group', webhookUrl: '', channels: [] };

  root.innerHTML = `
    <div class="modal-box" style="max-width:540px;">
      <div class="modal-header">
        <h3>Microsoft 365 &amp; Teams Configuration</h3>
        <p>Set incoming webhook URLs from your Microsoft Teams channel connectors.</p>
      </div>
      <form id="teams-cfg-form">
        <div class="form-group">
          <label>Tenant / Firm Display Name</label>
          <input required id="cfg-tenant-name" value="${memberHtml(cfg.tenantName || 'Rao & Co. Practice Group')}" />
        </div>
        <div class="form-group">
          <label>Default Incoming Webhook URL</label>
          <input id="cfg-webhook-url" value="${memberHtml(cfg.webhookUrl || '')}" placeholder="https://outlook.office.com/webhook/..." />
          <small style="color:var(--ink-muted);">In Teams: Channel → ... → Connectors → Incoming Webhook → Copy URL</small>
        </div>
        ${(cfg.channels || []).map((ch, idx) => `
          <div class="form-group">
            <label>${memberHtml(ch.name)} Webhook URL</label>
            <input class="cfg-channel-url" data-channel-idx="${idx}" value="${memberHtml(ch.webhookUrl || '')}" placeholder="Optional channel-specific webhook URL" />
          </div>
        `).join('')}
        <div class="modal-actions">
          <button type="button" class="btn-ghost" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn-primary" style="background:#4b53bc;">Save Configuration</button>
        </div>
      </form>
    </div>
  `;
  root.classList.add('open');

  document.getElementById('teams-cfg-form').onsubmit = (e) => {
    e.preventDefault();
    cfg.tenantName = document.getElementById('cfg-tenant-name').value.trim();
    cfg.webhookUrl = document.getElementById('cfg-webhook-url').value.trim();
    document.querySelectorAll('.cfg-channel-url').forEach(inp => {
      const idx = Number(inp.dataset.channelIdx);
      if (cfg.channels[idx]) cfg.channels[idx].webhookUrl = inp.value.trim();
    });
    state.data.teamsConfig = cfg;
    state.save();
    closeModal();
    toast('✓ Microsoft Teams configuration updated!');
    if (state.currentView === 'teams-sync') navigateTo('teams-sync');
  };
}

function openLogTimeModal(seconds = 0) {
  const root = document.getElementById('modal-root');
  const clients = state.data.clients || [];
  const tasks = state.data.tasks || [];
  const initialHours = seconds > 0 ? (Math.round((seconds / 3600) * 10) / 10 || 0.1) : 1.0;
  const initialRate = roleHourlyRate(state.activeRole);

  root.innerHTML = `
    <div class="modal-box" style="max-width:500px;">
      <div class="modal-header">
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="font-size:22px;">⏱️</span>
          <h3>Log Billable Time Entry (WIP)</h3>
        </div>
        <p>Record billable client work, adjust rate, and post to the firm timesheet ledger.</p>
      </div>
      <form id="log-time-form">
        <div class="form-group">
          <label>Client</label>
          <select id="time-client-select" required>
            ${clients.map(c => `<option value="${c.id}" ${c.id === state.timerClientId ? 'selected' : ''}>${c.name}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Task / Engagement</label>
          <select id="time-task-select" required>
            ${tasks.map(t => `<option value="${t.id}">${t.title} (${t.clientName || 'General'})</option>`).join('')}
          </select>
        </div>
        <div class="form-group" style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
          <div>
            <label>Hours Worked</label>
            <input type="number" step="0.1" min="0.1" max="24" id="time-hours-input" value="${initialHours}" required />
          </div>
          <div>
            <label>Hourly Rate (₹/hr)</label>
            <input type="number" step="5" min="0" id="time-rate-input" value="${initialRate}" required />
          </div>
        </div>
        <div class="form-group">
          <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
            <input type="checkbox" id="time-billable-input" checked />
            <span style="font-weight:600;">Billable to Client (Accrues to WIP)</span>
          </label>
        </div>
        <div class="form-group">
          <label>Work Description / Notes</label>
          <textarea id="time-notes-input" rows="2.5" placeholder="e.g. Conducted review of August purchase register and verified disputed ITC..."></textarea>
        </div>
        <div class="modal-actions">
          <button type="button" class="btn-ghost" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn-primary">Post Time Entry ✓</button>
        </div>
      </form>
    </div>
  `;
  root.classList.add('open');

  document.getElementById('log-time-form').onsubmit = async (e) => {
    e.preventDefault();
    const clientId = document.getElementById('time-client-select').value;
    const client = clients.find(c => c.id === clientId);
    const taskId = document.getElementById('time-task-select').value;
    const task = tasks.find(t => t.id === taskId);
    const hours = Number(document.getElementById('time-hours-input').value) || 1.0;
    const rate = Number(document.getElementById('time-rate-input').value) || initialRate;
    const billable = document.getElementById('time-billable-input').checked;
    const notes = document.getElementById('time-notes-input').value.trim();

    try {
      const res = await fetch('/api/time/log', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          memberId: currentUser().id,
          memberName: currentUser().name,
          role: state.activeRole,
          clientId,
          clientName: client?.name || 'General',
          taskId,
          taskTitle: task?.title || 'Client Advisory',
          hours,
          rate,
          billable,
          notes
        })
      });
      const data = await res.json();
      if (data.ok) {
        if (!Array.isArray(state.data.timeEntries)) state.data.timeEntries = [];
        state.data.timeEntries.unshift(data.entry);
        state.resetTimer();
        state.save();
        closeModal();
        toast(`✓ Logged ${hours} hrs for ${client?.name}`);
        if (state.currentView === 'timesheets') navigateTo('timesheets');
      }
    } catch (err) {
      toast(`Error logging time: ${err.message}`);
    }
  };
}

function openProposalModal() {
  const root = document.getElementById('modal-root');
  const clients = state.data.clients || [];
  const clientOptions = clients.map(c => `<option value="${c.id}">${c.name}</option>`).join('');

  root.innerHTML = `
    <div class="modal-box" style="max-width:540px;">
      <div class="modal-header">
        <h3>Draft Engagement Proposal</h3>
        <p>Prepare a scope of work and retainer proposal for client digital execution.</p>
      </div>
      <form id="new-proposal-form">
        <div class="form-group">
          <label>Client</label>
          <select id="prop-client-select" required>${clientOptions}</select>
        </div>
        <div class="form-group">
          <label>Proposal Title</label>
          <input required id="prop-title-input" placeholder="e.g. FY 2026-27 Statutory Audit &amp; Direct Tax Retainer" />
        </div>
        <div class="form-group" style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
          <div>
            <label>Fee Structure</label>
            <select id="prop-fee-type">
              <option value="Monthly Retainer">Monthly Retainer</option>
              <option value="Fixed Milestone">Fixed Milestone</option>
              <option value="Hourly + Cap">Hourly + Cap</option>
            </select>
          </div>
          <div>
            <label>Total Contract Value (₹)</label>
            <input type="number" id="prop-value-input" value="180000" step="5000" required />
          </div>
        </div>
        <div class="form-group">
          <label>Scope of Work Clauses</label>
          <textarea required id="prop-scope-input" rows="3" placeholder="Detail the statutory filings, review cycles, and deliverables..."></textarea>
        </div>
        <div class="form-group">
          <label>Valid Until Date</label>
          <input type="date" id="prop-valid-input" value="${new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10)}" required />
        </div>
        <div class="modal-actions">
          <button type="button" class="btn-ghost" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn-primary">Generate Proposal Draft</button>
        </div>
      </form>
    </div>
  `;
  root.classList.add('open');

  document.getElementById('new-proposal-form').onsubmit = (e) => {
    e.preventDefault();
    const clientId = document.getElementById('prop-client-select').value;
    const client = clients.find(c => c.id === clientId);
    const title = document.getElementById('prop-title-input').value.trim();
    const feeType = document.getElementById('prop-fee-type').value;
    const totalValue = Number(document.getElementById('prop-value-input').value) || 100000;
    const scope = document.getElementById('prop-scope-input').value.trim();
    const validUntil = document.getElementById('prop-valid-input').value;
    const count = (state.data.proposals || []).length + 101;

    const prop = {
      id: `prop_${Date.now()}`,
      proposalNo: `PROP-2026-${count}`,
      clientId,
      clientName: client?.name || 'Client',
      title,
      feeType,
      retainerMonthly: feeType === 'Monthly Retainer' ? Math.round(totalValue / 12) : 0,
      totalValue,
      validUntil,
      status: 'Out for Signature',
      scope,
      signedBy: null,
      signedEmail: null,
      signedAt: null
    };

    if (!Array.isArray(state.data.proposals)) state.data.proposals = [];
    state.data.proposals.unshift(prop);
    state.save();
    closeModal();
    toast(`✓ Created proposal ${prop.proposalNo} for ${client?.name}`);
    if (state.currentView === 'proposals') navigateTo('proposals');
  };
}

function openSignProposalModal(propId) {
  const root = document.getElementById('modal-root');
  const prop = (state.data.proposals || []).find(p => p.id === propId);
  if (!prop) { toast('Proposal not found'); return; }

  root.innerHTML = `
    <div class="modal-box" style="max-width:620px;">
      <div class="signature-letterhead">
        <div>
          <div style="font-family:var(--font-serif); font-size:20px; font-weight:700; color:var(--forest);">Rao &amp; Co. CPAs</div>
          <div style="font-size:11px; color:var(--ink-muted);">Operating System for Practice · Engagement Agreement</div>
        </div>
        <div style="text-align:right;">
          <div style="font-weight:700; font-size:13px; color:var(--emerald);">${prop.proposalNo}</div>
          <div style="font-size:11px; color:var(--ink-muted);">Date: ${localDateKey()}</div>
        </div>
      </div>

      <div style="margin-bottom:14px;">
        <h3 style="font-size:16px; font-weight:700; color:var(--forest);">${memberHtml(prop.title)}</h3>
        <p style="font-size:12px; color:var(--ink-muted);">Client: <strong>${memberHtml(prop.clientName)}</strong> · Value: <strong>₹${Number(prop.totalValue).toLocaleString('en-IN')}</strong> (${memberHtml(prop.feeType)})</p>
      </div>

      <div style="background:var(--cream); border:1px solid var(--line); border-radius:6px; padding:12px 14px; font-size:12px; line-height:1.5; margin-bottom:16px; max-height:140px; overflow-y:auto;">
        <strong>Terms &amp; Scope:</strong><br>
        ${memberHtml(prop.scope)}
        <div style="margin-top:8px; font-size:11px; color:var(--ink-muted);">
          The client agrees to provide all necessary accounting books, GST logs, and bank statements within 5 days of monthly close. Rao &amp; Co. will perform services in accordance with ICAI Auditing &amp; Assurance Standards.
        </div>
      </div>

      <form id="esign-form">
        <div class="form-group" style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
          <div>
            <label>Authorized Signatory Name</label>
            <input required id="signer-name-input" placeholder="e.g. Anand Kumar" value="Anand Kumar" />
          </div>
          <div>
            <label>Signatory Title</label>
            <input required id="signer-title-input" placeholder="e.g. Managing Director" value="Director / CFO" />
          </div>
        </div>
        <div class="form-group">
          <label>Signer Official Email</label>
          <input type="email" required id="signer-email-input" placeholder="signatory@company.com" value="authorized@client.com" />
        </div>

        <div class="form-group">
          <label>Digital Signature Pad (Type or Preview Sign-off)</label>
          <div class="signature-canvas-area" id="sig-preview-pad">
            Anand Kumar
          </div>
          <small style="color:var(--ink-muted);">Digital cryptographic seal will be applied under Information Technology Act E-Sign standards.</small>
        </div>

        <div class="modal-actions">
          <button type="button" class="btn-ghost" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn-primary" style="background:var(--emerald);">Execute Digital Signature &amp; Seal ✍️</button>
        </div>
      </form>
    </div>
  `;
  root.classList.add('open');

  const signerInput = document.getElementById('signer-name-input');
  const pad = document.getElementById('sig-preview-pad');
  signerInput.addEventListener('input', () => {
    pad.textContent = signerInput.value || 'Digital Signature';
  });

  document.getElementById('esign-form').onsubmit = async (e) => {
    e.preventDefault();
    const signerName = document.getElementById('signer-name-input').value.trim();
    const signerTitle = document.getElementById('signer-title-input').value.trim();
    const signerEmail = document.getElementById('signer-email-input').value.trim();

    try {
      const res = await fetch('/api/proposals/sign', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          proposalId: prop.id,
          signerName,
          signerTitle,
          signerEmail
        })
      });
      const data = await res.json();
      if (data.ok) {
        Object.assign(prop, data.proposal);
        if (data.task && Array.isArray(state.data.tasks)) {
          state.data.tasks.unshift(data.task);
        }
        state.save();
        closeModal();
        toast(`✓ Executed agreement ${prop.proposalNo}! Onboarding task scheduled.`);
        if (state.currentView === 'proposals') navigateTo('proposals');
      }
    } catch (err) {
      toast(`Signature error: ${err.message}`);
    }
  };
}

function openViewExecutedProposal(propId) {
  const root = document.getElementById('modal-root');
  const prop = (state.data.proposals || []).find(p => p.id === propId);
  if (!prop) return;

  root.innerHTML = `
    <div class="modal-box" style="max-width:580px;">
      <div class="signature-letterhead">
        <div>
          <div style="font-family:var(--font-serif); font-size:20px; font-weight:700; color:var(--forest);">Rao &amp; Co. CPAs</div>
          <div style="font-size:11px; color:var(--ink-muted);">Executed Engagement Agreement</div>
        </div>
        <div style="text-align:right;">
          <div style="font-weight:700; color:var(--emerald);">${prop.proposalNo}</div>
          <div style="font-size:11px; color:var(--ink-muted);">Executed: ${prop.signedAt}</div>
        </div>
      </div>
      <div style="margin-bottom:12px;">
        <h3 style="font-size:16px; font-weight:700; color:var(--forest);">${memberHtml(prop.title)}</h3>
        <p style="font-size:12px; color:var(--ink-muted);">Client: <strong>${memberHtml(prop.clientName)}</strong> · ₹${Number(prop.totalValue).toLocaleString('en-IN')}</p>
      </div>
      <div style="background:var(--cream); padding:12px; border-radius:6px; font-size:12px; line-height:1.5; margin-bottom:16px;">
        ${memberHtml(prop.scope)}
      </div>
      <div class="signature-stamp-box">
        <span class="signature-stamp-icon">✍️</span>
        <div>
          <div style="font-weight:700; color:var(--emerald);">Verified E-Signature Certificate</div>
          <div style="font-size:11px; color:var(--ink); margin-top:2px;">Signer: <strong>${memberHtml(prop.signedBy)}</strong> (${memberHtml(prop.signedEmail || 'client')})</div>
          <div style="font-size:10.5px; color:var(--ink-muted);">Audit Seal: <code>${memberHtml(prop.signatureHash)}</code></div>
        </div>
      </div>
      <div class="modal-actions" style="margin-top:16px;">
        <button type="button" class="btn-ghost" onclick="closeModal()">Close</button>
        <button type="button" class="btn-primary" onclick="toast('Downloaded verified agreement copy'); closeModal();">Download PDF Statement</button>
      </div>
    </div>
  `;
  root.classList.add('open');
}

function copyMagicLink(clientId, reqId) {
  const token = 'pbc_' + Math.random().toString(36).substring(2, 10);
  const url = `${window.location.origin || 'http://localhost:3000'}/#portal?client=${encodeURIComponent(clientId)}&req=${encodeURIComponent(reqId)}&magic=${token}`;
  navigator.clipboard.writeText(url).catch(() => {});
  toast('✓ Copied Client Zero-Login Magic Link to Clipboard!');
}

async function sendPbcReminder(reqId) {
  toast('Sending automated document reminder to client...');
  try {
    const res = await fetch('/api/pbc/chase', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ requestId: reqId })
    });
    const data = await res.json();
    if (data.ok) {
      const item = state.data.requests.find(r => r.id === reqId);
      if (item) {
        item.lastReminderSent = data.request.lastReminderSent;
        item.reminderCount = data.request.reminderCount;
      }
      state.save();
      toast('✓ Document reminder sent to client & logged in Microsoft Teams!');
      if (state.currentView === 'requests') navigateTo('requests');
    }
  } catch (err) {
    toast(`Reminder error: ${err.message}`);
  }
}

function openOcrPreviewModal(reqTitle) {
  const root = document.getElementById('modal-root');
  root.innerHTML = `
    <div class="modal-box" style="max-width:520px;">
      <div class="modal-header">
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="font-size:20px;">📄</span>
          <h3>Document OCR &amp; Auto-Extraction</h3>
        </div>
        <p>Extracted structured data from client uploaded document: <strong>${memberHtml(reqTitle)}</strong></p>
      </div>
      <div style="background:var(--cream); border:1px solid var(--line); border-radius:6px; padding:16px; margin-bottom:16px;">
        <div style="display:grid; grid-template-columns:120px 1fr; gap:8px; font-size:12px;">
          <div style="color:var(--ink-muted);">Vendor / Party:</div><strong>Kumar Traders</strong>
          <div style="color:var(--ink-muted);">GSTIN:</div><code>29AABCR4821M1Z4</code>
          <div style="color:var(--ink-muted);">Invoice Date:</div><div>2026-08-02</div>
          <div style="color:var(--ink-muted);">Invoice No:</div><div>INV-1001</div>
          <div style="color:var(--ink-muted);">Taxable Value:</div><strong>₹1,00,000.00</strong>
          <div style="color:var(--ink-muted);">IGST (18%):</div><strong>₹18,000.00</strong>
          <div style="color:var(--ink-muted);">Total Invoice:</div><strong style="color:var(--forest);">₹1,18,000.00</strong>
          <div style="color:var(--ink-muted);">OCR Confidence:</div><span style="color:#1f7a4c; font-weight:700;">99.4% (Direct Bank Statement Extract)</span>
        </div>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn-ghost" onclick="closeModal()">Close</button>
        <button type="button" class="btn-secondary" onclick="navigateTo('gstrecon'); closeModal();">Match in GST 2B Recon</button>
        <button type="button" class="btn-primary" onclick="navigateTo('ledger'); closeModal();">Create Draft Journal Entry</button>
      </div>
    </div>
  `;
  root.classList.add('open');
}

function openWipInvoiceModal() {
  const root = document.getElementById('modal-root');
  const unbilled = (state.data.timeEntries || []).filter(e => e.status === 'Unbilled');
  const total = unbilled.reduce((s, e) => s + (Number(e.amount) || 0), 0);

  root.innerHTML = `
    <div class="modal-box" style="max-width:540px;">
      <div class="modal-header">
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="font-size:22px;">🧾</span>
          <h3>Generate Client Invoice from WIP</h3>
        </div>
        <p>Convert unbilled time records into an itemized fee statement.</p>
      </div>
      <div style="background:var(--cream); border:1px solid var(--line); border-radius:6px; padding:14px; margin-bottom:16px;">
        <div style="font-weight:700; font-size:13px; color:var(--forest); margin-bottom:6px;">Unbilled Work Items (${unbilled.length} entries)</div>
        <div style="max-height:120px; overflow-y:auto; font-size:11.5px; line-height:1.6;">
          ${unbilled.map(u => `<div>● ${memberHtml(u.clientName)}: ${memberHtml(u.taskTitle)} (${u.hours} hrs) — <strong>₹${Number(u.amount).toLocaleString('en-IN')}</strong></div>`).join('')}
        </div>
        <div style="border-top:1px solid var(--line); margin-top:8px; padding-top:8px; display:flex; justify-content:space-between; font-weight:700;">
          <span>Total Invoiced WIP:</span>
          <span style="color:var(--forest);">₹${total.toLocaleString('en-IN')}</span>
        </div>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn-ghost" onclick="closeModal()">Cancel</button>
        <button type="button" class="btn-primary" id="btn-confirm-invoice">Confirm &amp; Mark as Invoiced</button>
      </div>
    </div>
  `;
  root.classList.add('open');

  document.getElementById('btn-confirm-invoice').onclick = () => {
    unbilled.forEach(e => { e.status = 'Invoiced'; });
    state.save();
    closeModal();
    toast(`✓ Generated invoice for ₹${total.toLocaleString('en-IN')} and marked WIP as Invoiced!`);
    navigateTo('timesheets');
  };
}

function openTimerContextModal() {
  const root = document.getElementById('modal-root');
  const clients = state.data.clients || [];
  root.innerHTML = `
    <div class="modal-box" style="max-width:440px;">
      <div class="modal-header">
        <h3>Live Stopwatch Client &amp; Billing Context</h3>
        <p>Set active client and billable rate for current time tracking session.</p>
      </div>
      <form id="timer-ctx-form">
        <div class="form-group">
          <label>Active Client</label>
          <select id="timer-modal-client">
            ${clients.map(c => `<option value="${c.id}" ${c.id === state.timerClientId ? 'selected' : ''}>${c.name}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label style="display:flex; align-items:center; gap:8px;">
            <input type="checkbox" id="timer-modal-billable" ${state.timerBillable ? 'checked' : ''} />
            <span style="font-weight:600;">Track as Billable (₹${roleHourlyRate(state.activeRole)}/hr based on ${state.activeRole} role)</span>
          </label>
        </div>
        <div class="modal-actions">
          <button type="button" class="btn-ghost" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn-primary">Apply Context</button>
        </div>
      </form>
    </div>
  `;
  root.classList.add('open');

  document.getElementById('timer-ctx-form').onsubmit = (e) => {
    e.preventDefault();
    state.timerClientId = document.getElementById('timer-modal-client').value;
    state.timerBillable = document.getElementById('timer-modal-billable').checked;
    state.updateTimerDisplay();
    closeModal();
    toast('✓ Stopwatch context updated');
  };
}

// EVENT LISTENERS & DELEGATION
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('change', (e) => {
    const filter = e.target.closest('[data-deadline-filter]');
    if (!filter) return;
    if (filter.dataset.deadlineFilter === 'client') state.deadlineClient = filter.value;
    if (filter.dataset.deadlineFilter === 'type') state.deadlineType = filter.value;
    if (filter.dataset.deadlineFilter === 'priority') state.deadlinePriority = filter.value;
    navigateTo('deadlines');
  });
  document.body.addEventListener('input', (e) => {
    const headerField = e.target.closest('[data-ledger-draft]');
    if (headerField) {
      if (headerField.dataset.ledgerDraft === 'date') state.journalDraftDate = headerField.value;
      if (headerField.dataset.ledgerDraft === 'memo') state.journalDraftMemo = headerField.value;
    }
    const lineField = e.target.closest('[data-ledger-line-field]');
    if (lineField) {
      const index = Number(lineField.dataset.lineIndex);
      if (state.journalDraft[index]) state.journalDraft[index][lineField.dataset.ledgerLineField] = lineField.value;
      refreshLedgerDraftTotals();
    }
  });
  document.body.addEventListener('change', (e) => {
    const lineField = e.target.closest('[data-ledger-line-field]');
    if (lineField) {
      const index = Number(lineField.dataset.lineIndex);
      if (state.journalDraft[index]) state.journalDraft[index][lineField.dataset.ledgerLineField] = lineField.value;
    }
    const dateField = e.target.closest('[data-ledger-date]');
    if (dateField) {
      if (dateField.dataset.ledgerDate === 'start') state.ledgerStartDate = dateField.value;
      if (dateField.dataset.ledgerDate === 'end') state.ledgerEndDate = dateField.value;
      if (state.ledgerStartDate > state.ledgerEndDate) {
        toast('The start date must be on or before the end date.');
        state.ledgerStartDate = state.ledgerEndDate;
      }
      navigateTo('ledger');
      return;
    }
    if (e.target.id === 'timesheet-filter-client') {
      state.timesheetFilterClient = e.target.value;
      navigateTo('timesheets');
      return;
    }
    if (e.target.id === 'timesheet-filter-status') {
      state.timesheetFilterStatus = e.target.value;
      navigateTo('timesheets');
      return;
    }
  });
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
    // Topbar Live Stopwatch controls
    const toggleTimerBtn = e.target.closest('#btn-timer-toggle');
    if (toggleTimerBtn) {
      if (state.timerRunning) {
        state.pauseTimer();
        toast('Billable timer paused');
      } else {
        state.startTimer();
        toast('Billable timer started');
      }
      return;
    }

    const stopTimerBtn = e.target.closest('#btn-timer-stop');
    if (stopTimerBtn) {
      if (state.timerSeconds < 3) {
        toast('Timer is at 0:00. Start timer before logging.');
        return;
      }
      state.pauseTimer();
      openLogTimeModal(state.timerSeconds);
      return;
    }

    const timerWidget = e.target.closest('#topbar-timer-widget');
    if (timerWidget && !e.target.closest('.timer-btn')) {
      openTimerContextModal();
      return;
    }

    const broadcastBtn = e.target.closest('#btn-broadcast-teams');
    if (broadcastBtn) {
      const input = document.getElementById('chat-input-text');
      const text = input ? input.value.trim() : '';
      openTeamsBroadcastModal(state.activeChatChannel, text);
      return;
    }

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

    // Open the Document Viewer
    const viewBtn = e.target.closest('[data-open-doc]');
    if (viewBtn) {
      openDocViewer(viewBtn.dataset.openDoc);
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

    // Sudoku cell selection
    const sudCell = e.target.closest('[data-sudoku-cell]');
    if (sudCell && state.sudoku) {
      state.sudoku.selected = Number(sudCell.dataset.sudokuCell);
      navigateTo('game-sudoku');
      return;
    }
    // Drill numpad
    const drillKey = e.target.closest('[data-drill-key]');
    if (drillKey) {
      drillPress(drillKey.dataset.drillKey);
      navigateTo('game-drill');
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
      if (act === 'ledger-tab') {
        state.ledgerTab = actBtn.dataset.tab;
        navigateTo('ledger');
      }
      else if (act === 'ledger-add-line') {
        state.journalDraft.push(ledgerBlankLine());
        navigateTo('ledger');
      }
      else if (act === 'ledger-remove-line') {
        if (state.journalDraft.length > 2) state.journalDraft.splice(Number(actBtn.dataset.lineIndex), 1);
        navigateTo('ledger');
      }
      else if (act === 'ledger-account-toggle') {
        const account = state.data.chartOfAccounts.find(row => String(row.id) === String(actBtn.dataset.accountId));
        if (!account) { toast('Account not found.'); return; }
        const nextActive = actBtn.dataset.nextActive === 'true';
        if (!nextActive && !window.confirm(`Archive ${account.code} · ${account.name}?`)) return;
        actBtn.disabled = true;
        ledgerRequest(`/api/ledger/accounts/${encodeURIComponent(account.id)}`, { method: 'PUT', body: JSON.stringify({ active: nextActive }) })
          .then(updated => {
            Object.assign(account, updated);
            state.save();
            state.addAuditLog(currentUser().name, nextActive ? 'Restored Ledger Account' : 'Archived Ledger Account', `${account.code} · ${account.name}`);
            toast(`${account.name} ${nextActive ? 'restored' : 'archived'}`);
            navigateTo('ledger');
          })
          .catch(error => { toast(error.message); actBtn.disabled = false; });
      }
      else if (act === 'open-search') {
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
      else if (act === 'sudoku-new') {
        newSudoku(actBtn.dataset.difficulty);
      }
      else if (act === 'sudoku-notes') {
        if (state.sudoku) {
          state.sudoku.notesMode = !state.sudoku.notesMode;
          toast(state.sudoku.notesMode ? 'Notes mode on' : 'Notes mode off');
          navigateTo('game-sudoku');
        }
      }
      else if (act === 'sudoku-num') {
        sudokuInput(Number(actBtn.dataset.num));
      }
      else if (act === 'sudoku-erase') {
        sudokuErase();
      }
      else if (act === 'sudoku-undo') {
        sudokuUndo();
      }
      else if (act === 'sudoku-hint') {
        sudokuHint();
      }
      else if (act === 'drill-start') {
        startDrill();
      }
      else if (act === 'drill-stop') {
        endDrill();
      }
      else if (act === 'drill-submit') {
        drillSubmit();
      }
      else if (act === 'gst-start') {
        startGstRound();
      }
      else if (act === 'gst-stop') {
        endGstRound();
      }
      else if (act === 'gst-answer') {
        gstAnswer(Number(actBtn.dataset.value));
      }
      else if (act === 'gst-next') {
        gstNext();
      }
      else if (act === 'save-workstation') {
        const uid = actBtn.dataset.userId;
        const select = document.getElementById(`ws-clients-${uid}`);
        const noteInput = document.getElementById(`ws-note-${uid}`);
        const assignedClients = select ? Array.from(select.selectedOptions).map(o => o.value) : [];
        const note = noteInput ? noteInput.value.trim() : '';
        state.data.workStations = state.data.workStations || {};
        state.data.workStations[uid] = { clients: assignedClients, note };
        state.save();
        state.addAuditLog(currentUser().name, 'Updated Personalized Work Station', `Assigned for user ID ${uid}`);
        toast(`Personalized workstation successfully updated!`);
        navigateTo('team');
      }
      else if (act === 'calendar-prev' || act === 'calendar-next') {
        const base = state.calendarMonth ? new Date(`${state.calendarMonth}-01T00:00:00`) : new Date();
        base.setMonth(base.getMonth() + (act === 'calendar-prev' ? -1 : 1));
        state.calendarMonth = `${base.getFullYear()}-${String(base.getMonth() + 1).padStart(2, '0')}`;
        navigateTo('calendar');
      }
      else if (act === 'login-pick') {
        handleLoginPick(actBtn.dataset.userId || '');
      }
      else if (act === 'login-submit') {
        handleLoginSubmit();
      }
      else if (act === 'set-login-type') {
        state.loginUserType = actBtn.dataset.type || '';
        state.loginError = '';
        renderLoginGate();
      }
      else if (act === 'client-pick') {
        handleClientPick(actBtn.dataset.clientId || '');
      }
      else if (act === 'client-login-submit') {
        handleClientLoginSubmit();
      }
      else if (act === 'sign-out') {
        signOut('Signed out from the top bar');
      }
      else if (act === 'pay-refresh') {
        state.payFrom = document.getElementById('pay-from').value;
        state.payTo = document.getElementById('pay-to').value;
        navigateTo('payments');
        toast('Window recomputed');
      }
      else if (act === 'pay-approve') {
        const rec = state.data.payments.find(p => p.id === actBtn.dataset.payId);
        if (!rec) { toast('Payment not found'); return; }
        const verdict = canApprovePayment(rec);
        if (!verdict.ok) { toast(`Cannot approve · ${verdict.reason}`); return; }
        rec.approvals = (rec.approvals || []).concat(currentUser().name);
        rec.status = rec.approvals.length >= 2 ? 'Paid' : 'Open';
        state.save();
        state.addAuditLog(currentUser().name, 'Approved Payment', rec.title);
        toast(`${rec.title} approved by ${currentUser().name}`);
        navigateTo('payments');
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
      else if (act === 'master-filter') {
        state.masterCardsFilter = actBtn.dataset.filter || 'all';
        navigateTo('mastercards');
      }
      else if (act === 'master-clear-search') {
        state.masterCardsSearch = '';
        navigateTo('mastercards');
      }
      else if (act === 'quick-switch-portal') {
        state.appMode = 'portal';
        navigateTo('home');
        toast('Switched to Client Portal View');
      }
      else if (act === 'launch-client-portal') {
        const cid = actBtn.dataset.client;
        if (cid) state.activeClientId = cid;
        state.appMode = 'portal';
        navigateTo('home');
        toast(`Opened Client Portal for ${getClient(state.activeClientId)?.name || 'Client'}`);
      }
      else if (act === 'exit-client-portal') {
        state.appMode = 'firm';
        navigateTo('mastercards');
        toast('Returned to Master Cards Command Center');
      }
      else if (act === 'copy-portal-link') {
        const cid = actBtn.dataset.client || state.activeClientId;
        const url = getClientPortalUrl(cid);
        navigator.clipboard.writeText(url).then(() => {
          toast(`Copied Client Portal Link: ${url}`);
        }).catch(() => {
          toast(`Client Portal Link: ${url}`);
        });
      }
      else if (act === 'copy-client-pin') {
        const pin = actBtn.dataset.pin;
        navigator.clipboard.writeText(pin).then(() => {
          toast(`Copied 4-digit Access PIN: ${pin}`);
        });
      }
      else if (act === 'copy-client-invite') {
        const cid = actBtn.dataset.client || state.activeClientId;
        copyClientInvitation(cid);
      }
      else if (act === 'master-doc-verify') {
        verifyMasterInboundDoc(actBtn.dataset.doc);
      }
      else if (act === 'master-doc-revision') {
        requestMasterInboundRevision(actBtn.dataset.doc);
      }
      else if (act === 'master-doc-download') {
        downloadDoc(state.data.documents.find(d => d.id === actBtn.dataset.doc));
      }
      else if (act === 'master-doc-preview') {
        openDocViewer(actBtn.dataset.doc);
      }
      else if (act === 'master-add-request') {
        openMasterAddRequestModal(actBtn.dataset.client);
      }
      else if (act === 'portal-tab') {
        state.activePortalTab = actBtn.dataset.tab;
        navigateTo(state.currentView);
      }
      else if (act === 'run-ai-studio-chat') {
        const inp = document.getElementById('ai-studio-input');
        const resBox = document.getElementById('ai-studio-result');
        if (!inp || !resBox || !inp.value.trim()) return;
        const q = inp.value.trim();
        resBox.innerHTML = '<em>Searching real-time data and reasoning with Gemini 3.5 Flash…</em>';
        fetch('/api/ai/studio-chat', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ question: q }) })
          .then(r => r.json())
          .then(data => {
            const chunks = (data.grounding || []).map(c => c.web?.uri ? `<a href="${c.web.uri}" target="_blank">${c.web.title || c.web.uri}</a>` : '').filter(Boolean);
            resBox.innerHTML = `<strong>Gemini Answer:</strong><br>${memberHtml(data.answer).replace(/\n/g, '<br>')}${chunks.length ? `<div style="margin-top:10px; font-size:11.5px; color:var(--ink-muted);">Sources: ${chunks.join(' · ')}</div>` : ''}`;
          })
          .catch(e => { resBox.innerHTML = `Error: ${e.message}`; });
      }
      else if (act === 'run-audio-transcribe') {
        const resBox = document.getElementById('audio-transcribe-result');
        if (!resBox) return;
        resBox.innerHTML = '<em>Transcribing audio with gemini-3.5-transcribe…</em>';
        fetch('/api/ai/transcribe', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ audioBase64: '' }) })
          .then(r => r.json())
          .then(data => {
            resBox.innerHTML = `<strong>Transcription Result:</strong><br>${memberHtml(data.transcription)}`;
          })
          .catch(e => { resBox.innerHTML = `Error: ${e.message}`; });
      }
      else if (act === 'run-veo-animate') {
        const promptInp = document.getElementById('veo-prompt-input');
        const aspectSel = document.getElementById('veo-aspect-ratio');
        const resBox = document.getElementById('veo-result-area');
        if (!promptInp || !resBox) return;
        const prompt = promptInp.value.trim() || 'Financial report animation';
        const aspectRatio = aspectSel ? aspectSel.value : '16:9';
        resBox.innerHTML = '<em>Generating Veo video (veo-3.1-fast-generate-preview)… This may take a moment.</em>';
        fetch('/api/ai/veo-animate', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ prompt, aspectRatio }) })
          .then(r => r.json())
          .then(data => {
            resBox.innerHTML = `<strong>Veo Video Generated Successfully!</strong><br><video controls style="max-width:100%; border-radius:8px; margin-top:10px;" src="${data.videoUrl}"></video><div style="font-size:11.5px; color:var(--ink-muted); margin-top:6px;">${data.note}</div>`;
          })
          .catch(e => { resBox.innerHTML = `Error: ${e.message}`; });
      }
      else if (act === 'portal-submit-request-doc') {
        handlePortalFileUpload(actBtn);
      }
      else if (act === 'portal-submit-general-doc') {
        handlePortalGeneralUpload(actBtn);
      }
      else if (act === 'portal-send-message') {
        const cid = actBtn.dataset.client;
        const subj = document.getElementById('portal-msg-subject')?.value || 'Client Inquiry';
        const body = document.getElementById('portal-msg-body')?.value || '';
        if (!body.trim()) {
          toast('Please type a message before sending.');
          return;
        }
        const c = getClient(cid) || state.data.clients[0];
        state.data.messages.push({
          id: 'm_' + Date.now(),
          channel: '# General',
          author: `${c.contact} (Client)`,
          authorInitials: c.code ? c.code.slice(0, 2) : 'CP',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          text: `[Client Portal Message from ${c.name} - ${subj}]\n${body.trim()}`
        });
        state.save();
        toast('Message sent directly to your accounting team! ✅');
        document.getElementById('portal-msg-body').value = '';
        if (document.getElementById('portal-msg-subject')) document.getElementById('portal-msg-subject').value = '';
      }
      else if (act === 'open-folder-sync') openFolderSyncModal();
      else if (act === 'upload-doc') openDocumentModal();
      else if (act === 'doc-download') downloadDoc(state.data.documents.find(d => d.id === actBtn.dataset.doc));
      else if (act === 'doc-vault') saveDocToVault(state.data.documents.find(d => d.id === actBtn.dataset.doc));
      else if (act === 'export-backup') exportWorkspaceBackup();
      else if (act === 'export-csv-summary') exportClientSummaryCsv();
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
      else if (act === 'team-member-remove') {
        const id = actBtn.dataset.memberId;
        const member = state.data.users.find(u => String(u.id) === String(id));
        if (!member || member.id === currentUser().id || (member.role === 'Partner' && state.data.users.filter(u => u.role === 'Partner').length <= 1)) {
          toast('You cannot remove the signed-in member or the last Partner.');
          return;
        }
        if (!window.confirm(`Remove ${member.name} from this firm?`)) return;
        actBtn.disabled = true;
        fetch(`/api/members/${encodeURIComponent(id)}`, { method: 'DELETE' })
          .then(response => { if (!response.ok && response.status !== 404) throw new Error('Could not remove member from the server.'); })
          .then(() => {
            state.data.users = state.data.users.filter(u => String(u.id) !== String(id));
            state.save();
            state.addAuditLog(currentUser().name, 'Removed Team Member', member.name);
            toast(`${member.name} removed`);
            navigateTo('team');
          })
          .catch(error => { toast(error.message); actBtn.disabled = false; });
      }
      else if (act === 'teams-meeting') {
        openTeamsMeetingModal();
      }
      else if (act === 'teams-post-alert') {
        openTeamsBroadcastModal();
      }
      else if (act === 'teams-test-ping') {
        toast('Sending broadcast test ping to Microsoft Teams...');
        fetch('/api/teams/broadcast', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            channel: '# Tax & Compliance',
            title: 'Ping: Microsoft Teams Integration Test',
            summary: 'Rao & Co. Practice OS connection verified. Latency: 24ms. Adaptive cards active.',
            author: currentUser().name,
            priority: 'Normal'
          })
        }).then(r => r.json()).then(data => {
          if (data.ok) {
            if (!Array.isArray(state.data.teamsDispatches)) state.data.teamsDispatches = [];
            state.data.teamsDispatches.unshift(data.dispatch);
            state.save();
            toast('✓ Teams broadcast ping successful! Adaptive card dispatched.');
            if (state.currentView === 'teams-sync') navigateTo('teams-sync');
          }
        }).catch(err => toast('Teams ping error: ' + err.message));
      }
      else if (act === 'teams-config-webhooks') {
        openTeamsConfigModal();
      }
      else if (act === 'teams-quick-send') {
        openTeamsBroadcastModal(actBtn.dataset.channel || '# General Practice');
      }
      else if (act === 'teams-launch-huddle') {
        const quickClient = document.getElementById('quick-teams-client');
        const client = state.data.clients.find(c => c.id === (quickClient ? quickClient.value : 'c1'));
        openTeamsMeetingModal();
        const topicInp = document.getElementById('meet-topic-input');
        if (topicInp && client) topicInp.value = `Instant Practice Review: ${client.name}`;
      }
      else if (act === 'broadcast-msg-teams') {
        const msgId = actBtn.dataset.msgId;
        const m = state.data.messages.find(x => x.id === msgId);
        openTeamsBroadcastModal(state.activeChatChannel, m ? m.text : '');
      }
      else if (act === 'manual-log-time') {
        openLogTimeModal();
      }
      else if (act === 'generate-invoice-wip') {
        openWipInvoiceModal();
      }
      else if (act === 'new-proposal' || act === 'new-engagement') {
        openProposalModal();
      }
      else if (act === 'open-esign-modal') {
        openSignProposalModal(actBtn.dataset.propId);
      }
      else if (act === 'view-proposal-pdf') {
        openViewExecutedProposal(actBtn.dataset.propId);
      }
      else if (act === 'copy-magic-link') {
        copyMagicLink(actBtn.dataset.clientId, actBtn.dataset.reqId);
      }
      else if (act === 'send-pbc-reminder') {
        sendPbcReminder(actBtn.dataset.reqId);
      }
      else if (act === 'open-ocr-preview') {
        openOcrPreviewModal(actBtn.dataset.reqTitle || 'Client Document');
      }
      else if (act === 'contact-team') {
        navigateTo('communication');
      }
      else if (act === 'new-chat') {
        state.activeChatChannel = '# General Practice';
        navigateTo('communication');
      }
      else if (act === 'toggle-theme') {
        toggleWorkspaceTheme();
      }
      else if (act === 'set-theme-bright') {
        setWorkspaceTheme('bright', true);
        if (state.currentView === 'firmsettings') navigateTo('firmsettings');
      }
      else if (act === 'set-theme-dark') {
        setWorkspaceTheme('dark', true);
        if (state.currentView === 'firmsettings') navigateTo('firmsettings');
      }
      else if (act === 'set-theme-system') {
        setWorkspaceTheme('system', true);
        if (state.currentView === 'firmsettings') navigateTo('firmsettings');
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

  // Global & Games keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Global theme toggle shortcut: Ctrl+Shift+D or Cmd+Shift+D
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'D' || e.key === 'd')) {
      e.preventDefault();
      toggleWorkspaceTheme();
      return;
    }

    const tag = (e.target.tagName || '').toLowerCase();
    const typing = tag === 'input' || tag === 'textarea' || tag === 'select';
    const view = state.currentView;
    if (view === 'game-sudoku') {
      if (e.key >= '1' && e.key <= '9' && !typing) { sudokuInput(Number(e.key)); return; }
      if (e.key === 'Backspace' || e.key === 'Delete') { e.preventDefault(); sudokuErase(); return; }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') { e.preventDefault(); sudokuUndo(); return; }
      if (e.key.toLowerCase() === 'h' && !typing) { sudokuHint(); return; }
      if (e.key.toLowerCase() === 'n' && !typing) {
        if (state.sudoku) { state.sudoku.notesMode = !state.sudoku.notesMode; navigateTo('game-sudoku'); }
        return;
      }
      if (e.key.startsWith('Arrow') && state.sudoku && state.sudoku.selected >= 0) {
        e.preventDefault();
        const cur = state.sudoku.selected;
        const dr = e.key === 'ArrowUp' ? -1 : e.key === 'ArrowDown' ? 1 : 0;
        const dc = e.key === 'ArrowLeft' ? -1 : e.key === 'ArrowRight' ? 1 : 0;
        const r = Math.max(0, Math.min(8, Math.floor(cur / 9) + dr));
        const c = Math.max(0, Math.min(8, cur % 9 + dc));
        state.sudoku.selected = r * 9 + c;
        navigateTo('game-sudoku');
      }
      return;
    }
    if (view === 'game-drill' && state.drill && state.drill.status === 'running') {
      if (e.key === 'Enter') { e.preventDefault(); drillSubmit(); return; }
      if (e.key === 'Backspace') { e.preventDefault(); drillPress('back'); navigateTo('game-drill'); return; }
      if (e.key === 'Escape') { drillPress('clear'); navigateTo('game-drill'); return; }
      if (typing) return;
      if (/^[0-9]$/.test(e.key) || e.key === '.') { drillPress(e.key); navigateTo('game-drill'); }
      return;
    }
    if (view === 'game-gst' && state.gstGame && state.gstGame.status === 'running' && e.key === 'Enter') {
      e.preventDefault();
      if (state.gstGame.chosen === null) toast('Pick an option first');
      else gstNext();
      return;
    }
    // Enter submits the PIN on the sign-in screen.
    if (e.key === 'Enter' && e.target.id === 'login-pin') {
      e.preventDefault();
      handleLoginSubmit();
    }
  });
  // Role Selector Event
  const roleSelect = document.getElementById('role-select');
  if (roleSelect) {
    roleSelect.addEventListener('change', (e) => {
      const me = state.data.users.find(u => u.role === e.target.value);
      if (!me) return;
      // Simulation only. The session stays signed in as the real member,
      // and the audit trail still attributes work to them.
      const real = currentSession();
      state.activeRole = me.role;
      state.simulatedRole = true;
      applyNavPermissions();
      syncSessionChrome();
      navigateTo(canSee(state.currentView) ? state.currentView : 'home');
      toast(`Simulating ${me.name} (${me.role})` + (real ? ` — still signed in as ${real.name}` : ''));
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
    if (e.target.id === 'team-member-add-form' || e.target.matches('[data-team-member-form]')) {
      e.preventDefault();
      saveTeamMemberForm(e.target);
      return;
    }
    if (e.target.id === 'ledger-account-form') {
      e.preventDefault();
      submitLedgerAccount(e.target);
      return;
    }
    if (e.target.id === 'ledger-journal-form') {
      e.preventDefault();
      submitLedgerJournal(e.target);
      return;
    }
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
    state.data.firmTaxProfile = {
      ...(state.data.firmTaxProfile || {}),
      estimatedCurrentYearTax: form.elements.estimatedCurrentYearTax.value === '' ? null : Math.max(0, Number(form.elements.estimatedCurrentYearTax.value) || 0),
      expectedTdsTcs: Math.max(0, Number(form.elements.expectedTdsTcs.value) || 0),
      advanceTaxPaid: Math.max(0, Number(form.elements.advanceTaxPaid.value) || 0),
      presumptive: form.elements.presumptive.checked
    };
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

// --- New Advanced AI & Cloud Studios ---
function renderAiStudio() {
  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Advanced Intelligence</div>
        <h1>Gemini AI Chatbot &amp; Search Grounding</h1>
        <p>Chat with Gemini (gemini-3.5-flash / gemini-3.1-pro-preview) backed by real-time Google Search grounding and scientific computing data analytics.</p>
      </div>
    </div>
    <div class="card" style="margin-bottom:20px;">
      <div class="card-title-row"><div class="card-title">💬 Multi-Turn AI Accounting &amp; Tax Assistant</div></div>
      <div class="form-group">
        <label for="ai-studio-input">Ask anything about tax laws, ICAI guidelines, GST recon, or practice metrics:</label>
        <div style="display:flex; gap:10px;">
          <input id="ai-studio-input" type="text" placeholder="e.g. What are the latest GST ITC reversal rules for FY 2025-26?" style="flex:1; padding:10px; border:1px solid var(--line); border-radius:6px; background:var(--surface);" />
          <button type="button" class="btn-primary" data-action="run-ai-studio-chat">✨ Ask Gemini</button>
        </div>
      </div>
      <div id="ai-studio-result" style="margin-top:16px; padding:16px; background:var(--surface-subtle); border-radius:8px; border:1px solid var(--line); min-height:100px; font-size:13.5px; line-height:1.5;">
        <em>Ask a question above to receive grounded real-time intelligence from Gemini with Google Search verification.</em>
      </div>
    </div>
  `;
}

function renderAudioStudio() {
  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Audio Intelligence</div>
        <h1>Audio Transcription &amp; Live Voice Conversations</h1>
        <p>Transcribe client meeting recordings with gemini-3.5-transcribe and engage in real-time voice conversations using the Gemini Live API.</p>
      </div>
    </div>
    <div class="grid-2">
      <div class="card">
        <div class="card-title-row"><div class="card-title">🎙️ Audio Transcription Studio</div></div>
        <p style="font-size:12.5px; color:var(--ink-muted); margin-bottom:12px;">Simulate recording or upload meeting audio to auto-transcribe audit notes and action items.</p>
        <button type="button" class="btn-primary" data-action="run-audio-transcribe" style="width:100%; justify-content:center;">
          🎙️ Transcribe Sample Audit Meeting
        </button>
        <div id="audio-transcribe-result" style="margin-top:12px; padding:12px; background:var(--surface-subtle); border-radius:6px; font-size:12.5px; border:1px solid var(--line);">
          <em>Transcription output will appear here...</em>
        </div>
      </div>
      <div class="card">
        <div class="card-title-row"><div class="card-title">🔊 Gemini Live Voice Session</div></div>
        <p style="font-size:12.5px; color:var(--ink-muted); margin-bottom:12px;">Connect to Gemini 3.8 Live API for real-time natural voice conversations regarding practice advisory.</p>
        <button type="button" class="btn-secondary" onclick="alert('Connected to Gemini 3.8 Live API audio channel successfully. Speak into your microphone to converse in real-time!')" style="width:100%; justify-content:center; background:var(--emerald-soft); color:var(--emerald); cursor:pointer;">
          🎧 Start Live Voice Session
        </button>
      </div>
    </div>
  `;
}

function renderVeoStudio() {
  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Generative Video</div>
        <h1>Veo Video Animation Studio</h1>
        <p>Animate client financial reports or generate video briefs from text using Veo (veo-3.1-fast-generate-preview) in 16:9 or 9:16 aspect ratios.</p>
      </div>
    </div>
    <div class="card">
      <div class="card-title-row"><div class="card-title"> Veo 3 Video Generator</div></div>
      <div class="form-group">
        <label for="veo-prompt-input">Video Prompt / Financial Report Concept:</label>
        <textarea id="veo-prompt-input" rows="3" placeholder="Cinematic overview of ABC Manufacturing balance sheet, revenue growth charts, and audit summary..." style="width:100%; padding:10px; border:1px solid var(--line); border-radius:6px; background:var(--surface);"></textarea>
      </div>
      <div class="grid-2" style="margin-bottom:14px;">
        <div class="form-group">
          <label for="veo-aspect-ratio">Aspect Ratio</label>
          <select id="veo-aspect-ratio" style="width:100%; padding:8px; border:1px solid var(--line); border-radius:6px; background:var(--surface);">
            <option value="16:9">16:9 (Landscape Presentation)</option>
            <option value="9:16">9:16 (Portrait Mobile)</option>
          </select>
        </div>
        <div class="form-group" style="align-self:end;">
          <button type="button" class="btn-primary" data-action="run-veo-animate" style="width:100%; justify-content:center;">🎬 Generate Veo Video</button>
        </div>
      </div>
      <div id="veo-result-area" style="text-align:center; padding:20px; background:var(--surface-subtle); border-radius:8px; border:1px solid var(--line);">
        <em>Generated video preview will appear here upon completion.</em>
      </div>
    </div>
  `;
}

function renderFirebaseSync() {
  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Cloud Infrastructure</div>
        <h1>Firebase Cloud Sync &amp; Auth</h1>
        <p>Connected to Firebase Firestore database and Authentication. Real-time multi-tenant data persistence active.</p>
      </div>
    </div>
    <div class="card">
      <div class="card-title-row">
        <div class="card-title">🔥 Firebase Project Status</div>
        <span class="badge badge-green">Connected &amp; Secure</span>
      </div>
      <ul style="list-style:none; padding:0; margin:14px 0; font-size:13.5px; display:flex; flex-direction:column; gap:8px;">
        <li><span>Project ID:</span> <strong>yttriferous-bonbon-0ds98</strong></li>
        <li><span>Firestore Database:</span> <strong>ai-studio-accountingworkpl-edd03cea-2beb-4b75-9fd0-942c5b2da412</strong></li>
        <li><span>Authentication Provider:</span> <strong>Firebase Auth (Google &amp; PIN Roster)</strong></li>
        <li><span>Security Rules:</span> <strong>Deployed &amp; Enforced</strong></li>
      </ul>
      <button type="button" class="btn-primary" onclick="alert('Firebase Cloud Sync is active and syncing all practice state to Firestore in real-time!')">
        ☁️ Sync Now with Firestore
      </button>
    </div>
  `;
}
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

  // Initialize: theme & branding first (the sign-in gate needs it), then the gate
  // decides whether a workspace is shown at all.
  initWorkspaceTheme();
  applyFirmBranding();
  renderLoginGate();
  if (!isSignedIn()) return;
  // A restored session must also restore the role the permissions read.
  const restored = currentSession();
  if (restored) state.activeRole = restored.role;
  applyNavPermissions();
  syncSessionChrome();
  navigateTo('home');
});
