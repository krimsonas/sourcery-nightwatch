var conf = require('../../nightwatch.conf.js');
const dom = require('../../obj/dom.js');
const credentials = require("../../libs/credentials.js");
const c = require('../../libs/constants.js');
const selectorCSS = "css selector";
const selectorXpath = "xpath";
let n = 0;
let email = 'Email';
let password = 'Password';



module.exports = {
    'Login to lunchapp': function (browser) {
        browser.url(browser.launchUrl)
        .waitForElementVisible(dom.getSpecificSelectOptions(email))
        .setValue(dom.getSpecificSelectOptions(email), credentials.user);

        browser.assert.containsText(dom.getSpecificSelectOptions(email), credentials.user);

        browser.element(selectorCSS, dom.getSpecificSelectOptions(email), function(result)
        {   
            if(result.status === c.ELEMENT_FOUND) { 
                browser.setValue(dom.getSpecificSelectOptions(password), credentials.password);
            }
        })
        browser.assert.containsText(dom.getSpecificSelectOptions(password), credentials.password); 

        browser.element(selectorCSS, dom.loginButton, function(result)
        {   
            if(result.status === c.ELEMENT_FOUND) { 
                browser.click(dom.loginButton);
            }
        }).waitForElementVisible(selectorXpath, dom.loggedInUserName);

        browser.assert.containsText(dom.loggedInUserName, credentials.user);

        browser
        .element(selectorCSS, dom.selectedDay)
        .element(selectorCSS, dom.firstSupplier, function(result){   
            if(result.status === c.ELEMENT_FOUND) { 
                browser.click(dom.firstSupplier)
            } 
        });

        var selectedSupplier = browser.getText(selectorCSS, dom.firstSupplier);
        browser.assert.containsText(dom.supplierName, selectedSupplier);

        browser.elements(selectorCSS, dom.meal, function (result) {
            var n = result.value.length;
            if (n > 0) {
                let index = Math.floor(Math.random()*n);
                browser.click(result.value[n]);
             }
        });

        browser.element(selectorCSS, dom.orderButton, function(result)
        {   
            if(result.status === c.ELEMENT_FOUND) { 
                browser.click(dom.orderButton);
            }
        }).waitForElementVisible(selectorCSS, dom.successMessage) 
         .pause(3000)
         .end();
    }
};