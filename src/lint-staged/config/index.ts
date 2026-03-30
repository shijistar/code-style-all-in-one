const config: Record<string, string> = {
  '*.{js,jsx,ts,tsx,vue}': 'eslint --fix',
  '*.{css,less,scss}': 'stylelint --fix',
  '*.{js,jsx,ts,tsx,vue,md,json,css,less,scss}': 'prettier --write',
};

export default config;

module.exports = config;
