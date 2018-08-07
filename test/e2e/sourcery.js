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
       // browser.pause(10000);
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

        // First bullet point
        browser.element('css selector', '[class="user-info__title"]', function(result) {
            if(result.status != -1) {
                browser.waitForElementVisible('.user-info__title');
            }
        });
        browser.assert.containsText('.user-info__title','Demo User'); 

        // Second bullet point
        browser.element('css selector', 'a[href="/time-logging"]');
        browser.assert.containsText('a[href="/time-logging"]','Time Logging'); 
        browser.element('css selector', 'a[href="/invoices"]');
        browser.assert.containsText('a[href="/invoices"]','Invoices'); 
        browser.element('css selector', 'a[href="/tasks"]');
        browser.assert.containsText('a[href="/tasks"]','Tasks'); 
        browser.element('css selector', 'a[href="/projects"]');
        browser.assert.containsText('a[href="/projects"]','Projects');
        browser.element('css selector', 'a[href="/clients"]');
        browser.assert.containsText('a[href="/clients"]','Clients'); 
        browser.element('css selector', 'a[href="/time-entries"]');
        browser.assert.containsText('a[href="/time-entries"]','Time Entries');

        // Third bullet point
        browser.element('css selector', 'a[href="/time-logging"]');
        browser.assert.cssProperty('a[href="/time-logging"]', 'color', 'rgba(64, 76, 237, 1)').end();
    



        /*
        //Assert that todays date is number 7
        browser.element('css selector', '[class="calendar--today"]', function(result) {
            if(result.status != -1) {
                browser.waitForElementVisible('.calendar--today');
            }
        });
        browser.assert.containsText('.calendar--today','7'); */
        



                //Assert if expected user is logged in
     /*   browser.assert.containsText('.user-info__title', 'Demo User')
            .saveScreenshot(conf.imgpath(browser) + 'Demo.png')
            .end();*/
    }
};