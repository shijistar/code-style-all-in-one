import next from './next-recommended';
import others from './rulesets/others';
import { mergeConfig } from './utils';

const config = mergeConfig(next, others);

export default config;

module.exports = config;
