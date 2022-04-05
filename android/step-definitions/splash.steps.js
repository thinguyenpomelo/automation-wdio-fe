const { Given, When, Then } = require('@wdio/cucumber-framework');
const SplashPage = require ("../pages/splash.page")

Given('the user click Get Started', function () {
    SplashPage.getStartedButton.click();
});