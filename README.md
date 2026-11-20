# HireFlow – Recruitment Management System (Frontend)

A responsive React + Vite frontend prototype for the Recruitment Management System. It includes a dedicated sign-in experience, ten role workspaces, role-specific navigation, dashboards, candidate and job views, profile detail drawer, quick-create modal, notifications, and interactive UI feedback.

## Included roles
1. Super Admin
2. Company Admin
3. HR Manager
4. Recruiter
5. Interview Panel
6. Finance/Payroll
7. Management/CEO
8. Reporting Manager
9. Employee
10. Candidate (separate candidate workspace)

## Requirements
- Node.js 18 or newer
- npm

## Run on Windows / VS Code
1. Extract the project ZIP.
2. Open the `Recruitment-Management-System` folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:

```powershell
cd client
npm install
npm run dev
```

5. Open the local URL printed by Vite (normally `http://localhost:5173`).
6. Use the sign-in screen's **Preview workspace as** selector to preview any role. This frontend currently uses demo data and client-side interactions; backend authentication and MongoDB integration will be connected in the next phase.

## Frontend structure
```text
client/
├── public/
├── src/
│   ├── components/
│   ├── data/appData.js
│   ├── pages/
│   ├── styles/styles.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Current prototype interactions
- Switch between all ten role workspaces.
- Role-specific sidebar navigation.
- Candidate search, profile detail drawer and application list.
- Job listings and quick-create job interaction.
- Notification popover and export/filter feedback.
- Responsive desktop, tablet and mobile layouts.

> This is the frontend-only first milestone. Demo actions are local UI interactions and do not yet persist to a database. API integration, secure role authorization, file upload and real workflows are planned for the backend phase.


## Demo role-based login

The frontend now uses one shared login form. The entered email and password are matched against the demo account list in `client/src/data/appData.js`; a successful match opens the dashboard and navigation for that account's role. Invalid credentials show an inline error. The authenticated header includes a logout action.

### Demo accounts

| Role | Email | Password |
|---|---|---|
| Super Admin | superadimin@gmail.com | superadmin1 |
| Company Admin | companyadmin@gmail.com | companyadmin2 |
| HR Manager | hrmanager@gmail.com | hrmanager3 |
| Recruiter | recruiter@gmail.com | recruiter4 |
| Interview Panel | interviewpanel@gmail.com | interviewpanel5 |
| Finance/Payroll | financepayroll@gmail.com | financepayroll6 |
| Management/CEO | managementceo@gmail.com | managementceo7 |
| Reporting Manager | reportingmanager@gmail.com | reportingmanager8 |
| Employee | employee@gmail.com | employee9 |
| Candidate | candidate@gmail.com | candidate10 |

**Security note:** These are frontend-only demo credentials for local prototyping. They are visible in the browser bundle and are not secure authentication. Before production use, move credential validation to a backend, store salted password hashes, issue a secure session/token, and enforce role permissions on every protected API route.


## Role-specific frontend workflows

The role workspaces include interactive record management for platform administration, company administration, HR operations, recruiting, interview panels, finance/payroll, executive approvals, reporting managers, employees and candidates. Workspace pages provide local create/edit/delete actions where appropriate, search, status filters, CSV export and workflow status updates. The browser stores workspace changes in local storage, so they persist across refreshes in the same browser.

The permission matrix, profile editor, hiring approvals, interview feedback, offer/onboarding tracking, budget and payroll views are frontend demonstrations only. No server-side authorization, real email, file upload, payroll processing or cross-user synchronization is provided in this frontend-only milestone.
