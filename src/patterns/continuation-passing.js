const soma = (a, b) => a + b

const somaSincrona = (a, b) => a + b

const somaAssincrona = (a, b, cb) => cb(soma(a,b))

module.exports = {
  soma,
  somaSincrona,
  somaAssincrona
}