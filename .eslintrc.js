module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "eslint-config-prettier",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["import", "react", "@typescript-eslint"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: { "no-console": "warn" },
};
