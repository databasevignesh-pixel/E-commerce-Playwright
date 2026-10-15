import {test,expect} from '@playwright/test'
import { LoginPage } from '../PageFolder/LoginPage'
import { HomePage } from '../PageFolder/HomePage'
import { CartPage } from '../PageFolder/CartPage'
import { CheckOutPage } from '../PageFolder/CheckOutPage'

test.beforeEach('Login',async({page})=>
{
    // await page.goto("https://www.saucedemo.com/")
    // const login = new SDLoginPage(page)
    // await login.setValues('standard_user','secret_sauce')
    // await page.waitForTimeout(4000)
    // await login.clickLoginBtn()
    // await page.waitForTimeout(4000)
    
    const home = new SDHomePage(page)
    await home.clickaddToCart()
    await home.clickCart()

    const cart = new SDCartPage(page)
    await cart.clickCheckOut()
    await page.waitForTimeout(4000)
})
test('Check out Test', async ({ page }) => {
    const checkout = new SDCheckOutPage(page)
    await checkout.setValues('abcd', 'efgh', '689582')
    await page.waitForTimeout(4000)
    await checkout.clickContinue()
    await page.waitForTimeout(4000)
  
})