var conf = require('../../nightwatch.conf.js');
const c = require('../../libs/constants');
const common = require('../../obj/common');
const login = require('../../obj/login');
const timeLogging = require('../../obj/timeLogging');

module.exports = {
    'Login to sourcebooks': function (browser) {
        let userUnderTest = "Giedrius Saulenas";
        let roleUnderTest = "User";
        browser
        
        .url(browser.launchUrl)
        .waitForElementVisible(common.pageTitle) // wait for the Login title
        //Click to expand select user dropdown
        .isVisible(login.userSelect, function(result) {
            if(result.status === c.ELEMENT_FOUND){
                browser.click(login.userSelect)
            }
        })
        /*
        browser.element('css selector', '#react-select-2--value', function(result) {
            if(result.status != -1) { 
                browser.click('#react-select-2--value');
            }
        });
        */
        .isVisible(login.getSpecificSelectUserOption(userUnderTest), function(result) {
            if (result.status === c.ELEMENT_FOUND){
                browser.click(login.getSpecificSelectUserOption(userUnderTest))
            }
        })
        .assert.containsText(login.userSelectedValue, userUnderTest)
        /*
        //Select from expanded droprown
        browser.element('css selector', '[aria-label="Demo User"]', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '[aria-label="Demo User"]');
            }
        });
        */
    
        .isVisible(login.roleSelect, function(result) {
            if(result.status === c.ELEMENT_FOUND){
                browser.click(login.roleSelect)
            }
        })
        /*
        //Assert value is selected
        browser.assert.containsText('#react-select-2--value-item', 'Demo User');
        //Click to expand select role dropdown
        browser.element('css selector', '#react-select-3--value', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '#react-select-3--value');
            }
        });
        */
        //Select from expanded droprown
        .isVisible(login.getSpecificSelectRoleOption(roleUnderTest), function(result) {
            if (result.status === c.ELEMENT_FOUND){
                browser.click(login.getSpecificSelectRoleOption(roleUnderTest))
            }
        })
        .assert.containsText(login.roleSelectedValue, roleUnderTest)
        /*
        browser.element('css selector', '[aria-label="Admin"]', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '[aria-label="Admin"]');
            }
        });
        //Assert value is selected
        browser.assert.containsText('#react-select-3--value-item', 'Admin');
        //Click submit button
        */
        .isVisible(common.submitButton, function(result) {
            if (result.status === c.ELEMENT_FOUND){
                browser
                .click(common.submitButton)
                .waitForElementVisible(timeLogging.loggedInUsersName)
            }
        })
        .assert.containsText(timeLogging.loggedInUsersName, userUnderTest)
        /*
        browser.element('css selector', '[type="submit"]', function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', '[type="submit"]')
                .waitForElementVisible('.user-info__title');
            }
        });
        //Assert if expected user is logged in
        
        browser.assert.containsText('.user-info__title', 'Demo User')
            .saveScreenshot(conf.imgpath(browser) + 'Demo.png')*/
            .end();
    }
};