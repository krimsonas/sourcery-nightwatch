// tests.js

var conf = require('../../../nightwatch.conf.js');

module.exports = {
  '@tags': ['sampletest'],

  before: function (browser, done) {
    this.loginPage = browser.page.login();
    this.homePage = browser.page.home();
    done();
  },

  'Open the website and login': function (browser) {
    console.log('Opening browser');
    browser.windowMaximize();

    this.loginPage
      .navigate()
      .waitForElementVisible('h1', 1000)  //wait for the Login title
      .fillLogin()
      .waitForElementVisible('@userFieldValue', 1000)
      .assert.containsText('@userFieldValue', 'Demo User', 'Demo user is selected in dropdown') // browser do not have @element - it is PageObject selector
      .clickSubmitButton();

    this.homePage.waitForElementVisible('@userInfoTitle', 1000)
      .assert.containsText('@userInfoTitle', 'Demo User', 'User is logged as Demo user');

  },

  after: function (browser, done) {
    browser.saveScreenshot(conf.imgpath(browser) + 'Demo.png')
      .end();
    done();
  }
};
