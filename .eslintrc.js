module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['airbnb', 'prettier', 'prettier/react'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'no-underscore-dangle': 'off',
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.jsx', 'js'] },
        ],
        'import/prefer-default-export': 'off',
        'no-param-reassign': 'off',
        'no-console': ['error', { allow: ['tron'] }],
    },
};


