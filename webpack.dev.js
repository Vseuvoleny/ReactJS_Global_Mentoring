const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config");
const { EnvironmentPlugin } = require("webpack");

const devConfig = {
  mode: "development",
  plugins: [
    new EnvironmentPlugin({
      API: "http://dev.local.com",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
