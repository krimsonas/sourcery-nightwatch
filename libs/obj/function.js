
exports.SelectFromDropList = (location, selection) => {

    browser.element('css selector', location, function(result) {
        if(result.status != -1) { 
            browser.click(location);
        }
    });
    //Select from expanded dropdown
    browser.element('css selector', `[aria-label="${selection}"]`, function(result) {
        if(result.status != -1) { 
            browser.click('css selector', `[aria-label="${selection}"]`);
        }
    });
}
/*
function SelectFromDropList(location, selection) {
                
    browser.element('css selector', location, function(result) {
        if(result.status != -1) { 
            browser.click(location);
        }
    });
    //Select from expanded dropdown
    browser.element('css selector', `[aria-label="${selection}"]`, function(result) {
        if(result.status != -1) { 
            browser.click('css selector', `[aria-label="${selection}"]`);
        }
    });
}*/