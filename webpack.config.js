const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/js"),
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: "vue-loader" },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.styl$/,
        use: ["vue-style-loader", "stylus-loader", "css-loader"],
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      'vue$': "vue/dist/vue.esm.js",
    },
  },
  plugins: [new VueLoaderPlugin()],
  devServer: {
    contentBase: "public",
    contentBase: path.resolve(__dirname, "public"),
    open: true,
  },
};
