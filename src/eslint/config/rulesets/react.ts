import * as reactNS from 'eslint-plugin-react';
import * as reactHooksNS from 'eslint-plugin-react-hooks';
import type { Linter } from 'eslint';
import { unwrap } from '../utils/interop';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const react = unwrap(reactNS as any) as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reactHooks = unwrap(reactHooksNS as any) as any;

const config: Linter.Config[] = [
  {
    name: 'tiny-codes/react/language-options',
    languageOptions: {
      globals: {
        JSX: 'readonly',
      },
    },
  },
  {
    name: 'tiny-codes/react/jsx-runtime',
    ...react.configs.flat['jsx-runtime'],
  },
  {
    name: 'tiny-codes/react/recommended',
    ...react.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    name: 'tiny-codes/react/hooks',
    ...reactHooks.configs.flat['recommended-latest'],
  },
  {
    name: 'tiny-codes/react/rules',
    rules: {
      'react/no-array-index-key': ['error'], // Prevent using array index in keys
      'react-hooks/exhaustive-deps': ['error'], // Checks effect dependencies
      '@eslint-community/eslint-comments/no-restricted-disable': [
        'error',
        'react-hooks/exhaustive-deps', // Disallow disabling rules with comments
      ],
    },
  },
];

export default config;

// module.exports = config;
