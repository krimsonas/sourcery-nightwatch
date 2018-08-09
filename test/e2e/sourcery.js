var conf = require('../../nightwatch.conf.js');
var userName = "Tautvydas Dirmeikis"
var role = "Admin"

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
        browser.element('css selector', `[aria-label="${userName}"]`, function(result) {
            if(result.status != -1) { 
                browser.click('css selector', `[aria-label="${userName}"]`);
            }
        });
        //Assert value is selected
        browser.assert.containsText('#react-select-2--value-item', userName);
        //Click to expand select role dropdown
        browser.element('css selector', '#react-select-3--value', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '#react-select-3--value');
            }
        });
        //Select from expanded droprown
        browser.element('css selector', `[aria-label="${role}"]`, function(result) {
            if(result.status != -1) { 
                browser.click('css selector', `[aria-label="${role}"]`);
            }
        });
        //Assert value is selected
        browser.assert.containsText('#react-select-3--value-item', role);
        //Click submit button
        browser.element('css selector', '[type="submit"]', function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', '[type="submit"]')
                .waitForElementVisible('.user-info__title');
            }
        });
        //Assert if expected user is logged in
        browser.assert.containsText('.user-info__title', userName);

        //Navigate to tasks page
        browser.click('a[href="/tasks"]');
        browser.assert.containsText('.page__title', 'Tasks');

        //Click create new task button
        browser.click('.btn');
        browser.assert.containsText('.page__title', 'Create task');

        //Enter details
        browser.setValue('.field__text', "Do something");
        browser.setValue('.field__textarea', "What do something means");

        //Check and set billing
        browser.assert.containsText(`.Select-value-label`, `No`);//(`react-select-2--value`, `No`);
        browser.click(`.Select-arrow`);
        browser.click('css selector', `[aria-label="Yes"]`);
        browser.assert.containsText(`.Select-value-label`, `Yes`);
        
        browser.setValue(`input[name^="taskDetailsForm.rate"]`, `3`);

        browser.click(`.btn`);

        browser.click('a[href="/tasks"]');
        browser.assert.containsText('.page__title', 'Tasks');

        browser.setValue('.field__text', "Do somethi");

        browser.assert.containsText(`.ellipsis`, `Do something`);
        //browser.click(`.btn__secondary btn-group__edit-controls`);

        browser.saveScreenshot(conf.imgpath(browser) + 'Demo.png');
    }
};