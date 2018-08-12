var conf = require('../../nightwatch.conf.js');

module.exports = {
    'Login to sourcebooks': function (browser) {
        browser
        .url(browser.launchUrl)
        .waitForElementVisible('h1'); // wait for the Login title
        //Click to expand select user dropdown
        browser.element('css selector', '#react-select-2--value', function(result) {
            if(result.status != -1) { 
                browser.click('#react-select-2--value');
            }
        });
        //Select from expanded droprown
        browser.element('css selector', '[aria-label="Ruta Laurikaityte"]', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '[aria-label="Ruta Laurikaityte"]');
            }
        });
        //Assert value is selected
        browser.assert.containsText('#react-select-2--value-item', 'Ruta Laurikaityte');
        //Click to expand select role dropdown
        browser.element('css selector', '#react-select-3--value', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '#react-select-3--value');
            }
        });
        //Select from expanded droprown
        browser.element('css selector', '[aria-label="Admin"]', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '[aria-label="Admin"]');
            }
        });
        //Assert value is selected
        browser.assert.containsText('#react-select-3--value-item', 'Admin');
        //Click submit button
        browser.element('css selector', '[type="submit"]', function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', '[type="submit"]')
                .waitForElementVisible('.user-info__title');
            }
        });
        //Assert if expected user is logged in
        browser.assert.containsText('.user-info__title', 'Ruta Laurikaityte')
            .saveScreenshot(conf.imgpath(browser) + 'Demo.png');
            
 
        //Click menu item "Tasks"
        browser.element('css selector', '[href="/tasks"]', function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', '[href="/tasks"]')
                .waitForElementVisible('.main-nav__link--active', 5000);
            }
        });
        //Assert value is selected
        browser.assert.containsText('.main-nav__link--active', 'Tasks')
        .saveScreenshot(conf.imgpath(browser) + 'TasksPage.png');

        
        //Click button "Create Task"
        browser.element('css selector', '[type="button"]', function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', '[type="button"]')
                .waitForElementVisible('h1');
            }
        });

        //Fill field "Task Name"
        browser.element('css selector', '[name="taskDetailsForm.name"]', function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', '[name="taskDetailsForm.name"]')
                .setValue('input[name="taskDetailsForm.name"]', 'Sinus1');
            }
        });

        //Fill field "Description"
        browser.element('css selector', '[name="taskDetailsForm.description"]', function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', '[name="taskDetailsForm.description"]')
                .setValue('textarea[name="taskDetailsForm.description"]', 'testarea');
            }
        });

        //Click to expand select user dropdown "Bill to Client"
        browser.element('css selector', '#react-select-6--value', function(result) {
            if(result.status != -1) { 
                browser.click('#react-select-6--value');
            }
        });
        //Select from expanded droprown value YES
        browser.element('css selector', '[aria-label = "Yes"]', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '[aria-label = "Yes"]');
            }
        });
        //Assert value is selected
        browser.assert.containsText('#react-select-6--value', 'Yes');
         
        //Fill field "Hourly Rate"
        browser.element('css selector', '[name="taskDetailsForm.rate"]', function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', '[name="taskDetailsForm.rate"]')
                .setValue('input[name="taskDetailsForm.rate"]', '2')
                .saveScreenshot(conf.imgpath(browser) + 'CreateTask.png')
            }
        });

        //Click Save button
        browser.element('css selector', '[type="submit"]', function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', '[type="submit"]')
            }
        });

        //Click menu item "Tasks"
        browser.element('css selector', '[href="/tasks"]', function(result) {
            if(result.status != -1) {
            browser
            .click('css selector', '[href="/tasks"]')
            .waitForElementVisible('.main-nav__link--active', 5000);
            }
        });

        //Fill field "Task Name"
        browser.element('css selector', '[type="text"]', function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', '[type="text"]')
                .setValue('input[type="text"]', 'Sinus1')
                .waitForElementVisible('[title="Sinus1"]', 5000)
                .assert.containsText('.ellipsis', 'Sinus1')
                .saveScreenshot(conf.imgpath(browser) + 'CreateTask1.png');
            }
        })


        .end();
    }
};