var conf = require('../../nightwatch.conf.js');
const dom = require('../../obj/dom.js');
const urltest = "https://lunchapp.azurewebsites.net/login-password";
module.exports = {
    'Login to lunchapp': function (browser) {
        browser.url(browser.launchUrl)//.waitForElementVisible();
        
        


        .end();
        
    }
};