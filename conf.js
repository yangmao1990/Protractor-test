// conf.js
exports.config = {  
 seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'firefox'
  },
  
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },  
  
  // Spec patterns are relative to the current working directly when
  // protractor is called.
   specs: ['spec.js']     
};

