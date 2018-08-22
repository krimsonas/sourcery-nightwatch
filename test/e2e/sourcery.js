var conf = require('../../nightwatch.conf.js');
const c = require('../../libs/constants.js')
const common = require('../../obj/common.js');
const login = require('../../obj/login.js');
const timeLogging = require('../../obj/timeLogging.js');

module.exports = {
    'Login to sourcebooks': function (browser) {

        let currentUser = "Demo User";
        let currentUserRole = "Admin";
        browser
        .url(browser.launchUrl)
        .waitForElementVisible(common.pageTitle); // wait for the Login title
        //Click to expand select user dropdown
        browser.element('css selector',login.userSelect , function(result) {
            if(result.status === c.ELEMENT_FOUND) { 
                browser.click(login.userSelect);
            }
        });
        //Select from expanded droprown
        browser.element('css selector', login.getSpecificSelectUserOption(currentUser), function(result) {
            if(result.status === c.ELEMENT_FOUND) { 
                browser.click('css selector', login.getSpecificSelectUserOption(currentUser));
            }
        });
        //Assert value is selected
        browser.assert.containsText(login.userSelectedValue, currentUser);

        //Click to expand select role dropdown
        browser.element('css selector', login.userRoleSelectField, function(result) {
            if(result.status === c.ELEMENT_FOUND) { 
                browser.click('css selector', login.userRoleSelectField);
            }
        });
        //Select from expanded droprown
        browser.element('css selector', login.getSpecificSelectUserRoleOption(currentUserRole), function(result) {
            if(result.status === c.ELEMENT_FOUND) { 
                browser.click('css selector', login.getSpecificSelectUserRoleOption(currentUserRole));
            }
        });
        //Assert value is selected
        browser.assert.containsText(login.userRoleSelectField, currentUserRole);

        //Click submit button
        browser.element('css selector', common.submitButton, function(result) {
            if(result.status === c.ELEMENT_FOUND) {
                browser
                .click('css selector', common.submitButton)
                .waitForElementVisible(timeLogging.loggedInUsersName);
            }
        });
        //Assert if expected user is logged in
        browser.assert.containsText(timeLogging.loggedInUsersName, currentUser)
            .saveScreenshot(conf.imgpath(browser) + 'Demo.png')
            .end();
    }
};