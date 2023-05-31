exports.AleatoirPage = class AleatoirPage {

    constructor(page) {
        this.page = page
        this.aleatoir_buttom = page.locator("xpath=//*[contains(text(),'Aléatoire')]")
    }

    async toConnect() {
        await this.page.goto('https://bouletcorp.com/');
    }

    async clickOnAleatoir() {
        await this.aleatoir_buttom.first().click();
    }
    async getCurrentURL () {
        const mmm=window.location.href
        console.log(mmm)
        return mmm
      }

    async checkUrlChanged() {
        const title = getCurrentURL()
        console.log(title);
       // if title.e('https://bouletcorp.com/');
             
    }

    
}