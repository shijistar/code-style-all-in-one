import prettier from './rulesets/prettier';
import { mergeConfig } from './utils';
import type { Linter } from 'eslint';

const config: Linter.Config[] = mergeConfig(prettier);

export default config;

module.exports = config;
