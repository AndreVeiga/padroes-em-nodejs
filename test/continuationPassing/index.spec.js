/**
 * Classe de testes do padrão Continuation Passing
 *
 * @author Elton Veiga
 */
const pattern = require('../../src/patterns/continuation-passing')
const { assert, sinon, expect } = require('../configTest')

describe('Teste para o Continuation Passing', function () {
    let a, b, sum

    before(() => {
        a = Math.floor(Math.random() * 100)
        b = Math.floor(Math.random() * 100)
        sum = a + b
    })

    it('Testando função soma syncrona (ok)', () => {
        assert.equal(pattern.somaSincrona(a, b), sum)
    })

    it('Testando função soma syncrona (erro)', () => {
        assert.notEqual(pattern.somaSincrona(a, b), sum + 1)
    })

    it('Testando a chamada da função assyncrona (ok)', () => {
        const spy = sinon.spy(() => {})
        pattern.somaAssincrona(0, 0, spy)
        expect(spy).to.have.been.called
    })

    it('Testando o resultado chamada da função assyncrona (ok)', () => {
        const func = (a, b) => a - b
        assert.notEqual(sum, pattern.somaAssincrona(a, b, func))
    })
})
