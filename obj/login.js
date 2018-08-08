module.exports = {
    userSelect : "#react-select-2--value",
    userSelectedItem : '#react-select-2--value-item',
    roleSelect : '#react-select-3--value',
    roleSelectedItem : '#react-select-3--value-item',
    selectedValue : '[aria-label="?"]',
    getSpecificSelectOption : function(selected) {
        return this.selectedValue.replace('?', selected);
    }
}