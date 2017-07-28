var webpack = require('webpack')
var path = require('path')

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, './frontend/nutrichain.jsx'),
  output: {
    path: path.resolve(__dirname, './assets/js'),
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  node: {
    fs: "empty"
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["*", ".js", ".jsx" ]
  }
};
