# 安装

## 安装包

```bash
npm install -D @tiny-codes/code-style-all-in-one
```

部分依赖（例如 `stylelint-scss`）以 `optionalDependencies` 形式随包分发。如果项目用不到，可以跳过：

```bash
npm install -D @tiny-codes/code-style-all-in-one --no-optional
```

## 环境要求

| 依赖       | 版本                     |
| ---------- | ------------------------ |
| Node.js    | >= 20.10.0               |
| TypeScript | ^5.0.0 或 ^6.0.0（可选） |
| ESLint     | ^8.0.0（可选）           |
| Prettier   | ^3.0.0（可选）           |
| Stylelint  | ^16.0.0（可选）          |

> 以上工具均为 `optional` peer dependencies——只安装、使用你需要的部分即可。

## 安装后需要做的

1. 创建 `.eslintrc.cjs`、`.prettierrc.mjs`、`.stylelintrc.mjs`、`lint-staged.config.mjs`、`.commitlintrc.mjs` 等配置文件（见「快速开始」）。
2. 执行 `npx husky init` 初始化 git 钩子，并写入本包提供的钩子脚本（见「Husky 与 Commitlint」）。
3. 在 `package.json` 中加入 `lint-staged` 与 commit-msg 校验脚本（如需）。

安装完成后，提交代码时 husky 会依次触发 `pre-commit`（lint-staged 校验与格式化）与 `commit-msg`（commitlint 校验）。
