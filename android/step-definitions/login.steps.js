const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pages/login.page')

When('the user enters email as {string} and password as {string}', function (email, password) {
    LoginPage.emailInput.type(email);
    LoginPage.passwordInput.type(password);
});

When('clicks on login button', function () {
    LoginPage.loginButton.click();
});
