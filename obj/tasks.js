module.exports = {
    nameField: '[name="taskDetailsForm.name"]',
    nameFieldLimit: 50,
    descriptionField: '[name="taskDetailsForm.description"]',
    descriptionFieldLimit: 50,
    hourlyRateField: '[name="taskDetailsForm.rate"]',
    hourlyRateFieldLimit: 9999,
    billToClientSelect: '.Select-value',
    billToClientSelectedItem: '.Select-value-label',
    createTaskButton: '.grid__column :nth-child(1) > .btn',
    searchNameField: '.ag-header-cell:nth-child(1) .field--filter > .field__text',
    searchDescriptionField: '.ag-header-cell:nth-child(2) .field--filter > .field__text',
    foundNameField: '.ag-row-level-0:nth-child(1) .ag-cell-value:nth-child(1) > .ellipsis',
    foundDescriptionField: '.ag-row-level-0:nth-child(1) .ag-cell-value:nth-child(2) > .ellipsis'
}