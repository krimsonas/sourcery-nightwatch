
module.exports = {
    //DOM elements
    userRoleSelectField : '#react-select-3--value',
    userSelect : ".Select-placeholder",
    userSelectedValue : ".Select-value-label",
    userSelectListValue : '[aria-label="?"]',
    //Functions
    getSpecificSelectUserOption : function(userName) {
        return this.userSelectListValue.replace('?', userName);
    },
    getSpecificSelectUserRoleOption : function(userRole) {
        return this.userSelectListValue.replace('?', userRole);
    }
}