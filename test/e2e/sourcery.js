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
        browser.element('css selector', '[aria-label="Giedrius Saulenas"]', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '[aria-label="Giedrius Saulenas"]');
            }
        });
        //Assert value is selected
        browser.assert.containsText('#react-select-2--value-item', 'Giedrius Saulenas');
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
        browser.assert.containsText('.user-info__title', 'Giedrius Saulenas')
            .saveScreenshot(conf.imgpath(browser) + 'Demo.png');

        browser.waitForElementVisible('.main-header__nav');
        
        browser.assert.containsText('a[href="/time-logging"]', "Time Logging");
        browser.assert.containsText('a[href="/invoices"]', "Invoices");
        browser.assert.containsText('a[href="/tasks"]', "Tasks");
        browser.assert.containsText('a[href="/projects"]', "Projects");
        browser.assert.containsText('a[href="/clients"]', "Clients");
        browser.assert.containsText('a[href="/time-entries"]', "Time Entries");
        browser.assert.containsText('.main-nav__link.main-nav__link--active', "Time Logging");
        
        browser.end();
    }
};