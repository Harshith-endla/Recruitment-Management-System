
// Demo-only accounts for local UI testing. Never use client-side passwords in production.
export const demoAccounts = [
  { role: 'Super Admin', email: 'superadimin@gmail.com', password: 'superadmin1', name: 'Super Admin' },
  { role: 'Company Admin', email: 'companyadmin@gmail.com', password: 'companyadmin2', name: 'Company Admin' },
  { role: 'HR Manager', email: 'hrmanager@gmail.com', password: 'hrmanager3', name: 'HR Manager' },
  { role: 'Recruiter', email: 'recruiter@gmail.com', password: 'recruiter4', name: 'Recruiter' },
  { role: 'Interview Panel', email: 'interviewpanel@gmail.com', password: 'interviewpanel5', name: 'Interview Panel' },
  { role: 'Finance/Payroll', email: 'financepayroll@gmail.com', password: 'financepayroll6', name: 'Finance & Payroll' },
  { role: 'Management/CEO', email: 'managementceo@gmail.com', password: 'managementceo7', name: 'Management' },
  { role: 'Reporting Manager', email: 'reportingmanager@gmail.com', password: 'reportingmanager8', name: 'Reporting Manager' },
  { role: 'Employee', email: 'employee@gmail.com', password: 'employee9', name: 'Employee' },
  { role: 'Candidate', email: 'candidate@gmail.com', password: 'candidate10', name: 'Candidate' }
];

export const roles = [
  'Super Admin','Company Admin','HR Manager','Recruiter','Interview Panel','Finance/Payroll','Management/CEO','Reporting Manager','Employee','Candidate'
];
export const roleMeta = {
  'Super Admin': ['System overview','Full platform administration'],
  'Company Admin': ['Company administration','People, departments and policies'],
  'HR Manager': ['HR command centre','Hiring operations and approvals'],
  'Recruiter': ['Recruitment workspace','Jobs, applicants and interviews'],
  'Interview Panel': ['Interview workspace','Assigned interviews and scorecards'],
  'Finance/Payroll': ['Finance workspace','Compensation and hiring budgets'],
  'Management/CEO': ['Executive overview','Workforce and strategic hiring'],
  'Reporting Manager': ['Team hiring','Requisitions and team decisions'],
  'Employee': ['Employee self-service','Internal opportunities and referrals'],
  'Candidate': ['Candidate portal','Explore roles and track applications']
};
export const navByRole = {
  'Super Admin':['Overview','User Management','Roles & Permissions','Company Settings','Audit Logs','Reports'],
  'Company Admin':['Overview','Employees & Users','Departments','Job Settings','Company Policies','Reports'],
  'HR Manager':['Overview','Requisitions','Jobs','Candidates','Interviews','Offers','Onboarding','Reports'],
  'Recruiter':['Overview','My Requisitions','Job Openings','Candidates','Applications','Interviews','Tasks'],
  'Interview Panel':['Overview','My Interviews','Candidate Profiles','Feedback & Scorecards','Calendar'],
  'Finance/Payroll':['Overview','Compensation Review','Hiring Budgets','Payroll Handoff','Finance Reports'],
  'Management/CEO':['Executive Overview','Hiring Approvals','Workforce Plan','Department Analytics','Reports'],
  'Reporting Manager':['Overview','My Requisitions','Team Candidates','Interview Feedback','Team Status'],
  'Employee':['My Dashboard','Internal Jobs','My Referrals','My Profile','Documents'],
  'Candidate':['My Dashboard','Browse Jobs','My Applications','Interviews','My Profile']
};
export const applications = [
 {name:'Aarav Mehta',role:'Senior Product Designer',stage:'Interview',date:'20 Nov 2026',initials:'AM',color:'lavender',email:'aarav.mehta@email.com',score:'88%'},
 {name:'Priya Sharma',role:'Frontend Developer',stage:'Screening',date:'19 Nov 2026',initials:'PS',color:'peach',email:'priya.sharma@email.com',score:'—'},
 {name:'Rohan Iyer',role:'Backend Engineer',stage:'Assessment',date:'18 Nov 2026',initials:'RI',color:'mint',email:'rohan.iyer@email.com',score:'92%'},
 {name:'Ananya Rao',role:'HR Business Partner',stage:'Offer',date:'17 Nov 2026',initials:'AR',color:'blue',email:'ananya.rao@email.com',score:'95%'},
 {name:'Kabir Khan',role:'Data Analyst',stage:'Applied',date:'16 Nov 2026',initials:'KK',color:'yellow',email:'kabir.khan@email.com',score:'—'},
 {name:'Meera Nair',role:'Product Designer',stage:'Rejected',date:'15 Nov 2026',initials:'MN',color:'rose',email:'meera.nair@email.com',score:'74%'}
];
export const jobs = [
 {title:'Senior Product Designer',dept:'Design',location:'Bengaluru · Hybrid',type:'Full-time',applicants:48,status:'Active'},
 {title:'Frontend Developer',dept:'Engineering',location:'Hyderabad · On-site',type:'Full-time',applicants:36,status:'Active'},
 {title:'Data Analyst',dept:'Data & Insights',location:'Remote · India',type:'Full-time',applicants:29,status:'Active'},
 {title:'HR Business Partner',dept:'People',location:'Bengaluru · Hybrid',type:'Full-time',applicants:18,status:'Paused'},
 {title:'Backend Engineer',dept:'Engineering',location:'Pune · Hybrid',type:'Contract',applicants:22,status:'Active'}
];
