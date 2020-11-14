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
        "no-undef": true,
        indent: ['error', 4]
    }
}
