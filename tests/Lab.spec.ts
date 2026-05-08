import {test, expect} from '@playwright/test';

test('lab test', async ({page}) => {

    await expect(page.locator('a[id="viewLabs"]')).toBeVisible();
    
});