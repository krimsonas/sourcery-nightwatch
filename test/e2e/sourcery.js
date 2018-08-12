const c = require('../../libs/constants');
const common= require('../../obj/common');
const login = require('../../obj/login');
const timeLogging = require('../../obj/timeLogging');

module.exports = {
    'Login to sourcebooks': function (browser) {
        let userUnderTest = "Lukas Klimišinas";
        let userRole = "Admin";

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
        .isVisible(login.userRoleSelect, function(result) {
            if(result.status === c.ELEMENT_FOUND){
                browser.click(login.userRoleSelect)
            }
        })
        .isVisible(login.getSpecificSelectUserRoleOption(userRole), function(result) {
            if(result.status === c.ELEMENT_FOUND){
                browser.click(login.getSpecificSelectUserRoleOption(userRole))
            }
        })
        .assert.containsText(login.userRoleSelect, userRole)
        .isVisible(common.submitButton, function(result) {
            if(result.status === c.ELEMENT_FOUND) {
                browser
                .click(common.submitButton)
                .waitForElementVisible(timeLogging.loggedInUsersName);
            }
        })
        .assert.containsText(timeLogging.loggedInUsersName, userUnderTest)
        .waitForElementVisible(timeLogging.navbar)
        .assert.containsText(timeLogging.navbar, timeLogging.navbarLinks)
        .assert.containsText(timeLogging.navbarSelected, timeLogging.navbarSelectedValue)
        .assert.cssProperty(timeLogging.navbarSelected, timeLogging.activeProperty, timeLogging.navbarActiveValue)
        .end();
    }
};