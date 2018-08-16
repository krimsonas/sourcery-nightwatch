module.exports = {
    //DOM elements
    submitButton : '[type="submit"]',
    taskName : '[id="taskDetailsForm.name"]',
    taskDescription : '[id="taskDetailsForm.description"]',
    taskBill : '.Select-value',
    taskBillSelect : '[aria-label="?"]',
    taskBillSelected : '[aria-selected="true"]',
    taskRate : '[id="taskDetailsForm.rate"]',
    taskPage : '.main-nav__link--active',

    getBillSelect : function(bill){
        return this.taskBillSelect.replace('?', bill);
    }
}

