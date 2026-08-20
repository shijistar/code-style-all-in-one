import type { Linter } from 'eslint';
import base from './rulesets/base';
import { mergeConfig } from './utils/index';

const config: Linter.Config[] = mergeConfig(base);

export default config;

// module.exports = config;
