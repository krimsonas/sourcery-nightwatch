var conf = require('../../nightwatch.conf.js');

module.exports = {
    'Create new task': function (browser) {
        var login = browser.page.login();
        login.navigate()
        login.enterCredentials()
        login.assertCredentials()
        login.submit()

        var tasks = browser.page.tasks();
        tasks.navigateNewTask()
        tasks.inputTaskInformation()
        tasks.submitCreateNewTask()
        tasks.searchForTask()
        browser.end();
    }
};