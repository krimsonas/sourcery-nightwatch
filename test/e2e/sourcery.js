var conf = require("../../nightwatch.conf.js");

module.exports = {
  "Login to sourcebooks": function(browser) {
    browser.url(browser.launchUrl).waitForElementVisible("h1"); // wait for the Login title
    //Click to expand select user dropdown
    browser.element("css selector", "#react-select-2--value", function(result) {
      if (result.status != -1) {
        browser.click("#react-select-2--value");
      }
    });
    //Select from expanded droprown
    browser.element("css selector", '[aria-label="Ruta Jovaišaite"]', function(
      result
    ) {
      if (result.status != -1) {
        browser.click("css selector", '[aria-label="Ruta Jovaišaite"]');
      }
    });
    //Assert value is selected
    browser.assert.containsText(
      "#react-select-2--value-item",
      "Ruta Jovaišaite"
    );
    //Click to expand select role dropdown
    browser.element("css selector", "#react-select-3--value", function(result) {
      if (result.status != -1) {
        browser.click("css selector", "#react-select-3--value");
      }
    });
    //Select from expanded droprown
    browser.element("css selector", '[aria-label="Admin"]', function(result) {
      if (result.status != -1) {
        browser.click("css selector", '[aria-label="Admin"]');
      }
    });
    //Assert value is selected
    browser.assert.containsText("#react-select-3--value-item", "Admin");
    //Click submit button
    browser.element("css selector", '[type="submit"]', function(result) {
      if (result.status != -1) {
        browser
          .click("css selector", '[type="submit"]')
          .waitForElementVisible(".user-info__title")
          .waitForElementVisible(
            ".calendar__day.calendar--today.calendar--selected"
          );
      }
    });

    //Assert value is selected
    browser.assert.containsText(
      ".calendar__day.calendar--today.calendar--selected",
      "9"
    );
    //Click submit button
    browser.element(
      "css selector",
      ".calendar__day.calendar--today.calendar--selected",
      function(result) {
        if (result.status != -1) {
          browser
            // .click('css selector', '[type="submit"]')
            .waitForElementVisible(
              ".calendar__day.calendar--today.calendar--selected"
            );
        }
      }
    );

    //Assert if expected user is logged in
    browser.assert
      .containsText(".user-info__title", "Ruta Jovaišaite")
      .saveScreenshot(conf.imgpath(browser) + "Demo.png");

    /* IGNORE ALL THIS
      let invoices = "//a[@class='main-nav__link' and contains(text(), 'Invoices')]"
      let projects = "//a[@class='main-nav__link' and contains(text(), 'Projects')]"
      let timeLogging = "//a[@class='main-nav__link' and contains(text(), 'Time Logging')]"
      let Clients = "//a[@class='main-nav__link' and contains(text(), 'Clients')]"
      let Tasks = "//a[@class='main-nav__link' and contains(text(), 'Tasks')]"
      */

    //browser.assert.containsText(invoices, 'Invoices')
    //.waitForElementVisible(".main-nav__link.main-nav__link--active");
    //browser.assert.containsText("//a[@href='/time-logging']", "Time Logging")


    const blueColour = 'rgba(64, 76, 237, 1)';
    browser.assert
      .containsText(".main-nav", "Time Logging")
      .assert.containsText(".main-nav", "Invoices")
      .assert.containsText(".main-nav", "Projects")
      .assert.containsText(".main-nav", "Clients")
      .assert.containsText(".main-nav", "Tasks")
      .assert.containsText(".main-nav", "Time Entries")
      .assert.cssProperty(
        ".main-nav__link--active",
        "color",
        blueColour
      )

      //.browser.assert.containsText('.main-nav', 'Time Logging')

      .end();
  }
};
