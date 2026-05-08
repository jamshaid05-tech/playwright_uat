import { test, expect } from '@playwright/test';

test('register new user', async ({ page }) => {
  // Navigate to the register page
  await page.goto('https://uat.xtremelabs.io/Account/LogOn?returnUrl=%2fMyAccount');

  // Check if XtremeLabs logo is visible
  await expect(page.locator('img[alt="XtremeLabs"]')).toBeVisible();

  // Fill in the registration form
  await page.fill('input[name="FirstName"]', 'Jamshaid');
  await page.fill('input[name="LastName"]', 'Ahmad');
  await page.fill('input[name="Email"]', 'jamshaid.ahmad+test@xtremelabs.io');
  await page.fill('input[name="ConfirmEmail"]', 'jamshaid.ahmad+test@xtremelabs.io');
  await page.fill('input[name="Password"]', 'Test@1234');
  await page.fill('input[name="ConfirmPassword"]', 'Test@1234');

  // Click the reCAPTCHA checkbox (assuming it's a dummy for automation; normally handled differently in real tests)
  //await page.locator('iframe[title="reCAPTCHA"]').waitFor();
  // In real automation, you may need to disable CAPTCHA in test environment

  // Click the Sign Up button
  await page.click('button:has-text("Sign Up")');

  // Expect some confirmation message or URL change
  await expect(page).toHaveURL(/MyAccount/);

  // Optional: check for success message
  // await expect(page.locator('text=Thank you for registering')).toBeVisible();
});
