import cypressCoverageTask from "@cypress/code-coverage/task";
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cypressCoverageTask(on, config);
      return config;

      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    specPattern: "test/cypress/e2e/**/*.test.{js,jsx,ts,tsx}",
    supportFile: "test/cypress/support/e2e.ts",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    setupNodeEvents(on, config) {
      cypressCoverageTask(on, config);
      return config;

      // implement node event listeners here
    },
    supportFile: "test/cypress/support/component.ts",
    specPattern: "test/cypress/component/**/*.test.{js,jsx,ts,tsx}",
    indexHtmlFile: "test/cypress/support/component-index.html",
    video: false,
    screenshotsFolder: "test/cypress/scheenshots",
    fixturesFolder: "test/cypress/fixtures",
  },
});
