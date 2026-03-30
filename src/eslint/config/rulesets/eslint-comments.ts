import type { ESLint } from 'eslint';

const config: ESLint.ConfigData = {
  extends: ['plugin:@eslint-community/eslint-comments/recommended'],
  rules: {
    '@eslint-community/eslint-comments/no-restricted-disable': [
      'error',
      'no-unlimited-disable', // Disallow eslint-disable comments without rule names
    ],
  },
};

export default config;

module.exports = config;
