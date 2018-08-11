module.exports = {
    elements : {
        taskName : {
            selector : '//input[@id="taskDetailsForm.name"]',
            locateStrategy : 'xpath'
        },
        description : {
            selector : '//textarea[@id="taskDetailsForm.description"]',
            locateStrategy : 'xpath'
        },
        billToClient : {
            selector : '//span[@class="Select-arrow"]',
            locateStrategy : 'xpath'
        },
        billToClientYes : {
            selector : '//div[@class="Select-menu-outer"]//div[text()="Yes"]',
            locateStrategy : 'xpath'
        },
        hourlyRate : {
            selector : '//input[@id="taskDetailsForm.rate"]',
            locateStrategy : 'xpath'
        }
    }
};