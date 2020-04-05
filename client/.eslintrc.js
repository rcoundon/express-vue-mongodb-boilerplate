module.exports = {
  root: false,
  env: {
    "browser": true
  },
  extends: [
    "plugin:vue/recommended"
  ],
  plugins: [
    "vue"
  ],
  parserOptions: {
    "sourceType": "module",
    "parser": "babel-eslint"
  },
  rules: {
    "vue/require-default-prop": 0
  }
};
