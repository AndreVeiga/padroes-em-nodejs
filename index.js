/**
 * Classe inicial para testes das implementações dos padrões em NodeJS
 *
 * @author Elton Veiga
 */
require('./pathConfig')

// const implContPass = moduleImports('implementation/implContPass')
// const implCreational = moduleImports('implementation/implCreational')
// const implConstructor = moduleImports('implementation/implConstructor')
// const implSingleton = moduleImports('implementation/implSingleton')
const LoggerSingleton1 = require('./src/components/LoggerTest')
const LoggerSingleton2 = require('./src/components/LoggerTest2')

// implContPass()
// implCreational()
// implConstructor()
// implSingleton()

LoggerSingleton1()
LoggerSingleton2()
