const path = require("path");

module.exports = async ({ config }) => {
  config.resolve.alias[".storybook"] = path.resolve(__dirname, "./");
  return config;
};
