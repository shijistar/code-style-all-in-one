import type { Linter } from 'eslint';
import prettier from './rulesets/prettier';
import recommendedBase from './rulesets/recommended-base';
import typescript from './rulesets/typescript';
import { mergeConfig } from './utils/index';

const config: Linter.Config[] = mergeConfig(recommendedBase, typescript, prettier);

export default config;

// module.exports = config;
