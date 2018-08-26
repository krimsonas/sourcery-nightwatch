module.exports = {
    //DOM elements
    userSelect : ".Select-placeholder",
    userSelectedValue : ".Select-value-label",
    userSelectListValue : '[aria-label="?"]',
    userDropdown : '#react-select-2--value',
    roleDropdown : '#react-select-3--value',
    roleSelectListValue : '[aria-label="?"]',

    //Functions
    getSpecificSelectUserOption : function(userName) {
        return this.userSelectListValue.replace('?', userName);

       
    },
    getSpecificSelectRoleOption : function(roleName) {
        return this.roleSelectListValue.replace('?', roleName);

       
    }
}