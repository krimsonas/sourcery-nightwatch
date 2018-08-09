var conf = require('../../nightwatch.conf.js');

module.exports = {
    'Login to sourcebooks': function (browser) {
        var today = new Date();
        var day = today.getDate();
        today = day;

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
        browser.element('css selector', '[aria-label="Rugile Inciuraite"]', function(result) {
            if(result.status != -1) { 
                browser.click('css selector', '[aria-label="Rugile Inciuraite"]');
            }
        });
        //Assert value is selected
        browser.assert.containsText('#react-select-2--value-item', 'Rugile Inciuraite');
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
        
        //Find and Click login button
        browser.element('css selector', '[type="submit"]', function(result) {
            if(result.status != -1) {
                browser
                .click('css selector', '[type="submit"]')
                .waitForElementVisible('.user-info__title');
            }
        });
         //Assert if expected user is logged in
        browser.assert.containsText('.user-info__title', 'Rugile Inciuraite')
            .saveScreenshot(conf.imgpath(browser) + 'Demo.png');

         //Assert if buttons are displayed in above menu list
         browser.assert.containsText('.main-header__nav','Invoices');
         browser.assert.containsText('.main-header__nav','Projects');
         browser.assert.containsText('.main-header__nav','Clients');
         browser.assert.containsText('.main-header__nav','Tasks');
         browser.assert.containsText('.main-header__nav','Time Entries');
         browser.assert.containsText('.main-header__nav','Time Logging');

         //Assert if 'time logging' menu item is selected and marked in blue
         browser.waitForElementVisible('.main-nav');
         browser.assert.containsText('.main-nav__link.main-nav__link--active', 'Time Logging');
         browser.assert.cssProperty('.main-nav__link.main-nav__link--active','color','rgba(64, 76, 237, 1)');

        
          //Assert if day is visible
          browser.waitForElementVisible('.calendar__day.calendar--today.calendar--selected');
          browser.assert.containsText('.calendar--today', day);
          browser.end();
    }
};
