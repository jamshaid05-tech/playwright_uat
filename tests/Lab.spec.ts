import {test, expect} from '@playwright/test';
import { URL } from '../helpers/constants.js';

test('lab test', async ({page}) => {

    await page.goto(URL);
    await expect(page.locator('a[id="viewLabs"]')).toBeVisible();
    
});