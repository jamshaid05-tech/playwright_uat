import {Page, expect} from '@playwright/test';
import { URL, EMAIL, PASSWORD } from '../helpers/constants.js';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login() {
    await this.page.goto(URL);
    await this.page.locator('input[id="username"]').fill(EMAIL);
    await this.page.locator('input[id="password"]').fill(PASSWORD);
    await this.page.click('button[id="loginButton"]');
    await this.page.waitForURL('**/LabMenu/**', { timeout: 15000 });
  }
}