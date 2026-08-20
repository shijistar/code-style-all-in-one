import others from './rulesets/others';
import vueTS from './vue-typescript';
import { mergeConfig } from './utils';
import type { Linter } from 'eslint';

const config: Linter.Config[] = mergeConfig(vueTS, others);

export default config;

module.exports = config;
