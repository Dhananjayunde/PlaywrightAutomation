import{test, expect} from '@playwright/test'

test('alert handling', async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
await page.locator("//button[text()='Click for JS Alert']").click()

    page.on('dialog',async (w)=>{
        expect(w.type()).toContain("alert")
        expect(w.message()).toContain("Alert")
        await w.dismiss()
    })
       
})
test('confirm alert handling',async ({page})=>{

await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
await page.locator("//button[text()='Click for JS Confirm']").click()

page.on('dialog', async (dailogWindow)=>{
    expect(dailogWindow.type().toContain("alert"))
    expect(dailogWindow.message().toContain("I am a JS Confirm"))

    await dailogWindow.dismiss()
})

})

test('prompt alert handling',async ({page})=>{

await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
await page.locator("//button[text()='Click for JS Prompt']").click()

page.on('dialog', async (dailogWindowP)=>{
    expect(dailogWindowP.type().toContain("prompt"))
    expect(dailogWindowP.message().toContain("I am a JS prompt"))

    await dailogWindowP.accept("name enter")
})

})