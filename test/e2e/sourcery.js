var conf = require('../../nightwatch.conf.js');
const constants = require('../../obj/constants.js');
const common = require('../../obj/common.js');
const menu = require('../../obj/menu.js');
const login = require('../../obj/login.js');
const timeLogging = require('../../obj/timeLogging.js');
const tasks = require('../../obj/tasks.js');

module.exports = {
    'Login to sourcebooks': function (browser) {
        let userUnderTest = "Ruta Bielyte";
        let roleUnderTest = "Admin";
        let testDate = new Date().getDate();
        let testScreenshot = "Demo.png";
        browser
            .url(browser.launchUrl)
            .waitForElementVisible(common.pageTitle);
        //Select user 
        browser.isVisible(login.userSelect, function (result) {
            if (result.status === constants.ELEMENT_FOUND) {
                browser
                    .click(login.userSelect)
                    .click(common.getSpecificSelectOptions(userUnderTest));
            }
        });
        browser.assert.containsText(login.userSelectedItem, userUnderTest);
        //Select role
        browser.isVisible(login.roleSelect, function (result) {
            if (result.status === constants.ELEMENT_FOUND) {
                browser
                    .click(login.roleSelect)
                    .click(common.getSpecificSelectOptions(roleUnderTest));
            }
        });
        browser.assert.containsText(login.roleSelectedItem, roleUnderTest);
        //Click Submit button
        browser.isVisible(common.submitButton, function (result) {
            if (result.status === constants.ELEMENT_FOUND) {
                browser
                    .click(common.submitButton)
                    .waitForElementVisible(menu.userInfo);
            }
        });
        browser
            .assert.containsText(menu.userInfo, userUnderTest)
            .assert.containsText(menu.timeLoggingItem, 'Time Logging')
            .assert.containsText(menu.invoicesItem, 'Invoices')
            .assert.containsText(menu.tasksItem, 'Tasks')
            .assert.containsText(menu.projectsItem, 'Projects')
            .assert.containsText(menu.clientsItem, 'Clients')
            .assert.containsText(menu.timeEntriesItem, 'Time Entries')
            .assert.containsText(menu.activeMenuItem, 'Time Logging')
            .assert.cssProperty(menu.activeMenuItem, 'color', menu.activeMenuItemColor)
            .assert.containsText(timeLogging.currentDate, testDate)
            .saveScreenshot(conf.imgpath(browser) + testScreenshot)
    },
    'Admin creates new task:': function (browser) {
        let taskName = common.stringGenerator(tasks.nameFieldLimit);
        let description = common.stringGenerator(tasks.descriptionFieldLimit);
        let billToClient = 'Yes';
        let hourlyRate = common.numberGenerator(tasks.hourlyRateFieldLimit);
        // Click Tasks menu item
        browser
            .click(menu.tasksItem)
            .assert.containsText(menu.activeMenuItem, 'Tasks');
        // Click Create Task button
        browser.isVisible(tasks.createTaskButton, function (result) {
            if (result.status === constants.ELEMENT_FOUND) {
                browser.click(tasks.createTaskButton);
            }
        });
        // Fill new Task form
        browser
            .setValue(tasks.nameField, taskName)
            .setValue(tasks.descriptionField, description)
            .click(tasks.billToClientSelect)
            .click(common.getSpecificSelectOptions(billToClient))
            .clearValue(tasks.hourlyRateField)
            .setValue(tasks.hourlyRateField, hourlyRate);
        // Click Save button
        browser.isVisible(common.submitButton, function (result) {
            if (result.status === constants.ELEMENT_FOUND) {
                browser
                    .click(common.submitButton)
                    .waitForElementVisible(common.successMessage);
            }
        });
        // Filter created Task
        browser.click(menu.tasksItem);
        browser.isVisible(tasks.searchNameField, function (result) {
            if (result.status === constants.ELEMENT_FOUND) {
                browser
                    .setValue(tasks.searchNameField, taskName)
                    .setValue(tasks.searchDescriptionField, description)
                    .waitForElementVisible(tasks.foundNameField);
            }
        });
        browser
            .assert.containsText(tasks.foundNameField, taskName)
            .assert.containsText(tasks.foundDescriptionField, description)
            .end();
    }
};