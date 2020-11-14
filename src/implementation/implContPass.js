/**
 * Classe para padrão Continuation passing
 *
 * @author Elton Veiga
 */

const contPassPatterns = moduleImports('patterns/continuation-passing')

const print = result => console.log(`Valor da soma: ${result}`)

function continuationPassing () {
    const a = 10
    const b = 20
    print(contPassPatterns.somaSincrona(a, b))
    contPassPatterns.somaAssincrona(a, b, print)
}

module.exports = continuationPassing
