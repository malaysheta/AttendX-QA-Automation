// AttendX - attendance marking tests (Playwright)
const { test, expect } = require('@playwright/test');

const BASE = 'http://localhost:3000';

test.beforeEach(async ({ page }) => {
  await page.goto(BASE + '/login');
  await page.fill('#username', 'faculty07');
  await page.fill('#password', 'Pass@2026');
  await page.click('button[type=submit]');
});

test('mark all students present for a lecture', async ({ page }) => {
  await page.goto(BASE + '/attendance/CE-5A/software-testing');
  await page.click('#markAllPresent');
  await page.click('#submitAttendance');
  await expect(page.locator('.toast')).toHaveText('Attendance submitted');
  await expect(page.locator('#presentCount')).not.toHaveText('0');
});
