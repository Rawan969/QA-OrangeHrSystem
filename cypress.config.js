const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  //projectId: "82r6wx",
  e2e: {
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    //baseUrl: "https://conduit.productionready.io",
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config)
      allureWriter(on, config);
      return config;
    },
    env: {
      allureReuseAfterSpec: true,
      download_dir: "./cypress/downloads",
      allure: true,
      allureResulsPath: "allure-results",
      snapshotOnly: true,
      
    },

    videosFolder: "allure-results/",
    screenshotOnRunFailure: true,
  },
});
