var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
    openBrowser: true,
    themeName: 'default-gray',
    relativeScreenshots: false,
	reportsDirectory: __dirname + '/reports'
});
module.exports = {
	reporter: reporter.fn
};