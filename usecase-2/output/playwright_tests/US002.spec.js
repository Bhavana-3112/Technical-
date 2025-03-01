import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
test('Password Reset', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.clickForgotPassword();
  await loginPage.enterEmail('user@example.com');
  await loginPage.submitReset();
  await expect(page.locator('text=Reset link sent')).toBeVisible();
});
