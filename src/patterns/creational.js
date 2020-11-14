/**
 * Pattern mais simples em javascript.
 * 
 * @author Elton Veiga
 */
const createObj = () =>  new Object()

const addPropritiesFromObject = (attr, value) => {
  const obj = createObj()
  obj[attr] = value
  return obj
} 

module.exports = {
  createObj,
  addPropritiesFromObject
}