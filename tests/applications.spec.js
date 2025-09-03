const{test, expect}=require('@playwright/test')

test("application test",async function ({page}) {
    await page.goto("https://www.google.com/")
    const url=await page.url()
    console.log("url for appliactionnpx playwright "+url)
    const title=await page.title
    console.log("expected title should be google"+title)

    await expect(page).toHaveTitle("Google")
})