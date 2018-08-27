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
        browser.element('css selector', '[aria-label="Gabija Graženaite"]', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '[aria-label="Gabija Graženaite"]');
            }    
        });
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
                .waitForElementVisible('.main-nav');
            }
        });
        //Navigate to clients page by url
        browser.click('a[href="/clients"]')
        .waitForElementVisible('.btn');
        //Click button create client
        browser.element('css selector', '.btn[type="button"]', function(result) {
            if(result.status != -1) {
                browser.click('css selector', '.btn[type="button"]');
            }
        });
         //Fill "Organisation name" field with random values
         let inputValue1=Math.random().toString(36).substring(7);
         browser.element('css selector', '[name="clientDetailsForm.organization"]', function(result) {
             if(result.status != -1) {
                 browser.setValue('[name="clientDetailsForm.organization"]', inputValue1);
             }
         });         
         //Fill "First name" field with random values
         let inputValue2=Math.random().toString(36).substring(7);
         browser.element('css selector', '[name="clientDetailsForm.contacts[0].firstName"]', function(result) {
             if(result.status != -1) {
                 browser.setValue('[name="clientDetailsForm.contacts[0].firstName"]', inputValue2);
             }
         });       
         //Fill "Last name" field with random values
         let inputValue3=Math.random().toString(36).substring(7);
         browser.element('css selector', '[name="clientDetailsForm.contacts[0].lastName"]', function(result) {
             if(result.status != -1) {
                 browser.setValue('[name="clientDetailsForm.contacts[0].lastName"]', inputValue3);
             }
         });     
         //Fill an "Email" field with random values
         let inputValue4=Math.random().toString(36).substring(7);
         let inputValue5=Math.random().toString(36).substring(7);
         browser.element('css selector', '[name="clientDetailsForm.contacts[0].email"]', function(result) {
             if(result.status != -1) {
                 browser.setValue('[name="clientDetailsForm.contacts[0].email"]', inputValue4+'@'+inputValue5+'.'+'com');
             }
         });
          //Save client information by clicking "Save" button
        browser.element('css selector', '.btn[type="submit"]', function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', '.btn[type="submit"]');
            }
        });
        //Navigate to clients page by url
        browser.click('a[href="/clients"]')
        .waitForElementVisible('.ag-header-cell-text');
        //Filter and check if client is displayed
        browser.element('css selector', '.field__text.field__text--small', function(result) {
         if(result.status != -1) {
            browser.setValue('.field__text.field__text--small', inputValue1);
            }
        });
        browser.waitForElementVisible('#borderLayout_eGridPanel > div.ag-bl-center-row.ag-bl-dont-fill-center-row > div > div > div.ag-body.ag-row-no-animation > div.ag-body-viewport-wrapper > div > div > div:nth-child(1) > div:nth-child(1) > span');
        browser.assert.containsText('#borderLayout_eGridPanel > div.ag-bl-center-row.ag-bl-dont-fill-center-row > div > div > div.ag-body.ag-row-no-animation > div.ag-body-viewport-wrapper > div > div > div:nth-child(1) > div:nth-child(1) > span',inputValue1);
        browser.assert.containsText('#borderLayout_eGridPanel > div.ag-bl-center-row.ag-bl-dont-fill-center-row > div > div > div.ag-body.ag-row-no-animation > div.ag-body-viewport-wrapper > div > div > div:nth-child(1) > div:nth-child(3) > span',inputValue4+'@'+inputValue5+'.'+'com');
        browser.assert.containsText('#borderLayout_eGridPanel > div.ag-bl-center-row.ag-bl-dont-fill-center-row > div > div > div.ag-body.ag-row-no-animation > div.ag-body-viewport-wrapper > div > div > div:nth-child(1) > div:nth-child(2) > span',inputValue3+','+' '+inputValue2);
        
        
        browser.saveScreenshot(conf.imgpath(browser) + 'Demo.png')
        .end();
    }
};
