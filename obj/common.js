module.exports = {
    pageTitle: '.page__title',
    submitButton: '[type="submit"]',
    createButton: '.btn',
    selectedItem: '[aria-label="?"]',
    successMessage: '.page-message--success',
    pageFooter: '.page__footer',
    searchField: 'input.field__text',
    foundField: 'span[title="?"]',
    stringGenerator: function (fieldLength) {
        let text = '';
        let charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let randomLength = Math.floor(Math.random() * fieldLength) + 1;
        for (var i = 0; i < randomLength; i++)
            text += charset.charAt(Math.floor(Math.random() * charset.length) + 1);
        return text;
    },
    getSpecificSelectOptions: function (itemValue) {
        return this.selectedItem.replace('?', itemValue);
    }
}