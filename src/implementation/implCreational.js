/**
 * Classe para o padrão Creational
 *
 * @author Elton Veiga
 */

const pattern = moduleImports('patterns/creational')

const creationalSimpl = isReturn => {
    if (isReturn) {
        return
    }

    const obj = pattern.createObj()
    console.log('Objeto vazio: ' + obj)
    const pessoa = pattern.addPropritiesFromObject('nome', 'João')
    console.log('Objeto com atributos: ' + pessoa.nome)
}

function creational () {
    creationalSimpl(true)

    const obj = {
        name: 'ABC',
        age: 0,
        salary: 3.0001,
        development: false
    }

    const attr = ['name', 'age', 'idade', 'salary', 'development']

    const objReturned = pattern.convertObj(obj, attr)

    Object.keys(objReturned).map(e => console.log(objReturned[e]))
}

module.exports = creational
