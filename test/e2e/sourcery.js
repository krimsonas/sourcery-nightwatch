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
        browser.element('css selector', '[aria-label="Tautvydas Dirmeikis"]', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '[aria-label="Tautvydas Dirmeikis"]');
            }
        });
        //Assert value is selected
        browser.assert.containsText('#react-select-2--value-item', 'Tautvydas Dirmeikis');
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
        browser.assert.containsText('.user-info__title', 'Tautvydas Dirmeikis');

        //Assert buttons are existing in menu
        browser.assert.containsText('.main-nav', 'Time Logging');
        browser.assert.containsText('.main-nav', 'Invoices');
        browser.assert.containsText('.main-nav', 'Projects');
        browser.assert.containsText('.main-nav', 'Clients');
        browser.assert.containsText('.main-nav', 'Tasks');
        browser.assert.containsText('a[href="/time-entries"]','Time Entries');

        //Assert "Time logging" is active and verify its color
        browser.assert.containsText('.main-nav__link--active', 'Time Logging');
        browser.assert.cssProperty('a[href="/time-logging"]', 'color', 'rgba(64, 76, 237, 1)');

        browser.saveScreenshot(conf.imgpath(browser) + 'Demo.png')
        browser.end();

    }
};