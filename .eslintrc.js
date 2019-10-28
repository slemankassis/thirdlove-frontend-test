module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
    "no-console": "off",
    "no-underscore-dangle": 0,
    'react/prefer-stateless-function': 0,
    "react/forbid-prop-types": 0,
    "react/destructuring-assignment": 0,
    "react/prop-types": 0,
    "react/jsx-fragments": 0,
    "import/prefer-default-export": 0,
    "camelcase": 0
  },
};
