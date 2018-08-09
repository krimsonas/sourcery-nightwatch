var conf = require('../../nightwatch.conf.js');
const common = require('../../obj/common');
const login = require('../../obj/login');
const timeLogging = require('../../obj/timeLogging');
const userUnderTest = 'Martynas Šatas';
const roleUnderTest = 'Admin';
const menuButtons = ['Time Logging', 'Invoices', 'Projects', 'Clients', 'Time Entries', 'Tasks'];
const colorBlue = 'rgba(64, 76, 237, 1)';

module.exports = {
        'Login to sourcebooks': function (browser) {
                browser
                        .url(browser.launchUrl)
                        .waitForElementVisible(common.pageTitle)
                        .isVisible(login.userSelect, function (result) {
                                browser.click(login.userSelect)
                        })
                        .isVisible(login.getSpecificSelectUserOption(userUnderTest), function (result) {
                                browser.click(login.getSpecificSelectUserOption(userUnderTest))
                        })
                        .assert.containsText(login.userSelectedValue, userUnderTest)
                        .isVisible(login.roleSelect, function (result) {
                                browser.click(login.roleSelect)
                        })
                        .isVisible(login.getSpecificSelectRoleOption(roleUnderTest), function (result) {
                                browser.click(login.getSpecificSelectRoleOption(roleUnderTest))
                        })
                        .assert.containsText(login.roleSelectedValue, roleUnderTest)
                        .isVisible(common.submitButton, function (result) {
                                browser
                                        .click(common.submitButton)
                                        .waitForElementVisible(timeLogging.loggedInUsersName);
                        })
                        .assert.containsText(timeLogging.loggedInUsersName, userUnderTest);
                for (let i = 0; i < menuButtons.length; i++) {
                        browser.assert.containsText(common.menuBar, menuButtons[i]);
                }
                browser
                        .assert.containsText(common.activeMenuField, menuButtons[0])
                        .assert.cssProperty(common.activeMenuField, 'color', colorBlue)
                        .end();
        }
};