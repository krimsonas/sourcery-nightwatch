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
        browser.element('css selector', '[aria-label="Gabija Graženaite"]', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '[aria-label="Gabija Graženaite"]');
            }    
        });
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
                .waitForElementVisible('.main-nav');
            }
        });
        //Navigate to tasks by url
        browser.click('a[href="/tasks"]')
        .waitForElementVisible('.btn');
        //Click button create tasks
        browser.element('css selector', '.btn[type="button"]', function(result) {
            if(result.status != -1) {
                browser.click('css selector', '.btn[type="button"]');
            }
        });
        //Fill new task form's "Task name" field with random values
        let inputValue1=Math.random().toString(36).substring(7);
        browser.element('css selector', '[name="taskDetailsForm.name"]', function(result) {
            if(result.status != -1) {
                browser.setValue('[name="taskDetailsForm.name"]', inputValue1);
            }
        });
        //Fill new tasks form's "Description" field with random values
        let inputValue2=Math.random().toString(36);
        browser.element('css selector', '[name="taskDetailsForm.description"]', function(result) {
            if(result.status != -1) {
                browser.setValue('[name="taskDetailsForm.description"]', inputValue2);
            }
        });
        //Click to expand select "Bill to Client" dropdown
        browser.element('css selector', '#react-select-4--value-item', function(result) {
            if(result.status != -1) { 
                browser
                .click('css selector', '#react-select-4--value-item')
                .waitForElementVisible('[aria-label="Yes"]');
                }
        });
        //Select from expanded droprown "Yes" option
        browser.element('css selector', '[aria-label="Yes"]', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '[aria-label="Yes"]');
            }
        });
        //Set "Hourly Rate"
        let inputValue3=Math.random().toString(10).substring(2,4);
        browser.element('css selector', '[name="taskDetailsForm.rate"]', function(result) {
            if(result.status != -1) {
                browser.setValue('[name="taskDetailsForm.rate"]', inputValue3);
            }
        });
        //Save new task by clicking "Save" button
        browser.element('css selector', '.btn[type="submit"]', function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', '.btn[type="submit"]');
            }
        });
        //Navigate to tasks by url
        browser.click('a[href="/tasks"]')
        .waitForElementVisible('.ag-header-cell-text');

        //Filter and check if task is displayed
        browser.element('css selector', '.field__text.field__text--small', function(result) {
            if(result.status != -1) {
                browser.setValue('.field__text.field__text--small', inputValue1);
            }
        });
        browser.waitForElementVisible('#borderLayout_eGridPanel > div.ag-bl-center-row.ag-bl-dont-fill-center-row > div > div > div.ag-body.ag-row-no-animation > div.ag-body-viewport-wrapper > div > div > div > div:nth-child(1) > span');
        browser.assert.containsText('#borderLayout_eGridPanel > div.ag-bl-center-row.ag-bl-dont-fill-center-row > div > div > div.ag-body.ag-row-no-animation > div.ag-body-viewport-wrapper > div > div > div > div:nth-child(1) > span',inputValue1);
        browser.assert.containsText('#borderLayout_eGridPanel > div.ag-bl-center-row.ag-bl-dont-fill-center-row > div > div > div.ag-body.ag-row-no-animation > div.ag-body-viewport-wrapper > div > div > div > div:nth-child(2) > span',inputValue2);
       
        browser.saveScreenshot(conf.imgpath(browser) + 'Demo.png')
        .end();
    }
};
