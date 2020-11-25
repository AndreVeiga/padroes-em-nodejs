/**
 * Pattern considerado ora Pattern, ora anti-pattern
 *
 * @author Elton Veiga
 */

const Singleton = (function() {
    function Singleton(args) {
      const _args = args || {}
    }

    let instance
    let _static = {
      getInstance: function (args) {
         if (instance === undefined) {
           instance = new Singleton(args)
         }
         return Object.freeze(instance)
      }
    }
    return Object.freeze(_static)
})()
module.exports = Singleton
