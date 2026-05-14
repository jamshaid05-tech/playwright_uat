import { test } from '@playwright/test';
import { URL, EMAIL, PASSWORD } from '../helpers/constants.js';

test('login test', async ({ page }) => {
  const email = EMAIL;
  const password = PASSWORD;

  if (!email || !password) {
    throw new Error('Missing EMAIL or PASSWORD in environment');
  }

  await page.context().clearCookies();
  await page.goto(URL);
  await page.locator('input[id="username"]').fill(email);
  await page.locator('input[id="password"]').fill(password);
  await page.click('button[id="loginButton"]');
  await page.waitForURL('**LabMenu**', { timeout: 150000 });
});

// await page.locator('input#username').fill(email);