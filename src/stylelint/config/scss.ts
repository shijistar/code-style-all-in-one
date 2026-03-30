import type { Config } from 'stylelint';
import base from './index';

const config = {
  ...base,
  extends: [...(base.extends ?? []), 'stylelint-config-standard-scss'],
} satisfies Config;

export default config;

module.exports = config;
