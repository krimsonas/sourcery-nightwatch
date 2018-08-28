module.exports = {
    //DOM elements
    userSelect : ".Select-placeholder",
    userSelectedValue : ".Select-value-label",
    userSelectListValue : '[aria-label="?"]',
    userRoleSelect : "#react-select-3--value-item",
    userRoleSelectListValue : '[aria-label="?"]',
    //Functions
    getSpecificSelectUserOption : function(userName) {
        return this.userSelectListValue.replace('?', userName);
    },

    getSpecificSelectUserRoleOption : function(role) {
        return this.userRoleSelectListValue.replace('?', role);
    }
}