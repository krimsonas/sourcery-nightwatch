var conf = require('../../nightwatch.conf.js')
var common = require('../../Objects/Common')
var loggingElements = require('../../Objects/loggin') 
var Tasks = require('../../Objects/Tasks')
var TaskCreation = require('../../Objects/CreationTask')
var AllTasks = require('../../Objects/FilteringTasks');

module.exports = {
    'Login to sourcebooks and create new task': function (browser) {
        var userName = "Laima Kaspare";
        var roleName = 'Admin';
        var taskButton = "Tasks";
        var createTaskButton = "Create Task";
        var taskName = 'AHomework Laima';
        var taskDescription = 'Automation homework';
        var hourlyRate = "120";
        var saveButton = "Save";

        
        browser
        .url(browser.launchUrl)
        .waitForElementVisible(common.mainHeader); // wait for the Login title
        //Click to expand select user dropdown
        browser.element('css selector', loggingElements.selectDropdown, function(result) {
            if(result.status != -1) { 
                browser.click(loggingElements.selectDropdown);
            }
        });
        //Select from expanded droprown
        browser.element('css selector', loggingElements.selectUserFromDropdown, function(result) {
            if(result.status != -1) { 
                browser.click('css selector', loggingElements.selectUserFromDropdown);
            }
        });
        //Assert value is selected
        browser.assert.containsText(loggingElements.selectedUser, userName);
        //Click to expand select role dropdown
        browser.element('css selector', loggingElements.expandRoleFromDropDown, function(result) {
            if(result.status != -1) { 
                browser.click('css selector', loggingElements.expandRoleFromDropDown);
            }
        });
        //Select from expanded droprown
        browser.element('css selector', loggingElements.selectRoleFromDropdown, function(result) {
            if(result.status != -1) { 
                browser.click('css selector', loggingElements.selectRoleFromDropdown);
            }

        });
       //Assert value is selected
       browser.assert.containsText(loggingElements.selectedRole, roleName);
        //Click submit button
        browser.element('css selector', loggingElements.clickSubmit, function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', loggingElements.clickSubmit)
                .waitForElementVisible(loggingElements.waitUserinfo)
               //.waitForElementVisible('.calendar--today');
        }
        });
        //Click Task button
        browser.assert.containsText(Tasks.clickTasksButton, taskButton)
        browser.element('css selector', Tasks.clickTasksButton, function(result) {
            if(result.status != -1) { 
            browser.click('css selector', Tasks.clickTasksButton)
            }
        });
        //Click Create task
        browser.assert.containsText (Tasks.clickCreateTaskButton, createTaskButton)
        browser.element('css selector', Tasks.clickCreateTaskButton, function(result) {
         if(result.status != -1) {
               browser
                .click('css selector', Tasks.clickCreateTaskButton)
            }
        });
        //Fill new task form : Task Name and Description
        browser.setValue(TaskCreation.fillTaskField, taskName)
            .setValue(TaskCreation.fillTaskDescription, taskDescription)
        //Expand drop down 
        browser.element('css selector', TaskCreation.selectExpandDropDown, function(result) {
            if(result.status != -1) { 
             browser.click(TaskCreation.selectExpandDropDown)
        }
        });
       //Choose Yes
        browser.element('css selector', TaskCreation.chooseYes, function(result) {
            if(result.status != -1) { 
            browser.click('css selector', TaskCreation.chooseYes);
        }
        });
        //Set Hourly rate
        browser.clearValue(TaskCreation.setHourlyRate)
            .setValue(TaskCreation.setHourlyRate, hourlyRate);
        
            //Save task with Save button
        browser.assert.containsText (TaskCreation.saveButton, saveButton)
        browser.element('css selector', TaskCreation.saveButton, function(result) {
         if(result.status != -1) {
               browser
                .click('css selector', TaskCreation.saveButton)
         }
        });
        //Go to task list and check if task displayed
        browser.assert.containsText(Tasks.clickTasksButton, taskButton)
        browser.element('css selector', Tasks.clickTasksButton, function(result) {
            if(result.status != -1) { 
            browser.click('css selector', Tasks.clickTasksButton)
            }
        });
        browser.setValue(AllTasks.putTaskName,taskName)
        .useXpath()
        .waitForElementVisible(AllTasks.taskIsSeenInFilteredList)
        .useCss()
        browser.assert.containsText(AllTasks.filteredTask, taskName)
    
.end();
            
    }
};
