module.exports = {
    //DOM elements
    createTaskButton : ".btn",
    createTaskFormTitle : '.tile__title',
    createTaskName : 'input[name = "taskDetailsForm.name"]',
    createTaskDescription : 'textArea[name = "taskDetailsForm.description"]',
    createTaskBillToClient : '.Select-value',
    createTaskBillToClientSelectList: '[aria-label="?"]',
    createTaskHourlyRate : 'input[name = "taskDetailsForm.rate"]',
    createTaskSaveButton : 'button[type = "submit"]',
    tasksNameFilter : '//*[@id="borderLayout_eGridPanel"]/div[1]/div/div/div[1]/div[3]/div/div[2]/div[1]/div/div/div/input',
    tasksNameFilterIcon : '//*[@id="borderLayout_eGridPanel"]/div[1]/div/div/div[1]/div[3]/div/div[1]/div[1]/div[2]/div/span[2]/span',
    tasksListContainer : '.ag-body-container',
    tasksFilteredElement : 'span[title = "?"]',
    FilteredElementXpath : '//*[@id="borderLayout_eGridPanel"]/div[1]/div/div/div[3]/div[3]/div/div/div[1]/div[1]/span',
    //Functions
    getYesNoBillToClient : function(YesOrNo) {
        return this.createTaskBillToClientSelectList.replace('?', YesOrNo);
    },
    getTasksFileteredElement : function(taskName) {
        return this.tasksFilteredElement.replace('?', taskName);
    },

}