global.moduleImports = function (pathSearch) {
  var path = require('path');
  return require(path.resolve(pathSearch));
}