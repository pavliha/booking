const path = require('path')
const common = require('./webpack.config.js')
const merge = require('webpack-merge')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    host: '0.0.0.0',
    port: 4000,
    hot: true,
    historyApiFallback: true,
  },
})
