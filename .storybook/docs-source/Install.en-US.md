# Installation

## Install the package

```bash
npm install -D @tiny-codes/code-style-all-in-one
```

Some packages (e.g. `stylelint-scss`) are shipped as `optionalDependencies`. If you do not need them, you can skip them:

```bash
npm install -D @tiny-codes/code-style-all-in-one --no-optional
```

## Requirements

| Dependency | Version                     |
| ---------- | --------------------------- |
| Node.js    | >= 20.10.0                  |
| TypeScript | ^5.0.0 or ^6.0.0 (optional) |
| ESLint     | ^8.0.0 (optional)           |
| Prettier   | ^3.0.0 (optional)           |
| Stylelint  | ^16.0.0 (optional)          |

> All tools are `optional` peer dependencies — install and use only what you need.

## After installing

1. Create `.eslintrc.cjs`, `.prettierrc.mjs`, `.stylelintrc.mjs`, `lint-staged.config.mjs`, `.commitlintrc.mjs` (see "Get Started").
2. Run `npx husky init` to set up git hooks and write the hook scripts shipped by this package (see "Husky & Commitlint").
3. Add the `lint-staged` and commit-msg check scripts to `package.json` if needed.

After the setup, every commit triggers `pre-commit` (lint-staged check & format) and `commit-msg` (commitlint check) via husky.
