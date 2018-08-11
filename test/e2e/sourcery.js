//var conf = require('../../nightwatch.conf.js');
const c = require('../../libs/constants');
const common= require('../../obj/common');
const login = require('../../obj/login');
const timeLogging = require('../../obj/timeLogging');

module.exports = {
    'Login to sourcebooks': function (browser) {

        let user = "Linas Steponavicius";
        let role = "Admin";

        browser
        .url(browser.launchUrl)
        .waitForElementVisible(common.pageTitle)
        .isVisible(login.userSelect, function(result){  //Click to expand the user dropdown
            if(result.status === c.ELEMENT_FOUND)
                browser.click(login.userSelect);
        })
        .isVisible(login.getUserSelect(user), function(result){ //Select the designated user
            if(result.status === c.ELEMENT_FOUND)
                browser.click(login.getUserSelect(user));
        })
        .assert.containsText(login.userSelectedValue, user) //Check whether the selected user is correct
        .waitForElementVisible(login.roleSelect, function(result){  //Click to expand select role dropdown
            if(result.status === c.ELEMENT_FOUND)
                browser.click(login.roleSelect);
        })
        .isVisible(login.getRoleSelect(role), function(result){  //Select from expanded droprown
            if(result.status === c.ELEMENT_FOUND)
                browser.click(login.getRoleSelect(role));
        })
        .assert.containsText(login.roleSelectedValue, role)  //Check whether the selected role is correct
        .isVisible(common.submitButton, function(result){  //Click the Login button
            if(result.status === c.ELEMENT_FOUND)
            {
                browser
                .click(common.submitButton)
                .waitForElementVisible(timeLogging.loggedInUsersName);
            }
        })
        .assert.containsText(timeLogging.loggedInUsersName, user) //Check if the correct user has been logged in
        .end();
    }
}; 