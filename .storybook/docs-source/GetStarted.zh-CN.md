# 快速开始

以下「最小配置」可以让项目立刻获得统一代码风格：ESLint 负责代码质量，Prettier 负责格式化，Stylelint 负责样式，Husky + Lint-staged + Commitlint 负责在提交时自动把关。

## 1. ESLint

在项目根目录创建 `.eslintrc.cjs`：

```js
module.exports = {
  extends: ['@tiny-codes/code-style-all-in-one/eslint/config/recommended'],
};
```

## 2. Prettier

创建 `.prettierrc.mjs`：

```js
export { default } from '@tiny-codes/code-style-all-in-one/prettier';
```

## 3. Stylelint

创建 `.stylelintrc.mjs`：

```js
export { default } from '@tiny-codes/code-style-all-in-one/stylelint';
```

> 使用 Less / SCSS 的项目请改用 `@tiny-codes/code-style-all-in-one/stylelint/less` 或 `.../stylelint/scss`（见「Stylelint 配置」）。

## 4. Husky 钩子

初始化 husky 并写入本包提供的钩子：

```bash
npx husky init
```

创建 `.husky/pre-commit`：

```bash
#!/usr/bin/env sh
. "node_modules/@tiny-codes/code-style-all-in-one/husky/hooks/pre-commit"
```

创建 `.husky/commit-msg`：

```bash
#!/usr/bin/env sh
. "node_modules/@tiny-codes/code-style-all-in-one/husky/hooks/commit-msg"
```

## 5. Lint-staged

创建 `lint-staged.config.mjs`：

```js
export { default } from '@tiny-codes/code-style-all-in-one/lint-staged';
```

## 6. Commitlint

创建 `.commitlintrc.mjs`：

```js
export { default } from '@tiny-codes/code-style-all-in-one/commitlint';
```

## 完成

此后每次 `git commit`：

1. `pre-commit` 钩子通过 lint-staged 对暂存文件执行 ESLint、Stylelint、Prettier 校验/格式化；
2. `commit-msg` 钩子通过 commitlint 校验提交信息是否符合 Conventional Commits 规范。
