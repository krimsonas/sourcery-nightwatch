var conf = require('../../nightwatch.conf.js');
var common= require('../../obj/common');
var login = require('../../obj/login');
var timeLogging = require('../../obj/timeLogging');

module.exports = {
  'Login to sourcebooks': function (browser) {
        let userUnderTest = "Demo User";

        browser
        .url(browser.launchUrl)
        .waitForElementVisible(common.pageTitle);
        browser.element('css selector', login.userSelect, function(result) {
            if(result.status != -1) { 
                browser.click(login.userSelect)
            }
        });
        browser.element('css selector', login.getSpecificSelectUserOption(userUnderTest), function(result) {
            if(result.status != -1) { 
                browser.click(login.getSpecificSelectUserOption(userUnderTest))
            }
        });
        browser.assert.containsText(login.userSelectedValue, userUnderTest);
        browser.element('css selector', common.submitButton, function(result) {
            if(result.status != -1) {
                browser
                .click(common.submitButton)
                .waitForElementVisible(timeLogging.loggedInUsersName);
            }
        });
        browser.assert.containsText(timeLogging.loggedInUsersName, userUnderTest)
            .saveScreenshot(conf.imgpath(browser) + 'Demo.png')
            .end();
    }
};