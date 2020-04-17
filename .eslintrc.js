const OFF = 0;
const ERROR = 2;

module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true,
        mocha: true,
    },
    extends: ['airbnb-base', 'prettier'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        BigInt: 'readonly',
    },
    parser: 'babel-eslint',
    rules: {
        'consistent-return': OFF,
        'func-names': OFF,
        'no-bitwise': OFF,
        'no-console': OFF,
        'no-continue': OFF,
        'no-empty': OFF,
        'no-param-reassign': OFF,
        'no-plusplus': OFF,
        'no-restricted-syntax': OFF,
        'no-unused-expressions': OFF,
        'no-unused-vars': OFF,
        'no-use-before-define': [ERROR, { functions: false }],
    },
    overrides: [
        {
            files: ['{test,benchmark}/**/*.js'],
            rules: {
                'import/no-extraneous-dependencies': OFF,
            },
        },
    ],
};
