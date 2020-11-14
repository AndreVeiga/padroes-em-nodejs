/**
 * Classe de testes do padrão Creational
 * @author Elton Veiga
 */

const pattern = moduleImports('patterns/creational')
const { assert } = moduleImports('configTest', 'test/')

describe('Teste para o Creational', function () {
    let attr, value
    before(() => {
        attr = 'ABC' + Math.random()
        value = 'XYZ' + Math.random()
    })

    it('Testando criação de objetos vazios', () => {
        const result = pattern.createObj()
        assert.equal(result.name, undefined)
    })

    it('Testando criação de objetos com propriedades', () => {
        const result = pattern.addPropritiesFromObject(attr, value)
        assert.equal(result[attr], value)
    })
})
