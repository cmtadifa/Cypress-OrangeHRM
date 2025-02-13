const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   support: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },


  module.exports = defineConfig({
    // defaultCommandTimeout:15000,
    // pageLoadTimeout: 30000,
    // reporter: 'cypress-mochawesome-reported',
    defaultCommandTimeout: 10000,
    e2e: {
      // Define the folder where Cypress looks for test files
      specPattern: [ 
        'cypress/integrations',
        // 'cypress/pageObjects', // This includes all spec files within cypress folder and its subfolders
        // 'cypress/support' // This includes all spec files within cypress folder and its subfolders
      ],
      testIsolation: false,
      // You can also explicitly specify a different folder or pattern
      // specPattern: 'cypress/tests/**/*.js',
      baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', // Set the base URL if needed
      // Set Chrome as the default browser
      browser: 'chrome',
      // chromeWebSecurity: false
    },
  });




    // module.exports = {
    //   e2e: {
    //     // Specify the pattern for test files
    //     specPattern: [
    //       'cypress/pageObjects/**/*.js', // Include all JS files in pageObjects folder
    //       'cypress/support/TCM/TCMsaucedemo/Login/**/*.js' // Include all JS files in the specific support subfolder
    //     ],
    //     // Other options
    //     baseUrl: 'http://your-app-url', // Set the base URL if needed
    //   },
    // };