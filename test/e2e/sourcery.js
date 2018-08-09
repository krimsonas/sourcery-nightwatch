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
        browser.element('css selector', '[aria-label="Aurimas Abaravicius"]', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '[aria-label="Aurimas Abaravicius"]');
            }
        });
        //Assert value is selected
        browser.assert.containsText('#react-select-2--value-item', 'Aurimas Abaravicius');
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
                .waitForElementVisible('.calendar__day.calendar--today.calendar--selected');
            }
        });
        //Assert if expected user is logged in
        browser.assert.containsText('.user-info__title', 'Aurimas Abaravicius')
            .saveScreenshot(conf.imgpath(browser) + 'Demo.png');
        //Assert if above menu list are displayed pages
        browser.assert.containsText('a[href="/time-logging"]', 'Time Logging');
        browser.assert.containsText('a[href="/invoices"]', 'Invoices');
        browser.assert.containsText('a[href="/tasks"]', 'Tasks');
        browser.assert.containsText('a[href="/projects"]', 'Projects');
        browser.assert.containsText('a[href="/clients"]', 'Clients');

        //Assert if Time logging is active blue
        browser.assert.containsText('.main-nav__link.main-nav__link--active', 'Time Logging');
            
        //Assert if value of today day is selected
        browser.assert.containsText('.calendar__day.calendar--today.calendar--selected', '9')
        .end();
    }
};