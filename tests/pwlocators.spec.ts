/*

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

*/
import { expect, test, Locator } from '@playwright/test';

test('Verify Plawright Locators', async ({ page }) => {

    
    await page.goto('https://priceoye.pk/');

    const logo: Locator = page.getByAltText('Priceoye.pk');
    await expect(logo).toBeVisible();

    await expect(page.getByText('Latest Personal Cares')).toBeVisible(); // full string
    await expect(page.getByText('Latest Personal')).toBeVisible(); // /prodived substring string

    
    await page.close();
})


