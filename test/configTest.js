/**
 * Módulo para configuração dos testes unitários
 * @author Elton Veiga
 */

require('../pathConfig')
const assert = require('assert')
const sinon = require('sinon')
const chai = require('chai')

const sinonChai = require('sinon-chai')
chai.use(sinonChai)
const expect = chai.expect

module.exports = {
    expect,
    assert,
    sinon
}
