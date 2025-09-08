import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('amazon');
  await page.locator('iframe[name="a-73g0efamb3jk"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="a-73g0efamb3jk"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
});