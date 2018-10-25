module.exports = {
    root: true,
    parser: 'babel-eslint',
    extends: 'airbnb-base',
    env: {
        'es6': true,
        'mocha': true,
    },
    parserOptions: {
        'ecmaVersion': 6,
        // 'sourceType': 'script', //module
    },
    rules: {
        'import/extensions': ['off', 'always', {
            'js': 'never',
        }],
        'indent': [2, 4, {SwitchCase: 1}],
        'comma-dangle': 0,
        'space-before-function-paren': 0,
        'semi': 0,
        'spaced-comment': [2, 'always', {block: {balanced: true}}],
        'no-multiple-empty-lines': [2, {max: 2, maxBOF: 1}],
        'one-var': 0,
        'one-var-declaration-per-line': 0,
        'linebreak-style': 0,
        'no-restricted-syntax': [2, 'WithStatement'],
        'no-prototype-builtins': 0,
        'no-param-reassign': 0,
        'no-use-before-define': 0,
        'no-plusplus': 0,
        'no-bitwise': 0,
        'max-len': [2, 150, 4, {ignoreStrings: true, ignoreTemplateLiterals: true}],
        'no-console': 0,
        'object-curly-spacing': [0, 'never'],
        'object-curly-newline': 0,
        'quote-props': 0,
        'no-script-url': 0,
        'arrow-body-style': 0,
        'camelcase': 1,
        'no-mixed-operators': 0,
        'no-new': 0,
        'no-continue': 0,
        'no-else-return': 0,
        'no-unused-vars': 1,
        'no-extend-native': 0,
        'brace-style': [2, '1tbs', {'allowSingleLine': false}],
        'no-underscore-dangle': 0,
        'class-methods-use-this': 0,
        'prefer-arrow-callback': 1,
        'eol-last': 0,
        'import/no-named-as-default-member': 0,
        'no-multi-spaces': 0,
        'prefer-destructuring': 0,
        'function-paren-newline': 0,
        'no-alert': 2,
        'arrow-parens': 0,
    },
}