var conf = require('../../nightwatch.conf.js');
const c = require('../../libs/constants.js')
const common = require('../../obj/common.js');
const login = require('../../obj/login.js');

module.exports = {
    'Login to sourcebooks': function (browser) {

        let currentUser = "Demo User";
        let currentUserRole = "Admin";
        let menuItems = ['Time Logging','Invoices','Tasks','Projects','Clients','Time Entries'];
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
                .waitForElementVisible(common.loggedInUsersName);
            }
        });

         //Assert if expected user is logged in
         browser.assert.containsText(common.loggedInUsersName, currentUser)
                .saveScreenshot(conf.imgpath(browser) + 'Demo.png');

        //assert main nav elements are displayed
        browser.assert.containsText(common.menuList, menuItems[0])
                .assert.containsText(common.menuList, menuItems[1])
                .assert.containsText(common.menuList, menuItems[2])
                .assert.containsText(common.menuList, menuItems[3])
                .assert.containsText(common.menuList, menuItems[4])
                .assert.containsText(common.menuList, menuItems[5])
        //assert menu item "time logging" is selected and marked in blue
                .assert.containsText(common.menuListActiveElement, menuItems[0])
                .assert.cssProperty(common.menuListActiveElement,'color','rgba(64, 76, 237, 1)') //color blue
                .end();


            
    }
};