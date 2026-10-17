# AttendX QA Automation

End-to-end UI tests for the AttendX student attendance web app, written with Playwright (JavaScript).

### Folder structure
- `tests/login.spec.js` – login with valid credentials and empty-field validation
- `tests/mark-attendance.spec.js` – faculty marks the whole class present and submits
- `package.json` – project and Playwright dependency

### Run
```
npm install
npx playwright test
```
