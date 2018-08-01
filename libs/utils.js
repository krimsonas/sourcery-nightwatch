const fs = require('fs');
module.exports = {
    generateStub : function () {
        let somethingChanged = false;
        if (!fs.existsSync('reports')) {
            fs.mkdirSync('reports');
            somethingChanged = true;
        }
        if (!fs.existsSync('screenshots')) {
            fs.mkdirSync('screenshots');
            somethingChanged = true;
        }
        if (!fs.existsSync('./libs/credentials.js')) {
            fs.writeFile('./libs/credentials.js', 'module.exports = {\n\t"user":"",\n\t"password":""\n}');
            somethingChanged = true;
        }
        if(somethingChanged) {
            console.log("Stub generated!\n");
        }
    }    
}