module.exports = {
    //DOM elements
    userSelect : ".Select-placeholder",
    userSelectedValue : ".Select-value-label",
    userSelectListValue : '[aria-label="?"]',
    roleSelect : '#react-select-3--value',
    roleSelectItem : '#react-select-3--value-item',
    //Functions
    getSpecificSelectUserOption : function(itemValue) {
        return this.userSelectListValue.replace('?', itemValue);
    }
}