var conf = require('../../nightwatch.conf.js');

module.exports = {
    'Login to lunch app': function (browser) {
        browser
        .url(browser.launchUrl)

            .end();
    }
};