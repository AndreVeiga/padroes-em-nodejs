global.moduleImports = function (pathSearch, defaultSrc) {
    const path = require('path')
    const pathStart = defaultSrc || 'src'
    return require(path.resolve(`${pathStart}/${pathSearch}`))
}
