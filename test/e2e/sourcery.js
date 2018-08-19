var conf = require('../../nightwatch.conf.js');
const c = require('../../libs/constants.js');
const common= require('../../obj/common.js');
const login = require('../../obj/login.js');
const menu = require('../../obj/menu.js');
const timeLogging = require('../../obj/timeLogging.js');

module.exports = {
    'Login to sourcebooks': function (browser) {
        let userUnderTest = "Akvile Jarmalaviciute";
        let roleUnderTest = "Admin";
        let todayDate = new Date();
        let testDate = todayDate.getDate();

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

        .isVisible(login.roleSelect, function (result) {
            if (result.status === c.ELEMENT_FOUND) {
                browser.click(login.roleSelect);
            }
        })

        .isVisible(common.getSpecificSelectOptions(roleUnderTest), function (result) {
            if(result.status === c.ELEMENT_FOUND) {
                browser.click(common.getSpecificSelectOptions(roleUnderTest));
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
        .assert.containsText(timeLogging.loggedInUsersName, userUnderTest);

        

        browser.assert.containsText(menu.loggedInUser, userUnderTest)
            .assert.containsText(menu.timeLogging, 'Time Logging')
            .assert.containsText(menu.invoices, 'Invoices')
            .assert.containsText(menu.tasks, 'Tasks')
            .assert.containsText(menu.projects, 'Projects')
            .assert.containsText(menu.clients, 'Clients')
            .assert.containsText(menu.timeEntries, 'Time Entries')
            
        .end();
    }
};