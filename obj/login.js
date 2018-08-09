module.exports = {
    userSelect: '#react-select-2--value',
    userSelectedValue: '#react-select-2--value-item',
    userSelectListValue: '[aria-label="?"]',
    roleSelect: '#react-select-3--value',
    roleSelectedValue: '#react-select-3--value-item',
    roleSelectListValue: '[aria-label="?"]',
    getSpecificSelectUserOption: function (user) {
        return this.userSelectListValue.replace('?', user);
    },
    getSpecificSelectRoleOption: function (role) {
        return this.roleSelectListValue.replace('?', role);
    }
}