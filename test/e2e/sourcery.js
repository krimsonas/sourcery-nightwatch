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
        browser.element('css selector', '[aria-label="Akvile Jarmalaviciute"]', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '[aria-label="Akvile Jarmalaviciute"]');
            }
        });
        //Assert value is selected
        browser.assert.containsText('#react-select-2--value-item', 'Akvile Jarmalaviciute');
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
        browser.assert.containsText('.user-info__title', 'Akvile Jarmalaviciute')
            .saveScreenshot(conf.imgpath(browser) + 'Demo.png');
       
        browser.assert.containsText('.main-nav', 'Time Logging')
          .assert.containsText('.main-nav', 'Invoices')
          .assert.containsText('.main-nav', 'Tasks')
          .assert.containsText('.main-nav', 'Projects')
          .assert.containsText('.main-nav', 'Clients')
          .assert.containsText('.main-nav', 'Time Entries')
          .assert.containsText('.main-nav__link--active', 'Time Logging')
          .assert.cssProperty('.main-nav__link--active', 'color', 'rgba(64, 76, 237, 1)')

        .end();       
    }
};