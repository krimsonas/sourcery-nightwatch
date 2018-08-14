const user = 'Martynas Šatas';
const role = 'Admin';

module.exports = {
    url: function () {
        return this.api.launchUrl;
    },
    elements: {
        pageTitle: '.page__title',
        userSelect: '#react-select-2--value',
        userSelectedValue: '#react-select-2--value-item',
        userSelectListValue: '[aria-label="' + user + '"]',
        roleSelect: '#react-select-3--value',
        roleSelectListValue: '[aria-label="' + role + '"]',
        roleSelectedValue: '#react-select-3--value-item',
        submitButton: '[type="submit"]',
        loggedInUser: '.user-info__title'
    },
    commands: [
        {
            enterCredentials: function () {
                this.waitForElementVisible('@pageTitle')
                    .click('@userSelect')
                    .click('@userSelectListValue')
                    .click('@roleSelect')
                    .click('@roleSelectListValue');
            },
            assertCredentials: function () {
                this.assert.containsText('@userSelectedValue', user)
                    .assert.containsText('@roleSelectedValue', role)
            },
            submit: function () {
                this.click('@submitButton')
                    .waitForElementVisible('@loggedInUser', 5000)
            }
        }
    ]
};