import * as vueNS from 'eslint-plugin-vue';
import type { Linter } from 'eslint';
import { unwrap } from '../utils/interop';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const vue = unwrap(vueNS as any) as any;

const config: Linter.Config[] = vue.configs['flat/recommended'];

export default config;

// module.exports = config;
