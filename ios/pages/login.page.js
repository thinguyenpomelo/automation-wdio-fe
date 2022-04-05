const BasePage = require("./base.page")
class LoginPage extends BasePage {

    get emailInput () {return $('input[id="email"]')}
    get passwordInput () {return $('input[id="password"]')}
    get loginButton () {return $('button[data-cy="auth__login__email__button"]')}
}

module.exports = new LoginPage();