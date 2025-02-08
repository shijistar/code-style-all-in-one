const eslintComments = require('./eslint-comments');
/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: ['plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended'],
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/no-array-index-key': ['error'], // Prevent using array index in keys
    'react-hooks/exhaustive-deps': ['error'], // Checks effect dependencies
    'eslint-comments/no-restricted-disable': [
      ...eslintComments.rules['@eslint-community/eslint-comments/no-restricted-disable'],
      'react-hooks/exhaustive-deps', // Disallow disabling rules with comments
    ],
  },
};
