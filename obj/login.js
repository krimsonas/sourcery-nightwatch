module.exports = {
    //DOM elements
    userSelect : ".Select-placeholder",
    userSelectedValue : ".Select-value-label",
    userSelectListValue : '[aria-label="?"]',
    //Functions
    getSpecificSelectUserOption : function(userName) {
        return this.userSelectListValue.replace('?', userName);
    }
}