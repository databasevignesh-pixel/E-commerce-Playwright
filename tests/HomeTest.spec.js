import {test,expect} from '@playwright/test'
import { LoginPage } from '../PageFolder/LoginPage'
import { HomePage } from '../PageFolder/HomePage'

test.beforeEach('Login',async({page})=>
{
    // await page.goto("https://www.saucedemo.com/")
    // const login = new SDLoginPage(page)
    // await login.setValues('standard_user','secret_sauce')
    // await page.waitForTimeout(4000)
    // await login.clickLoginBtn()
})
test('Home',async({page})=>
{
    //await page.goto('https://www.saucedemo.com/inventory.html')
    const home = new HomePage(page)
    const productText = await home.productTextMthd()
    console.log(productText)
    expect(productText).toContain('Products')
    await page.waitForTimeout(4000)

    const ADEnabled = await home.addtoCartEnabled()
    console.log(ADEnabled)
    expect(ADEnabled).toBe(true)

    await home.clickaddToCart()
    await home.clickCart()

})