/**
 * Classe de teste para o padrão Constructor
 *
 * @author Elton Veiga
 */
const { Pessoa, PessoaPrivada, PessoaPrivadaCongelada } = moduleImports('patterns/constructor')
const { assert } = moduleImports('configTest', 'test/')

describe('Teste para o Constructor', () => {
    it('Testando a @Pessoa com um atributo (nome)', () => {
        const nome = 'test'
        const pessoa = new Pessoa(nome)
        assert.equal(pessoa.nome, nome)
    })

    it('Testando o toString da @Pessoa', () => {
        const nome = 'test'
        const sobrenome = 'teste'
        const pessoa = new Pessoa(nome, sobrenome)
        assert.equal(pessoa.toString(), `${nome} - ${sobrenome}`)
    })

    it('Testando a @Pessoa sem um atributo (cpf)', () => {
        const pessoa = new Pessoa()
        assert.equal(pessoa.cpf, undefined)
    })

    it('Testando a @PessoaPrivada (nome)', () => {
        const nome = 'test'
        const pessoa = new PessoaPrivada(nome)
        assert.equal(pessoa.getNome(), nome)
    })

    it('Testando o toString da @PessoaPrivada', () => {
        const nome = 'test'
        const sobrenome = 'test'
        const pessoa = new PessoaPrivada(nome, sobrenome)
        assert.equal(pessoa.toString(), `${nome} - ${sobrenome}`)
    })

    it('Testando @PessoaPrivada com todos atributos', () => {
        const nome = 'nome'
        const sobrenome = 'sobrenome'
        const cpf = 'cpf'
        const rg = 'rg'
        const login = 'login'
        const senha = 'senha'
        const pessoa = new PessoaPrivada(nome, sobrenome, cpf, rg, login, senha)

        assert.equal(pessoa.getNome(), nome)
        assert.equal(pessoa.getSobreNome(), sobrenome)
        assert.equal(pessoa.getCpf(), cpf)
        assert.equal(pessoa.getRg(), rg)
        assert.equal(pessoa.getLogin(), login)
        assert.equal(pessoa.getSenha(), senha)
    })

    it('Testando o @PessoaPrivadaCongelada', () => {
        const nome = 'test'
        const pessoa = new PessoaPrivadaCongelada(nome)
        assert.equal(pessoa.nome, nome)
    })
})
