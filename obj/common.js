module.exports = {
    //DOM elements
    pageTitle : ".page__title",
    submitButton : '[type="submit"]',
    createButton : '[type="button"]',
    selectedItem : '[aria-label="?"]',
    successMessage : '.page-message--success',
    pageFooter : '.page__footer',
    searchField : 'input.field__text',
    founfField : 'input.field__text',
    taskName : '[name=\'taskDetailsForm.name\']',
    taskDescription : '[name=\'taskDetailsForm.description\']',
    billToClient : '.Select-multi-value-wrapper',
    billToClientSelect : '.Select-value-label',
    hourlyRate : '[name=\'taskDetailsForm.rate\']',
    saveButton : '[type=\'submit\']',
    tasksField : '.ellipsis',
    nameField : '.field__text',

    stringGenerator : function (fieldLength) {
        let text = '';
        let charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < fieldLength; i++) {
            text += charset.charAt(Math.ceil(Math.random() * charset.length) + 1);
        }
        return text;
    },

    getSpecificSelectOptions : function (itemValue) {
        return this.selectedItem.replace('?', itemValue);
    }
}

