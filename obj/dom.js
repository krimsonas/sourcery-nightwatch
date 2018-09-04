module.exports = {

    loginButton : '.btn__content',
    orderButton : '.orders-list-button',

    loggedInUserName : '//*[@id="app"]//nav/div/div[2]/div[2]',
    selectedDay : '.list__group__header--active',
    firstSupplier : '.list__title',
    supplierName : '.headline.red--text',
    meal : '.dish-card',
    dishList : '.text-xs-center',
    successMessage : '.snack__content',

    getSpecificSelectOptions : function (value) {
        return '[aria-label="' + value + '"]';
    }
}

