var conf = require('../../nightwatch.conf.js');

module.exports = {
    'Login to sourcebooks': function (browser) {
        browser
            .url(browser.launchUrl)
            .waitForElementVisible('h1'); // wait for the Login title
        browser.element('css selector', '.Select-placeholder', function (result) {
            if (result.status != -1) {
                browser.click('.Select-placeholder')
            }
        });
        browser.element('css selector', '[aria-label="Demo User"]', function (result) {
            if (result.status != -1) {
                browser.click('css selector', '[aria-label="Demo User"]')
            }
        });
        browser.assert.containsText('.Select-value-label', 'Demo User');
        browser.element('css selector', '[type="submit"]', function (result) {
            if (result.status != -1) {
                browser
                    .click('css selector', '[type="submit"]')
                    .waitForElementVisible('.user-info__title');
            }
        });
        browser.assert.containsText('.user-info__title', 'Demo User') // assert body contains text
            .saveScreenshot(conf.imgpath(browser) + 'Demo.png')
            .end();
    }
};