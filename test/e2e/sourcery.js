var conf = require('../../nightwatch.conf.js');

const c = require('../../libs/constants');
const common = require('../../obj/common');
const login = require('../../obj/login');
const timeLogging = require('../../obj/timeLogging');
const menuBar = require('../../obj/menuBar');

module.exports = {
    'Login to sourcebooks POM': function (browser) {
        let userUnderTest = "Deividas Vaškevicius";
        let roleUnderTest = "Admin";

        browser
        .url(browser.launchUrl)
        .waitForElementVisible(common.pageTitle)
        
        .click(login.userSelect)
        .click(login.getSpecificSelectUserOption(userUnderTest))
        .click(login.roleSelect)
        .click(login.getSpecificSelectUserOption(roleUnderTest)) 
        .assert.containsText(login.userSelectedValue, userUnderTest)
        .click(common.submitButton)
        .waitForElementVisible(timeLogging.loggedInUsersName)
        .assert.containsText(timeLogging.loggedInUsersName, userUnderTest)
        .assert.containsText(menuBar.timeLoggingItem, menuBar.timeLogging)
        .assert.containsText(menuBar.projectsItem, menuBar.projects)
        .assert.containsText(menuBar.clientsItem, menuBar.clients)
        .assert.containsText(menuBar.timeEntriesItem, menuBar.timeEntries)
        .assert.containsText(menuBar.tasksItem, menuBar.tasks)
        .assert.containsText(menuBar.invoicesItem, menuBar.invoices)
        .assert.containsText(menuBar.activeNavigationTab, menuBar.timeLogging)
        .assert.cssProperty(menuBar.activeNavigationTab, 'color', common.blueColor )

        var d = new Date();
        browser.waitForElementVisible(common.userInfoTitle);
        browser.assert.containsText(timeLogging.selectedDay, d.getDate());
        browser.end();
    }
};
