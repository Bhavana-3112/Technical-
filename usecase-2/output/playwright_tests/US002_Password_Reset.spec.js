import { test, expect } from '@playwright/test';

test('Password Reset', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.click('text=Forgot Password');
  await page.fill('#email', 'user@example.com');
  await page.click('#resetButton');
  await expect(page.locator('text=Reset link sent')).toBeVisible();
});
