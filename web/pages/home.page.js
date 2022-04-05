const BasePage = require("./base.page")
class HomePage extends BasePage {

    get closeShippingPopUpIcon () { return $('button[data-testid="pml-dialog-close-btn"]') }
    get loginMenu () { return $('button[data-cy="nav_login"]') }
    get welcomeMessage () { return $('.user-section>.welcome-msg') }

    open(){
        return super.open("http://localhost:3000/");
    }

}

module.exports = new HomePage();