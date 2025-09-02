import {test,expect} from '@playwright/test'

test('Locators', async ({page})=>{
   await page.goto('https://www.amazon.in/');
const product=await page.$$("//a[normalize-space()='Mobiles']")
    for(const products of product){
            const productName= await page.textContent();
            console.log(productName)
    }
   
   const links =await page.$$('a');
   for(const link of links){
      const linktext = await link.textContent();
      console.log(linktext);
   }
   await page.locator('id=twotabsearchtextbox').click()
   await page.fill('id=twotabsearchtextbox', 'mobile phone')
   await page.locator('id=twotabsearchtextbox').type('mobile')
   await page.locator('id=twotabsearchtextbox').fill('mobile')
  
   await page.click('id=nav-search-submit-button')

   await page.close();

} )