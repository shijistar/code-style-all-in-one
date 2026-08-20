import prettier from './rulesets/prettier';
import recommendedBase from './rulesets/recommended-base';
import vue from './rulesets/vue';
import { mergeConfig } from './utils';
import type { Linter } from 'eslint';

const config: Linter.Config[] = mergeConfig(recommendedBase, vue, prettier);

export default config;

module.exports = config;
