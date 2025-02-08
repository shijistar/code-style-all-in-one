/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: ['plugin:@eslint-community/eslint-comments/recommended'],
  rules: {
    '@eslint-community/eslint-comments/no-restricted-disable': [
      'error',
      'no-unlimited-disable', // Disallow eslint-disable comments without rule names
    ],
  },
};
