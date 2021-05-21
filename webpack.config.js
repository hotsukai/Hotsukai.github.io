const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "main.js"),
  output: {
    filename: "bundle.js",
    publicPath: path.resolve(__dirname, "docs/"),
    path: path.resolve(__dirname, "docs/js/"),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          hotReload: true,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.stylus$/,
        use: ["vue-style-loader", "css-loader", "stylus-loader"],
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [new VueLoaderPlugin()],
  // FIXME HTMLや画像はDevサーバーではコピーされないので, write-file-webpack-pluginを検討する
  devServer: {
    contentBase: path.resolve(__dirname, "docs/"),
    publicPath: path.resolve(__dirname, "/js/"),
    open: true,
    hot: true,
  },
};
