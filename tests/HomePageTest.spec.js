const{test, expect}=require('@playwright/test')

test('Home Page',async ({page})=>{

   await page.goto('https://playwright.dev/');

   const pageTitle=page.title();
   console.log('page title is:', pageTitle);

  // await expect(page).toHaveTitle('Playwright');

   await expect(page).toHaveURL('https://playwright.dev/');

   await page.close();

} )