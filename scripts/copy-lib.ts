import { cpSync, rmSync } from 'fs';
import { resolve } from 'path';

const libFolders = ['commitlint', 'eslint', 'lint-staged', 'prettier', 'stylelint'];

libFolders.forEach((dir) => {
  rmSync(resolve('./', dir), { recursive: true, force: true });
  cpSync(resolve('./lib', dir), resolve('./', dir), { recursive: true, force: true });
});
