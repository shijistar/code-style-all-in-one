import type { NavItem } from './PrevNextNav';

/**
 * Prev/next navigation chain for code-style-all-in-one: all docs pages first (01-08), then all demo
 * stories (01-04). Changelog is intentionally NOT part of this chain.
 */
export const NAV_ITEMS: NavItem[] = [
  { key: 'introduce', id: 'introduce--docs', type: 'docs', title: 'Introduce', titleCN: '介绍' },
  { key: 'install', id: 'install--docs', type: 'docs', title: 'Install', titleCN: '安装' },
  { key: 'get-started', id: 'get-started--docs', type: 'docs', title: 'Get Started', titleCN: '快速开始' },
  { key: 'eslint', id: 'eslint--docs', type: 'docs', title: 'ESLint', titleCN: 'ESLint 配置' },
  { key: 'stylelint', id: 'stylelint--docs', type: 'docs', title: 'Stylelint', titleCN: 'Stylelint 配置' },
  { key: 'prettier', id: 'prettier--docs', type: 'docs', title: 'Prettier', titleCN: 'Prettier 配置' },
  {
    key: 'husky-commitlint',
    id: 'husky-commitlint--docs',
    type: 'docs',
    title: 'Husky & Commitlint',
    titleCN: 'Husky 与 Commitlint',
  },
  { key: 'faq', id: 'faq--docs', type: 'docs', title: 'FAQ', titleCN: '常见问题' },
  {
    key: 'demo-eslint-presets',
    id: 'demo-eslint-presets--preset-scenarios',
    type: 'story',
    title: 'ESLint Presets',
    titleCN: 'ESLint 预设',
  },
  {
    key: 'demo-stylelint-prettier',
    id: 'demo-stylelint-prettier--tool-configs',
    type: 'story',
    title: 'Stylelint & Prettier',
    titleCN: 'Stylelint 与 Prettier',
  },
  {
    key: 'demo-husky-setup',
    id: 'demo-husky-setup--hook-setup',
    type: 'story',
    title: 'Husky Setup',
    titleCN: 'Husky 配置',
  },
  {
    key: 'demo-changelog-release',
    id: 'demo-changelog-release--release-scripts',
    type: 'story',
    title: 'Changelog & Release',
    titleCN: 'Changelog 与发布',
  },
];
