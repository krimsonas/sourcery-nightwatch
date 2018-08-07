var conf = require('../../nightwatch.conf.js');

const c = require('../../obj/constants');
const common = require('../../obj/common');
const login = require('../../obj/login');
const timeLogging= require('../../obj/timeLogging');
const menuBar= require('../../obj/menuBar');

module.exports = {
    'Login to sourcebooks': function (browser) {
        let userUnderTest = "Deividas Vaškevicius";

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
        .assert.containsText(menuBar.navigationBar, menuBar.timeLogging)
        .assert.containsText(menuBar.navigationBar, menuBar.invoices)
        .assert.containsText(menuBar.navigationBar, menuBar.projects)
        .assert.containsText(menuBar.navigationBar, menuBar.clients)
        .assert.containsText(menuBar.navigationBar, menuBar.timeEntries)
        .assert.containsText(menuBar.navigationBar, menuBar.tasks)
        .assert.containsText(menuBar.activeNaviagtionTab, menuBar.timeLogging)
        .assert.cssProperty(menuBar.activeNavigationTab, 'color', common.blueColor )

        var d = new Date();
        browser.assert.containsText(timeLogging.selectedDay, d.getDate())
        .end();
    }
};