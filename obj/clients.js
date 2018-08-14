const organizationName = 'Test org' + Date.now();
const firstName = 'firstname';
const lastName = 'lastname' + Date.now();
const email = 'test@email.com';

module.exports = {
    elements: {
        pageTitle: '.page__title',
        successMessage: '.page-message--success',
        submitButton: '[type="submit"]',
        menuButtonClients: '.main-nav__link[href="/clients"]',
        createClientkButton: '.btn',
        inputFieldOrganizationName: 'input[id="clientDetailsForm.organization"]',
        inputFieldFirstName: 'input[id="clientDetailsForm.contacts_firstName_0"]',
        inputFieldLastName: 'input[id="clientDetailsForm.contacts_lastName_0"]',
        inputFieldEmail: 'input[id="clientDetailsForm.contacts_email_0"]',
        searchResults: '.ag-body-container',
        createClientButton: {
            selector: '//button[contains(@class, "btn") and text() = "Create Client"]',
            locateStrategy: 'xpath'
        },
        searchContact: {
            selector: '(//input[@class="field__text field__text--small"])[2]',
            locateStrategy: 'xpath'
        },
        resultContact: {
            selector: '(//span[@class="ellipsis"])[2]',
            locateStrategy: 'xpath'
        }
    },
    commands: [
        {
            navigateAllClients: function () {
                this.click('@menuButtonClients')
            },
            navigateCreateClient: function () {
                this.click('@menuButtonClients')
                    .click('@createClientkButton')
                this.expect.element('@pageTitle').to.have.attribute('innerText')
                    .which.contains('Create Client').before()
            },
            inputClientInformation: function () {
                this.setValue('@inputFieldOrganizationName', organizationName)
                    .setValue('@inputFieldFirstName', firstName)
                    .setValue('@inputFieldLastName', lastName)
                    .setValue('@inputFieldEmail', email)
            },
            submitCreateNewClient: function () {
                this.click('@submitButton')
                    .waitForElementVisible('@successMessage')
            },
            searchForClient: function () {
                this.click('@menuButtonClients')
                    .waitForElementVisible('@pageTitle')
                    .setValue('@searchContact', lastName + ' ' + firstName)
                    .expect.element('@searchResults').to.have.attribute('style')
                        .which.contains('height: 40px;').before(5000)
                this.assert.containsText('@resultContact', lastName + ', ' + firstName)
            }
        }
    ]
}
