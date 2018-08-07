var conf = require('../../nightwatch.conf.js');
const c = require('../../libs/constants');
const common= require('../../obj/common');
const login = require('../../obj/login');
const timeLogging = require('../../obj/timeLogging');

module.exports = {
    'Login to sourcebooks': function (browser) {
        browser
        .url(browser.launchUrl)
        .waitForElementVisible('h1'); // wait for the Login title
        
        //Click to expand select user dropdown
        browser.element(c.CSS_SELECTOR, login.userSelect, function(result) {
            if(result.status != -1) { 
                browser.click(login.userSelect);
            }
        });

        //Select user from expanded droprown
        browser.element(c.CSS_SELECTOR, login.getSpecificSelectUserOption(login.user), function(result) {
            if(result.status != -1) { 
                browser.click(c.CSS_SELECTOR, login.getSpecificSelectUserOption(login.user));
            }
        });

        //Assert user value is selected
        browser.assert.containsText(login.userSelectedValue, login.user);

        //Click to expand select role dropdown
        browser.element(c.CSS_SELECTOR, login.roleSelect, function(result) {
            if(result.status != -1) { 
                browser.click(c.CSS_SELECTOR, login.roleSelect);
            }
        });

        //Select role from expanded droprown
        browser.element(c.CSS_SELECTOR, login.getSpecificSelectRoleOption(login.role), function(result) {
            if(result.status != -1) { 
                browser.click(c.CSS_SELECTOR, login.getSpecificSelectRoleOption(login.role));
            }
        });

        //Assert role value is selected
        browser.assert.containsText(login.roleSelectedValue, login.role);

        //Click submit button
        browser.element(c.CSS_SELECTOR, common.submitButton, function(result) {
            if(result.status != -1) {
                browser
                .click(c.CSS_SELECTOR, common.submitButton)
                .waitForElementVisible(timeLogging.loggedInUsersName);
            }
        });
        
        //Assert if all necessary buttons in menu are present
       for (let i = 0; i < common.menuButtons.length; i++) {
           browser.assert.containsText(common.menuBar, common.menuButtons[i]);
       };

        //Assert if Time logging is selected and color is blue
        browser.assert.containsText(common.activeMenuField, common.menuButtons[0]);
        browser.assert.cssProperty(common.activeMenuField, 'color', common.colorBlue);
        
        //Assert if correct user is displayed
        browser.assert.containsText(timeLogging.loggedInUsersName, login.user)
            .saveScreenshot(conf.imgpath(browser) + 'Demo.png')
            .end();
    }
};