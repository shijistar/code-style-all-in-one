import * as commentsNS from '@eslint-community/eslint-plugin-eslint-comments';
import type { Linter } from 'eslint';
import { unwrap } from '../utils/interop';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const comments = unwrap(commentsNS as any) as any;

const config: Linter.Config[] = [
  {
    name: 'tiny-codes/eslint-comments/recommended',
    plugins: {
      '@eslint-community/eslint-comments': comments,
    },
    rules: comments.configs.recommended.rules,
  },
  {
    name: 'tiny-codes/eslint-comments/rules',
    rules: {
      '@eslint-community/eslint-comments/no-restricted-disable': [
        'error',
        'no-unlimited-disable', // Disallow eslint-disable comments without rule names
      ],
    },
  },
];

export default config;

// module.exports = config;
