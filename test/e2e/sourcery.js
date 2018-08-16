//var conf = require('../../nightwatch.conf.js');
const c = require('../../libs/constants');
const common= require('../../obj/common');
const login = require('../../obj/login');
const timeLogging = require('../../obj/timeLogging');
const tasks = require('../../obj/tasks');
const createTask = require('../../obj/createTask');

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
        .assert.containsText(timeLogging.loggedInUsersName, user); //Check if the correct user has been logged in
    },

    'Create a task': function(browser){

        let pageNameTasks = "Tasks";
        let pageNameCreateTask = "Create task";
        let billOption = "Yes";
        let taskName = "Chuck Testas";
        let taskDescription = 'This task is made for learning purposes, during which we will learn test automation';

        browser
        .isVisible(timeLogging.tasksButton, function(result){  //Click the Tasks section
            if(result.status === c.ELEMENT_FOUND)
                browser.click(timeLogging.tasksButton);
        })
        .assert.containsText(common.pageTitle, pageNameTasks)  //Check if the page is 'Tasks'
        .isVisible(tasks.createTaskButton, function(result){  //Click the Create Task button
            if(result.status === c.ELEMENT_FOUND)
                browser.click(tasks.createTaskButton);
        })
        .assert.containsText(common.pageTitle, pageNameCreateTask) //Check if the page is 'Create task'
        .isVisible(createTask.taskName, function(result){ //Enter task name
            if(result.status === c.ELEMENT_FOUND)
                browser.setValue(createTask.taskName, taskName)
        })
        .isVisible(createTask.taskDescription, function(result){ //Enter task description
            if(result.status === c.ELEMENT_FOUND)
                browser.setValue(createTask.taskDescription, taskDescription);
        })
        .isVisible(createTask.taskBill, function(result){ //Click the 'Bill to Client' dropdown
            if(result.status === c.ELEMENT_FOUND)
                browser.click(createTask.taskBill);
        })
        .isVisible(createTask.getBillSelect(billOption), function(result){ //Click the desired option from the 'Bill to Client' list
            if(result.status === c.ELEMENT_FOUND)
                browser.click(createTask.getBillSelect(billOption));
        })
        .assert.containsText(createTask.taskBillSelected, billOption) //Check if the selected value corresponds
        .isVisible(createTask.taskRate, function(result){
            if(result.status === c.ELEMENT_FOUND)
            {
                browser.clearValue(createTask.taskRate);
                browser.setValue(createTask.taskRate, 5.25);
            }
        })
        .isVisible(common.submitButton, function(result){ //Click the 'Save' button
            if(result.status === c.ELEMENT_FOUND)
                browser.click(common.submitButton);
        })
        .isVisible(createTask.taskPage, function(result){ //Click on the 'Tasks' section
            if(result.status === c.ELEMENT_FOUND)
                browser.click(createTask.taskPage);
        })
        .assert.containsText(common.pageTitle, pageNameTasks) // Check if the page is 'Tasks'
        .useXpath()
        .isVisible(tasks.nameFilter, function(result){ // Enter a search criteria
            if(result.status === c.ELEMENT_FOUND)
                browser.setValue(tasks.nameFilter, taskName)
        })
        .useCss()
        .waitForElementVisible(tasks.getTaskName(taskName)) // Check if we see our task
        .end();
    }
}; 