// AttendX - login page tests (Playwright)
const { test, expect } = require('@playwright/test');

const BASE = 'http://localhost:3000';

test('faculty can log in with valid credentials', async ({ page }) => {
  await page.goto(BASE + '/login');
  await page.fill('#username', 'faculty07');
  await page.fill('#password', 'Pass@2026');
  await page.click('button[type=submit]');
  await expect(page).toHaveURL(/dashboard/);
  await expect(page.locator('h1')).toContainText('Welcome');
});

test('empty fields show validation message', async ({ page }) => {
  await page.goto(BASE + '/login');
  await page.click('button[type=submit]');
  await expect(page.locator('.error')).toHaveText('Username and password are required');
});

test('account is locked after 3 wrong passwords', async ({ page }) => {
  await page.goto(BASE + '/login');
  for (let i = 0; i < 3; i++) {
    await page.fill('#username', 'faculty07');
    await page.fill('#password', 'wrong' + i);
    await page.click('button[type=submit]');
  }
  await expect(page.locator('.error')).toHaveText(/account locked/i);
});
