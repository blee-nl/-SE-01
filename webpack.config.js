const HtmlPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.(png|gif|jpg|eot|otf|pdf|svg|ttf|woff|woff2|xlsx)$/,
        use: [
            {
              loader: "file-loader"
            }
          ],
      },
    ]
  },

  plugins: [
    new HtmlPlugin({
      filename: "index.html",
      template: "./public/index.html"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],

  devServer: {
    historyApiFallback: true,
    overlay: true,
    watchOptions: {
      ignored: /node_modules/,
    },
    port: 3000
  }
}