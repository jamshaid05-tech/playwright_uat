import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://uat.xtremelabs.io/Account/LogOn?returnUrl=%2fMyAccount');

await expect(page.locator('img[alt="XtremeLabs"]')).toBeVisible();

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});

