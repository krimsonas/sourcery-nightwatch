module.exports = {
    selector : "css selector",
    pageTitle : ".page__title",
    tasks : '[href="/tasks"]',
    isActive : '.main-nav__link--active',

    userDropdownSelect : ".Select-placeholder",
    roleDropdownSelect : '#react-select-3--value',

    submitButton : '[type="submit"]',
    createButton : '[type="button"]',

    taskName : '[id="taskDetailsForm.name"]',
    taskDescription : '[id="taskDetailsForm.description"]',
    hourlyRate : '[id="taskDetailsForm.rate"]',
    billToClient : '.Select-control',

    taskNameSearch : '.field__text',
    taskNameResult : '.ellipsis',


    getSpecificSelectOptions : function (value) {
        return '[aria-label="' + value + '"]';
    }
}

