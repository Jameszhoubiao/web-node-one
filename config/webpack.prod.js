var webpackMerge = require('webpack-merge')
var config = require('./webpack.base.js')

module.exports =webpackMerge(config, {
  mode:'production'
})