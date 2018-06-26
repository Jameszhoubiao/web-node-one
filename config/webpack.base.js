const path = require('path')
const glob = require('globby')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = function (dir) {
  return path.join(__dirname, '..', dir)
}
const viewDir = resolve('src/view')
const distDir = resolve('dist')
const assetsDir = resolve('src')

const jsEntry = (() =>{
  const obj = {}
  const files = glob.sync([ 'js/conf/**/!(_*|source)/!(_*).js' ], { cwd: assetsDir })
  files.forEach(file =>{
    const entry = file.split('/')[2]
    if(entry) {
      obj[entry] = path.join(assetsDir,file)
    }
  })
  return obj
})()

const pageEntry = () => {

}

const pages = glob.sync(['**/!(_*|source)/!(_*).html'], {cwd: viewDir}).map( page =>{
  const chunk = [page.split('/')[0]]
  return new HtmlWebpackPlugin ({
    filename: path.join('view', page),
    template: path.join(__dirname, '..','src/view/',page),
    inject: true,
    chunks: chunk
  })
})

module.exports = {
  entry: jsEntry,
  output: {
    path: resolve('dist'),
    publicPath: "/",
    filename: "js/[name].[hash:6].js"
  },
  plugins: [
    ...pages
  ]
}