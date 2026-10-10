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
    this.loginPendingUser = null;
    this.loginError = '';
    // Set only while the role picker is simulating another member.
    this.simulatedRole = false;
    // Game state is in-memory only and is never saved with practice data.
    this.sudoku = null;
    this.drill = null;
    this.gstGame = null;
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
  if (!s || !s.userId) return null;
  // The user must still exist in the firm; a stale session never grants access.
  return state.data.users.find(u => u.id === s.userId) || null;
}
function isSignedIn() {
  return !!currentSession();
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
  const s = currentSession();
  if (s) state.addAuditLog(s.name, 'Signed out', reason || 'Session ended');
  clearSession();
  state.activeRole = 'Partner';
  state.simulatedRole = false;
  state.currentView = 'home';
  stopSudokuTicker();
  stopDrillTicker();
  stopGstTicker();
  renderLoginGate();
}
// Locks the workspace and asks for a member. `state.activeRole` is left as
// it was so an aborted sign-in reveals nothing about the previous session.
function renderLoginGate() {
  const shell = document.querySelector('.app-shell');
  const gate = document.getElementById('login-gate');
  if (!gate) return;
  if (isSignedIn()) {
    gate.innerHTML = '';
    gate.hidden = true;
    document.body.classList.remove('is-locked');
    if (shell) shell.hidden = false;
    syncSessionChrome();
    return;
  }
  document.body.classList.add('is-locked');
  if (shell) shell.hidden = true;
  gate.hidden = false;
  gate.innerHTML = renderLogin();
  const pinInput = document.getElementById('login-pin');
  if (pinInput) pinInput.focus();
}
function renderLogin() {
  const f = firm();
  const pending = state.loginPendingUser;
  const rows = state.data.users.map(u => {
    const active = pending && pending.id === u.id;
    return `
      <button type="button" class="login-user ${active ? 'is-selected' : ''}" data-action="login-pick" data-user-id="${u.id}">
        <span class="login-avatar" style="background:${u.avatarBg}">${u.initials}</span>
        <span class="login-user-text">
          <span class="login-user-name">${u.name}</span>
          <span class="login-user-role">${u.role}</span>
        </span>
        <span class="login-user-pin">PIN ${pinForUser(u)}</span>
      </button>`;
  }).join('');
  const pinField = pending ? `
    <div class="login-pin-block">
      <label class="login-pin-label" for="login-pin">Enter the 4-digit PIN for ${pending.name}</label>
      <div class="login-pin-row">
        <input id="login-pin" class="login-pin-input" type="password" inputmode="numeric"
               maxlength="4" autocomplete="off" placeholder="••••"
               aria-label="PIN for ${pending.name}" />
        <button type="button" class="btn-primary login-go" data-action="login-submit">Sign in →</button>
      </div>
      ${state.loginError ? `<div class="login-error">${state.loginError}</div>` : ''}
      <button type="button" class="login-back" data-action="login-pick" data-user-id="">← Choose a different member</button>
    </div>` : `
    <div class="login-hint">Select your name to continue.</div>`;
  return `
    <div class="login-split">
      <div class="login-brand">
        <div class="login-brand-mark" data-firm="monogram">${f.monogram || 'R'}</div>
        <div class="login-brand-name" data-firm="legalName">${f.legalName || f.name}</div>
        <p class="login-brand-line">${f.tagline || 'Operating system for the practice.'}</p>
        <ul class="login-brand-facts">
          <li><span>GSTIN</span><b>${f.gstin || '—'}</b></li>
          <li><span>PAN</span><b>${f.pan || '—'}</b></li>
          <li><span>Membership</span><b>${f.membershipNo || '—'}</b></li>
          <li><span>Regulator</span><b>${f.regulator || '—'}</b></li>
          <li><span>Office</span><b>${f.officeLabel || '—'}</b></li>
        </ul>
        <div class="login-brand-foot" data-firm="footerNote">${f.footerNote || ''}</div>
      </div>
      <div class="login-panel">
        <div class="eyebrow">Firm access</div>
        <h1 class="login-title">Sign in to your practice</h1>
        <p class="login-sub">${state.data.users.length} members · ${state.data.clients.length} clients · ${state.data.engagements.length} live engagements</p>
        <div class="login-users">${rows}</div>
        ${pinField}
        <div class="login-note">
          🔒 This is a static demo — the PIN gates the interface, it does not authenticate against a server.
          Each member's PIN is shown beside their name.
        </div>
      </div>
    </div>`;
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
  Partner:    ['view.allClients', 'view.firmFinancials', 'view.clientFinancials', 'view.reports', 'view.auditLog', 'approve.final', 'approve.payment', 'create.client', 'create.task', 'upload.doc', 'announce', 'manage.users'],
  Manager:    ['view.allClients', 'view.clientFinancials', 'view.reports', 'view.auditLog', 'approve.manager', 'approve.payment', 'create.client', 'create.task', 'upload.doc', 'announce'],
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
  payments: ['Partner', 'Manager'],
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
  'game-gst': ALL_ROLES
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
  'pay-approve': 'approve.payment'
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
  requests: 'Client Requests'
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
    dayCells.push(`<div style="min-height:64px;border:1px solid var(--line);border-radius:6px;padding:4px;background:var(--surface)"><div style="font-weight:700;font-size:11px">${day}</div>${dayEvents.map(e => `<div title="${e.title}" style="font-size:9px;color:var(--emerald);font-weight:700;overflow:hidden;text-overflow:ellipsis">${e.title}</div>`).join('')}</div>`);
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
          <div class="card-title">${monthLabel}</div>
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
        <div style="display:flex;flex-direction:column;gap:12px;">${upcoming.length ? upcoming.map(e => `<div style="padding:10px;border:1px solid var(--line);border-radius:6px"><strong>${shortDate(e.date)} — ${e.title}</strong><div style="font-size:11px;color:var(--ink-muted)">${e.details || `Created by ${e.createdBy || 'team member'}`}</div></div>`).join('') : '<div class="empty-state">No events scheduled this month. Add one to get started.</div>'}</div>
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
                  <div class="doc-row-actions">
                    <button class="btn-secondary" style="padding:4px 10px; font-size:11px;" data-open-doc="${d.id}">
                      👁 View
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
        <button type="button" class="btn-secondary" data-action="doc-download" data-doc="${d.id}">⭳ Save a copy</button>
        <button type="button" class="btn-primary" data-action="doc-vault" data-doc="${d.id}">💾 Save to firm vault</button>
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
  toast(`Saved "${d.name}" to your downloads`);
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
            ${state.data.clients.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
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

  const activeClients = (state.data.clients || []).filter(c => !['Inactive', 'Archived'].includes(c.status)).length;
  const activeEngagements = (state.data.engagements || []).filter(e => !['Completed', 'Closed', 'Archived'].includes(e.status));
  const avgProgress = activeEngagements.length ? Math.round(activeEngagements.reduce((sum, e) => sum + (Number(e.progress) || 0), 0) / activeEngagements.length) : 0;
  const pendingReviews = (state.data.documents || []).filter(d => d.status === 'Waiting for Review').length + (state.data.reviews || []).filter(r => ['Pending', 'Waiting for Review'].includes(r.status)).length;
  const today = new Date().toISOString().slice(0, 10);
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
        <div class="stat-value">${state.data.clients.length}</div>
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
        <h1>Team Members</h1>
        <p>Add people to your firm, update their role, or remove access.</p>
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
    const components = ['taxable', 'igst', 'cgst', 'sgst', 'cess', 'total'];
    const variance = components.reduce((sum, field) => sum + Math.abs((Number(pr[field]) || 0) - (Number(b[field]) || 0)), 0);
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
  { id: 'gstr-1', label: 'GSTR-1 (Outward Supplies)', dayOfNextMonth: 11, category: 'GST', freq: 'monthly' },
  { id: 'epf-esi', label: 'EPF + ESI Contribution', dayOfNextMonth: 15, category: 'Payroll', freq: 'monthly' },
  { id: 'gstr-3b', label: 'GSTR-3B (Tax Payment)', dayOfNextMonth: 20, category: 'GST', freq: 'monthly' }
];

// Indian financial year runs April to March. FY 2026-27 = 2026-04 .. 2027-03.
function parseMonthKey(mk) {
  const [y, m] = mk.split('-').map(Number);
  return { year: y, month: m };
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

// Fixed-date obligations within FY 2026-27.
const ADVANCE_TAX_DATES = taxDatesForCurrentFY();
const ITR_DATES = [
  { date: '2026-07-31', label: 'ITR — Non-Audit', rate: 0 },
  { date: '2026-10-31', label: 'ITR — Audit Cases', rate: 0 }
];

// ITC is claimable only for lines that actually reconciled. A line missing from
// 2B was never on the portal; one missing from the register was never booked;
// an unresolved variance has not been accepted. None of those may claim credit.
function eligibleItc(monthKeyStr) {
  const gr = state.data.gstRecons.find(g => g.month === monthKeyStr);
  if (!gr) return 0;
  return reconcileGst(gr).reduce((sum, r) => {
    if (r.status !== 'Matched' || !r.pr || !r.portal) return sum;
    return sum + (Number(r.pr.igst) || 0);
  }, 0);
}

function outputTaxFor(monthKeyStr) {
  return (state.data.salesRegisters || [])
    .filter(s => s.month === monthKeyStr)
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
  // Cash paid to employees plus statutory remittances. Employee PF is already
  // withheld from net wages, so add it once as a statutory payment.
  return (Number(run.net) || 0) + (Number(run.pfEmployee) || 0) + (Number(run.pfEmployer) || 0) + (Number(run.esi) || 0);
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
      const due = dueDateForPeriod(period, rule.dayOfNextMonth);
      if (due < from || due > to) return;

      let amount = null, detail = '';
      if (rule.id === 'tds-deposit') {
        amount = tdsFor(period);
        detail = 'Deposit on TDS deducted during ' + periodLabel(period);
      } else if (rule.id === 'gstr-1') {
        amount = 0;
        detail = 'Return for outward supplies of ' + periodLabel(period);
      } else if (rule.id === 'epf-esi') {
        amount = payrollFor(period);
        detail = payrollFor(period) === null
          ? 'No payroll run recorded for ' + periodLabel(period)
          : 'Employee + employer PF and ESI for ' + periodLabel(period);
      } else if (rule.id === 'gstr-3b') {
        const outputTax = outputTaxFor(period);
        const itc = eligibleItc(period);
        amount = outputTax - itc;
        detail = 'Output tax ' + inr(outputTax) + ' less eligible ITC ' + inr(itc) +
                 (itc === 0 && outputTax > 0 ? ' (no reconciliation on file for this period)' : '');
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

  ITR_DATES.forEach(it => {
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
  const month = new Date().toISOString().slice(0, 7);
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
    gstrecon: 'GST 2A/2B Recon',
    games: 'Games',
    'game-sudoku': 'Sudoku',
    'game-drill': 'Speed Drill',
    'game-gst': 'GST Challenge'
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
    case 'team': appView.innerHTML = renderTeamMembers(); break;
    case 'search': appView.innerHTML = renderSearch(); break;
    case 'notifications': appView.innerHTML = renderNotifications(); break;
    case 'workspace': appView.innerHTML = renderWorkspace(); break;
    case 'gstrecon': appView.innerHTML = renderGstRecon(); break;
    case 'payments': appView.innerHTML = renderPayments(); break;
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
  const today = new Date().toISOString().slice(0, 10);
  const clientOptions = clients.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
  const memberOptions = members.map(u => `<option value="${u.name}">${u.name} (${u.role})</option>`).join('');
  const label = type.replace(/\b\w/g, c => c.toUpperCase());
  const specificFields = type === 'task' ? `
    <div class="form-group"><label>Client</label><select required id="form-client-select">${clientOptions}</select></div>
    <div class="form-group"><label>Assigned Staff</label><select required id="form-staff-select">${memberOptions}</select></div>
    <div class="form-group"><label>Reviewer</label><select id="form-reviewer-select"><option value="">Unassigned</option>${memberOptions}</select></div>
    <div class="form-group"><label>Due date</label><input required id="form-date-input" type="date" value="${today}" /></div>
    <div class="form-group"><label>Priority</label><select id="form-priority-select"><option>Medium</option><option>High</option><option>Low</option></select></div>
    <div class="form-group"><label>Engagement</label><select id="form-engagement-select"><option value="">No engagement</option>${(state.data.engagements || []).map(e => `<option value="${e.id}">${e.title}</option>`).join('')}</select></div>` : '';
  const clientField = ['client request'].includes(type) ? `<div class="form-group"><label>Client</label><select required id="form-client-select">${clientOptions}</select></div>` : '';
  const dateField = type === 'calendar event' ? `<div class="form-group"><label>Date</label><input required id="form-date-input" type="date" value="${today}" /></div><div class="form-group"><label>Time / details</label><input id="form-details-input" placeholder="Optional time or location" /></div>` : '';
  const dueField = type === 'client request' ? `<div class="form-group"><label>Due date</label><input required id="form-date-input" type="date" value="${today}" /></div><div class="form-group"><label>Requested items (one per line)</label><textarea id="form-details-input" rows="4" placeholder="Bank statement\nPurchase register"></textarea></div>` : '';
  const contentField = type === 'announcement' ? `<div class="form-group"><label>Announcement</label><textarea required id="form-details-input" rows="5" placeholder="Write the message for your team"></textarea></div>` : '';
  const clientForm = type === 'client' ? `
    <div class="form-group"><label>Legal name</label><input required id="form-name-input" placeholder="Registered business name" /></div>
    <div class="form-group"><label>Industry</label><input id="form-industry-input" placeholder="Industry" /></div>
    <div class="form-group"><label>GSTIN</label><input id="form-gstin-input" maxlength="15" /></div>
    <div class="form-group"><label>PAN</label><input id="form-pan-input" maxlength="10" /></div>
    <div class="form-group"><label>Contact email</label><input id="form-email-input" type="email" /></div>` : '';
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

  document.getElementById('close-modal').onclick = () => root.classList.remove('open');
  document.getElementById('creator-form').onsubmit = (e) => {
    e.preventDefault();
    const value = id => document.getElementById(id)?.value?.trim() || '';
    const title = value('form-title-input');
    const now = new Date().toISOString();
    if (type === 'client') {
      const name = value('form-name-input');
      const id = `c_${Date.now()}`;
      state.data.clients.unshift({ id, name, legalName: name, industry: value('form-industry-input') || 'Other', gstin: value('form-gstin-input'), pan: value('form-pan-input'), email: value('form-email-input'), status: 'Active', createdAt: now });
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
      else if (act === 'login-pick') {
        handleLoginPick(actBtn.dataset.userId || '');
      }
      else if (act === 'login-submit') {
        handleLoginSubmit();
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
      else if (act === 'upload-doc') openDocumentModal();
      else if (act === 'doc-download') downloadDoc(state.data.documents.find(d => d.id === actBtn.dataset.doc));
      else if (act === 'doc-vault') saveDocToVault(state.data.documents.find(d => d.id === actBtn.dataset.doc));
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

  // Games keyboard: only active while a game is on screen.
  document.addEventListener('keydown', (e) => {
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

  // Initialize: branding first (the sign-in gate needs it), then the gate
  // decides whether a workspace is shown at all.
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
