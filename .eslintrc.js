module.exports = {
  root: true,
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2017
  },
  extends: [
    "prettier",
    "standard",
    "prettier/standard"
  ],
  rules: {
    indent: [
      "warn",
      2
    ],
    quotes: [
      "warn",
      "double"
    ],
    semi: [
      "error",
      "always"
    ],
    "no-var": [
      "error"
    ],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": [
      "off"
    ],
    "no-mixed-spaces-and-tabs": [
      "warn"
    ],
    "object-curly-spacing": [
      "warn",
      "always"
    ],
    "prefer-const": [
      "warn"
    ],
    "max-len": [
      "warn",
      { code: 120 }
    ],
    "prefer-promise-reject-errors": 0,
    "no-throw-literal": 0,
    "standard/no-callback-literal": 0
  }
};
