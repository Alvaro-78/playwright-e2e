import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

  test('get started link', async ({ page }) => {
		await page.goto('https://playwright.dev/');

		// Click the get started link.
		await page.getByRole('link', { name: 'Get started' }).click();

		// Expects page to have a heading with the name of Installation.
		await expect(
			page.getByRole('heading', { name: 'Installation' })
		).toBeVisible();
	});


  // Nos permite interactuar con la página web
test('visit main page', async ({ page }) => {
	// Navega
	await page.goto('http://mercadolibre.com.co');
	// Busca el elemento por el id y lo llena
	await page.locator("input[id='cb1-edit']").fill('iphone');
	// Se presiona el boton enter
	await page.keyboard.press('Enter');

	await expect(
		page.locator("//ol[contains(@class, 'ui-search-layout')]")
	).toBeVisible();
	// await page.pause();

	const titles = await page
		.locator("//ol[contains(@class, 'ui-search-layout')]//li//h2")
		.allInnerTexts();

	for (let title of titles) {
		console.log('the title is: ', title);
	}
});


