const webpack = require('webpack')

module.exports = {
  entry: './index.js',

  output: {
    path: __dirname + '/js/build',
    publicPath: '/',
    filename: 'app.js'
  },

  devServer: {
    contentBase: './js/build'
  }
}