module.exports = {

    root: true,

    plugins: [
        'prettier'
    ],

    extends: [
        'eslint:recommended',
        'prettier'
    ],

    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            extends: [
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-type-checked'
            ],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint']
        }
    ]

}
