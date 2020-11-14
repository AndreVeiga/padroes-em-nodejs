module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true
    },
    extends: [
        'standard'
    ],
    parserOptions: {
        ecmaVersion: 2018
    },
    rules: {
        'no-undef': 0,
        'no-unused-expressions': 0,
        'no-new-object': 0,
        indent: ['error', 4]
    }
}
