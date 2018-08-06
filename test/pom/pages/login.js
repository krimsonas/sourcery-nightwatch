/** @namespace client.page.login */

const credentials = require("../../../libs/credentials");

module.exports = {

    url() {
        return 'https://' + credentials.user + ':' + credentials.password + '@d3tmsdgt9iu294.cloudfront.net/';
    },

    elements: {
        userField: '.Select-placeholder',
        demoUser: '[aria-label="Demo User"]',
        submitButton: '[type="submit"]',
        userFieldValue: '.Select-value-label'
    },

    commands: [{

        fillLogin() {
            this.waitForElementVisible('@userField', () => {
                console.log('User field is displayed');
            })
                .click('@userField')
                .click('@demoUser', () => {
                    console.log('Demo user selected');
                });
            return this;
        },

        clickSubmitButton() {
            this.waitForElementVisible('@submitButton', () => {
                console.log('Submit button is displayed');
            })
                .click('@submitButton', () => {
                    console.log('Submit button was clicked');
                });
            return this;
        }
    }]
};
