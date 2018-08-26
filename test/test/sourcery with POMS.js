var conf = require('../../nightwatch.conf.js');
const common= require('../../test/objects/common');
const login = require('../../test/objects/login');
const timeLogging = require('../../test/objects/timeLogging');

module.exports = {
    
    'Login to sourcebooks': function (browser) {
        let userUnderTest = "Gabija Graženaite";
        let roleUnderTest = "Admin";

        browser
        .url(browser.launchUrl)
        .waitForElementVisible(common.pageTitle)

        browser.expect.element(login.userDropdown).to.be.visible;
        browser.click(login.userDropdown);        
        browser.expect.element(login.getSpecificSelectUserOption(userUnderTest)).to.be.visible;
        browser.click(login.getSpecificSelectUserOption(userUnderTest))
        .assert.containsText(login.userDropdown, userUnderTest);

        browser.expect.element(login.roleDropdown).to.be.visible;
        browser.click(login.roleDropdown);        
        browser.expect.element(login.getSpecificSelectRoleOption(roleUnderTest)).to.be.visible;
        browser.click(login.getSpecificSelectRoleOption(roleUnderTest))
        .assert.containsText(login.roleDropdown, roleUnderTest)

        .click(common.submitButton)

        .waitForElementVisible(timeLogging.loggedInUsersName)
        .assert.containsText(timeLogging.loggedInUsersName, userUnderTest)
        .end();


    }
}