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
        browser.element('css selector', '[aria-label="Paulius Grigaliunas"]', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '[aria-label="Paulius Grigaliunas"]');
            }
        });
        //Assert value is selected
        browser.assert.containsText('#react-select-2--value-item', 'Paulius Grigaliunas');
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
                .waitForElementVisible('.user-info__title')
                .waitForElementVisible('[href="/invoices"]')
                .waitForElementVisible('.calendar__day.calendar--today.calendar--selected');
            }
        });
        //Assert if expected user is logged in
        browser.assert.containsText('.user-info__title', 'Paulius Grigaliunas');
        //

        var d = new Date();
       // document.getElementById("demo").innerHTML = d.getTime();

       browser.assert.containsText('[href="/time-logging"]', 'Time Logging');
       browser.assert.cssProperty('[href="/time-logging"]', 'select')
       browser.assert.cssProperty('[href="/time-logging"]', 'color', 'rgba(64, 76, 237, 1)');
       //browser.assert.cssProperty('[href="/time-logging"]', 'active', 'true');
       browser.assert.containsText('[href="/invoices"]', 'Invoices');
       browser.assert.containsText('main-nav__link', 'Invoices')


        browser.assert.containsText('.calendar__day.calendar--today.calendar--selected', '9')
            .saveScreenshot(conf.imgpath(browser) + 'Demo.png')
            .end();
    }
};