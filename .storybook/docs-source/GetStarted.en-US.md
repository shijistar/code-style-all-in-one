# Get Started

The minimal setup below gives your project a unified code style right away: ESLint for code quality, Prettier for formatting, Stylelint for styles, and Husky + Lint-staged + Commitlint to guard every commit.

## 1. ESLint

Create `.eslintrc.cjs` in the project root:

```js
module.exports = {
  extends: ['@tiny-codes/code-style-all-in-one/eslint/config/recommended'],
};
```

## 2. Prettier

Create `.prettierrc.mjs`:

```js
export { default } from '@tiny-codes/code-style-all-in-one/prettier';
```

## 3. Stylelint

Create `.stylelintrc.mjs`:

```js
export { default } from '@tiny-codes/code-style-all-in-one/stylelint';
```

> For Less / SCSS projects use `@tiny-codes/code-style-all-in-one/stylelint/less` or `.../stylelint/scss` instead (see "Stylelint Configuration").

## 4. Husky hooks

Initialize husky and write the hooks shipped by this package:

```bash
npx husky init
```

Create `.husky/pre-commit`:

```bash
#!/usr/bin/env sh
. "node_modules/@tiny-codes/code-style-all-in-one/husky/hooks/pre-commit"
```

Create `.husky/commit-msg`:

```bash
#!/usr/bin/env sh
. "node_modules/@tiny-codes/code-style-all-in-one/husky/hooks/commit-msg"
```

## 5. Lint-staged

Create `lint-staged.config.mjs`:

```js
export { default } from '@tiny-codes/code-style-all-in-one/lint-staged';
```

## 6. Commitlint

Create `.commitlintrc.mjs`:

```js
export { default } from '@tiny-codes/code-style-all-in-one/commitlint';
```

## Done

From now on, every `git commit`:

1. The `pre-commit` hook runs ESLint, Stylelint and Prettier on staged files via lint-staged;
2. The `commit-msg` hook validates your commit message against the Conventional Commits spec via commitlint.
