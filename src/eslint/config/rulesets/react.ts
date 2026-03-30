import type { ESLint } from 'eslint';
import eslintComments from './eslint-comments';

const restrictedDisableRule = eslintComments.rules?.[
  '@eslint-community/eslint-comments/no-restricted-disable'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
] as any;

const config: ESLint.ConfigData = {
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
    '@eslint-community/eslint-comments/no-restricted-disable': [
      ...restrictedDisableRule,
      'react-hooks/exhaustive-deps', // Disallow disabling rules with comments
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ] as any,
  },
};

export default config;

module.exports = config;
