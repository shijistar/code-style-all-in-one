import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from 'antd';
import { CodeBlock } from '../components/CodeBlock';
import { CliTerminal } from '../components/demos/CliTerminal';
import { useStoryT } from '../locales';

const meta: Meta = {
  title: 'Demo / Husky Setup',
  // @ts-expect-error: because titleCN is an extension field
  titleCN: '演示 / Husky 配置',
  parameters: {
    docs: {
      description: {
        component: 'Husky git hooks and lint-staged setup with a terminal demo.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const preCommitCode = `#!/usr/bin/env sh
. "node_modules/@tiny-codes/code-style-all-in-one/husky/hooks/pre-commit"`;

const commitMsgCode = `#!/usr/bin/env sh
. "node_modules/@tiny-codes/code-style-all-in-one/husky/hooks/commit-msg"`;

const lintStagedCode = `export { default } from '@tiny-codes/code-style-all-in-one/lint-staged';`;

const HuskyContent = () => {
  const t = useStoryT();
  return (
    <div className="sb-story-container">
      <Typography.Title level={4}>{t('story.husky.title')}</Typography.Title>
      <Typography.Paragraph type="secondary">{t('story.husky.description')}</Typography.Paragraph>

      <div className="sb-section">
        <Typography.Title level={5}>{t('story.husky.initCommand')}</Typography.Title>
        <CliTerminal
          title={t('story.husky.terminalTitle')}
          scenes={[
            {
              id: 'init',
              label: 'husky init',
              lines: [
                { type: 'cmd', text: 'npx husky init' },
                { type: 'output', text: 'husky - Git hooks installed' },
                { type: 'output', text: 'husky - created .husky/pre-commit' },
                { type: 'success', text: '✔ Done' },
              ],
            },
            {
              id: 'commit',
              label: 'git commit',
              lines: [
                { type: 'cmd', text: 'git commit -m "feat(eslint): add next-all preset"' },
                { type: 'output', text: 'Performing code linting and formatting.' },
                { type: 'output', text: 'It may take some time, please be patient...' },
                { type: 'success', text: ' Lint completed!' },
                { type: 'dim', text: '' },
                { type: 'output', text: 'Checking commit messages...' },
                { type: 'success', text: ' success!' },
              ],
            },
          ]}
        />
      </div>

      <div className="sb-section">
        <Typography.Title level={5}>{t('story.husky.preCommit')}</Typography.Title>
        <CodeBlock code={preCommitCode} language="bash" />
      </div>

      <div className="sb-section">
        <Typography.Title level={5}>{t('story.husky.commitMsg')}</Typography.Title>
        <CodeBlock code={commitMsgCode} language="bash" />
      </div>

      <div className="sb-section">
        <Typography.Title level={5}>{t('story.husky.lintStaged')}</Typography.Title>
        <CodeBlock code={lintStagedCode} language="javascript" />
      </div>
    </div>
  );
};

export const HookSetup: Story = {
  name: 'Hook Setup',
  // @ts-expect-error: because nameCN is an extension field
  nameCN: '钩子配置',
  render: () => <HuskyContent />,
};
