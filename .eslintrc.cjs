/* eslint-env node */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:react-hooks/recommended', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
      extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
    },
  ],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
};
