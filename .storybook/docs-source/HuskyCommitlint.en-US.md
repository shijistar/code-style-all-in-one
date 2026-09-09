# Husky & Commitlint

Husky triggers git hooks on commit, Lint-staged runs incremental checks on staged files, and Commitlint validates commit message format. Together they guard every commit.

## 1. Initialize Husky

```bash
npx husky init
```

## 2. Write the hook scripts

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

## 3. What the hooks do

**pre-commit** (runs `lint-staged`):

| File types              | Command            |
| ----------------------- | ------------------ |
| `*.{js,jsx,ts,tsx,vue}` | `eslint --fix`     |
| `*.{css,less,scss}`     | `stylelint --fix`  |
| the above + `md,json`   | `prettier --write` |

**commit-msg** (runs `commitlint`):

```js
// uses @commitlint/config-conventional
// parserPreset: conventional-changelog-angular
```

Commit messages must follow the Conventional Commits spec, e.g.:

```bash
git commit -m "feat(eslint): add next-all preset"
```

## 4. Auto-generate the changelog

Add a script to `package.json`:

```json
"scripts": {
  "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0"
}
```

By following Conventional Commits, your commits are included in the changelog. Tag a new version in the git repo before generating.

## 5. One-command release

For automated version bump, tagging and CHANGELOG generation (like `npm version`):

```json
"scripts": {
  "release": "npx commit-and-tag-version"
}
```

Run `npm run release` to do them all.
