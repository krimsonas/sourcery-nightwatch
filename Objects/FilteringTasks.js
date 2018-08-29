module.exports = {
    "putTaskName": 'input.field__text',
    "taskIsSeenInFilteredList": "//span[contains(text(),'AHomework Laima')]",
    "filteredTask":'.ag-cell',
    

    replaceFilteredTaskNamr : function (taskName){
        return taskIsSeenInFilteredList.replace('AHomework Laima',taskName);
}
}