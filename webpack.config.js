const path = require("path");
const DependencyExtractionWebpackPlugin = require("@wordpress/dependency-extraction-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production", //production,development
  entry: {
    main: path.resolve(__dirname, "src/Dashboard"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-react"] },
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".css"],
  },
  //loaders

  //plugins
  plugins: [
    new DependencyExtractionWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css",
    }),
  ],
};
