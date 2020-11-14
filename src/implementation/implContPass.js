/**
 * Classe para padrão Continuation passing
 * 
 * @author Elton Veiga
 */
const continuationPassing = require('../patterns/continuation-passing')
const creationalPattern = require('../patterns/creational')

const print = result => console.log(`Valor da soma: ${result}`)

function implementationSoma () {
  const a = 10
  const b = 20
  print(continuationPassing.somaSincrona(a, b))
  continuationPassing.somaAssincrona(a, b, print)
}

function creational () {
  const obj = creationalPattern.createObj()
  console.log('Objeto vazio: ' + obj)
  const pessoa = creationalPattern.addPropritiesFromObject('nome', 'João')
  console.log('Objeto com atributos: ' + pessoa['nome'])
} 

module.exports = creational