import {test,expect} from '@playwright/test'
import { LoginPage } from '../PageFolder/LoginPage'

test('Login',async({page})=>
{
    await page.goto("https://www.saucedemo.com/")
    const login = new LoginPage(page)
    const title = await login.titleVerification()
    console.log(title)
    expect(title).toContain('Swag Labs')
    // await login.setValues('standard_user','secret_sauce')
    // await page.waitForTimeout(4000)
    // await login.clickLoginBtn()
})