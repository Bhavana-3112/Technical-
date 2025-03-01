import { test, expect } from '@playwright/test';

test('User Login', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.fill('#username', 'testuser');
  await page.fill('#password', 'password123');
  await page.click('#loginButton');
  await expect(page).toHaveURL('https://example.com/dashboard');
});
