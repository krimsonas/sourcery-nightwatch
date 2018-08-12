const nightwatchconf = '../../nightwatch.conf.js';
const common= require('../../libs/obj/common.js');
var funk = require('../../libs/obj/function.js');
const role = 'Admin';
const user = 'Demo User';
var today = new Date();
var input = 'Pauls tested task6';




var conf = require(nightwatchconf);

module.exports = {
    'Login to sourcebooks': function (browser) {
        browser
        .url(browser.launchUrl)
        .waitForElementVisible('h1'); // wait for the Login title
        //Click to expand select user dropdown
        
        function SelectFromDropList(location, selection) {
                
            browser.element('css selector', location, function(result) {
                if(result.status != -1) { 
                    browser.click(location);
                }
            });
            //Select from expanded dropdown
            browser.element('css selector', `[aria-label="${selection}"]`, function(result) {
                if(result.status != -1) { 
                    browser.click('css selector', `[aria-label="${selection}"]`);
                }
            });
        }

        //Click to expand select role dropdown
        SelectFromDropList('#react-select-2--value', user );
        //Assert value is selected
        browser.assert.containsText('#react-select-2--value-item', user);

        //Click to expand select role dropdown
        SelectFromDropList('#react-select-3--value', role);
        //Assert value is selected
        browser.assert.containsText('#react-select-3--value-item', role);


        //Click submit button
        browser.element('css selector', common.submitButton, function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', common.submitButton);
            }
        });
        //Assert if date is correct
        browser.waitForElementVisible('.calendar__day.calendar--today.calendar--selected').assert.containsText('.calendar__day.calendar--today.calendar--selected', today.getDate());
        //Assert if expected user is logged in
        browser.waitForElementVisible('.user-info__title').assert.containsText('.user-info__title', user);

        //Assert 
        browser.assert.cssProperty('.main-nav__link.main-nav__link--active', 'color', 'rgba(64, 76, 237, 1)');
        browser.assert.containsText('[href="/time-logging"]', 'Time Logging');browser.waitForElementVisible('[href="/invoices"]').assert.containsText('[href="/invoices"]','Invoices');
        browser.assert.containsText('[href="/time-logging"]', 'Time Logging');browser.waitForElementVisible('[href="/invoices"]').assert.containsText('[href="/invoices"]','Invoices');
        browser.assert.containsText('[href="/tasks"]','Tasks');
        browser.assert.containsText('[href="/projects"]','Projects');
        browser.assert.containsText('[href="/clients"]','Clients');
        browser.assert.containsText('[href="/time-entries"]','Time Entries').saveScreenshot(conf.imgpath(browser) + 'Demo.png');
                   
        //Assert 
            

        browser.element('css selector', '[href="/tasks"]', function(result) {
            if(result.status != -1) { 

                browser.click( 'a[href="/tasks"]').waitForElementVisible('.btn');
         }
        });


        browser.assert.containsText('.btn','Create Task');


        browser.element('css selector', '.btn', function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', '.btn');
            }
        })
        
        
        browser.assert.containsText('.tile__title', 'Task Details').saveScreenshot(conf.imgpath(browser) + 'Demo.png');



        browser.setValue('.field__text', input).setValue('.field__textarea', 'Pauls tested task');
        

        SelectFromDropList('.Select-value', "Yes");                
        //Assert value is selected
        browser.assert.containsText('.Select-value', 'Yes');
        
                browser.waitForElementVisible('input[name="taskDetailsForm.rate"]').setValue('input[name="taskDetailsForm.rate"]', '4.00');



                browser.element('css selector', '[type="submit"]', function(result) {
                    if(result.status != -1) {
                        browser
                        .click('css selector', '[type="submit"]');
                    }
                });


        
        
        
        

                browser.element('css selector', '[href="/tasks"]', function(result) {
                    if(result.status != -1) { 
        
                        browser.click('a[href="/tasks"]').waitForElementVisible('.btn');
                 }
                });

                browser.waitForElementVisible('.field__text.field__text--small').setValue('.field__text.field__text--small', input);
             
                browser.waitForElementVisible('.ag-cell.ag-cell-not-inline-editing.ag-cell-no-focus.ag-cell-value').assert.containsText('.ag-cell.ag-cell-not-inline-editing.ag-cell-no-focus.ag-cell-value',input).end();


    }
};