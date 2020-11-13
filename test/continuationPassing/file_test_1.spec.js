/**
 * Classe de testes do padrão Continuation Passing
 * @author Elton Veiga
 */
const assert = require('assert');
const pattern = require('../../src/patterns/continuation-passing');

describe('teste para soma', function() {
  it('Testando função soma', function() {
    assert.equal(pattern.soma(2, 3), 5)
  });
});