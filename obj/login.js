module.exports = {
    //DOM elements
    userSelect : ".Select-placeholder",
    userSelectedValue : ".Select-value-label",
    userSelectListValue : '[aria-label="?"]',
    roleSelect : '[id="react-select-3--value"]',
    roleSelectListValue : '[aria-label="?"]',
    roleSelectedValue : '[id="react-select-3--value"]',
    //Functions
    getUserSelect : function(userName) {
        return this.userSelectListValue.replace('?', userName);
    },
    getRoleSelect : function(roleName){
        return this.roleSelectListValue.replace('?', roleName);
    }
}