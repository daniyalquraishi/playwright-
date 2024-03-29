const { Given, When , Then } = require('@cucumber/cucumber');
const commonLocators = require('../page-objects/common-locators');
const { LoginPage } = require('../page-objects/login-page');
const loginPage = new LoginPage();

Given('I am on the login screen', { timeout: 10 * 1000 }, async function() {
  await loginPage.navigateToLoginScreen();
});

Given('I navigate to EIM HomePage', { timeout: 10 * 1000 }, async function() {
  await loginPage.navigateToHomePage();
});

Given('I fill the login form with valid credentials', { timeout: 10 * 1000 }, async function() {
  await loginPage.submitLoginForm();
});

Given('I fill the login form with invalid credentials', { timeout: 10 * 1000 }, async function() {
  await loginPage.submitLoginFormwithinvalidcreds();
});

Then('I should see EIM image', { timeout: 10 * 1000 }, async function() {
  await loginPage.eimImage();
});

Then('I should see {string} text', { timeout: 10 * 1000 }, async function(text) {
  await commonLocators.spantext(text);
});