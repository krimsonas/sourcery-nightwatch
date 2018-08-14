var conf = require('../../nightwatch.conf.js');

module.exports = {
    'Create new client': function (browser) {
        var login = browser.page.login();
        login.navigate()
        login.enterCredentials()
        login.assertCredentials()
        login.submit()

        var clients = browser.page.clients();
        clients.navigateCreateClient()
        clients.inputClientInformation()
        clients.submitCreateNewClient()
        clients.searchForClient()
        browser.end();
    }
};