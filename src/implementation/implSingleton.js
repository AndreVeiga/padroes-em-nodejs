/**
 * Classe para o padrão Singleton
 *
 * @author Elton Veiga
 */

const pattern = moduleImports('patterns/singleton')

const a = pattern.getInstance('b')

module.exports = () => {
    console.log(a)
}
