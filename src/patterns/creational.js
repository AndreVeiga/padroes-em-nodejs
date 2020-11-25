/**
 * Pattern mais simples em javascript.
 *
 * @author Elton Veiga
 */

const createObj = () => new Object()

const addPropritiesFromObject = (attr, value) => {
    const obj = createObj()
    obj[attr] = value
    return obj
}
const addPropritiesWithObject = (attr, value, obj = createObj()) => {
    obj[attr] = value
    return obj
}

const convertObj = (obj, attr = []) => {
    const objReturn = createObj()
    obj && attr
        .filter(a => obj[a] !== null && obj[a] !== undefined)
        .map(a => addPropritiesWithObject(a, obj[a], objReturn))
    return objReturn
}

module.exports = {
    createObj,
    addPropritiesFromObject,
    convertObj,
    addPropritiesWithObject
}
