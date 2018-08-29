var conf = require('../../nightwatch.conf.js');

module.exports = {
    'Login to sourcebooks': function (browser) {
        browser
            .url(browser.launchUrl)
            .waitForElementVisible('h1'); // wait for the Login title
        //Click to expand select user dropdown
        browser.element('css selector', '#react-select-2--value', function (result) {
            if (result.status != -1) {
                browser.click('#react-select-2--value');
            }
        });
        //Select from expanded droprown
        browser.element('css selector', '[aria-label="Žaneta Gustyte"]', function (result) {
            if (result.status != -1) {
                browser.click('css selector', '[aria-label="Žaneta Gustyte"]');
            }
        });
        //Assert value is selected
        browser.assert.containsText('#react-select-2--value-item', 'Žaneta Gustyte');
        //Click to expand select role dropdown
        browser.element('css selector', '#react-select-3--value', function (result) {
            if (result.status != -1) {
                browser.click('css selector', '#react-select-3--value');
            }
        });
        //Select from expanded droprown
        browser.element('css selector', '[aria-label="Admin"]', function (result) {
            if (result.status != -1) {
                browser.click('css selector', '[aria-label="Admin"]');
            }
        });
        //Assert value is selected
        browser.assert.containsText('#react-select-3--value-item', 'Admin');
        //Click submit button
        browser.element('css selector', '[type="submit"]', function (result) {
            if (result.status != -1) {
                browser
                    .click('css selector', '[type="submit"]')
                    .waitForElementVisible('.main-nav');
            }
        });
        //Click "Task" meniu
        browser.click('a[href="/tasks"]');
        //wait for button "Create task"
        browser.waitForElementVisible('.btn');
        //Click button "Create task"
        browser.element('css selector', '.btn[type="button"]', function (result) {
            if (result.status != -1) {
                browser.click('css selector', '.btn[type="button"]');
            }
        });
        //Fill task name field
        let TaskName = Math.random().toString(36).substring(7);
        browser.element('css selector', '[name="taskDetailsForm.name"]', function (result) {
            if (result.status != -1) {
                browser.setValue('[name="taskDetailsForm.name"]', TaskName);
            }
        });
        //Fill Description field
        let Description = Math.random().toString(36).substring(7);
        browser.element('css selector', '[name="taskDetailsForm.description"]', function (result) {
            if (result.status != -1) {
                browser.setValue('[name="taskDetailsForm.description"]', Description);
            }
        });
        //select Bill to client value
        browser.element('css selector', '#react-select-4--value-item', function (result) {
            if (result.status != -1) {
                browser.click('css selector', '#react-select-4--value-item')
                    .waitForElementVisible('[aria-label="Yes"]');
            }
        });
        browser.element('css selector', '[aria-label="Yes"]', function (result) {
            if (result.status != -1) {
                browser.click('css selector', '[aria-label="Yes"]');
            }
        });
        //Fill Hourly rate field
        let HourlyRate = Math.random().toString(10).substring(2, 4);
        browser.element('css selector', '[name="taskDetailsForm.rate"]', function (result) {
            if (result.status != -1) {
                browser.setValue('[name="taskDetailsForm.rate"]', HourlyRate);
            }
        });
        //Click Save button
        browser.element('css selector', '[type="submit"]', function (result) {
            if (result.status != -1) {
                browser
                    .click('css selector', '[type="submit"]');
            }
        });
        //Go to Task list
        browser.click('a[href="/tasks"]')
            .waitForElementVisible('.ag-header-cell-text');
        //check if created task is in task list
        browser.element('css selector', '.field__text.field__text--small', function (result) {
            if (result.status != -1) {
                browser.setValue('.field__text.field__text--small', TaskName);
            }
        });
        browser.saveScreenshot(conf.imgpath(browser) + 'Demo.png')
            .end();
    }
};