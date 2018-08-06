const c = require('../../libs/constants');
const common= require('../../obj/common');
const login = require('../../obj/login');
const timeLogging = require('../../obj/timeLogging');

module.exports = {
    'Login to sourcebooks': function (browser) {
        let userUnderTest = "Demo User";

        browser
        .url(browser.launchUrl)
        .waitForElementVisible(common.pageTitle)
        .isVisible(login.userSelect, function(result) {
            if(result.status === c.ELEMENT_FOUND) { 
                browser.click(login.userSelect)
            }
        })
        .isVisible(login.getSpecificSelectUserOption(userUnderTest), function(result) {
            if(result.status === c.ELEMENT_FOUND) { 
                browser.click(login.getSpecificSelectUserOption(userUnderTest))
            }
        })
        .assert.containsText(login.userSelectedValue, userUnderTest)
        .isVisible(common.submitButton, function(result) {
            if(result.status === c.ELEMENT_FOUND) {
                browser
                .click(common.submitButton)
                .waitForElementVisible(timeLogging.loggedInUsersName);
            }
        })
        .assert.containsText(timeLogging.loggedInUsersName, userUnderTest)
        .end();
    }
};