import { test, expect } from '@playwright/test';

test('Forgot Password Test', async ({ page }) => {

  // Open application
  await page.goto('https://uat.xtremelabs.io/');
  // Click on Forgot Password link
  await page.locator('text=Forgot Password?').click();
  // Verify Forgot Password page is opened
  await expect(page).toHaveURL(/ForgotPassword/i);
  // Enter email address
  await page.locator('#username').fill('jamshaid.ahmad@xtremelabs.io');
  // Click Send Link button
  await page.locator('#sendLinkButton').click();
  // Optional wait after submission
  await page.waitForTimeout(30000);

});