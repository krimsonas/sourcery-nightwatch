module.exports = {
    pageTitle: '.page__title',
    submitButton: '[type="submit"]',
    selectedItem: '[aria-label="?"]',
    successMessage: '.page-message--success',
    pageFooter: '.page__footer',
    activeItemColor: 'rgba(64, 76, 237, 1)',
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