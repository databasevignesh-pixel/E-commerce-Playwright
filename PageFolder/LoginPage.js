export class LoginPage {
    constructor(page){
        this.page = page
        this.usernameField = page.locator('#user-name')
        this.passwordField = page.locator('#password')
        this.loginField = page.locator('#login-button')
    }
    async titleVerification(){
        return await this.page.title()
    }
    async setValues(username,password){
        await this.usernameField.fill(username)
        await this.passwordField.fill(password)
    }
    async clickLoginBtn(){
        await this.loginField.click()
    }
}