export class CartPage{
    constructor(page){
        this.page = page
        this.yourCartField = page.locator('xpath = //*[@id="header_container"]/div[2]/span')
        this.checkOutBtn = page.locator('#checkout')
    }
    async yourCartText(){
        return this.yourCartField.innerText()
    }
    async checkOutBtnText(){
        return this.checkOutBtn.innerText()
    }
    async clickCheckOut(){
        await this.checkOutBtn.click()
    }
}