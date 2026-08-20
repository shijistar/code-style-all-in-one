import * as tseslintNS from '@typescript-eslint/eslint-plugin';
import * as typescriptParserNS from '@typescript-eslint/parser';
import * as importPlugin from 'eslint-plugin-import';
import type { ESLint, Linter } from 'eslint';
import { createRequire } from 'node:module';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { unwrap } from '../utils/interop';

/* eslint-disable @typescript-eslint/no-require-imports -- require.resolve() is
   required to obtain absolute module paths for the import/resolver settings. */

const resolve =
  typeof import.meta === 'object' && import.meta.url
    ? (spec: string) => createRequire(import.meta.url).resolve(spec)
    : (spec: string) => require.resolve(spec);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const tseslint = unwrap(tseslintNS as any);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const typescriptParser = unwrap(typescriptParserNS as any) as typeof typescriptParserNS;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const importPluginFix = unwrap(importPlugin as any);

let currentDir: string;

if (typeof require === 'function') {
  currentDir = __dirname;
  try {
    require('@rushstack/eslint-patch/modern-module-resolution');
  } catch {
    /* silent failure */
  }
} else {
  currentDir = dirname(fileURLToPath(import.meta.url));
}

const tsConfigFiles = ['./tsconfig.eslint.json', './tsconfig.json', join(currentDir, 'tsconfig.eslint.json')].filter(
  (tsConfigFile): tsConfigFile is string => existsSync(tsConfigFile),
);

const tsFilePatterns = ['**/*.ts', '**/*.tsx', '**/*.d.ts', '**/*.mts', '**/*.cts'];

const tseslintConfigs = (tseslint as unknown as { configs: Record<string, { rules: Record<string, unknown> }> })
  .configs;

const config: Linter.Config[] = [
  {
    name: 'tiny-codes/typescript/resolver-settings',
    settings: {
      'import/parsers': {
        [resolve('@typescript-eslint/parser')]: ['.ts', '.mts', '.cts', '.tsx', '.d.ts'],
      },
      'import/resolver': {
        [resolve('eslint-import-resolver-node')]: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        [resolve('eslint-import-resolver-typescript')]: {
          alwaysTryTypes: true,
        },
      },
    },
  },
  importPluginFix.flatConfigs.typescript as Linter.Config,
  {
    name: 'tiny-codes/typescript/strict',
    files: tsFilePatterns,
    plugins: {
      '@typescript-eslint': tseslint as unknown as ESLint.Plugin,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: tsConfigFiles[0],
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
  },
  {
    name: 'tiny-codes/typescript/rules',
    files: tsFilePatterns,
    rules: {
      ...(tseslintConfigs.strict?.rules ?? {}),
      ...(tseslintConfigs.stylistic?.rules ?? {}),
      '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'none' }], // Disallow unused variables
      '@typescript-eslint/consistent-type-imports': ['error'], // Enforce consistent imports
      '@typescript-eslint/consistent-type-exports': [
        // Enforce consistent exports
        'error',
        {
          fixMixedExportsWithInlineTypeSpecifier: false,
        },
      ],
      '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true, fixToUnknown: true }], // Disallow usage of the any type
      '@typescript-eslint/no-non-null-assertion': 'off', // Disallow non-null assertion
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          functions: false,
          classes: true,
          variables: true,
          allowNamedExports: false,
          enums: true,
          typedefs: false,
          // ignoreTypeReferences: true,
        },
      ], // Disallow using variables before they are defined
      '@typescript-eslint/ban-ts-comment': [
        // Bans `@ts-***` comments from being used or requires descriptions after directive
        'error',
        {
          'ts-nocheck': true,
          'ts-check': false,
          'ts-ignore': true,
          'ts-expect-error': {
            descriptionFormat: '^:\\s(因为|由于|because( of)?|since|TS\\d{4}).+$',
          },
          minimumDescriptionLength: 4,
        },
      ],
    },
  },
];

export default config;

// module.exports = config;
