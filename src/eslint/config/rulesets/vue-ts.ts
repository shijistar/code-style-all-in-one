import * as typescriptParserNS from '@typescript-eslint/parser';
import * as vueNS from 'eslint-plugin-vue';
import type { Linter } from 'eslint';
import { unwrap } from '../utils/interop';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const vue = unwrap(vueNS as any) as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const typescriptParser = unwrap(typescriptParserNS as any) as any;

const vueRecommended = vue.configs['flat/recommended'];

const config: Linter.Config[] = vueRecommended.map((part: Linter.Config) => {
  // Inject the TypeScript parser into vue-eslint-parser so Vue SFC `<script lang="ts">`
  // blocks are parsed with the TypeScript parser.
  if (part.languageOptions && typeof part.languageOptions.parser === 'object') {
    return {
      ...part,
      languageOptions: {
        ...part.languageOptions,
        parserOptions: {
          ...(part.languageOptions.parserOptions ?? {}),
          parser: typescriptParser,
        },
      },
    };
  }
  return part;
});

export default config;

// module.exports = config;
