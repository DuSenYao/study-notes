module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint"],
  rules: {
    indent: ["error", 2]
  }
};
