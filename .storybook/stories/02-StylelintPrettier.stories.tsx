import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from 'antd';
import { ConfigExamples } from '../components/demos/ConfigExamples';
import { useStoryT } from '../locales';

const meta: Meta = {
  title: 'Demo / Stylelint & Prettier',
  // @ts-expect-error: because titleCN is an extension field
  titleCN: '演示 / Stylelint 与 Prettier',
  parameters: {
    docs: {
      description: {
        component: 'Stylelint (base/Less/SCSS) and Prettier configuration examples.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ToolsContent = () => {
  const t = useStoryT();
  return (
    <div className="sb-story-container">
      <Typography.Title level={4}>{t('story.tools.title')}</Typography.Title>
      <Typography.Paragraph type="secondary">{t('story.tools.description')}</Typography.Paragraph>
      <ConfigExamples
        scenarios={[
          {
            id: 'stylelint',
            label: t('story.tools.stylelint'),
            desc: t('story.tools.stylelintDesc'),
            fileName: '.stylelintrc.mjs',
            code: `export { default } from '@tiny-codes/code-style-all-in-one/stylelint';`,
          },
          {
            id: 'stylelint-less',
            label: t('story.tools.stylelintLess'),
            desc: t('story.tools.stylelintLessDesc'),
            fileName: '.stylelintrc.mjs',
            code: `export { default } from '@tiny-codes/code-style-all-in-one/stylelint/less';`,
          },
          {
            id: 'stylelint-scss',
            label: t('story.tools.stylelintScss'),
            desc: t('story.tools.stylelintScssDesc'),
            fileName: '.stylelintrc.mjs',
            code: `export { default } from '@tiny-codes/code-style-all-in-one/stylelint/scss';`,
          },
          {
            id: 'prettier',
            label: t('story.tools.prettier'),
            desc: t('story.tools.prettierDesc'),
            fileName: '.prettierrc.mjs',
            code: `export { default } from '@tiny-codes/code-style-all-in-one/prettier';`,
          },
        ]}
      />
    </div>
  );
};

export const ToolConfigs: Story = {
  name: 'Tool Configs',
  // @ts-expect-error: because nameCN is an extension field
  nameCN: '工具配置',
  render: () => <ToolsContent />,
};
