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
    attr
        .filter(a => obj[a] === 0 || obj[a])
        .map(a => addPropritiesWithObject(a, obj[a], objReturn))
    return objReturn
}

module.exports = {
    createObj,
    addPropritiesFromObject,
    convertObj
}
