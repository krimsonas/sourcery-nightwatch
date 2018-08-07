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
        browser.element('css selector', '[aria-label="Demo User"]', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '[aria-label="Demo User"]');
            }
        });
        //Assert value is selected
        browser.assert.containsText('#react-select-2--value-item', 'Demo User');
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

        //Assert buttons are displayed in above menu list
        browser.assert.containsText('a[href="/time-logging"]', 'Time Logging');
        browser.assert.containsText('a[href="/invoices"]', 'Invoices');
        browser.assert.containsText('a[href="/tasks"]', 'Tasks');
        browser.assert.containsText('a[href="/projects"]', 'Projects');
        browser.assert.containsText('a[href="/clients"]', 'Clients');
        browser.assert.containsText('a[href="/time-entries"]', 'Time Entries');

        //Assert "Time Logging" menu item is selected and marked in blue
        browser.assert.cssProperty('a[href="/time-logging"]', 'color', 'rgba(64, 76, 237, 1)');

        /*//Assert selected day text is 7
        browser.element('css selector', '[calendar__day.calendar--today.calendar--selected]', function(result) {
            if(result.status != -1) {
                browser                
                .waitForElementVisible('.calendar--today');               
            }
        });
        browser.assert.containsText('.calendar--today', '7');*/

        //Assert if expected user is logged in
        browser.assert.containsText('.user-info__title', 'Demo User')
            .saveScreenshot(conf.imgpath(browser) + 'Demo.png')
            .end();      
    }
};