exports.config = {
  // For automation on web-app
  specs: [
    './src/web-app/GetCrusing/test/Homepage/*.test.js'
  ],

  maxInstances: 10,

  // For automation on iOS Mobile
  // host: 'localhost',
  // port: 4444,
  // specs: [
  //   './src/mobile-app/calculator/test/*.test.js'
  // ],
  // capabilities: [{
  //   deviceName: "'Tuấn's iPhone",
  //   automationName: "XCUITest",
  //   platformName: "iOS",
  //   platformVersion: "12.1",
  //   bundleId: "com.apple.calculator",
  //   udid: "8467f49716d13ea8ca71f3ba7d9d6be9acb29f63"
  // }],
  
  //Server Info for Chrome
  host: 'localhost',

  //Testing Browser Info
  capabilities: [{
    // maxInstances can get overwritten per capability. So if you have an in-house Selenium
    // grid with only 5 firefox instances available you can make sure that not more than
    // 5 instances get started at a time.
    maxInstances: 1,
    browserName: 'chrome',
    proxy: {
      proxyType: 'autodetect'
    }
  }],

  sync: true,

  //Framework Info
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 900000, //10 minutes
  },
  logLevel: 'silent',

  //Report Info
  reporters: ['html-format', 'dot'],
  reporterOptions: {
    htmlFormat: {
      outputDir: './reports/'
    },
  },
};