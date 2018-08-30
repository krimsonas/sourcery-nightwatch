var conf = require('../../nightwatch.conf.js');
const c = require('../../libs/constants.js');
const dom = require('../../obj/dom.js');
const user = "Taura  Frezdorfaite";
const role = "Admin";
let taskName = "Task Name TEST";
const taskDescription = "Task description TEST TEST E2E TEST";
const isBillable = "Yes";
const hourlyRateUsb = 123;

module.exports = {
    'Homework task' : function (browser) {

        taskName += Math.random().toString();
        // Login
        browser.url(browser.launchUrl).waitForElementVisible(dom.pageTitle);
        browser.element(dom.selector, dom.userDropdownSelect, function(result) {
            if(result.status === c.ELEMENT_FOUND) { 
                browser.click(dom.userDropdownSelect)
            }
        });

        browser.element(dom.selector, dom.getSpecificSelectOptions(user), function(result) {
            if(result.status === c.ELEMENT_FOUND) { 
                browser.click(dom.getSpecificSelectOptions(user))
            }
        })

        browser.element(dom.selector, dom.roleDropdownSelect, function (result) {
            if (result.status === c.ELEMENT_FOUND) {
                browser.click(dom.roleDropdownSelect);
            }
        })

        browser.element(dom.selector, dom.getSpecificSelectOptions(role), function (result) {
            if(result.status === c.ELEMENT_FOUND) {
                browser.click(dom.getSpecificSelectOptions(role));
            }
        })

        browser.element(dom.selector, dom.submitButton, function(result) {
            if(result.status === c.ELEMENT_FOUND) {
                browser.click(dom.submitButton)
                .waitForElementVisible(dom.tasks);
            }
        })

        // Create task
        browser.element(dom.selector, dom.tasks, function(result) {
            if (result.status === c.ELEMENT_FOUND) {
                browser.click(dom.tasks);
            }
        }).assert.containsText(dom.isActive, 'Tasks')

        browser.element(dom.selector, dom.createButton, function(result) {
            if(result.status === c.ELEMENT_FOUND) {
                browser.click(dom.createButton);
            }
        })

        .setValue(dom.taskName, taskName)
        .setValue(dom.taskDescription, taskDescription)
        .click(dom.billToClient)
        .click(dom.getSpecificSelectOptions(isBillable))
        .clearValue(dom.hourlyRate)
        .setValue(dom.hourlyRate, hourlyRateUsb)

        
        browser.element(dom.selector, dom.submitButton, function(result) {
            if(result.status === c.ELEMENT_FOUND) {
                browser.click(dom.submitButton);
            }
        })

        browser.element(dom.selector, dom.tasks, function(result) {
            if (result.status === c.ELEMENT_FOUND) {
                browser
                .click(dom.tasks)
                .setValue(dom.taskNameSearch, taskName)
                .pause(2345);
            }
        })  
        .assert.containsText(dom.taskNameResult, taskName)
        .end();
    }
}