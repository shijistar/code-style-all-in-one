import type { Linter } from 'eslint';
import prettier from './rulesets/prettier';
import recommendedBase from './rulesets/recommended-base';
import vueTS from './rulesets/vue-ts';
import { mergeConfig } from './utils/index';

const config: Linter.Config[] = mergeConfig(recommendedBase, vueTS, prettier);

export default config;

// module.exports = config;
