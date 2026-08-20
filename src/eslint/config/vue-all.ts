import type { Linter } from 'eslint';
import others from './rulesets/others';
import { mergeConfig } from './utils/index';
import vueTS from './vue-typescript';

const config: Linter.Config[] = mergeConfig(vueTS, others);

export default config;

// module.exports = config;
