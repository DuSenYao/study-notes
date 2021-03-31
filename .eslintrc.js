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
  plugins: ['@typescript-eslint', 'html'],
  rules: {
    indent: ['error', 2],
    // 为了使 script 方式引入的对象，不报错
    'no-undef': 0
  }
};
