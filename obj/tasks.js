module.exports = {
    //DOM elements
    createTaskButton : '[class="btn"]',
    nameFilter : '/html/body/div[1]/div/div[2]/div/div/section/div/div[1]/div/div[1]/div/div/div[1]/div/div/div[1]/div[3]/div/div[2]/div[1]/div/div/div/input',
    testEntry : '[title="?"]',

    getTaskName : function(taskName){
        return this.testEntry.replace('?', taskName)
    }
}

