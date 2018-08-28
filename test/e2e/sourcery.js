const c = require('../../libs/constants');
const common = require('../../obj/common');
const login = require('../../obj/login');
const timeLogging = require('../../obj/timeLogging');
const tasks = require('../../obj/tasks');

module.exports = {
    'Login to sourcebooks': function (browser) {
        let userUnderTest = "Lukas Klimišinas";
        let userRole = "Admin";

        browser
            .url(browser.launchUrl)
            .waitForElementVisible(common.pageTitle)
            .isVisible(login.userSelect, function (result) {
                if (result.status === c.ELEMENT_FOUND) {
                    browser.click(login.userSelect)
                }
            })
            .isVisible(login.getSpecificSelectUserOption(userUnderTest), function (result) {
                if (result.status === c.ELEMENT_FOUND) {
                    browser.click(login.getSpecificSelectUserOption(userUnderTest))
                }
            })
            .assert.containsText(login.userSelectedValue, userUnderTest)
            .isVisible(login.userRoleSelect, function (result) {
                if (result.status === c.ELEMENT_FOUND) {
                    browser.click(login.userRoleSelect)
                }
            })
            .isVisible(login.getSpecificSelectUserRoleOption(userRole), function (result) {
                if (result.status === c.ELEMENT_FOUND) {
                    browser.click(login.getSpecificSelectUserRoleOption(userRole))
                }
            })
            .assert.containsText(login.userRoleSelect, userRole)
            .isVisible(common.submitButton, function (result) {
                if (result.status === c.ELEMENT_FOUND) {
                    browser
                        .click(common.submitButton)
                        .waitForElementVisible(timeLogging.loggedInUsersName);
                }
            })
            .assert.containsText(timeLogging.loggedInUsersName, userUnderTest)
            .waitForElementVisible(timeLogging.navbar)
            .assert.containsText(timeLogging.navbar, timeLogging.navbarLinks)
            .assert.containsText(timeLogging.navbarSelected, timeLogging.navbarSelectedValue)
            .assert.cssProperty(timeLogging.navbarSelected, timeLogging.activeProperty, timeLogging.navbarActiveValue);
    },

    'Admin creates new task': function (browser) {
        let ran = Math.random() * 100;
        let ran1 = Math.random();
        let taskName = ran * ran1;
        let rate = 55;

        browser
            .url(browser.launchUrl + tasks.url)
            .waitForElementVisible(common.pageTitle)
            .isVisible(common.clickButton, function (result) {
                if (result.status === c.ELEMENT_FOUND) {
                    browser.click(common.clickButton)
                }
            })
            .waitForElementVisible(common.pageTitle)
            .assert.containsText(common.pageTitle, tasks.title)
            .waitForElementVisible(tasks.taskNameField)
            .setValue(tasks.taskNameField, taskName)
            .waitForElementVisible(tasks.taskDesciptionField)
            .setValue(tasks.taskDesciptionField, tasks.description)
            .isVisible(tasks.billableField, function (result) {
                if (result.status === c.ELEMENT_FOUND) {
                    browser.click(tasks.billableField)
                }
            })
            .isVisible(tasks.billableValue, function (result) {
                if (result.status === c.ELEMENT_FOUND) {
                    browser.click(tasks.billableValue)
                }
            })
            .waitForElementVisible(tasks.hourlyRateField)
            .clearValue(tasks.hourlyRateField)
            .setValue(tasks.hourlyRateField, rate)
            .isVisible(common.submitButton, function(result){
                if(result.status === c.ELEMENT_FOUND){
                    browser.click(common.submitButton)
                }
            })
            .waitForElementVisible(tasks.successMessage)
            .url(function (result){
                browser.assert.notStrictEqual(result.value, tasks.createUrl);
            });
    },

    'admin logs time': function (browser) {
        browser
            .url(browser.launchUrl)
            .waitForElementVisible(common.pageTitle)
            .waitForElementVisible(timeLogging.todaysDate)
            .click(timeLogging.todaysDate)
            .waitForElementVisible(timeLogging.projectsField)
            .click(timeLogging.projectsField)
            .click(timeLogging.selectProject)
            .click(timeLogging.tasksField)
            .click(timeLogging.selectTask)
            .setValue(timeLogging.descriptionField, timeLogging.description)
            .setValue(timeLogging.hoursField, timeLogging.hours)
            .click(common.submitButton)
            .waitForElementVisible(timeLogging.success);
    },

    'admin checks entered time entry' : function (browser){
        browser
            .url(browser.launchUrl + "/time-entries")
            .waitForElementVisible(common.pageTitle)
            .end();
    }
};