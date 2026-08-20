import next from './next-recommended';
import others from './rulesets/others';
import { mergeConfig } from './utils';
import type { Linter } from 'eslint';

const config: Linter.Config[] = mergeConfig(next, others);

export default config;

module.exports = config;
