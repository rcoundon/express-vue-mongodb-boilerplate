module.exports = {
  env: {
    node: true,
    commonjs: true,
  },
  plugins: ["node"],
  rules: {
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "always",
        asyncArrow: "always",
      },
    ],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    comma-dangle: ["error", "never"]
  },
};
