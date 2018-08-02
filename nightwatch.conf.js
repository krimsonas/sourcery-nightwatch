const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");
const SCREENSHOT_PATH = "./screenshots/";
const utils = require("./libs/utils");

utils.generateStub();

const credentials = require("./libs/credentials");

module.exports = {
  "src_folders": [
    "test/e2e"// Where you are storing your Nightwatch e2e tests
  ],
  "output_folder": "./reports",
  "globals_path" : "globals.js",
  "selenium": {
    "start_process": true,
    "server_path": seleniumServer.path,
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver" : chromedriver.path
    }
  },
  "test_settings": {
    "default": {
      "launch_url" : "https://"+credentials.user+":"+credentials.password+"@d3tmsdgt9iu294.cloudfront.net/",
      "screenshots": {
        "enabled": true,        
        "on_failure" : true,
        "on_error" : true,
        "path": './screenshots'
      },
      "globals": {
        "waitForConditionTimeout": 5000
      },
      "desiredCapabilities": {
        "browserName": "chrome",
		    "javascriptEnabled": true
      }
    },
  }
};