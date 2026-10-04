// Accounting Practice Operating System — app.js

// Default Seed Data Store
const seedData = {
  users: [
    { id: 'u1', name: 'Rithvik Shah', role: 'Partner', initials: 'RS', avatarBg: '#6d42c7' },
    { id: 'u2', name: 'Rahul Mehta', role: 'Manager', initials: 'RM', avatarBg: '#1b4d3e' },
    { id: 'u3', name: 'Priya Nair', role: 'Senior', initials: 'PN', avatarBg: '#ca7007' },
    { id: 'u4', name: 'Arjun Rao', role: 'Accountant', initials: 'AR', avatarBg: '#225cb8' },
    { id: 'u5', name: 'Neha Sharma', role: 'Trainee', initials: 'NS', avatarBg: '#1f7a4c' }
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
  }

  loadFromStorage() {
    try {
      const stored = localStorage.getItem('acc_workplace_os_data');
      return stored ? JSON.parse(stored) : seedData;
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

function renderBadge(status) {
  if (['Approved', 'Active', 'Completed', 'All received'].includes(status)) {
    return `<span class="badge badge-green"><span class="badge-dot-sm"></span>${status}</span>`;
  }
  if (['In Progress', 'Waiting for Review', 'Ready for Review', 'Attention', '3 of 4 received'].includes(status)) {
    return `<span class="badge badge-yellow"><span class="badge-dot-sm"></span>${status}</span>`;
  }
  if (['Overdue', 'Returned', 'Changes Requested', 'High'].includes(status)) {
    return `<span class="badge badge-red"><span class="badge-dot-sm"></span>${status}</span>`;
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
        <h1>Good morning, ${state.data.users[0].name.split(' ')[0]}</h1>
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
        ].map(([tabId, tabLabel]) => `
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
  return `
    <div class="page-header">
      <div class="page-header-title">
        <div class="eyebrow">Personal Workplace</div>
        <h1>My Work Queue</h1>
        <p>All tasks, reviews, documents, and deadlines assigned to you.</p>
      </div>
      <button class="btn-primary" data-action="new-task">＋ Create Task</button>
    </div>

    <div class="card">
      <div class="card-title-row">
        <div class="card-title">Assigned Tasks</div>
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
          <div class="card-title">Document Requests from Rao &amp; Co.</div>
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

// MAIN APP NAVIGATION RENDER ROUTER
function navigateTo(viewName) {
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
    auditlog: 'Audit Log'
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
      </div>
    </div>
  `;

  root.classList.add('open');

  // Event Handlers for Review Drawer
  document.getElementById('close-drawer').onclick = () => root.classList.remove('open');
  
  document.getElementById('btn-approve-doc').onclick = () => {
    doc.status = 'Approved';
    state.addAuditLog(state.data.users[0].name, 'Approved Document', doc.name);
    root.classList.remove('open');
    toast(`Approved ${doc.name}`);
    navigateTo(state.currentView);
  };

  document.getElementById('btn-return-changes').onclick = () => {
    const note = document.getElementById('drawer-note-input').value || 'Changes requested';
    doc.status = 'Returned';
    doc.comments.push({ author: state.data.users[0].name, text: note, time: 'Just now' });
    state.addAuditLog(state.data.users[0].name, 'Returned Document for Changes', doc.name);
    root.classList.remove('open');
    toast(`Returned ${doc.name} for changes`);
    navigateTo(state.currentView);
  };
}

// CREATOR MODAL CONTROLLER
function openCreateModal(type) {
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

    state.addAuditLog(state.data.users[0].name, 'Created Task', title);
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
      navigateTo(v);
    });
  });

  // Global Dynamic Click Handler
  document.body.addEventListener('click', (e) => {
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
        state.addAuditLog(state.data.users[0].name, 'Updated Task Status', t.title);
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
      if (act === 'quick-create' || act === 'new-task') openCreateModal('task');
      else if (act === 'new-client') openCreateModal('client');
      else if (act === 'upload-doc') openCreateModal('document');
      else if (act === 'new-request') openCreateModal('client request');
      else if (act === 'new-event') openCreateModal('calendar event');
      else if (act === 'new-announcement') openCreateModal('announcement');
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
      const userDisplay = document.getElementById('user-role-display');
      if (userDisplay) userDisplay.textContent = state.activeRole;
      toast(`Switched role to ${state.activeRole}`);
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

  // Chat Composer Submission
  document.body.addEventListener('submit', (e) => {
    if (e.target.id === 'chat-composer-form') {
      e.preventDefault();
      const input = document.getElementById('chat-input-text');
      if (!input || !input.value.trim()) return;

      state.data.messages.push({
        id: 'm_' + Date.now(),
        channel: state.activeChatChannel,
        author: state.data.users[0].name,
        authorInitials: 'RS',
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

  // Initialize Default View
  navigateTo('home');
});
