import React, { useEffect, useMemo, useState } from 'react';
import { Plus, Search, Download, Check, X, Clock, FileText, CalendarDays, Users, BriefcaseBusiness, ShieldCheck, CircleDollarSign, ClipboardCheck, ArrowUpRight, Pencil, Trash2, Filter, CheckCircle2, AlertCircle } from 'lucide-react';
import '../styles.css';

const seed = {
  Reports: [{name:'Recruitment funnel report',detail:'Applications, screening, interviews, offers and hires',status:'Ready',type:'Hiring analytics'},{name:'Department hiring report',detail:'Open roles, time-to-fill and team headcount',status:'Ready',type:'Department analytics'},{name:'Source effectiveness report',detail:'Candidate sources and conversion rates',status:'Ready',type:'Source analytics'},{name:'Monthly hiring summary',detail:'Hiring activity and pending requisitions',status:'Ready',type:'Monthly summary'}],
  'User Management': [{name:'Aarav Mehta',detail:'aarav@hireflow.demo',status:'Active',type:'HR Manager'},{name:'Priya Sharma',detail:'priya@hireflow.demo',status:'Active',type:'Recruiter'},{name:'Rohan Iyer',detail:'rohan@hireflow.demo',status:'Pending',type:'Interview Panel'}],
  'Roles & Permissions': [{name:'Super Admin',detail:'Platform-wide access',status:'Active',type:'All permissions'},{name:'HR Manager',detail:'Hiring and people operations',status:'Active',type:'HR permissions'},{name:'Recruiter',detail:'Jobs and candidate pipeline',status:'Active',type:'Recruitment permissions'}],
  'Company Settings': [{name:'Company profile',detail:'HireFlow Technologies',status:'Active',type:'General'},{name:'Email notifications',detail:'Application and interview alerts',status:'Active',type:'Notifications'}],
  'Audit Logs': [{name:'User signed in',detail:'Super Admin · Today, 09:15',status:'Completed',type:'Authentication'},{name:'Job opening updated',detail:'Frontend Developer · Yesterday',status:'Completed',type:'Job management'}],
  'Employees & Users': [{name:'Aarav Mehta',detail:'Engineering',status:'Active',type:'Software Engineer'},{name:'Priya Sharma',detail:'Design',status:'Active',type:'Product Designer'}],
  Departments: [{name:'Engineering',detail:'Technology and product development',status:'Active',type:'42 employees'},{name:'Design',detail:'Product and brand design',status:'Active',type:'12 employees'},{name:'People & Culture',detail:'HR and talent operations',status:'Active',type:'8 employees'}],
  'Company Policies': [{name:'Leave policy',detail:'Updated 01 Nov 2026',status:'Published',type:'People'},{name:'Hybrid work policy',detail:'Updated 15 Oct 2026',status:'Published',type:'Workplace'}],
  'Job Settings': [{name:'Default hiring workflow',detail:'Applied → Screening → Interview → Offer',status:'Active',type:'Workflow'},{name:'Approval requirement',detail:'Department head approval required',status:'Active',type:'Approval'}],
  Requisitions: [{name:'Senior Product Designer',detail:'Design · 2 openings',status:'Pending',type:'New hire'},{name:'Frontend Developer',detail:'Engineering · 3 openings',status:'Approved',type:'Replacement'}],
  'My Requisitions': [{name:'Data Analyst',detail:'Data & Insights · 1 opening',status:'Pending',type:'New hire'},{name:'Backend Engineer',detail:'Engineering · 2 openings',status:'Approved',type:'New hire'}],
  'My Interviews': [{name:'Aarav Mehta',detail:'Senior Product Designer · 10:30 AM',status:'Scheduled',type:'Portfolio review'},{name:'Priya Sharma',detail:'Frontend Developer · 1:00 PM',status:'Scheduled',type:'Technical round'}],
  'Feedback & Scorecards': [{name:'Aarav Mehta',detail:'Portfolio review · 20 Nov 2026',status:'Pending',type:'Interview feedback'},{name:'Priya Sharma',detail:'Technical round · 20 Nov 2026',status:'Completed',type:'Score: 4/5'}],
  Calendar: [{name:'Aarav Mehta interview',detail:'Today · 10:30 AM',status:'Scheduled',type:'Portfolio review'},{name:'Priya Sharma interview',detail:'Today · 1:00 PM',status:'Scheduled',type:'Technical round'}],
  Interviews: [{name:'Aarav Mehta',detail:'Senior Product Designer · 10:30 AM',status:'Scheduled',type:'Portfolio review'},{name:'Priya Sharma',detail:'Frontend Developer · 1:00 PM',status:'Scheduled',type:'Technical round'}],
  Offers: [{name:'Ananya Rao',detail:'HR Business Partner · ₹18 LPA',status:'Pending',type:'Offer approval'},{name:'Rohan Iyer',detail:'Backend Engineer · ₹22 LPA',status:'Accepted',type:'Offer'}],
  Onboarding: [{name:'Meera Nair',detail:'Joining 01 Dec 2026',status:'In progress',type:'Documents pending'},{name:'Kabir Khan',detail:'Joined 18 Nov 2026',status:'Completed',type:'Orientation'}],
  Tasks: [{name:'Review shortlisted candidates',detail:'Due today',status:'Pending',type:'Recruiter task'},{name:'Share interview feedback',detail:'Due tomorrow',status:'Pending',type:'Follow-up'}],
  'Compensation Review': [{name:'Ananya Rao',detail:'HR Business Partner',status:'Pending',type:'₹18 LPA'},{name:'Rohan Iyer',detail:'Backend Engineer',status:'Approved',type:'₹22 LPA'}],
  'Hiring Budgets': [{name:'Engineering',detail:'Annual hiring allocation',status:'Active',type:'₹85,00,000'},{name:'Design',detail:'Annual hiring allocation',status:'Active',type:'₹24,00,000'}],
  'Payroll Handoff': [{name:'Ananya Rao',detail:'Offer accepted · Joining 01 Dec',status:'Ready',type:'Payroll handoff'},{name:'Kabir Khan',detail:'Employee ID pending',status:'Pending',type:'Payroll setup'}],
  'Finance Reports': [{name:'Q4 hiring spend',detail:'Updated this month',status:'Ready',type:'Quarterly report'},{name:'Department budget usage',detail:'Updated this week',status:'Ready',type:'Budget report'}],
  'Hiring Approvals': [{name:'Senior Product Designer',detail:'Design · 2 positions',status:'Pending',type:'Requisition'},{name:'Data Analyst',detail:'Data & Insights · 1 position',status:'Pending',type:'Requisition'}],
  'Workforce Plan': [{name:'Engineering growth',detail:'Target headcount: 50',status:'In progress',type:'Workforce plan'},{name:'Design team',detail:'Target headcount: 16',status:'In progress',type:'Workforce plan'}],
  'Department Analytics': [{name:'Engineering',detail:'42 employees · 8 open roles',status:'On track',type:'Department'},{name:'Design',detail:'12 employees · 3 open roles',status:'On track',type:'Department'}],
  'Interview Feedback': [{name:'Aarav Mehta',detail:'Portfolio review',status:'Pending',type:'Feedback requested'},{name:'Priya Sharma',detail:'Technical round',status:'Completed',type:'Strong hire'}],
  'Team Candidates': [{name:'Aarav Mehta',detail:'Senior Product Designer',status:'Interview',type:'Assigned to your team'},{name:'Priya Sharma',detail:'Frontend Developer',status:'Screening',type:'Assigned to your team'}],
  'Team Status': [{name:'Engineering hiring',detail:'5 active requisitions',status:'In progress',type:'Team status'},{name:'Design hiring',detail:'2 active requisitions',status:'On track',type:'Team status'}],
  'Internal Jobs': [{name:'Frontend Developer',detail:'Engineering · Hyderabad / Hybrid',status:'Open',type:'Full-time'},{name:'Product Designer',detail:'Design · Remote',status:'Open',type:'Full-time'}],
  'My Referrals': [{name:'Nikhil Reddy',detail:'Referred for Frontend Developer',status:'Under review',type:'Referral'},{name:'Sana Khan',detail:'Referred for Product Designer',status:'Interview',type:'Referral'}],
  'My Profile': [{name:'Employee profile',detail:'Profile information and contact details',status:'Complete',type:'Personal details'},{name:'Skills and experience',detail:'Update your professional skills',status:'Needs update',type:'Professional'}],
  Documents: [{name:'Employment agreement',detail:'Signed document',status:'Available',type:'PDF'},{name:'Identity document',detail:'Verification copy',status:'Pending',type:'Document'}],
  'Browse Jobs': [{name:'Frontend Developer',detail:'Engineering · Hyderabad / Hybrid',status:'Open',type:'Full-time'},{name:'Data Analyst',detail:'Data & Insights · Remote',status:'Open',type:'Full-time'}],
  'My Applications': [{name:'Frontend Developer',detail:'Applied 18 Nov 2026',status:'Screening',type:'Application'},{name:'Data Analyst',detail:'Applied 12 Nov 2026',status:'Interview',type:'Application'}]
};

const descriptions = {
  'User Management':'Create, edit, activate and deactivate platform users.',
  'Roles & Permissions':'Review role access and configure the permissions shown in this frontend demo.',
  'Company Settings':'Maintain company profile, notification preferences and workspace settings.',
  'Audit Logs':'Review a local activity history of actions performed in this browser.',
  'Employees & Users':'Maintain employee records, roles, departments and employment status.',
  Departments:'Organise teams and maintain department ownership.',
  'Company Policies':'Draft, publish and review company policy records.',
  'Job Settings':'Configure hiring workflows and job approval rules.',
  Requisitions:'Review hiring requests and approve or reject requests.',
  'My Requisitions':'Create hiring requests and track their approval status.',
  'My Interviews':'View assigned interviews and record your evaluation.',
  'Feedback & Scorecards':'Submit structured interview feedback and hiring recommendations.',
  Calendar:'Review scheduled interviews and create calendar entries.',
  Interviews:'Schedule interviews, update status and capture interview outcomes.',
  Offers:'Track offer preparation, approval and candidate responses.',
  Onboarding:'Track joining formalities, documents and onboarding checklist progress.',
  Tasks:'Manage your recruitment follow-ups and due dates.',
  'Compensation Review':'Review proposed compensation packages and approval status.',
  'Hiring Budgets':'Track hiring allocations by department.',
  'Payroll Handoff':'Prepare accepted offers for payroll onboarding.',
  'Finance Reports':'Review finance and hiring budget report records.',
  'Hiring Approvals':'Approve or reject strategic hiring requests.',
  'Workforce Plan':'Track planned headcount and workforce initiatives.',
  'Department Analytics':'Review department-level hiring and headcount status.',
  'Interview Feedback':'Review feedback submitted by interviewers for your team.',
  'Team Candidates':'Review candidates currently assigned to your team.',
  'Team Status':'Track team hiring progress and outstanding actions.',
  'Internal Jobs':'Explore internal vacancies and submit an interest/referral record.',
  'My Referrals':'Submit and track employee referrals.',
  'My Profile':'Maintain your employee profile information.',
  Documents:'View document records and update their completion status.',
  'Browse Jobs':'Explore open positions and submit job applications.',
  'My Applications':'Track application progress and interview updates.'
};

const fieldsFor = page => {
  if (page.includes('Interview') || page === 'Calendar') return ['Candidate / event','Job / interview type','Date and time','Owner'];
  if (page.includes('Requisition') || page === 'Hiring Approvals') return ['Position / request','Department','Openings / details','Requested by'];
  if (page.includes('Budget') || page.includes('Compensation') || page.includes('Payroll') || page.includes('Finance')) return ['Name / department','Details','Amount / type','Owner'];
  if (page.includes('Job') || page === 'Browse Jobs' || page === 'Internal Jobs') return ['Job title','Department','Location','Employment type'];
  if (page.includes('Profile') || page === 'Documents') return ['Record name','Details','Category','Owner'];
  if (page.includes('User') || page.includes('Employee') || page.includes('Referral')) return ['Name','Email / details','Role / position','Department'];
  return ['Record name','Description','Category','Owner'];
};

const terminal = ['Approved','Rejected','Completed','Accepted','Published','Active','Ready','Open','Available','On track'];
const nextStatus = status => status === 'Pending' ? 'Approved' : status === 'Approved' ? 'Completed' : status === 'Scheduled' ? 'Completed' : status === 'In progress' ? 'Completed' : status === 'Open' ? 'Applied' : status === 'Applied' ? 'Screening' : status === 'Screening' ? 'Interview' : status === 'Interview' ? 'Offer' : 'Completed';

export default function RoleWorkspace({page,role,notify,setShowCreate}) {
  const storageKey = 'hireflow-workspace-v2';
  const [all,setAll] = useState(() => {
    try { return JSON.parse(localStorage.getItem(storageKey) || '{}'); } catch { return {}; }
  });
  const [search,setSearch] = useState('');
  const [statusFilter,setStatusFilter] = useState('All');
  const [modal,setModal] = useState(false);
  const [editing,setEditing] = useState(null);
  const [form,setForm] = useState({});
  const [permissionMap,setPermissionMap] = useState({});
  const fields = fieldsFor(page);
  const rows = all[page] || seed[page] || [{name:page+' workspace item',detail:'Sample record for this role',status:'Pending',type:role}];
  useEffect(() => { localStorage.setItem(storageKey,JSON.stringify(all)); },[all]);
  const visible = useMemo(() => rows.filter(r => (r.name+' '+r.detail+' '+r.type+' '+r.status).toLowerCase().includes(search.toLowerCase()) && (statusFilter==='All'||r.status===statusFilter)),[rows,search,statusFilter]);
  const saveRows = next => setAll(old => ({...old,[page]:next}));
  const startCreate = () => {setEditing(null);setForm({status:'Pending'});setModal(true);};
  const startEdit = row => {setEditing(row.id);setForm({...row});setModal(true);};
  const save = e => {
    e.preventDefault();
    const name = (form.name || form[fields[0]] || '').trim();
    if (!name) {notify('Please enter a name or title.');return;}
    const record = {id:editing || (Date.now()+'-'+Math.random().toString(16).slice(2)),name,detail:form.detail || form[fields[1]] || '',type:form.type || form[fields[2]] || role,status:form.status || 'Pending',date:form.date || ''};
    saveRows(editing ? rows.map(r=>r.id===editing?record:r) : [record,...rows]);
    setModal(false);setForm({});notify(editing?'Record updated.':'Record created.');
  };
  const act = (row,action) => {
    if (action==='delete') {if(!window.confirm('Delete this record?'))return;saveRows(rows.filter(r=>r.id!==row.id));notify('Record deleted.');return;}
    const status = action==='approve'?'Approved':action==='reject'?'Rejected':action==='complete'?'Completed':action==='advance'?nextStatus(row.status):action==='accept'?'Accepted':action==='publish'?'Published':'In progress';
    saveRows(rows.map(r=>r.id===row.id?{...r,status}:r));notify(row.name+' — '+status.toLowerCase()+'.');
  };
  const exportCsv = () => {
    const quote = value => '"'+String(value ?? '').replaceAll('"','""')+'"';
    const csv = [['Name','Details','Type','Status'],...visible.map(r=>[r.name,r.detail,r.type,r.status])].map(line=>line.map(quote).join(',')).join('\n');
    const url = URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8;'}));
    const link = document.createElement('a');link.href=url;link.download=page.toLowerCase().replaceAll(' ','-')+'.csv';link.click();URL.revokeObjectURL(url);
    notify('CSV export downloaded.');
  };
  const canApprove = ['Super Admin','Company Admin','HR Manager','Management/CEO','Reporting Manager'].includes(role) && (page.includes('Requisition')||page.includes('Approval')||page==='Offers'||page==='Compensation Review');
  const canDelete = ['Super Admin','Company Admin','HR Manager','Recruiter'].includes(role);
  const candidateAction = role==='Candidate' && (page==='Browse Jobs'||page==='My Applications');
  const employeeAction = role==='Employee' && (page==='Internal Jobs'||page==='My Referrals');
  const title = page==='Roles & Permissions'?'Role access matrix':page;
  const permissionRoles = ['Super Admin','Company Admin','HR Manager','Recruiter','Interview Panel','Finance/Payroll','Management/CEO','Reporting Manager','Employee','Candidate'];
  return <div className="rw-wrap">
    <div className="rw-intro"><div><span className="rw-eyebrow">{role.toUpperCase()} WORKSPACE</span><h2>{title}</h2><p>{descriptions[page] || 'Manage records and actions available to your role.'}</p></div><div className="rw-intro-actions"><button className="rw-btn secondary" onClick={exportCsv}><Download size={15}/> Export CSV</button><button className="rw-btn primary" onClick={startCreate}><Plus size={16}/> {candidateAction?'Apply / add record':employeeAction?'Submit referral / interest':'Create record'}</button></div></div>
    {page==='Roles & Permissions' && <section className="rw-panel rw-permissions"><div className="rw-panel-head"><div><h3>Permission overview</h3><p>Illustrative role permissions for the frontend prototype.</p></div><ShieldCheck size={20}/></div><div className="rw-permission-grid">{permissionRoles.map((r,i)=><div className="rw-permission-row" key={r}><b>{r}</b><span>{i===0?'All modules':i===1?'Company administration':i===2?'HR operations':i===3?'Jobs and candidates':i===4?'Assigned interviews':i===5?'Finance and payroll':i===6?'Executive reports':i===7?'Team visibility':i===8?'Self-service and referrals':'Own applications'}</span><label><input type="checkbox" defaultChecked={i<4} onChange={e=>setPermissionMap(old=>({...old,[r]:e.target.checked}))}/> Enabled</label></div>)}</div><p className="rw-note">These controls demonstrate the UI only. They do not secure data or replace server-side authorization.</p></section>}
    {page==='My Profile' && <section className="rw-panel rw-profile"><div className="rw-panel-head"><div><h3>Profile completion</h3><p>Keep your contact and professional information current.</p></div><Users size={20}/></div><div className="rw-progress"><span style={{width:'80%'}}/></div><div className="rw-profile-fields"><label>Full name<input defaultValue="Employee User"/></label><label>Work email<input defaultValue="employee@hireflow.demo"/></label><label>Phone<input placeholder="Add phone number"/></label><label>Skills<input placeholder="e.g. React, communication"/></label></div><button className="rw-btn primary" onClick={()=>notify('Profile changes saved in this browser demo.')}>Save profile</button></section>}
    <div className="rw-summary">
      <div><span>Total records</span><b>{rows.length}</b><small>In this workspace</small></div>
      <div><span>Needs attention</span><b>{rows.filter(r=>['Pending','Under review','Needs update'].includes(r.status)).length}</b><small>Pending actions</small></div>
      <div><span>Completed / approved</span><b>{rows.filter(r=>terminal.includes(r.status)).length}</b><small>Processed records</small></div>
    </div>
    <section className="rw-panel">
      <div className="rw-panel-head rw-table-head"><div><h3>{page} records</h3><p>Search, filter and update records. Changes are saved locally in this browser.</p></div><div className="rw-filters"><label className="rw-search"><Search size={15}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search records"/></label><label className="rw-select"><Filter size={14}/><select value={statusFilter} onChange={e=>setStatusFilter(e.target.value)}><option>All</option>{[...new Set(rows.map(r=>r.status))].map(s=><option key={s}>{s}</option>)}</select></label></div></div>
      <div className="rw-table-scroll"><table className="rw-table"><thead><tr><th>Name / title</th><th>Details</th><th>Type</th><th>Status</th><th>Actions</th></tr></thead><tbody>{visible.map((row,i)=><tr key={row.id||row.name+i}><td><b>{row.name}</b></td><td>{row.detail}</td><td>{row.type}</td><td><span className={'rw-status '+row.status.toLowerCase().replaceAll(' ','-')}>{row.status}</span></td><td><div className="rw-actions">
        {(canApprove || row.status==='Pending') && <button title="Approve" onClick={()=>act(row,'approve')}><Check size={15}/></button>}
        {canApprove && row.status==='Pending' && <button title="Reject" onClick={()=>act(row,'reject')}><X size={15}/></button>}
        {candidateAction && row.status==='Open' && <button className="rw-action-apply" onClick={()=>act(row,'advance')}>Apply</button>}
        {employeeAction && <button className="rw-action-apply" onClick={()=>act(row,'advance')}>{page==='My Referrals'?'Update':'Express interest'}</button>}
        {['Interview Panel','HR Manager','Recruiter','Reporting Manager'].includes(role) && (page.includes('Interview')||page==='Calendar') && <button title="Complete feedback" onClick={()=>act(row,'complete')}><ClipboardCheck size={15}/></button>}
        {page==='Onboarding' && <button title="Complete checklist" onClick={()=>act(row,'complete')}><CheckCircle2 size={15}/></button>}
        {page==='Offers' && <button title="Mark accepted" onClick={()=>act(row,'accept')}><CheckCircle2 size={15}/></button>}
        {page==='Payroll Handoff' && <button title="Mark ready" onClick={()=>act(row,'complete')}><CheckCircle2 size={15}/></button>}
        <button title="Edit" onClick={()=>startEdit(row)}><Pencil size={14}/></button>
        {canDelete && <button title="Delete" onClick={()=>act(row,'delete')}><Trash2 size={14}/></button>}
      </div></td></tr>)}</tbody></table>{visible.length===0&&<div className="rw-empty"><AlertCircle size={20}/><b>No records found</b><span>Try changing your search or filter.</span></div>}</div>
    </section>
    <div className="rw-footnote"><AlertCircle size={14}/> Demo mode: information is stored in this browser only. Clearing browser data will remove these changes.</div>
    {modal&&<div className="rw-overlay" onMouseDown={e=>{if(e.target===e.currentTarget)setModal(false)}}><form className="rw-modal" onSubmit={save}><div className="rw-modal-head"><div><span>{editing?'UPDATE RECORD':'NEW WORKSPACE RECORD'}</span><h3>{editing?'Edit '+page:'Create '+page.toLowerCase()+' record'}</h3></div><button type="button" onClick={()=>setModal(false)}><X size={19}/></button></div>
      <label>{fields[0]}<input autoFocus value={form.name||''} onChange={e=>setForm(old=>({...old,name:e.target.value}))} placeholder={'Enter '+fields[0].toLowerCase()} required/></label>
      <label>{fields[1]}<input value={form.detail||''} onChange={e=>setForm(old=>({...old,detail:e.target.value}))} placeholder={'Enter '+fields[1].toLowerCase()}/></label>
      <div className="rw-form-row"><label>{fields[2]}<input value={form.type||''} onChange={e=>setForm(old=>({...old,type:e.target.value}))} placeholder={fields[2]}/></label><label>Status<select value={form.status||'Pending'} onChange={e=>setForm(old=>({...old,status:e.target.value}))}>{['Pending','Approved','Rejected','Active','Scheduled','In progress','Completed','Open','Published','Accepted'].map(s=><option key={s}>{s}</option>)}</select></label></div>
      <div className="rw-modal-actions"><button type="button" className="rw-btn secondary" onClick={()=>setModal(false)}>Cancel</button><button type="submit" className="rw-btn primary">{editing?'Save changes':'Create record'} <ArrowUpRight size={15}/></button></div>
    </form></div>}
  </div>;
}
