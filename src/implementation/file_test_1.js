const continuationPassing = require('../patterns/continuation-passing')

const print = result => console.log(`Valor da soma: ${result}`)

function implementationSoma () {
  const a = 10
  const b = 20
  print(continuationPassing.soma(a, b))
  print(continuationPassing.somaSincrona(a, b))

  continuationPassing.somaAssincrona(a, b, print)
}

module.exports = implementationSoma