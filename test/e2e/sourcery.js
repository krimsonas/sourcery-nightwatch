const c = require('../../libs/constants');
const common= require('../../obj/common');
const login = require('../../obj/login');
const taskLogging = require('../../obj/taskLogging');
const timeLogging = require('../../obj/timeLogging');
var randomString = require('random-string');
var randomValue = randomString();

module.exports = {
    'Login to sourcebooks': function (browser) {
        let userUnderTest = "Ruta Laurikaityte";
        let roleUnderTest = "Admin";
        let menuItemTest = "Tasks";
        let selectRateOption = "Yes";
        let hourlyRate = '2'

        browser
        .url(browser.launchUrl)
        .waitForElementVisible(common.pageTitle)
        //Choose User
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
        //Choose Role
        .isVisible(login.roleSelectedValue, function(result) {
            if(result.status === c.ELEMENT_FOUND) { 
                browser.click(login.roleSelectedValue)
            }
        })
        .isVisible(login.getSpecificSelectUserOption(roleUnderTest), function(result) {
            if(result.status === c.ELEMENT_FOUND) { 
                browser.click(login.getSpecificSelectUserOption(roleUnderTest))
            }
        })
        .assert.containsText(login.roleSelectedValue, roleUnderTest)

        .isVisible(common.submitButton, function(result) {
            if(result.status === c.ELEMENT_FOUND) {
                browser
                .click(common.submitButton)
                .waitForElementVisible(timeLogging.loggedInUsersName)
            }
        })
        .assert.containsText(timeLogging.loggedInUsersName, userUnderTest)
        //Navigate to Tasks section
        .isVisible(taskLogging.menuItem, function(result) {
            if(result.status === c.ELEMENT_FOUND) {
                browser
                .click(taskLogging.menuItem)
                .waitForElementVisible(taskLogging.activeMenuItem)
            }
        })
        .assert.containsText(taskLogging.activeMenuItem, menuItemTest)
        //Click button "Create Task"
        .isVisible(common.createItemButton, function(result) {
            if(result.status === c.ELEMENT_FOUND) {
                browser
                .click(common.createItemButton)
                .waitForElementVisible(common.pageTitle)
            }
        })
        .assert.containsText(common.pageTitle, taskLogging.formTitle)
        //Fill field "Task Name"
        .isVisible(taskLogging.taskName, function(result) {
            if(result.status === c.ELEMENT_FOUND) {
                browser
                .click(taskLogging.taskName)
                .setValue(taskLogging.taskName, randomValue)
            }
        })
        //Fill field "Description"
        .isVisible(taskLogging.taskDescription, function(result) {
            if(result.status === c.ELEMENT_FOUND) {
                browser
                .click(taskLogging.taskDescription)
                .setValue(taskLogging.taskDescription, randomValue)
            }
        })
        //Click to expand select user dropdown "Bill to Client"
        .isVisible(taskLogging.billToClient, function(result) {
            if(result.status === c.ELEMENT_FOUND) { 
                browser.click(taskLogging.billToClient)
            }
        })
        //Select from expanded droprown value YES
        .isVisible(taskLogging.getSpecificSelectBillOption(selectRateOption), function(result) {
            if(result.status === c.ELEMENT_FOUND) {
                browser
                .click(taskLogging.getSpecificSelectBillOption(selectRateOption))
            }
        })
        //Fill field "Hourly Rate"
        .isVisible(taskLogging.taskHourlyRate, function(result) {
            if(result.status === c.ELEMENT_FOUND) {
                browser
                .click(taskLogging.taskHourlyRate)
                .setValue(taskLogging.taskHourlyRate, hourlyRate);
            }
        })
        //Click Save button
        .isVisible(common.submitButton, function(result) {
            if(result.status === c.ELEMENT_FOUND) {
                browser
                .click(common.submitButton)
            }
        })
        //Navigate to Tasks section
        .isVisible(taskLogging.menuItem, function(result) {
            if(result.status === c.ELEMENT_FOUND) {
                browser
                .click(taskLogging.menuItem)
                .waitForElementVisible(taskLogging.activeMenuItem)
            }
        })
        //Check if new task is created
        .isVisible(taskLogging.filterFieldValue, function(result) {
            if(result.status === c.ELEMENT_FOUND) {
                browser
                .click(taskLogging.filterFieldValue)
                .setValue(taskLogging.filterFieldValue, randomValue)
                .assert.containsText(taskLogging.elementValue, randomValue)
            }
        })
        .end();
    }
};
