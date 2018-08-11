var conf = require('../../nightwatch.conf.js');
const c = require('../../libs/constants');
const common= require('../../obj/common');

module.exports = {

    before : function (browser) {
        browser.url(browser.launchUrl);
    },

    'Login to sourcebooks': function (browser) {
        let testName = 'Demo User';                             
        let testRole = 'Admin';                                 
        let screenshotPath = conf.imgpath(browser) + 'Demo.png';

        var login = browser.page.login();                           // POM object for login page
        var mainNav = browser.page.mainNav();                       // POM object for main menu

        login                                                           
        .waitForElementVisible('@loginHeader')                      // Check if header is visible
        .click('@userDropdown');                                    // Click on users dropdown
        browser
        .click(login.getOptionFromDropdown(testName));              // Click on the test user name from dropdown
        login
        .assert.containsText('@userDropdownSelectedItem', testName) // Check if test user is selected
        .click('@roleDropdown');                                    // Click on roles dropdown
        browser
        .click(login.getOptionFromDropdown(testRole));              // Click on the test role from dropdown
        login
        .assert.containsText('@roleDropdownSelectedItem', testRole) // Check if test role is selected
        .click(common.submitButton);                                // Click "Login"
        mainNav
        .waitForElementVisible('@loggedInUsersName', c.waitTime)
        .assert.containsText('@loggedInUsersName', testName);       // Check if test user name is displayed in user info
        browser
        .saveScreenshot(screenshotPath);                            // Take screenshot
    },

    'Admin creates new task': function (browser) {     
        const taskName = 'Test Task E2E ' + Date.now(); // Task Name
        const desc = 'Test Description';                // Task Description
        const rate = 1.5;                               // Task Hourly Rate

        var mainNav = browser.page.mainNav();           // POM object for Main Menu
        var tasks = browser.page.tasks();               // POM object for Tasks page
        var taskCreate = browser.page.taskCreate();     // POM object for Task Create page

        mainNav                                                 // Navigate to Tasks
        .waitForElementVisible('@tasks')
        .click('@tasks');
        tasks                                                   // Search for task name that will be created
        .waitForElementVisible('@nameSearch')                   // to check that there is not a task with that name
        .setValue('@nameSearch', taskName);

        // How to make that you wouldn't need to specify the locateStrategy, when using function?
        // I tried to return the whole ogject (with selector and locateStrategy), but
        // that does not seem to work the same as with '@' notation
        // Or is it OK to put it as a command in the POM object?
        browser.useXpath();
        tasks.waitForElementNotPresent(tasks.getTaskFromList(taskName).selector, c.waitTime);
        browser.useCss();

        tasks                                                   // Click on "Create Task"
        .waitForElementVisible('@createTaskBtn', c.waitTime)
        .click('@createTaskBtn');
        taskCreate                                              // Fill the form
        .waitForElementVisible('@taskName', c.waitTime)
        .setValue('@taskName', taskName)                        // Fill "Task Name"
        .waitForElementVisible('@description', c.waitTime)
        .setValue('@description', desc)                         // Fill "Description"
        .waitForElementVisible('@billToClient', c.waitTime)
        .click('@billToClient')                                 // Select "Bill to Client" -> "Yes"
        .waitForElementVisible('@billToClientYes', c.waitTime)
        .click('@billToClientYes')
        .waitForElementVisible('@hourlyRate', c.waitTime)
        .clearValue('@hourlyRate')                              // Fill "Hourly Rate"
        .setValue('@hourlyRate', rate)
        browser                                                 // Click "Save"
        .waitForElementVisible(common.submitButton, c.waitTime)
        .click(common.submitButton);
        mainNav                                                 // Navigate to Tasks
        .waitForElementVisible('@tasks')
        .click('@tasks');
        tasks                                                   // Search for task name that was created
        .waitForElementVisible('@nameSearch')                   // to check that the task realy was created
        .setValue('@nameSearch', taskName);

        // Same issue here
        browser.useXpath();
        tasks.waitForElementNotPresent(tasks.getTaskFromList(taskName).selector, c.waitTime);
        browser.useCss();

        // Is it necesary to every time check if the element is visible before clicking on it?
    },

    after : function (browser) {
        browser.end();
    }
};