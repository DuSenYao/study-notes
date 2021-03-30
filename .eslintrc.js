module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    indent: ['error', 2]
  }
};
