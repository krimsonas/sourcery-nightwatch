module.exports = {
    //DOM elements
    userSelect : ".Select-placeholder",
    userSelectedValue : ".Select-value-label",
    userSelectListValue : '[aria-label="?"]',
    userSelectUser : '#react-select-2--value',
    userSelectedUser : '#react-select-2--value-item',
    roleSelect : '#react-select-3--value',
    userSelectedRole : '#react-select-3--value-item',
    //Functions
    getSpecificSelectUserOption : function(userName) {
        return this.userSelectListValue.replace('?', userName);
    }
}
