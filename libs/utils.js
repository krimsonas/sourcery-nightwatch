const fs = require('fs');
module.exports = {
    generateStub : function () {
        if (!fs.existsSync('reports')) {
            fs.mkdirSync('reports');
        }
        if (!fs.existsSync('screenshots')) {
            fs.mkdirSync('screenshots');
        }
        if (!fs.existsSync('./libs/credentials.js')) {
            fs.writeFile('./libs/credentials.js', 'module.exports = {\n\t"user":"",\n\t"password":""\n}');
            console.log("Stub generated!\n");
        }
    }    
}