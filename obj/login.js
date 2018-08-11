var functions = {
    // Returns a selector for given user from a dropdown
    getOptionFromDropdown : function (userName) {
        return '[aria-label="?"]'.replace('?', userName);
    }
}

module.exports = {
    commands : [functions],
    elements: {
        loginHeader: { 
        selector: 'h1', 
        locateStrategy: 'css selector' 
      },
      userDropdown: { 
        selector: '#react-select-2--value', 
        locateStrategy: 'css selector' 
      },
      userDropdownSelectedItem: { 
        selector: '#react-select-2--value-item', 
        locateStrategy: 'css selector' 
      },
      roleDropdown: { 
        selector: '#react-select-3--value', 
        locateStrategy: 'css selector' 
      },
      roleDropdownSelectedItem: { 
        selector: '#react-select-3--value-item', 
        locateStrategy: 'css selector' 
      },
    }
};