var conf = require('../../nightwatch.conf.js');
const c = require('../../libs/constants');
const login = require('../../obj/login');
const common= require('../../obj/common');
const task= require('../../obj/task');

module.exports = {
    'Login to sourcebooks': function (browser) {
        let userUnderTest = "Roberta Milašauskaite";
        let testRole = "Admin";

        browser
        .url(browser.launchUrl)
        .pause(1000)
        .isVisible(login.userSelect, function(result){
            if(result.status === c.ELEMENT_FOUND){
                browser.click(login.userSelect)
            }
        })
       .isVisible(login.getSpecificSelectUserOption(userUnderTest), function(result){
           if(result.status === c.ELEMENT_FOUND){
               browser.click(login.getSpecificSelectUserOption(userUnderTest))
           }
       })
        .isVisible(login.roleSelect, function(result){
            if(result.status === c.ELEMENT_FOUND){
                browser.click(login.roleSelect)
            }
        })
       .isVisible(login.getSpecificSelectRoleOption(testRole), function(result){
           if(result.status === c.ELEMENT_FOUND){
               browser.click(login.getSpecificSelectRoleOption(testRole))
           }
       })
       .assert.containsText(login.userSelectedValue, userUnderTest)
       .assert.containsText(login.roleSelectedValue, testRole)
       .waitForElementVisible(common.loginButton)
       .isVisible(common.loginButton, function(result) {
          if(result.status === c.ELEMENT_FOUND){
              browser
              .click(common.loginButton)
          }  
        })
    },

    'Create new task': function (browser) {
        let screenshotPath = conf.imgpath(browser) + 'Demo.png';
        //navigate to tasks page
        browser.waitForElementVisible(common.mainBar)
               .click(task.tasksPage)
               .assert.containsText(task.pageTitle, task.taskId)
               .pause(1000);

        //click on create new task button
        browser.click(task.button)
               .waitForElementVisible(task.pageTitle, task.createId)
        
        //creating new task
        browser.setValue(task.nameField, task.name)

        browser.setValue(task.descriptionField, task.description)

        browser.click(task.billFields)
               .click(task.selector, task.billTrue)
               .setValue(task.billRate, task.value)
        
        browser.click(task.button);

        //checking if the task exists
        browser.click(task.tasksPage)
               .waitForElementVisible(task.pageTitle, task.taskId)
               .setValue(task.nameField, task.name)
               .pause(2000)

        browser.assert.containsText(task.allTasks, task.name)
                .saveScreenshot(screenshotPath)
        .end();
    }
};