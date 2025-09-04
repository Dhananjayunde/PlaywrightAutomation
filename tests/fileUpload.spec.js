import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/upload');
  await page.locator("[id='file-upload']").setInputFiles("C:/PlaywrightAutomation/attachment/image.png");
  await page.locator("[id='file-submit']").click()


});