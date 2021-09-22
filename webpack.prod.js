const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config");
const { EnvironmentPlugin } = require("webpack");

const devConfig = {
  mode: "production",
  plugins: [
    new EnvironmentPlugin({
      API: "http://prod.local.com",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
