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
                .waitForElementVisible(common.tasks)
            }
        })
        // Go to Tasks page
        .isVisible(common.tasks, function(result) {
            if (result.status === c.ELEMENT_FOUND){
                browser
                .click(common.tasks)
            }
        })

        // Click button Create Task
        .waitForElementVisible(common.button)
        .click(common.button)

        // Waits for title to become visible
        .waitForElementVisible(common.pageTitle)

        // Sets values of text fields
        .setValue(common.nameField, common.taskName)
        .setValue(common.textField, common.taskText)

        // Click to expand bill dropdown
        .isVisible(common.billSelect, function(result) {
            if(result.status === c.ELEMENT_FOUND){
                browser.click(common.billSelect)
            }
        })

        // Select from expanded droplist
        .isVisible(common.billSelectedValue, function(result) {
            if (result.status === c.ELEMENT_FOUND){
                browser.click(common.billSelectedValue)
            }
        })

        // Checks if Yes is selected from droplist
        .assert.containsText(common.billSelected, common.billExpectedValue)

        // Clears current value and enters new
        .clearValue(common.hourlyRate)
        .setValue(common.hourlyRate, common.hourlyValue)

        // Click on Save button
        .isVisible(common.saveButton, function(result){
            if (result.status === c.ELEMENT_FOUND){
                browser.click(common.saveButton)
            }
        })

        .end();
    }
};