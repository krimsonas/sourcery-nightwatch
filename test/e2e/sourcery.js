var conf = require('../../nightwatch.conf.js');
const common = require('../../obj/common');
const login = require('../../obj/login');
const timeLogging = require('../../obj/timeLogging');
const userUnderTest = 'Martynas Šatas';
const roleUnderTest = 'Admin';
const taskName = 'Test name ' + Date.now();
const taskDescription = 'Test description';
const taskRate = 2;

module.exports = {
        'Login to sourcebooks': function (browser) {
                browser
                        .url(browser.launchUrl)
                        .waitForElementVisible(common.pageTitle)
                        .click(login.userSelect)
                        .click(login.getSpecificSelectUserOption(userUnderTest))
                        .assert.containsText(login.userSelectedValue, userUnderTest)
                        .click(login.roleSelect)
                        .click(login.getSpecificSelectRoleOption(roleUnderTest))
                        .assert.containsText(login.roleSelectedValue, roleUnderTest)
                        .click(common.submitButton)
                        .waitForElementVisible(timeLogging.loggedInUsersName)
                        .click(common.menuButtonTasks)
                        .click(common.createTaskButton)
                        .setValue(common.inputFieldName, taskName)
                        .setValue(common.inputFieldDescription, taskDescription)
                        .click(common.dropDownBillable)
                        .click(common.billableTrue)
                        .clearValue(common.inputFieldRate)
                        .setValue(common.inputFieldRate, taskRate)
                        .click(common.submitButton)
                        .waitForElementVisible(common.taskCreatedBanner)
                        .click(common.menuButtonTasks)
                        .waitForElementVisible(common.pageTitle)
                        .useXpath()
                        .setValue(common.searchTaskName, taskName)
                        .waitForElementVisible(common.resultTaskName)
                        .assert.containsText(common.resultTaskName, taskName)
                        .end()
        }
};
