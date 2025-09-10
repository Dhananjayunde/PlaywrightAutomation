const{test,expect} =require('@playwright/test')
test.use({viewport:{width:1500,height:900}})

test("login test", async function({page}){
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   await page.getByPlaceholder("Username").fill("Admin",{delay:100})

   await page.locator("input[name='password']").fill("admin123",{delay:100})

   await page.locator("button[type='submit']").click()

   await page.locator("//span[normalize-space()='Admin']").click()
   await page.locator("//span[normalize-space()='Job']").click()
   await page.locator("//span[normalize-space()='My Info']").click()
   
    await expect(page).toHaveScreenshot("image.png");

   
   await page.close()



})