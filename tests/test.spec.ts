import {test, expect} from '@playwright/test';

test('Verify the title', async ({ page }) => {
await page.goto('https://uniworthshop.com/');
await expect(page).toHaveTitle('Uniworth');
});