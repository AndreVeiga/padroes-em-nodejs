/**
 * Classe de testes do padrão Continuation Passing
 * @author Elton Veiga
 */
const assert = require('assert')
const pattern = require('../../src/patterns/continuation-passing')

describe('Teste para o Continuation Passing', function() {
  it('Testando função soma syncrona', () => assert.equal(pattern.soma(2, 3), 5))

  it('Testando função soma assyncrona', () => {
      
  })
})