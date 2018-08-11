var conf = require('../../nightwatch.conf.js');
const c = require('../../libs/constants');
const common= require('../../obj/common');

module.exports = {

    before : function (browser) {
        browser.url(browser.launchUrl);
    },

    'Login to sourcebooks': function (browser) {
        let testName = 'Demo User';                             
        let testRole = 'Admin';                                 
        let screenshotPath = conf.imgpath(browser) + 'Demo.png';

        var login = browser.page.login();                           // POM object for login page
        var mainNav = browser.page.mainNav();                       // POM object for main menu

        login                                                           
        .waitForElementVisible('@loginHeader')                      // Check if header is visible
        .click('@userDropdown');                                    // Click on users dropdown
        browser
        .click(login.getOptionFromDropdown(testName));              // Click on the test user name from dropdown
        login
        .assert.containsText('@userDropdownSelectedItem', testName) // Check if test user is selected
        .click('@roleDropdown');                                    // Click on roles dropdown
        browser
        .click(login.getOptionFromDropdown(testRole));              // Click on the test role from dropdown
        login
        .assert.containsText('@roleDropdownSelectedItem', testRole) // Check if test role is selected
        .click(common.submitButton);                                // Click "Login"
        mainNav
        .waitForElementVisible('@loggedInUsersName', c.waitTime)
        .assert.containsText('@loggedInUsersName', testName);       // Check if test user name is displayed in user info
        browser
        .saveScreenshot(screenshotPath);                            // Take screenshot
    },

    after : function (browser) {
        browser.end();
    }
};