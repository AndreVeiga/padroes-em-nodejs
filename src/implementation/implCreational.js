/**
 * Classe para o padrão Creational
 *
 * @author Elton Veiga
 */

const creationalPattern = moduleImports('patterns/creational')

function creational () {
    const obj = creationalPattern.createObj()
    console.log('Objeto vazio: ' + obj)
    const pessoa = creationalPattern.addPropritiesFromObject('nome', 'João')
    console.log('Objeto com atributos: ' + pessoa.nome)
}

module.exports = creational
