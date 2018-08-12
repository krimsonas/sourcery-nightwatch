module.exports = {
    userSelect : '.Select-placeholder',
    userSelectedValue : '.Select-value-label',
    userSelectListValue : '[aria-label="?"]',
    roleSelect : '[id="react-select-3--value-item"]',
    roleSelectedValue : '[id="react-select-3--value-item"]',
    roleSelectListValue : '[aria-label="?"]',
    getSpecificSelectUserOption : function(userName) {
        return this.userSelectListValue.replace('?', userName);
    },
    getSpecificSelectRoleOption : function(role) {
        return this.roleSelectListValue.replace('?', role);
    }
}