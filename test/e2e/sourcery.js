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
        browser.element('css selector', '[aria-label="Justina Meškone"]', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '[aria-label="Justina Meškone"]');
            }
        });
        //Assert value is selected
        browser.assert.containsText('#react-select-2--value-item', 'Justina Meškone');
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
        browser.assert.containsText('.user-info__title', 'Justina Meškone')
            .saveScreenshot(conf.imgpath(browser) + 'Demo.png')
           
            .waitForElementVisible('.page__header');
            browser.assert.containsText('.main-header__nav', 'Time Logging')
            browser.assert.containsText('.main-header__nav', 'Invoices')
            browser.assert.containsText('.main-header__nav', 'Projects')
            browser.assert.containsText('.main-header__nav', 'Clients')
            browser.assert.containsText('.main-header__nav', 'Tasks')
            browser.assert.containsText('.main-header__nav', 'Time Entries')
            browser.assert.containsText('.main-header__nav', 'Time Logging', '.style.color = "#404CED"')
            
            .waitForElementVisible('.page__frame');
            browser.assert.containsText('.calendar--today', 9)


            .end();
    }
};

