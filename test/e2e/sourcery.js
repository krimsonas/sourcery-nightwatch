var conf = require('../../nightwatch.conf.js');

module.exports = {
    'Login to sourcebooks': function (browser) {
        browser
        .url(browser.launchUrl)
        .waitForElementVisible('h1'); // wait for the Login title
        //Click to expand select user dropdown--Step 1
        browser.element('css selector', '#react-select-2--value', function(result) {
            if(result.status != -1) { 
                browser.click('#react-select-2--value');
            }
        });

        //Select from expanded dropdown--Step 2
        browser.element('css selector', '[aria-label="Demo User"]', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '[aria-label="Demo User"]');
            }
        });
        //Assert value is selected
        browser.assert.containsText('#react-select-2--value-item', 'Demo User');

        //Click to expand select role dropdown--Step 3
        browser.element('css selector', '#react-select-3--value', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '#react-select-3--value');
            }
        });
        //Select from expanded dropdown--Step 4
        browser.element('css selector', '[aria-label="Admin"]', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '[aria-label="Admin"]');
            }
        });
        //Assert value is selected
        browser.assert.containsText('#react-select-3--value-item', 'Admin');

        //Click submit button--Step 5
        browser.element('css selector', '[type="submit"]', function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', '[type="submit"]')
                .waitForElementVisible('.user-info__title');
            }
        });


        browser.element('css selector', '[class="user-info__title"]', function(result) {
            if(result.status != -1) {
                browser.waitForElementVisible('.user-info__title');
            }
        });
        browser.assert.containsText('.user-info__title','Demo User'); 

        browser.assert.containsText('a[href="/time-logging"]','Time Logging'); 
        browser.assert.containsText('a[href="/invoices"]','Invoices'); 
        browser.assert.containsText('a[href="/tasks"]','Tasks'); 
        browser.assert.containsText('a[href="/projects"]','Projects');
        browser.assert.containsText('a[href="/clients"]','Clients'); 
        browser.assert.containsText('a[href="/time-entries"]','Time Entries');
        browser.assert.cssProperty('a[href="/time-logging"]', 'color', 'rgba(64, 76, 237, 1)').end();
    }
};