import react from './react-recommended';
import others from './rulesets/others';
import { mergeConfig } from './utils';

const config = mergeConfig(react, others);

export default config;

module.exports = config;
