global.moduleImports = function (pathSearch, defaultSrc) {
  var path = require('path')
  const pathStart = defaultSrc ? defaultSrc : 'src'
  return require(path.resolve(`${pathStart}/${pathSearch}`))
}
