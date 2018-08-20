var conf = require('../../nightwatch.conf.js');
const constants = require('../../obj/constants.js');
const common = require('../../obj/common.js');

module.exports = {
    'Login to sourcebooks': function (browser) {
        let userUnderTest = "Ruta Bielyte";
        let roleUnderTest = "Admin";
        let testDate = new Date().getDate();
        let testScreenshot = "Demo.png";
        //Page objects
        let login = browser.page.login();
        let timeLogging = browser.page.timeLogging();
        let menu = browser.page.menu();
        //Launch the page
        browser
            .url(browser.launchUrl)
            .waitForElementVisible(common.pageTitle);
        //Select user 
        login
            .click('@userSelect')
            .click(common.getSpecificSelectOptions(userUnderTest))
            .assert.containsText('@userSelectedItem', userUnderTest);
        //Select role
        login
            .click('@roleSelect')
            .click(common.getSpecificSelectOptions(roleUnderTest))
            .assert.containsText('@roleSelectedItem', roleUnderTest);
        //Click Submit button
        menu
            .click(common.submitButton)
            .waitForElementVisible('@userInfo');
        //Assert menu items are displayed
        menu
            .assert.containsText('@userInfo', userUnderTest)
            .assert.containsText('@timeLoggingItem', 'Time Logging')
            .assert.containsText('@invoicesItem', 'Invoices')
            .assert.containsText('@tasksItem', 'Tasks')
            .assert.containsText('@projectsItem', 'Projects')
            .assert.containsText('@clientsItem', 'Clients')
            .assert.containsText('@timeEntriesItem', 'Time Entries')
            .assert.containsText('@activeMenuItem', 'Time Logging')
            .assert.cssProperty('@activeMenuItem', 'color', common.activeItemColor);
        timeLogging
            .assert.containsText('@currentDate', testDate);
        browser
            .saveScreenshot(conf.imgpath(browser) + testScreenshot);
    },
    'Admin creates new task:': function (browser) {
        let numberLimit = 9999;
        let fieldLength = 50;
        let taskName = common.stringGenerator(fieldLength);
        let description = common.stringGenerator(fieldLength);
        let billToClient = 'Yes';
        let hourlyRate = common.numberGenerator(numberLimit);
        //Page objects
        let tasks = browser.page.tasks();
        let menu = browser.page.menu();
        //Click Tasks menu item
        menu
            .click('@tasksItem')
            .assert.containsText('@activeMenuItem', 'Tasks');
        //Create new Task
        tasks
            .click('@createTaskButton')
            .waitForElementVisible('@nameField')
            .setValue('@nameField', taskName)
            .setValue('@descriptionField', description)
            .click('@billToClientSelect')
            .click(common.getSpecificSelectOptions(billToClient))
            .clearValue('@hourlyRateField')
            .setValue('@hourlyRateField', hourlyRate);
        //Click Save button
        browser
            .click(common.submitButton)
            .waitForElementVisible(common.successMessage);
        //Filter created Task
        menu.click('@tasksItem');
        tasks
            .waitForElementVisible('@searchNameField')
            .setValue('@searchNameField', taskName)
            .setValue('@searchDescriptionField', description)
            .waitForElementVisible('@foundNameField')
            .assert.containsText('@foundNameField', taskName)
            .assert.containsText('@foundDescriptionField', description)
        browser.end();
    }
};