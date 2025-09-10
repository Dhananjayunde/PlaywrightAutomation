import {test as setup, expect} from '@playwright/test'

setup("create auth file", async ({page,context})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

const username="Admin";
const pwd="admin123";

});