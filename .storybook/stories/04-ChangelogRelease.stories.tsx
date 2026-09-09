import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from 'antd';
import { ConfigExamples } from '../components/demos/ConfigExamples';
import { useStoryT } from '../locales';

const meta: Meta = {
  title: 'Demo / Changelog & Release',
  // @ts-expect-error: because titleCN is an extension field
  titleCN: '演示 / Changelog 与发布',
  parameters: {
    docs: {
      description: {
        component: 'conventional-changelog and commit-and-tag-version scripts for automated releases.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ReleaseContent = () => {
  const t = useStoryT();
  return (
    <div className="sb-story-container">
      <Typography.Title level={4}>{t('story.release.title')}</Typography.Title>
      <Typography.Paragraph type="secondary">{t('story.release.description')}</Typography.Paragraph>
      <ConfigExamples
        fileName="package.json"
        scenarios={[
          {
            id: 'changelog',
            label: t('story.release.changelog'),
            desc: t('story.release.changelogDesc'),
            language: 'json',
            code: `{
  "scripts": {
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0"
  }
}`,
          },
          {
            id: 'release',
            label: t('story.release.release'),
            desc: t('story.release.releaseDesc'),
            language: 'json',
            code: `{
  "scripts": {
    "release": "npx commit-and-tag-version"
  }
}`,
          },
          {
            id: 'husky-hook',
            label: t('story.release.huskyHook'),
            desc: t('story.release.changelogDesc'),
            language: 'json',
            code: `{
  "scripts": {
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0",
    "postversion": "npm run changelog"
  }
}`,
          },
        ]}
      />
    </div>
  );
};

export const ReleaseScripts: Story = {
  name: 'Release Scripts',
  // @ts-expect-error: because nameCN is an extension field
  nameCN: '发布脚本',
  render: () => <ReleaseContent />,
};
