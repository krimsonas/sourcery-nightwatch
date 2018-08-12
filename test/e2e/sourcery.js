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
        //Click to expand select user dropdown
        browser.isVisible(login.userSelect, function (result) {
            if (result.status === constants.ELEMENT_FOUND) {
                browser.click(login.userSelect);
            }
        });
        //Select from expanded droprown
        browser.isVisible(common.getSpecificSelectOptions(userUnderTest), function (result) {
            if (result.status === constants.ELEMENT_FOUND) {
                browser.click(common.getSpecificSelectOptions(userUnderTest))
            }
        });
        //Assert value is selected
        browser.assert.containsText(login.userSelectedItem, userUnderTest);
        //Click to expand select role dropdown
        browser.isVisible(login.roleSelect, function (result) {
            if (result.status === constants.ELEMENT_FOUND) {
                browser.click(login.roleSelect);
            }
        });
        //Select from expanded droprown
        browser.isVisible(common.getSpecificSelectOptions(roleUnderTest), function (result) {
            if (result.status === constants.ELEMENT_FOUND) {
                browser.click(common.getSpecificSelectOptions(roleUnderTest));
            }
        });
        //Assert value is selected
        browser.assert.containsText(login.roleSelectedItem, roleUnderTest);
        //Click submit button
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
        let testTaskName = common.stringGenerator(tasks.nameFieldLimit);
        let testDescription = common.stringGenerator(tasks.descriptionFieldLimit);
        let testBillToClient = 'Yes';
        let testHourlyRate = (Math.random() * tasks.hourlyRateFieldLimit).toFixed(2);
        // Click Tasks menu item
        browser.isVisible(menu.tasksItem, function (result) {
            if (result.status === constants.ELEMENT_FOUND) {
                browser
                    .click(menu.tasksItem)
                    .waitForElementVisible(common.pageTitle);
            }
        });
        // Click Create Task button
        browser.isVisible(common.createButton, function (result) {
            if (result.status === constants.ELEMENT_FOUND) {
                browser
                    .click(common.createButton)
                    .waitForElementVisible(common.pageTitle);
            }
        });
        // Fill new task form
        browser
            .setValue(tasks.nameField, testTaskName)
            .setValue(tasks.descriptionField, testDescription)
            .click(tasks.billToClientSelect)
            .click(common.getSpecificSelectOptions(testBillToClient))
            .clearValue(tasks.hourlyRateField)
            .setValue(tasks.hourlyRateField, testHourlyRate);
        // Assert values are correct
        browser
            .assert.value(tasks.nameField, testTaskName)
            .assert.value(tasks.descriptionField, testDescription)
            .assert.containsText(tasks.billToClientSelectedItem, testBillToClient)
            .assert.value(tasks.hourlyRateField, testHourlyRate);
        // Click Save button
        browser.isVisible(common.submitButton, function (result) {
            if (result.status === constants.ELEMENT_FOUND) {
                browser
                    .click(common.submitButton)
                    .waitForElementVisible(common.successMessage);
            }
        });
        // Get back to Tasks list
        browser.isVisible(menu.tasksItem, function (result) {
            if (result.status === constants.ELEMENT_FOUND) {
                browser
                    .click(menu.tasksItem)
                    .waitForElementVisible(common.pageTitle);
            }
        });
        // Filter created Task
        browser.isVisible(common.searchField, function (result) {
            if (result.status === constants.ELEMENT_FOUND) {
                browser.setValue(common.searchField, testTaskName);
            }
        });
        browser
            .waitForElementVisible((common.foundField).replace("?", testTaskName))
            .end();
    }
};