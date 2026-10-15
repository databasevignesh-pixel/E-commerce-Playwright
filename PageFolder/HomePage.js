export class HomePage{
    constructor(page){
        this.page = page
        this.addtoCartField = page.locator('#add-to-cart-sauce-labs-backpack')
        this.productField = page.locator('xpath = //*[@id="header_container"]/div[2]/span')
        this.cartBtn = page.locator('xpath = //*[@id="shopping_cart_container"]/a')
    }
    async productTextMthd(){
        return this.productField.innerText()
    }
    async addtoCartEnabled(){
        return this.addtoCartField.isEnabled()
    }
    async clickaddToCart(){
        await this.addtoCartField.click()
    }
    async clickCart(){
        await this.cartBtn.click()
    }
}