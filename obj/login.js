module.exports = {
    //DOM elements
    userSelect : ".Select-placeholder",
    roleSelect : ".Select-value",
    userSelectedValue : '#react-select-2--value',
    roleSelectedValue : '#react-select-3--value',
    userSelectListValue : '[aria-label="?"]',
    roleSelectListValue : '[aria-activedescendant="react-select-3--option-4"]',
    //Functions
    getSpecificSelectUserOption : function(userName) {
        return this.userSelectListValue.replace('?', userName);
    }
}