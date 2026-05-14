import { test, expect } from '@playwright/test';

test('Forgot Password Test', async ({ page }) => {

  await page.context().clearCookies();
  await page.goto('https://uat.xtremelabs.io/');
  await page.locator('text=Forgot Password?').click();
  await expect(page).toHaveURL(/ForgotPassword/i);
  await page.locator('#username').fill('jamshaid.ahmad@xtremelabs.io');
  await page.locator('#sendLinkButton').click();
  await expect(page.locator('text=Recovery email sent.')).toBeVisible({ timeout: 10000 });
  
});