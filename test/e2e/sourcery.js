const nightwatchconf = '../../nightwatch.conf.js';
const addr= require('../../libs/obj/common.js');
const input= require('../../libs/obj/input.js');
var funk = require('../../libs/obj/function.js');


var conf = require(nightwatchconf);

module.exports = {
    'Login to sourcebooks': function (browser) {
        browser
        .url(browser.launchUrl)
        .waitForElementVisible(addr.h1); // wait for the Login title
        //Click to expand select user dropdown
        
        function SelectFromDropList(location, selection) {
                
            browser.element(addr.selector, location, function(result) {
                if(result.status != -1) { 
                    browser.click(location);
                }
            }).pause(1000);
            //Select from expanded dropdown
            browser.element(addr.selector, funk.MakeLink(selection), function(result) {
                if(result.status != -1) { 
                    browser.click(addr.selector, funk.MakeLink(selection));
                }
            });
        }

        //Click to expand select role dropdown
        SelectFromDropList(addr.userField, input.user );
        //Assert value is selected
        browser.assert.containsText(addr.userField, input.user);

        //Click to expand select role dropdown
        SelectFromDropList(addr.roleField, input.role);
        //Assert value is selected
        browser.assert.containsText(addr.roleField, input.role);


        //Click submit button
        browser.element(addr.selector, addr.submitButton, function(result) {
            if(result.status != -1) {
                browser
                .click(addr.selector, addr.submitButton);
            }
        });
        //****1****
        //Assert if date is correct
        browser.waitForElementVisible(addr.toCalendarToday).assert.containsText(addr.toCalendarToday, input.today.getDate());
        //Assert if expected user is logged in
        browser.waitForElementVisible(addr.userInfo).assert.containsText(addr.userInfo, input.user);

        //Assert 
        browser.assert.cssProperty('.main-nav__link.main-nav__link--active', 'color', input.timeLoggingColor);
        browser.assert.containsText(addr.toTimeLogging, 'Time Logging');browser.waitForElementVisible( addr.toInvoices).assert.containsText(addr.toInvoices,'Invoices');
        browser.assert.containsText(addr.toTimeLogging, 'Time Logging');browser.waitForElementVisible(addr.toInvoices).assert.containsText(addr.toInvoices,'Invoices');
        browser.assert.containsText(addr.toTasks,'Tasks');
        browser.assert.containsText(addr.toProjects,'Projects');
        browser.assert.containsText(addr.toClients,'Clients');
        browser.assert.containsText(addr.toTimeEntries,'Time Entries').saveScreenshot(conf.imgpath(browser) + 'Demo.png');
                   
        //Assert 
        //****2****    

        browser.element(addr.selector, addr.toTasks, function(result) {
            if(result.status != -1) { 

                browser.click(addr.toTasks).waitForElementVisible(addr.button);
         }
        });

        browser.assert.containsText(addr.button,'Create Task');


        browser.element(addr.selector, addr.button, function(result) {
            if(result.status != -1) {
                browser
                .click(addr.selector, addr.button);
            }
        })
        
        
        browser.assert.containsText('.tile__title', 'Task Details').saveScreenshot(conf.imgpath(browser) + 'Demo.png');



        browser.setValue('.field__text', input.taskName).setValue('.field__textarea', input.description);
        
        SelectFromDropList(addr.selectValue, input.yes);                
        //Assert value is selected
        browser.assert.containsText(addr.selectValue, input.yes);
                
        browser.element(addr.selector, '[type="submit"]', function(result) {
                    
            if(result.status != -1) {     
                browser.click(addr.selector, '[type="submit"]');
            }               
        });

             
         
        browser.element(addr.selector, addr.toTasks, function(result) {           
            if(result.status != -1) {                        
                browser.click(addr.toTasks).waitForElementVisible(addr.button);
            }               
        });
              
        browser.waitForElementVisible(addr.toTaskSearch).setValue(addr.toTaskSearch, input.taskName).pause(1000);
      
        browser.waitForElementVisible(addr.toTaskField).assert.containsText(addr.toTaskField, input.taskName)

    
        //-----------3-----------

        browser.element(addr.selector, addr.toClients, function(result) {                   
            if(result.status != -1) {                                
                browser.click(addr.toClients);
            }               
        });
        browser.waitForElementVisible(addr.button).assert.containsText(addr.button,'Create Client');

        browser.element(addr.selector, addr.button, function(result) {
            if(result.status != -1) {
                browser
                .click(addr.selector, addr.button);
            }
        });

        browser.setValue(addr.organizationNamefield, input.organizationName).setValue(addr.firstNameField, input.firstName).setValue(addr.lastNameField, input.lastName).setValue(addr.emailField, input.email);


        browser.element(addr.selector, addr.saveButton, function(result) {           
            if(result.status != -1) {                        
                browser.click(addr.saveButton);
            }               
        });

        browser.element(addr.selector, addr.toClients, function(result) {                   
            if(result.status != -1) {                                
                browser.click(addr.toClients);
            }               
        });

        browser.waitForElementVisible(addr.toClientSearch).setValue(addr.toClientSearch, input.organizationName);
      
        browser.waitForElementVisible(addr.toClientField).assert.containsText(addr.toClientField, input.organizationName );


        //------------------------4------------------------

        browser.element(addr.selector, addr.toProjects, function(result) {                   
            if(result.status != -1) {                                
                browser.click(addr.toProjects);
            }               
        });
        browser.waitForElementVisible(addr.button).assert.containsText(addr.button,'Create Project');

        browser.element(addr.selector, addr.button, function(result) {
            if(result.status != -1) {
                browser
                .click(addr.selector, addr.button).waitForElementVisible('.tile__title');
            }
        });


        browser.assert.containsText('.tile__title', 'Project Details');



        browser.setValue('.field__text', input.projectName).setValue('.field__textarea', input.projectDescription);

        SelectFromDropList(addr.toClientNameField, input.clientName)
        //Assert value is selected

        SelectFromDropList(addr.toProjectManagerField, input.projectManager);
                

        browser.element(addr.selector, addr.saveButton, function(result) {           
            if(result.status != -1) {                        
                browser.click(addr.saveButton);
            }               
        });

        browser.element(addr.selector, addr.toProjects, function(result) {                   
            if(result.status != -1) {                                
                browser.click(addr.toProjects);
            }               
        });

        browser.waitForElementVisible(addr.toClientSearch).setValue(addr.toClientSearch, input.projectName);
      
        browser.waitForElementVisible(addr.toClientField).assert.containsText(addr.toClientField, input.projectName );

    }
};