import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    files: [ "**/*.{js,mjs,cjs,ts}" ],
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'array-bracket-spacing': [ 'error', 'always', { objectsInArrays: false }],
      'arrow-spacing': 'error',
      'block-spacing': [ 'error', 'always' ],
      'brace-style': [ 'error', '1tbs', { allowSingleLine: true }],
      'comma-dangle': [ 'error', "always-multiline" ],
      'comma-spacing': [ 'error', { after: true }],
      'default-case': 'error',
      'dot-location': [ 'error', 'property' ],
      'eol-last': 'error',
      'eqeqeq': 'warn',
      'handle-callback-err': 'error',
      'indent': [ 'error', 2, { SwitchCase: 1 }],
      'key-spacing': [ 'error', { afterColon: true, mode: 'strict' }],
      'keyword-spacing': 'error',
      'lines-between-class-members': 'error',
      'max-len': [ 'error', { code: 100, ignoreStrings: true, ignorePattern: '`.*`',
        ignoreUrls: true, ignoreComments: true }],
      'no-constant-condition': 'error',
      'no-control-regex': 'off',
      'no-dupe-keys': 'error',
      'no-else-return': 'warn',
      'no-empty': [ 'error', { allowEmptyCatch: true }],
      'no-extra-semi': 'error',
      'no-invalid-this': [ 'error' ],
      'no-label-var': 'error',
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': [ 'error', { max: 1, maxEOF: 0 }],
      'no-shadow': 'error',
      'no-shadow-restricted-names': 'error',
      'no-sparse-arrays': 'error',
      'no-trailing-spaces': 'error',
      'no-undef': 'error',
      'no-unexpected-multiline': 'error',
      'no-unreachable': 'error',
      'no-unused-labels': 'error',
      'no-unused-vars': [ 'error', { args: 'none', destructuredArrayIgnorePattern: '.*' }],
      'no-warning-comments': [ 'warn', { location: 'anywhere', terms: [ 'todo' ]}],
      'object-curly-spacing': [ 'error', 'always', { arraysInObjects: false }],
      'semi': 'error',
      'valid-typeof': 'error',
    },
  },
];
