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

        //Navigate to tasks page
        browser.click('a[href="/tasks"]');
        browser.assert.containsText('.page__title', 'Tasks');

        //Click create new task button
        browser.click('.btn');
        browser.assert.containsText('.page__title', 'Create task');

        //Enter details
        browser.setValue('.field__text', "Do something");
        browser.setValue('.field__textarea', "What do something means");

        //Select from dropDown
        browser.element('css selector', 'react-select-8--value', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', 'react-select-8--value');
            }
        });
        browser.element('css selector', '[aria-label="No"]', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '[aria-label="No"]');
            }
        });

        //Assert dropdown selction
        browser.assert.containsText('#react-select-8--value-item', 'Yes');

        browser.saveScreenshot(conf.imgpath(browser) + 'Demo.png');
        browser.end();

    }
};