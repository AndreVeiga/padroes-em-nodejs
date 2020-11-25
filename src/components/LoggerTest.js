const Logger = require('./logger/Logger')

Logger.setConfig({
    appName: 'App Logger '
})

const LoggerTest = () => {
    Logger.log('Dentro do LoggerTest')
}

module.exports = LoggerTest
