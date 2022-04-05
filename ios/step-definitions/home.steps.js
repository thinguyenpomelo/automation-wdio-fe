const { Given, When, Then } = require('@wdio/cucumber-framework');
const HomePage = require ("../pages/home.page")

Given('the user is open Pomelo page', function () {
    HomePage.open();
    HomePage.closeShippingPopUpIcon.click();
});

Given('the user is on login page', function () {
    HomePage.loginMenu.click();
});

Then('the user must see message Welcome {string}', function (firstName) {
    expect(HomePage.welcomeMessage).toExist();
    expect(HomePage.welcomeMessage).toHaveTextContaining(firstName);
});