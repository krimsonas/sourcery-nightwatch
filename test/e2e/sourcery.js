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
        browser.element('css selector', '[aria-label="Ruta Laurikaityte"]', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '[aria-label="Ruta Laurikaityte"]');
            }
        });
        //Assert value is selected
        browser.assert.containsText('#react-select-2--value-item', 'Ruta Laurikaityte');
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
        browser.assert.containsText('.user-info__title', 'Ruta Laurikaityte')
            .saveScreenshot(conf.imgpath(browser) + 'Demo.png');
            
 
        //Click menu item "Clients"
        browser.element('css selector', '[href="/clients"]', function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', '[href="/clients"]')
                .waitForElementVisible('.main-nav__link--active', 5000);
            }
        });
        //Assert value is selected
        browser.assert.containsText('.main-nav__link--active', 'Clients');

        
        //Click button "Create Client"
        browser.element('css selector', '[type="button"]', function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', '[type="button"]')
                .waitForElementVisible('h1');
            }
        });

        //Fill field "Organization Name"
        browser.element('css selector', '[name="clientDetailsForm.organization"]', function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', '[name="clientDetailsForm.organization"]')
                .setValue('input[name="clientDetailsForm.organization"]', 'Baltic Group AB');
            }
        });

        //Fill field "First Name"
        browser.element('css selector', '[name="clientDetailsForm.contacts[0].firstName"]', function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', '[name="clientDetailsForm.contacts[0].firstName"]')
                .setValue('input[name="clientDetailsForm.contacts[0].firstName"]', 'John');
            }
        });

        //Fill field "Last Name"
        browser.element('css selector', '[name="clientDetailsForm.contacts[0].lastName"]', function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', '[name="clientDetailsForm.contacts[0].lastName"]')
                .setValue('input[name="clientDetailsForm.contacts[0].lastName"]', 'Smith');
            }
        });

        //Fill field "Email"
        browser.element('css selector', '[name="clientDetailsForm.contacts[0].email"]', function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', '[name="clientDetailsForm.contacts[0].email"]')
                .setValue('input[name="clientDetailsForm.contacts[0].email"]', 'John.Smith@balticgroup.com')
                .saveScreenshot(conf.imgpath(browser) + 'CreateClient.png');
            }
        })

        //Click Save button
        browser.element('css selector', '[type="submit"]', function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', '[type="submit"]')
            }
        });

        //Click menu item "Clients"
        browser.element('css selector', '[href="/clients"]', function(result) {
            if(result.status != -1) {
            browser
            .click('css selector', '[href="/clients"]')
            .waitForElementVisible('.main-nav__link--active', 5000);
            }
        });

        //Fill field "Task Name"
        browser.element('css selector', '[type="text"]', function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', '[type="text"]')
                .setValue('input[type="text"]', 'Baltic Group AB')
                .waitForElementVisible('[title="Baltic Group AB"]', 5000)
                .assert.containsText('.ellipsis', 'Baltic Group AB')
                .saveScreenshot(conf.imgpath(browser) + 'ClientsPage.png');
            }
        })

        .end();
    }
};