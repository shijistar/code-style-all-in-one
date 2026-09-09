# Husky 与 Commitlint

Husky 负责在 git 提交时触发钩子，Lint-staged 负责对暂存文件做增量校验，Commitlint 负责校验提交信息格式。三者配合实现「提交即把关」。

## 1. 初始化 Husky

```bash
npx husky init
```

## 2. 写入钩子脚本

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

## 3. 钩子内部做了什么

**pre-commit**（运行 `lint-staged`）：

| 文件类型                | 执行命令           |
| ----------------------- | ------------------ |
| `*.{js,jsx,ts,tsx,vue}` | `eslint --fix`     |
| `*.{css,less,scss}`     | `stylelint --fix`  |
| 以上 + `md,json`        | `prettier --write` |

**commit-msg**（运行 `commitlint`）：

```js
// 使用 @commitlint/config-conventional
// parserPreset: conventional-changelog-angular
```

提交信息需遵循 Conventional Commits 规范，例如：

```bash
git commit -m "feat(eslint): add next-all preset"
```

## 4. 自动生成 Changelog

在 `package.json` 中加入脚本：

```json
"scripts": {
  "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0"
}
```

提交时遵循 Conventional Commits 规范，即可让提交被正确纳入 changelog。生成前请先在 git 仓库打好新版本 tag。

## 5. 一键发布

如需自动版本号提升、打 tag 与 changelog 生成（类似 `npm version`）：

```json
"scripts": {
  "release": "npx commit-and-tag-version"
}
```

运行 `npm run release` 即可全部完成。
