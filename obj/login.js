module.exports = {
    //DOM elements
    userSelect : ".Select-placeholder",
    userSelectedValue: '.Select-value-label',
    userSelectListValue : '[aria-label="?"]',

    getSpecificSelectUserOption : function(userName) {
        return this.userSelectListValue.replace('?', userName);
    },
    roleSelect: "#react-select-3--value-item",
    roleSelectedValue: '#react-select-3--value-item',
    roleSelectListValue: 'aria-label="?"]',
    getSpecificSelectRoleOption : function(role) {
        return this.userSelectListValue.replace('?', role);
    }
}