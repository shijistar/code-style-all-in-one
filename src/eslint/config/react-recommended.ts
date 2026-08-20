import type { Linter } from 'eslint';
import prettier from './rulesets/prettier';
import react from './rulesets/react';
import reactQuery from './rulesets/react-query';
import recommendedBase from './rulesets/recommended-base';
import { mergeConfig } from './utils/index';

const config: Linter.Config[] = mergeConfig(recommendedBase, react, reactQuery, prettier);

export default config;

// module.exports = config;
