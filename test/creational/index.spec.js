/**
 * Classe de testes do padrão Creational
 *
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

    it('Testando a função convertObj (1)', () => {
        const obj = { name: 'test', test: true }
        const attr = ['name']
        const result = pattern.convertObj(obj, attr)
        assert.equal(obj.name, result[attr[0]])
    })

    it('Testando a função convertObj (2)', () => {
        const obj = { name: 'test', test: true }
        const result = pattern.convertObj(obj)
        assert.equal(result.name, undefined)
    })

    it('Testando a função addPropritiesWithObject (1)', () => {
        const value = 'potato'
        const result = pattern.addPropritiesWithObject('test', value, {})
        assert.equal(result.test, value)
    })

    it('Testando a função addPropritiesWithObject (2)', () => {
        const value = 'potato'
        const result = pattern.addPropritiesWithObject('test', value)
        assert.equal(result.test, value)
    })
})
