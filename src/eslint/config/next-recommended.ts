import type { Linter } from 'eslint';
import next from './rulesets/next';
import prettier from './rulesets/prettier';
import reactQuery from './rulesets/react-query';
import recommendedBase from './rulesets/recommended-base';
import { mergeConfig } from './utils/index';

const config: Linter.Config[] = mergeConfig(recommendedBase, next, reactQuery, prettier);

export default config;

// module.exports = config;
