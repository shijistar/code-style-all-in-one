import base from './rulesets/base';
import { mergeConfig } from './utils';
import type { Linter } from 'eslint';

const config: Linter.Config[] = mergeConfig(base);

export default config;

module.exports = config;
