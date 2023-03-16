module.exports = {
    env: {
        es2022: true,
        node: true,
    },

    extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
    plugins: ['prettier'],

    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
            plugins: [
                '@babel/plugin-syntax-import-assertions'
            ],
        },
    },

    rules: {
        'import/extensions': 'off',
    },
}
