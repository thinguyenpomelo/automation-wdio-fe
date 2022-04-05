const BasePage = require("./base.page")
class SplashPage extends BasePage {

    get getStartedButton () {return $('com.mobile.pomelo.staging:id/action_bar_root')}
}

module.exports = new SplashPage();