import * as babelParserNS from '@babel/eslint-parser';
import * as js from '@eslint/js';
import * as importPlugin from 'eslint-plugin-import';
import * as globalsNS from 'globals';
import type { Linter } from 'eslint';
import { existsSync } from 'node:fs';
import { unwrap } from '../utils/interop';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const babel = unwrap(babelParserNS as any) as typeof babelParserNS;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const importPluginFix = unwrap(importPlugin as any);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const jsFix = unwrap(js as any) as typeof js;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalsFix = unwrap(globalsNS as any) as Record<string, Record<string, boolean>>;

const config: Linter.Config[] = [
  {
    name: 'tiny-codes/base/recommended',
    ...jsFix.configs.recommended,
  },
  importPluginFix.flatConfigs.recommended,
  {
    name: 'tiny-codes/base/language-options',
    languageOptions: {
      parser: babel,
      parserOptions: {
        sourceType: 'module',
        requireConfigFile: false,
        allowImportExportEverywhere: true,
        ecmaFeatures: {
          jsx: true,
        },
        babelOptions: {
          babelrc: false,
          configFile: false,
          browserslistConfigFile: false,
          caller: {
            supportsTopLevelAwait: true,
          },
        },
        project: existsSync('./tsconfig.eslint.json') ? './tsconfig.eslint.json' : undefined,
      },
      globals: {
        ...(globalsFix.browser ?? {}),
        ...(globalsFix.node ?? {}),
        ...(globalsFix.jest ?? {}),
        ...(globalsFix.es2021 ?? {}),
      },
    },
  },
];

export default config;

// module.exports = config;
