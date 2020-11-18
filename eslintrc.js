module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: ["react-app", "airbnb", "eslint:recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": ["error"],
    "no-console": ["error"],
  },
};
