module.exports = {
    pageTitle: '.page__title',
    submitButton: '[type="submit"]',
    selectedItem: '[aria-label="?"]',
    successMessage: '.page-message--success',
    pageFooter: '.page__footer',
    stringGenerator: function (fieldLength) {
        return Math.random().toString(36).substr(2, fieldLength);
    },
    numberGenerator: function (numberLimit) {
        return (Math.random() * numberLimit).toFixed(2);
    },
    getSpecificSelectOptions: function (itemValue) {
        return this.selectedItem.replace('?', itemValue);
    }
}