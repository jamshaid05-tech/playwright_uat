import { chromium, test as setup } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';

setup('Setup', async () => {
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  if (!email || !password) {
    throw new Error('Missing EMAIL or PASSWORD in environment for global setup');
  }

  const browser = await chromium.launch();
  const page = await browser.newPage();

  const loginPage = new LoginPage(page);
  await loginPage.login();

  await page.context().storageState({ path: './.auth/storageState.json' });

  await browser.close();
});
