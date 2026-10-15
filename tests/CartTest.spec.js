import {test,expect} from '@playwright/test'
import { LoginPage } from '../PageFolder/LoginPage'
import { HomePage } from '../PageFolder/HomePage'
import { CartPage } from '../PageFolder/CartPage'

test.beforeEach('Login',async({page})=>
{
    await page.goto("https://www.saucedemo.com/")
    const login = new SDLoginPage(page)
    // await login.setValues('standard_user','secret_sauce')
    // await page.waitForTimeout(4000)
    // await login.clickLoginBtn()
    // await page.waitForTimeout(4000)
    
    const home = new SDHomePage(page)
    await home.clickaddToCart()
    await home.clickCart()
})
test('Cart Test', async ({ page }) => {
    const cart = new CartPage(page)
    await expect(cart.yourCartField).toHaveText('Your Cart')
    
    const cartText = await cart.yourCartText()
    expect(cartText).toContain('Your Cart')

    const checkOutText = await cart.checkOutBtnText()
    expect(checkOutText).toContain('Checkout')

    await cart.clickCheckOut()
    await page.waitForTimeout(4000)


})