import * as tinyCodeReactHooksNS from '@tiny-codes/eslint-plugin-react-hooks';
import type { Linter } from 'eslint';
import { unwrap } from '../utils/interop';
import reactBase from './react-base';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const tinyCodeReactHooks = unwrap(tinyCodeReactHooksNS as any) as any;

export const config: Linter.Config[] = [
  ...reactBase,
  {
    name: 'react-hooks',
    ...tinyCodeReactHooks.configs.flat.recommended,
  },
  {
    name: 'react-hooks/overrides',
    rules: {
      'react/no-array-index-key': ['error'], // Prevent using array index in keys
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 0,
      'react/jsx-uses-react': 0,
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
