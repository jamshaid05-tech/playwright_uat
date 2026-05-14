import { test, expect } from '@playwright/test';

function getRandomSuffix() {
  return Math.floor(Math.random() * 90000 + 10000).toString();
}

test('register new user', async ({ page }) => {
  const randomSuffix = getRandomSuffix();
  const email = `labuser_${randomSuffix}@yopmail.com`;
  // Navigate to the register page
  
  await page.context().clearCookies();
  await page.goto('https://uat.xtremelabs.io/');
  await page.getByRole('link', { name: 'Register' }).click();

  // Fill in the registration form
  await page.fill('input[id="firstname"]', 'Lab');
  await page.fill('input[id="lastname"]', `User_${randomSuffix}`);
  await page.fill('input[id="email"]', email);
  await page.fill('input[id="confirmEmail"]', email);
  await page.fill('input[id="password"]', 'Test@1234');
  await page.fill('input[id="confirmPassword"]', 'Test@1234');
  
  // Click the reCAPTCHA checkbox (assuming it's a dummy for automation; normally handled differently in real tests)
  //await page.locator('iframe[title="reCAPTCHA"]').waitFor();
  // In real automation, you may need to disable CAPTCHA in test environment

  // Click the Sign Up button
  await page.click('button[id="loginButton"]');

  // Verify validation email confirmation message appears
  await expect(page.locator('#body')).toContainText(/Validation email has been sent/i);
  await page.click('button.btn-primary:has-text("OK")');
  await page.click('button[id="cancelLocation"]:has-text("Skip")');


  await expect(page).toHaveURL(/\/Account\/LogOn/, { timeout: 10000 });

  // Expect some confirmation message or URL change
  // await expect(page).toHaveURL(/MyAccount/);

  // Optional: check for success message
  // await expect(page.locator('text=Thank you for registering')).toBeVisible();
});
