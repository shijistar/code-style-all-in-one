# FAQ

## 1. My project does not use TypeScript. Can I still use this?

Yes. The recommended presets target TypeScript-enabled projects, but you can build your own config by combining the basic presets:

```js
// .eslintrc.cjs
module.exports = {
  extends: [
    '@tiny-codes/code-style-all-in-one/eslint/config/base',
    '@tiny-codes/code-style-all-in-one/eslint/config/prettier',
  ],
};
```

## 2. Why must the prettier preset come last?

Because its job is to turn off every ESLint rule that conflicts with Prettier. Only when it is last can it override the conflicting rules enabled by the earlier presets. With the wrong order, formatting may not match the lint rules.

## 3. Install fails or stylelint-scss is missing?

`stylelint-scss` and friends are shipped as optionalDependencies. If optional dependencies were skipped at install time (e.g. `--no-optional`), install it manually when using the SCSS config:

```bash
npm install -D stylelint-scss
```

## 4. pre-commit checks are slow?

lint-staged only checks **staged files** incrementally, so more staged files mean slower commits. Split large changes into smaller commits, or run a full check in CI in parallel.

## 5. How do I turn off a rule?

Override it in your project config. For example in `.eslintrc.cjs`:

```js
module.exports = {
  extends: ['@tiny-codes/code-style-all-in-one/eslint/config/recommended'],
  rules: {
    'no-console': 'off',
  },
};
```

Same for Stylelint: override in the `rules` object of `.stylelintrc.mjs`.

## 6. commitlint rejects my commit message?

Make sure it follows Conventional Commits:

```
<type>(<scope>): <subject>
```

e.g. `feat(eslint): add typescript preset`. Valid `type` values include `feat` / `fix` / `docs` / `chore` / `refactor` / `style` / `test` / `build` / `ci` / `perf` / `revert`.
