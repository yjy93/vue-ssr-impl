const base = require('./webpack.config');
const {merge} = require('webpack-merge');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(base, {
  entry: {
    client: path.resolve(__dirname, '../src/client-entry.js')
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index2.html",
      template: path.resolve(__dirname, '../public/index.html')
    })
  ]
})

