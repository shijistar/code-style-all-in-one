import * as nextConfigNS from 'eslint-config-next/core-web-vitals';
import type { Linter } from 'eslint';
import { unwrap } from '../utils/interop';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const nextConfig = unwrap(nextConfigNS as any) as any;

const config: Linter.Config[] = nextConfig;

export default config;

module.exports = config;
