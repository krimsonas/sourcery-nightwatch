var conf = require('../../nightwatch.conf.js');
const login = require('../../login/login');
const c = require('../../libs/constants.js');
const com = require('../../obj/common');

/* Code was not launched, because Launch App login was unavailable
*  Test is not tested and it probably doesn't work :(
*  Test had to check if total amount
*  from different users in "User Expenses" menu option is calculated correctly    
*/

module.exports = {
    'Testing Lunch App': function (browser) {
        // User credentials
        let email = 'sfattorini1w@devbridge.com';
        let password = 'kYIIlysp';

        browser
        .url(browser.launchUrl)

        // Waiting for login page to become visible
        .waitForElementVisible(login.isItLoaded)
        
        // Enter email
        .useXpath()
        .waitForElementVisible(login.emailInput)
        .click(login.emailInput)
        .setValue(login.emailInput, email)
      
        // Enter password
        .useXpath()
        .waitForElementVisible(login.passwordlInput)
        .click(login.passwordInput)
        .setValue(login.passwordInput, password)

        // Click on Login button
        .useCss()
        browser.element(login.loginBtn, function(result){
            if (result === c.ELEMENT_FOUND){
                browser
                .click(login.loginBtn)
            }
        })

        // Wait for page to be loaded
        .useCss()
        .waitForElementVisible(common.isItLogged)

        // Navigate to User Expenses
        .useXpath()
        browser.element(com.userExp, function(result){
            if (result === c.ELEMENT_FOUND){
                browser
                .click(com.userExp)
            }
        })
        .end();
    }
};