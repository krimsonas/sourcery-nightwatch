const nightwatchconf = '../../nightwatch.conf.js';
const user = 'Admin';
const common= require('../../libs/obj/common.js');
var today = new Date();

var conf = require(nightwatchconf);

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
        browser.element('css selector', `[aria-label=${user}]`, function(result) {
            if(result.status != -1) { 
                browser.click('css selector', `[aria-label=${user}]`);
            }
        });
        //Assert value is selected
        browser.assert.containsText('#react-select-3--value-item', user);
        //Click submit button
        browser.element('css selector', common.submitButton, function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', common.submitButton)
                .waitForElementVisible('.user-info__title')
                .waitForElementVisible('.calendar__day.calendar--today.calendar--selected').waitForElementVisible('[href="/invoices"]').waitForElementVisible('[href="/time-logging"]');
            }
        });
        //Assert if date is correct
        browser.assert.containsText('.calendar__day.calendar--today.calendar--selected', today.getDate());
        //Assert if expected user is logged in
        browser.assert.containsText('.user-info__title', 'Demo User');

        //Assert 
        browser.assert.cssProperty('.main-nav__link.main-nav__link--active', 'color', 'rgba(64, 76, 237, 1)');
        browser.assert.containsText('[href="/time-logging"]', 'Time Logging');browser.assert.containsText('[href="/invoices"]','Invoices');
        browser.assert.containsText('[href="/tasks"]','Tasks');
        browser.assert.containsText('[href="/projects"]','Projects');
        browser.assert.containsText('[href="/clients"]','Clients');
        browser.assert.containsText('[href="/time-entries"]','Time Entries')       
        //Assert 
            .saveScreenshot(conf.imgpath(browser) + 'Demo.png')
            .end();
    }
};