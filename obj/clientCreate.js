var Commands = {
    waitForPage : function () {
        return this.waitForElementVisible('@organizationName');
    },
    saveAndCheckIfCreated : function () {
        this.click('[type="submit"]');

        // How to avoid this pause, when no unique element appears after loading to check if it is visible?
        this.api.pause(1000);

        this.api.url(function(result) {
            this.assert.ok(result.value.indexOf('create') === -1, 'We are not in the Client Create page');
        });
    }
};

module.exports = {
    commands : [Commands],
    elements : {
        organizationName : {
            selector : '#clientDetailsForm\\.organization',
            locateStrategy : 'css selector'
        },
        firstName : {
            selector : '#clientDetailsForm\\.contacts_firstName_0',
            locateStrategy : 'css selector'
        },
        lastName : {
            selector : '#clientDetailsForm\\.contacts_lastName_0',
            locateStrategy : 'css selector'
        },
        email : {
            selector : '#clientDetailsForm\\.contacts_email_0',
            locateStrategy : 'css selector'
        }
    }
};