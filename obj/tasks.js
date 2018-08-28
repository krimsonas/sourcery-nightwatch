module.exports = {
    url : "tasks",
    title : "Create task",
    taskNameField : 'input[name="taskDetailsForm.name"]',
    taskDesciptionField : 'textarea[name="taskDetailsForm.description"]',
    description : "random text",
    billableField : ".Select-control",
    billableValue : '[aria-label="Yes"]',
    hourlyRateField : 'input[name="taskDetailsForm.rate"]',
    successMessage : '.page-message.page-message--success',
    createUrl : 'https://sourcerer:SourceryTesters2018@dq508exvr03rj.cloudfront.net/tasks/create'
}