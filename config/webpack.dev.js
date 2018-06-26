var config = require('./webpack.base.js')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var path = require('path')
config.mode = 'development'
var compiler = webpack(config)

var server =new WebpackDevServer(compiler, {
  hot: true,
  inline: true,
  contentBase: path.join(__dirname, '../dist')
})


server.listen(9000)

// module.exports = webpackMerge(config, {
//   mode: 'development',
//   devServer: {
//     port:8090,
//     contentBase: path.join(__dirname, '../src'),
//     hot: true
//   }
// })