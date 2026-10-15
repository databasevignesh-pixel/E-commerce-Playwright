export class PaymentPage{
    constructor(page){
        this.page = page
        this.checkOutText = page.locator('xpath = //*[@id="header_container"]/div[2]/span')
        this.finishBtn = page.locator('#finish')
    }
    async checkOutVeri(){
        return this.checkOutText.innerText()
    }
    async clickFinish(){
        await this.finishBtn.click()
    }
}