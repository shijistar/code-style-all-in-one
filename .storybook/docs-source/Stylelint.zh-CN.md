# Stylelint 配置

为 CSS / Less / SCSS 提供统一的样式规范，基于 `stylelint-config-standard` 与 `stylelint-config-css-modules`。

## 基础配置

创建 `.stylelintrc.mjs`：

```js
export { default } from '@tiny-codes/code-style-all-in-one/stylelint';
```

## Less 项目

```js
// .stylelintrc.mjs
export { default } from '@tiny-codes/code-style-all-in-one/stylelint/less';
```

## SCSS 项目

```js
// .stylelintrc.mjs
export { default } from '@tiny-codes/code-style-all-in-one/stylelint/scss';
```

## 内置规则亮点

- **类名命名**：强制 `kebab-case` 或 `lowerCamelCase`（`selector-class-pattern`）
- **单位校验**：默认禁止未知单位，放行 `rpx`（小程序场景）
- **属性忽略检测**：`stylelint-declaration-block-no-ignored-properties` 插件，标记被后续声明覆盖的无效声明
- **URL 引号**：`function-url-quotes` 与 `selector-attribute-quotes` 强制统一引号
- **Web 组件兼容**：放行未知元素类型选择器（`selector-type-no-unknown: null`）
- **禁止特定字体族**：禁止单写 `PingFangSC` 等从 Sketch 复制而来的字体声明，避免在无该字体的设备上渲染异常

> Less / SCSS 变体在基础配置之上启用对应语法的规则（如 SCSS 的 `stylelint-scss` 插件，随包以 optionalDependencies 分发）。
