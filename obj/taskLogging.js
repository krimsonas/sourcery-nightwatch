module.exports = {
        //DOM elements
        menuItem : 'a[href="/tasks"]',
        activeMenuItem : '.main-nav__link--active',
        formTitle : "Create task",
        taskName : '[name="taskDetailsForm.name"]',
        taskDescription : '[name="taskDetailsForm.description"]',
        taskHourlyRate : '[name="taskDetailsForm.rate"]',
        billToClient : '#react-select-6--value',
        billSelectValue : '[aria-label="?"]',
        filterFieldValue : '[type="text"]',
        elementValue : '.ellipsis',
      //Functions
      getSpecificSelectBillOption : function(userName) {
      return this.billSelectValue.replace('?', userName);
  }
  }