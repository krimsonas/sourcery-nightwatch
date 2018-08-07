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
        browser.element('css selector', '[aria-label="Deividas Vaškevičius"]', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '[aria-label="Deividas Vaškevičius"]');
            }
        });
        //Assert value is selected
        browser.assert.containsText('#react-select-4--value-item', 'Deividas Vaškevičius');
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
        browser.assert.containsText('.user-info__title', 'Deividas Vaškevičius')
            .saveScreenshot(conf.imgpath(browser) + 'Demo.png');

        browser.assert.containsText('.main-nav__link', 'Time Logging');
        browser.assert.containsText('.main-nav__link', 'Invoices');
        browser.assert.containsText('.main-nav__link', 'Projects');
        browser.assert.containsText('.main-nav__link', 'Clients');
        browser.assert.containsText('.main-nav__link', 'Time entries');
        
        browser.assert.containsText('.main-nav__link main-nav__link--active', 'aria-current="true"');
        browser.expect.element('#nav__link--active').to.have.css('color').which.equals('#404ced');
        
        var d = new Date();
        browser.assert.containsText('.calendar__day.calendar--today.calendar--selected.calendar__day', d.getDate());



        browser.end();
    }
};