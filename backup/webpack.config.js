const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin/typings')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: './src/app.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {// 对模块处理进行配置
    rules: [// use 的三种用法, 字符串, 对象, 数组
      {test: /\.vue$/, use: 'vue-loader'}, // 字符串
      {
        test: /\.css$/, use: ['vue-style-loader', {
          loader: "css-loader",
          options: {
            esModule: false
          }
        }]
      }, // 数组
      {
        test: /\.js$/, use: { // 对象
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'] // 把 es6+ 转换成 es5, 插件的集合, 我们 叫它预设
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      template: "./public/index.html"
    })
  ]
}
