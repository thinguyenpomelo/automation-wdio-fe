const BasePage = require("./base.page")
class LoginPage extends BasePage {

    open(){
        return super.open("http://localhost:3000/");
    }

}

module.exports = new LoginPage();