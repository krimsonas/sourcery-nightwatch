var conf = require('../../nightwatch.conf.js');
const c = require('../../libs/constants.js')
const common = require('../../obj/common.js');
const login = require('../../obj/login.js');
const tasks = require('../../obj/tasks.js');

module.exports = {
    'Login to sourcebooks': function (browser) {

        let currentUser = "Demo User";
        let currentUserRole = "Admin";
        let newTaskName = "RimantasTest2";
        let newTaskDescription = "newTaskCreationTestDescription-2";
        let newTaskBillToClient = "Yes";
        let newTaskHourlyRate = "10";
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
        browser.assert.containsText(login.userRoleSelectField, currentUserRole);

        //Click submit button
        browser.element('css selector', common.submitButton, function(result) {
            if(result.status === c.ELEMENT_FOUND) {
                browser
                .click('css selector', common.submitButton)
                .waitForElementVisible(common.loggedInUsersName);
            }
        });
        browser.assert.containsText(common.loggedInUsersName, currentUser);

        //Click menu list element "tasks"
        browser.element('css selector',common.menuListTasksElement , function(result) {
            if(result.status === c.ELEMENT_FOUND) { 
                 browser
                 .click(common.menuListTasksElement)
                 .waitForElementVisible(tasks.createTaskButton);
            }
        });
        
        //Click "create task" button
        browser.element('css selector',tasks.createTaskButton , function(result) {
            if(result.status === c.ELEMENT_FOUND) { 
                 browser
                 .click(tasks.createTaskButton)
                 .waitForElementVisible(tasks.createTaskFormTitle);
            }
        });    
        
        //select "Task name" input field and set value
        browser.element('css selector', tasks.createTaskName, function(result) {
            if(result.status === c.ELEMENT_FOUND) { 
                browser
                .click('css selector', tasks.createTaskName)
                .setValue(tasks.createTaskName, newTaskName);
            }
        });

        //select "Task description" input field and set value
        browser.element('css selector', tasks.createTaskDescription, function(result) {
            if(result.status === c.ELEMENT_FOUND) { 
                browser
                .click('css selector', tasks.createTaskDescription)
                .setValue(tasks.createTaskDescription, newTaskDescription);
            }
        });

        //select "bill to client" dropdown
        browser.element('css selector', tasks.createTaskBillToClient, function(result) {
            if(result.status === c.ELEMENT_FOUND) { 
                browser
                .click('css selector', tasks.createTaskBillToClient);                
            }
        });
        //Separate functions because need to test if billToClient dropdown exists.
        //Select from expanded "bill to client" droprown
        browser.element('css selector', tasks.getYesNoBillToClient(newTaskBillToClient), function(result) {
            if(result.status === c.ELEMENT_FOUND) { 
                browser.click('css selector', login.getSpecificSelectUserOption(newTaskBillToClient));
            }
        });

         //select "Hourly rate (USD)" input field and set value
         browser.element('css selector', tasks.createTaskHourlyRate, function(result) {
            if(result.status === c.ELEMENT_FOUND) { 
                browser
                .click('css selector', tasks.createTaskHourlyRate)
                .setValue(tasks.createTaskHourlyRate, newTaskHourlyRate);
            }
        });

        //Click "Save" button
        browser.element('css selector',tasks.createTaskSaveButton , function(result) {
            if(result.status === c.ELEMENT_FOUND) { 
                 browser.click(tasks.createTaskSaveButton);
            }
        });

        //Click menu list element "tasks"
        browser.element('css selector',common.menuListTasksElement , function(result) {
            if(result.status === c.ELEMENT_FOUND) { 
                 browser
                 .click(common.menuListTasksElement)
                 .waitForElementVisible(tasks.createTaskButton);
            }
        });

        //click on task description filter
        browser.element('xpath', tasks.tasksNameFilter , function(result) {
            if(result.status === c.ELEMENT_FOUND) { 
                 browser
                 .useXpath()
                 .click(tasks.tasksNameFilter)
                 .setValue(tasks.tasksNameFilter, newTaskName);
            }
        });

        //wait for both elements to be visible so that assert wouldn't start before the filter activates
        browser.element('css selector', tasks.tasksListContainer , function(result) {
            if(result.status === c.ELEMENT_FOUND) {    
                 //following method with css selector doesn't find element, instead use xpath.           
                 //browser.waitForElementVisible(tasks.getTasksFileteredElement(newTaskName));
                 browser
                 .useXpath()
                 .waitForElementVisible(tasks.tasksNameFilterIcon)
                 .waitForElementVisible(tasks.FilteredElementXpath);
            }
        });

        //Assert task is presented.
        //Following commented line with css selector doesn't find element, use xpath
        //browser.assert.containsText(tasks.getTasksFileteredElement(newTaskName), newTaskName);
        browser.getText(tasks.FilteredElementXpath, function(result) {
            this.assert.equal(result.value, newTaskName) 
          });
        browser.end();
    }
};