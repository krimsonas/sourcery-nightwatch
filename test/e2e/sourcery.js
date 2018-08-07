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
        browser.element('css selector', '[aria-label="Kristina Vilutiene"]', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '[aria-label="Kristina Vilutiene"]');
            }
        });
        //Assert value is selected
        browser.assert.containsText('#react-select-2--value-item', 'Kristina Vilutiene');
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
        browser.assert.containsText('.user-info__title', 'Kristina Vilutiene')
            .saveScreenshot(conf.imgpath(browser) + 'Demo.png')
            .assert.containsText('.calendar__day.calendar--today.calendar--selected', '7')
            //.assert.containsText('.calendar__day.calendar--today.calendar--selected', '8') //
            .assert.containsText('.user-info__title', 'Kristina Vilutiene')
            .assert.containsText('.main-nav__link.main-nav__link--active', 'Time Logging') 
            .assert.containsText('.main-nav', 'Invoices')
            .assert.containsText('.main-nav', 'Tasks')
            // nespejau
            .end();
            
    }
};