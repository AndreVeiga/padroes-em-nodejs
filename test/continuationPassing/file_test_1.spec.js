/**
 * Classe de testes do padrão Continuation Passing
 * @author Elton Veiga
 */
const assert = require('assert')
const sinon = require('sinon')
const chai = require('chai')
const sinonChai = require('sinon-chai')
chai.use(sinonChai)
const pattern = require('../../src/patterns/continuation-passing')
const expect = chai.expect

describe('Teste para o Continuation Passing', function() {
  it('Testando função soma syncrona (ok)', 
      () => assert.equal(pattern.somaSincrona(1, 1), 2))

  it('Testando função soma syncrona (erro)', 
      () => assert.notEqual(pattern.somaSincrona(1, 1), 1))


  it('Testando função soma assyncrona', () => {
      let a = 1
      const spy = sinon.spy(b => a = b)
      pattern.somaAssincrona(0, 0, spy)
      assert.equal(a, 0)
      expect(spy).to.have.been.called
  })
})