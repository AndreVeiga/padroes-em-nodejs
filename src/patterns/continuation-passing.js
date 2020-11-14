const somaSincrona = (a, b) => a + b

const somaAssincrona = (a, b, cb) => cb(somaSincrona(a,b))

module.exports = {
  somaSincrona,
  somaAssincrona
}