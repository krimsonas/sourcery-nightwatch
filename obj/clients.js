var Commands = {
    waitForPage : function () {
        return this.waitForElementVisible('@createClientBtn');
    }
};

module.exports = {
    commands : [Commands],
    elements : {
        createClientBtn : {
            selector : '//button[text()="Create Client"]',
            locateStrategy : 'xpath'
        }
    }
};