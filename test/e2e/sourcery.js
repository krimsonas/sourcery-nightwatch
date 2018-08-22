var conf = require('../../nightwatch.conf.js');
const c = require('../../libs/constants');
const common = require('../../obj/common');
const login = require('../../obj/login');
const timeLogging = require('../../obj/timeLogging');

module.exports = {
    'Login to sourcebooks': function (browser) {
        let userUnderTest = "Giedrius Saulenas";
        let roleUnderTest = "Admin";
        browser
        
        .url(browser.launchUrl)
        .waitForElementVisible(common.pageTitle) // wait for the Login title
        //Click to expand select user dropdown
        .isVisible(login.userSelect, function(result) {
            if(result.status === c.ELEMENT_FOUND){
                browser.click(login.userSelect)
            }
        })

        //Select from expanded droprown
        .isVisible(login.getSpecificSelectUserOption(userUnderTest), function(result) {
            if (result.status === c.ELEMENT_FOUND){
                browser.click(login.getSpecificSelectUserOption(userUnderTest))
            }
        })

        //Checks if user that we want to select is selected from the list
        .assert.containsText(login.userSelectedValue, userUnderTest)

        //Click to expand select role dropdown
        .isVisible(login.roleSelect, function(result) {
            if(result.status === c.ELEMENT_FOUND){
                browser.click(login.roleSelect)
            }
        })
    
        //Select from expanded dropdown
        .isVisible(login.getSpecificSelectRoleOption(roleUnderTest), function(result) {
            if (result.status === c.ELEMENT_FOUND){
                browser.click(login.getSpecificSelectRoleOption(roleUnderTest))
            }
        })

        //Checks if role that we want to select is selected from the list
        .assert.containsText(login.roleSelectedValue, roleUnderTest)
       
        //Click submit button
        .isVisible(common.submitButton, function(result) {
            if (result.status === c.ELEMENT_FOUND){
                browser
                .click(common.submitButton)
                .waitForElementVisible(timeLogging.loggedInUsersName)
            }
        })
        
        //Assert if expected user is logged in
        .assert.containsText(timeLogging.loggedInUsersName, userUnderTest)
        .end();
    }
};