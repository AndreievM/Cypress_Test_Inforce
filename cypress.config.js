const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    viewportWidth: 1600,
    viewportHeight: 900,
    setupNodeEvents(on, config) {
      on("task", {
        generateData() {
          return { 
            homePageUrl: 'saucedemo.com',
            loggedInUrl: 'saucedemo.com/inventory',
            randomUsername: 'userQWERTY',
            lockedOutUsername: 'locked_out_user',
            validUsername: 'standard_user',
            randomPassword: 'qwertyPASSWORD',
            validPassword:'secret_sauce'
          };
        }
      });
    },
  },
})
