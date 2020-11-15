/**
 * Classe de implementação do Constructor
 *
 * @author Elton Veiga
 */

const { Pessoa, PessoaPrivada } = moduleImports('patterns/constructor')

function pattern () {
    const pessoa = new Pessoa('Elton', 'Veiga')
    console.log(pessoa)

    const pessoaPrivada = new PessoaPrivada('André', 'Veiga')
    console.log(pessoaPrivada.getNome())
}

module.exports = pattern
