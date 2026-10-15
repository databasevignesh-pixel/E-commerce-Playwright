export class CheckOutPage{
    constructor(page){
        this.page = page
        this.fnameField = page.locator('#first-name')
        this.lnameField = page.locator('#last-name')
        this.pcodeField = page.locator('#postal-code')
        this.continueBtn = page.locator('xpath = //*[@id="continue"]')
    }
    async setValues(fname,lname,pcode){
        await this.fnameField.fill(fname)
        await this.lnameField.fill(lname)
        await this.pcodeField.fill(pcode)
    }
    async clickContinue(){
        await this.continueBtn.click()
    }
}