const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const base = require("./webpack.config.base.js");
module.exports = {
  ...base, // 把base的所有属性搞过来
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  mode: "development",
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};