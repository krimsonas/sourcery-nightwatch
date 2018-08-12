module.exports = {
    userSelect : '.Select-placeholder',
    userSelectedValue : '.Select-value-label',
    userSelectListValue : '[aria-label="?"]',
    roleSelect : '.Select has-value is-searchable Select--single',
    roleSelectedValue : '#react-select-3--value-item',
    roleSelectListValue : '[aria-label="?"]',
    getSpecificSelectUserOption : function(userName) {
        return this.userSelectListValue.replace('?', userName);
    },
    getSpecificSelectRoleOption : function(role) {
        return this.roleSelectListValue.replace('?', role);
    }
}