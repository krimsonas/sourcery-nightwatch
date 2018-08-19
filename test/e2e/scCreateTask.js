var conf = require('../../nightwatch.conf.js');
const c = require('../../libs/constants.js');
const common= require('../../obj/common.js');
const login = require('../../obj/login.js');
const menu = require('../../obj/menu.js');
const timeLogging = require('../../obj/timeLogging.js');

module.exports = {
    'Admin creates a new task' : function (browser) {
        let userUnderTest = "Akvile Jarmalaviciute";
        let roleUnderTest = "Admin";
        let todayDate = new Date();
        let testDate = todayDate.getDate();
        let testTaskName = common.stringGenerator(10);
        let testDescription = "Description";
        let testBillToClient = "Yes";
        let testHourlyRate = 8.5;

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

        .assert.containsText(timeLogging.loggedInUsersName, userUnderTest)

        .isVisible(menu.tasks, function(result) {
            if (result.status === c.ELEMENT_FOUND) {
                browser.click(menu.tasks);
            }
        })

        .assert.containsText(menu.activeMenuComponent, 'Tasks')

        .isVisible(common.createButton, function(result) {
            if(result.status === c.ELEMENT_FOUND) {
                browser.click(common.createButton);
            }
        })

        .assert.containsText(menu.activeMenuComponent, 'Tasks')

        .setValue(common.taskName, testTaskName)
        .setValue(common.taskDescription, testDescription)
        .click(common.billToClient)
        .waitForElementVisible(common.billToClientSelect, testBillToClient)
        .click(common.getSpecificSelectOptions(testBillToClient))
        .clearValue(common.hourlyRate)
        .setValue(common.hourlyRate, testHourlyRate)

        
        .isVisible(common.saveButton, function(result) {
            if(result.status === c.ELEMENT_FOUND) {
                browser.click(common.saveButton);
            }
        })

        .isVisible(menu.tasks, function(result) {
            if (result.status === c.ELEMENT_FOUND) {
                browser.click(menu.tasks);
            }
        })

        .assert.containsText(menu.activeMenuComponent, 'Tasks')
        .setValue(common.nameField, testTaskName)
        .pause(2000)
        .assert.containsText(common.tasksField, testTaskName)
        
        .end();
    }
}