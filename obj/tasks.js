var listCommands = {
    getTaskFromList : function (taskName) {
        return {
            selector : '//div[@col-id="name"]//span[text()="'+taskName+'"]',
            locateStrategy : 'xpath'
        };
    }
};

module.exports = {
    commands : [listCommands],
    elements : {
        createTaskBtn : {
            selector : '//button[text()="Create Task"]',
            locateStrategy : 'xpath'
        },

        nameSearch : {
            selector : '(//input[@class="field__text field__text--small"])[1]',
            locateStrategy : 'xpath'
        },
    }
};