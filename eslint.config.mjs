import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  tseslint.configs.base,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.eslint.json',
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true, fixToUnknown: true }],
      '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'none' }],
    },
  },
  {
    ignores: [
      'es/**',
      'lib/**',
      'eslint/**',
      'stylelint/**',
      'prettier/**',
      'commitlint/**',
      'husky/**',
      'lint-staged/**',
      'demo/**',
    ],
  },
];
