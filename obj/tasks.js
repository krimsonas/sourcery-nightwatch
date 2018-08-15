module.exports = {
    elements: {
        nameField: '[name="taskDetailsForm.name"]',
        descriptionField: '[name="taskDetailsForm.description"]',
        hourlyRateField: '[name="taskDetailsForm.rate"]',
        billToClientSelect: '.Select-value',
        billToClientSelectedItem: '.Select-value-label',
        createTaskButton: {
            selector: '//button[contains(text(),"Create Task")]',
            locateStrategy: 'xpath'
        },
        searchNameField: {
            selector: '(//input[@class="field__text field__text--small"])[1]',
            locateStrategy: 'xpath'
        },
        searchDescriptionField: {
            selector: '(//input[@class="field__text field__text--small"])[2]',
            locateStrategy: 'xpath'
        },
        foundNameField: {
            selector: '(//span[@class="ellipsis"])[1]',
            locateStrategy: 'xpath'
        },
        foundDescriptionField: {
            selector: '(//span[@class="ellipsis"])[2]',
            locateStrategy: 'xpath'
        }
    }
}