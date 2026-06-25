import { expect, test } from '@playwright/test';
import { EMAIL, PASSWORD, URL } from '../helpers/constants.js';

test('login, open FAQs, logout, and return to login page', async ({ page }) => {
  const email = EMAIL;
  const password = PASSWORD;

  if (!email || !password) {
    throw new Error('Missing EMAIL or PASSWORD in environment');
  }

  await page.context().clearCookies();
  await page.goto(URL);

  await page.locator('input[id="username"]').fill(email);
  await page.locator('input[id="password"]').fill(password);
  await page.locator('button[id="loginButton"]').click();

  await expect(page.locator('#FAQs')).toBeVisible({ timeout: 150000 });
  await page.locator('#FAQs').click();
  await expect(page.locator('#FAQs')).toHaveAttribute('aria-selected', 'true');

  await page.locator('.app-surface.profile-circle').click();
  await page.getByText('Log off', { exact: true }).click();

  await expect(page.locator('input[id="username"]')).toBeVisible({ timeout: 150000 });
  await expect(page.locator('input[id="password"]')).toBeVisible({ timeout: 150000 });
  await expect(page.locator('button[id="loginButton"]')).toBeVisible({ timeout: 150000 });
});