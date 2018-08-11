module.exports = {
    elements: {
        tasks: { 
            selector: '//ul[@class="main-nav"]//a[text()="Tasks"]', 
            locateStrategy: 'xpath' 
        },

        projects: { 
            selector: '//ul[@class="main-nav"]//a[text()="Projects"]', 
            locateStrategy: 'xpath' 
        },

        loggedInUsersName : {
            selector : '.user-info__title',
            locateStrategy: 'css selector'
        }
    }
};