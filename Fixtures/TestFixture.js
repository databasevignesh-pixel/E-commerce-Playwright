import{test,expect} from '@playwright/test'
import { LoginPage } from '../PageFolder/LoginPage'
import { HomePage } from '../PageFolder/HomePage'
import { CartPage, SDCartPage } from '../PageFolder/CartPage'
import { CheckOutPage, SDCheckOutPage } from '../PageFolder/CheckOutPage'
import {PaymentPage} from '../PageFolder/PaymentPage'

export const test = base.extend(
    {
        login: async ({page},use)=>
        {
            const login = new LoginPage(page)
            await use(login)
        },
        home: async ({page},use)=>
        {
            const home = new HomePage(page)
            await use(home)
        },
        cart: async ({page},use)=>
        {
            const cart = new CartPage(page)
            await use(cart)
        },
        check : async ({page},use)=>
        {
            const check = new CheckOutPage(page)
            await use(check)
        },
        payment : async ({page},use)=>
        {
            const payment = new PaymentPage(page)
            await use(payment)
        }


    }
)

export {expect}
