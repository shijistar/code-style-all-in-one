import * as reactNS from 'eslint-plugin-react';
import type { Linter } from 'eslint';
import { unwrap } from '../utils/interop';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const react = unwrap(reactNS as any) as any;

const baseConfig: Linter.Config[] = [
  {
    name: 'react/language-options',
    languageOptions: {
      globals: {
        JSX: 'readonly',
      },
    },
  },
  {
    name: 'react/jsx-runtime',
    ...react.configs.flat['jsx-runtime'],
  },
  {
    name: 'react/recommended',
    ...react.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];

export default baseConfig;

// module.exports = config;
