const creational = moduleImports('patterns/creational')

/**
 * Modelo com atributos públicos
 * @param {String} nome
 * @param {String} sobrenome
 * @param {String} cpf
 * @param {String} rg
 * @param {String} login
 * @param {String} senha
 * @author Elton Veiga
 */
function Pessoa (nome, sobrenome, cpf, rg, login, senha) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.cpf = cpf
    this.rg = rg
    this.login = login
    this.senha = senha

    Pessoa.prototype.toString = function () {
        return `${this.nome} - ${this.sobrenome}`
    }
}

/**
 * Modelo com atributos privados
 * @param {String} nome
 * @param {String} sobrenome
 * @param {String} cpf
 * @param {String} rg
 * @param {String} login
 * @param {String} senha
 * @author Elton Veiga
 */
function PessoaPrivada (nome, sobrenome, cpf, rg, login, senha) {
    const _nome = nome
    const _sobrenome = sobrenome
    const _cpf = cpf
    const _rg = rg
    const _login = login
    const _senha = senha

    PessoaPrivada.prototype.toString = function () {
        return `${_nome} - ${_sobrenome}`
    }

    this.getNome = () => _nome
    this.getSobreNome = () => _sobrenome
    this.getCpf = () => _cpf
    this.getRG = () => _rg
    this.getLogin = () => _login
    this.getSenha = () => _senha

    const _ = { nome, sobrenome, rg, login }
    const $ = ['nome', 'sobrenome', 'rg', 'login']
    return creational.convertObj(_, $)
}

module.exports = {
    Pessoa,
    PessoaPrivada
}
