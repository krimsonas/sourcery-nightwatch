var conf = require('../../nightwatch.conf.js');

const helper = require('../../obj/helpers');
const common = require('../../obj/common');
const login = require('../../obj/login');
const timeLogging = require('../../obj/timeLogging');
const menuBar = require('../../obj/menuBar');
const tasks = require('../../obj/tasks');
module.exports = {
    'Login to sourcebooks POM': function (browser) {
        let userUnderTest = "Deividas Vaškevicius";
        let roleUnderTest = "Admin";
        var date = new Date();

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
        .assert.containsText(timeLogging.selectedDay, date.getDate())
        
    },

    'Admin creates new task': function (browser) {
        let taskName = 'nightwatch test ' + helper.randNumber();

        browser
        .url(browser.launchUrl + 'tasks')
        .waitForElementVisible(common.pageTitle);

        browser
        .click(tasks.createTaskBtn)
        .waitForElementVisible(common.userInfoTitle)
        .setValue(tasks.nameField, taskName )
        .setValue(tasks.descriptionField, 'nightwatch test desc')
        .click(tasks.billDropdown)
        .click(tasks.billYesOption)
        .assert.containsText(tasks.billDropdown, 'Yes')
        .setValue(tasks.rateField, '1') 
        .click(tasks.saveTaskBtn)
        .waitForElementVisible(common.userInfoTitle);
            
        browser.url(browser.launchUrl + 'tasks')
        .waitForElementVisible(common.pageTitle)
        .setValue(tasks.nameSearchField, taskName )
        .waitForElementVisible(tasks.nameSearchResultField(taskName))
        .end();
    }
};
