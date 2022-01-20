// @ts-check

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssConfig = require("./postcss.config.js");

const NODE_ENV = process.env.NODE_ENV || "development";

const webpackConfig = {
  mode: NODE_ENV,
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index.js",
  },
  module: {
    rules: [
      {
        parser: {
          amd: false,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      { test: /\.md$/, use: "raw-loader" },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: { postcssOptions: postcssConfig },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        loader: "url-loader",
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./style.css",
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
};

if ("production" !== webpackConfig.mode) {
  webpackConfig.devtool = process.env.SOURCEMAP || "source-map";
}

module.exports = webpackConfig;
