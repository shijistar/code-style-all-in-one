import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from 'antd';
import { ConfigExamples } from '../components/demos/ConfigExamples';
import { useStoryT } from '../locales';

const meta: Meta = {
  title: 'Demo / ESLint Presets',
  // @ts-expect-error: because titleCN is an extension field
  titleCN: '演示 / ESLint 预设',
  parameters: {
    docs: {
      description: {
        component: 'ESLint preset examples: recommended, react, vue, next.js and combined presets.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const EslintContent = () => {
  const t = useStoryT();
  return (
    <div className="sb-story-container">
      <Typography.Title level={4}>{t('story.eslint.title')}</Typography.Title>
      <Typography.Paragraph type="secondary">{t('story.eslint.description')}</Typography.Paragraph>
      <ConfigExamples
        fileName=".eslintrc.cjs"
        scenarios={[
          {
            id: 'recommended',
            label: t('story.eslint.recommended'),
            desc: t('story.eslint.recommendedDesc'),
            code: `module.exports = {
  extends: ['@tiny-codes/code-style-all-in-one/eslint/config/recommended'],
};`,
          },
          {
            id: 'react',
            label: t('story.eslint.react'),
            desc: t('story.eslint.reactDesc'),
            code: `module.exports = {
  extends: ['@tiny-codes/code-style-all-in-one/eslint/config/react-recommended'],
  // 或使用更严格的 react-all
};`,
          },
          {
            id: 'vue',
            label: t('story.eslint.vue'),
            desc: t('story.eslint.vueDesc'),
            code: `module.exports = {
  extends: ['@tiny-codes/code-style-all-in-one/eslint/config/vue-recommended'],
  // 或 vue-typescript / vue-all
};`,
          },
          {
            id: 'next',
            label: t('story.eslint.next'),
            desc: t('story.eslint.nextDesc'),
            code: `module.exports = {
  extends: ['@tiny-codes/code-style-all-in-one/eslint/config/next-recommended'],
  // 或使用更严格的 next-all
};`,
          },
          {
            id: 'combined',
            label: t('story.eslint.combined'),
            desc: t('story.eslint.combinedDesc'),
            code: `module.exports = {
  extends: [
    '@tiny-codes/code-style-all-in-one/eslint/config/base',
    '@tiny-codes/code-style-all-in-one/eslint/config/typescript',
    // prettier 必须放在最后
    '@tiny-codes/code-style-all-in-one/eslint/config/prettier',
  ],
};`,
          },
        ]}
      />
    </div>
  );
};

export const PresetScenarios: Story = {
  name: 'Preset Scenarios',
  // @ts-expect-error: because nameCN is an extension field
  nameCN: '预设场景',
  render: () => <EslintContent />,
};
