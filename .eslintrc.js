const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": "warn",
    "no-debugger": "warn",
    "no-unused-vars": "warn",
  },

  overrides: [
    {
      files: ["./src/views/**/*.vue"],
      rules: {
        "vue/multi-word-component-names": 0,
      },
    },
  ],
});
