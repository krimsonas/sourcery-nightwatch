module.exports = {
    //DOM elements
    createTaskBtn : '[type="button"]',
    saveTaskBtn : '[type="submit"]',
    nameField : '#taskDetailsForm\\.name',
    descriptionField : '#taskDetailsForm\\.description',
    billDropdown : '.Select-multi-value-wrapper',
    billYesOption : '[aria-label="Yes"]',
    rateField : "[name='taskDetailsForm.rate']",
    nameSearchField : ".ag-header-cell:nth-of-type(1) .field__text--small",
    
    nameSearchResultField(name) {
        return '[title="' + name + '"]'
    }
}
