var conf = require('../../nightwatch.conf.js');
const constants = require('../../obj/constants.js');
const common = require('../../obj/common.js');
const menu = require('../../obj/menu.js');
const login = require('../../obj/login.js');
const timeLogging = require('../../obj/timeLogging.js');

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
        browser.isVisible(login.userSelect, function(result) {
            if (result.status === constants.ELEMENT_FOUND) {
                browser.click(login.userSelect);
            }
        });
        //Select from expanded droprown
        browser.isVisible(login.getSpecificSelectOption(userUnderTest), function (result) {
            if (result.status === constants.ELEMENT_FOUND) {
                browser.click(login.getSpecificSelectOption(userUnderTest))
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
        browser.isVisible(login.getSpecificSelectOption(roleUnderTest), function (result) {
            if (result.status === constants.ELEMENT_FOUND) {
                browser.click(login.getSpecificSelectOption(roleUnderTest));
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
            .end();

    }
};