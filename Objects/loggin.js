module.exports = {
    "selectDropdown": "#react-select-2--value",
    "selectUserFromDropdown": '[aria-label="Laima Kaspare"]',
    "selectedUser": '#react-select-2--value-item',
    "expandRoleFromDropDown": '#react-select-3--value',
    "selectRoleFromDropdown":'[aria-label="Admin"]',
    "selectedRole" :'#react-select-3--value-item',
    "clickSubmit":'[type="submit"]',
    "waitUserinfo": '.user-info__title',
    //'#react-select-10--value-item'
    
    replaceUserFromDropDown : function (userName){
       return selectUserFromDropdown.replace('Laima Kaspare',userName);
    },
    replaceRoleFromDropDown : function (roleName){
        return selectRoleFromDropdown.replace("Admin",roleName);
    }
}
   