const{test, expect}=require('@playwright/test')

test("my first test", async function ({page}){
        console.log('first test')
} )
test("my second", async function ({page}){
      expect(2).toBe(2)
} )
test.only("my third", async function ({page}){
        expect(12).toBe(12)
} )
test.skip("my fourth", async function ({page}){
        
} )
