import injectNextDevServer from "@cypress/react/dist/cypress-react.browser";
const config = (on, c) => {
  if (c.testingType === "component") {
    injectNextDevServer(on, c);
  }
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require("@cypress/code-coverage/task")(on, c);

  // on("file:preprocessor", coverageBabelRC);
  return c;
};

export default config;
