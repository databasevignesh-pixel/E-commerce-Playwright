import{test,expect} from '@playwright/test'
import { SDLoginPage } from '../PageFolder/LoginPage'
import { SDHomePage } from '../PageFolder/HomePage'
import { SDCartPage } from '../PageFolder/CartPage'
import { SDCheckOutPage } from '../PageFolder/CheckOutPage'
import {SDPaymentPage} from '../PageFolder/PaymentPage'
import { log } from 'console'

test.beforeEach('Login',async({page})=>
{
    // await page.goto("https://www.saucedemo.com/")
    // const login = new SDLoginPage(page)
    // await login.setValues('standard_user','secret_sauce')
    // await page.waitForTimeout(4000)
    // await login.clickLoginBtn()
    // await page.waitForTimeout(4000)
    
    const home = new HomePage(page)
    await home.clickaddToCart()
    await home.clickCart()

    const cart = new CartPage(page)
    await cart.clickCheckOut()
    await page.waitForTimeout(4000)

        const checkout = new CheckOutPage(page)
    await checkout.setValues('Divya', 'Mathew', '689582')
    await page.waitForTimeout(4000)
    await checkout.clickContinue()
    await page.waitForTimeout(4000)
})
test('SD Login',async({page})=>
{
    const payment = new PaymentPage(page)
    const coText =await payment.checkOutVeri()
    console.log(coText)
    expect(coText).toContain('Checkout: Overview')
    await payment.clickFinish()
    await page.waitForTimeout(4000)
})