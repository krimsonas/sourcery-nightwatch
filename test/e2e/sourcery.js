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
       browser.waitForElementVisible('.calendar__day.calendar--today.calendar--selected'); // wait for the calendar to appear
// long name
        //browser.assert.containsText('.calendar--today', '7');

  
    browser.assert.containsText('.main-nav', 'Time Logging');
    browser.assert.containsText('.main-nav', 'Invoices');
    browser.assert.containsText('.main-nav', 'Projects');
    browser.assert.containsText('.main-nav', 'Clients');
    browser.assert.containsText('.main-nav', 'Time Entries');


    browser.assert.cssProperty(".main-nav__link.main-nav__link--active", "color", "rgba(64, 76, 237, 1)");
   // <a class="main-nav__link main-nav__link--active" aria-current="true" href="/time-logging">Time Logging</a>
        //Assert if expected user is logged in
        browser.assert.containsText('.user-info__title', 'Demo User')
            .saveScreenshot(conf.imgpath(browser) + 'Demo.png')
            .end();
    }
};
// <div class="calendar__day calendar--today calendar--selected"><span class="calendar__date">7</span></div>

 