import { useState } from 'react';
import { Tabs, type TabsProps, Typography } from 'antd';
import { CodeBlock } from '../CodeBlock';

export interface ConfigScenario {
  id: string;
  label: string;
  desc: string;
  code: string;
  language?: string;
}

interface ConfigExamplesProps {
  scenarios: ConfigScenario[];
  fileName?: string;
}

/**
 * Tabbed config examples (antd Tabs). Each tab shows a full config file with syntax highlighting
 * and a copy button.
 */
export const ConfigExamples = ({ scenarios, fileName }: ConfigExamplesProps) => {
  const [active, setActive] = useState(scenarios[0]?.id);
  const scenario = scenarios.find((s) => s.id === active) ?? scenarios[0];

  const tabs: TabsProps['items'] = scenarios.map((s) => ({ key: s.id, label: s.label }));

  return (
    <div>
      <Tabs size="small" items={tabs} activeKey={active} onChange={setActive} tabBarStyle={{ marginBottom: 12 }} />
      <Typography.Paragraph type="secondary" className="sb-tab-desc">
        {scenario.desc}
      </Typography.Paragraph>
      <CodeBlock code={scenario.code} language={scenario.language ?? 'typescript'} maxHeight={480} />
      {fileName && (
        <Typography.Text type="secondary" className="sb-caption">
          {fileName}
        </Typography.Text>
      )}
    </div>
  );
};

export default ConfigExamples;
