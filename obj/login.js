module.exports = {
    //DOM elements
    userSelect : '#react-select-2--value',
    userSelectedValue : '#react-select-2--value-item',
    userSelectListValue : '[aria-label="?"]',
    roleSelect : '#react-select-3--value',
    roleSelectedValue : '#react-select-3--value-item',
    roleSelectListValue : '[aria-label="?"]',
    user : 'Martynas Šatas',
    role : 'Admin',
    
    //Functions
    getSpecificSelectUserOption : function(user) {
        return this.userSelectListValue.replace('?', user);
    },
    getSpecificSelectRoleOption : function(role) {
        return this.roleSelectListValue.replace('?', role);
    }
}