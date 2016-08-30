'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const devtool = 'source-map'

const entry = {
  app: './src/basic.js'
}

const output = {
  path: '../src/main/webapp/',
  filename: '[name].js'
}

const loaders = [{
  test: /.js$/,
  exclude: /node_modules/,
  loader: 'babel'
}, {
  test: /.css$/,
  loader: ExtractTextPlugin.extract('style', 'css')
}, {
  test: /.html$/,
  loader: 'html'
}]

const plugins = [
  new HtmlWebpackPlugin({
    inject: 'head',
    template: './static/index.html'
  }),
  new ExtractTextPlugin('[name].css')
]

module.exports = {
  devtool,
  entry,
  output,
  module: {
    loaders
  },
  plugins
}
