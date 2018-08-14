const taskName = 'taskname ' + Date.now();
const taskDescription = 'task description';
const taskRate = 2;

module.exports = {
    elements: {
        pageTitle: '.page__title',
        submitButton: '[type="submit"]',
        menuButtonTasks: '.main-nav__link[href="/tasks"]',
        inputFieldName: 'input[name="taskDetailsForm.name"]',
        inputFieldDescription: 'textarea[name="taskDetailsForm.description"]',
        inputFieldRate: 'input[name="taskDetailsForm.rate"]',
        dropDownBillable: '.Select-multi-value-wrapper',
        billableTrue: '[aria-label="Yes"]',
        successMessage: '.page-message--success',
        searchResults: '.ag-body-container',
        createTaskButton: {
            selector: '//button[contains(@class, "btn") and text() = "Create Task"]',
            locateStrategy: 'xpath'
        },
        searchTaskName: {
            selector: '(//input[@class="field__text field__text--small"])[1]',
            locateStrategy: 'xpath'
        },
        resultTaskName: {
            selector: '(//span[@class="ellipsis"])[1]',
            locateStrategy: 'xpath'
        },

    },
    commands: [
        {
            navigateAllTasks: function () {
                this.click('@menuButtonTasks')
            },
            navigateNewTask: function () {
                this.click('@menuButtonTasks')
                    .click('@createTaskButton')
                this.expect.element('@pageTitle').to.have.attribute('innerText')
                    .which.contains('Create task').before()
            },
            inputTaskInformation: function () {
                this.setValue('@inputFieldName', taskName)
                    .setValue('@inputFieldDescription', taskDescription)
                    .click('@dropDownBillable')
                    .click('@billableTrue')
                    .clearValue('@inputFieldRate')
                    .setValue('@inputFieldRate', taskRate)
            },
            submitCreateNewTask: function () {
                this.click('@submitButton')
                    .waitForElementVisible('@successMessage')
            },
            searchForTask: function () {
                this.click('@menuButtonTasks')
                    .waitForElementVisible('@pageTitle')
                    .setValue('@searchTaskName', taskName)
                    .expect.element('@searchResults').to.have.attribute('style')
                        .which.contains('height: 40px;').before(5000)
                this.assert.containsText('@resultTaskName', taskName)
            }
        }
    ]
};