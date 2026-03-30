import { defineConfig } from 'father';

export default defineConfig({
  esm: { input: 'src', output: 'es', transformer: 'babel' },
  cjs: { input: 'src', output: 'lib', transformer: 'esbuild' },
  sourcemap: true,
});
