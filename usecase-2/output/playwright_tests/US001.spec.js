import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
test('User Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('testuser', 'password123');
  await expect(page).toHaveURL('https://example.com/dashboard');
});
