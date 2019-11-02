module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    shallow: false,
    mount: false,
    render: false,
    escapeSnapshot: false,
    mockData: false,
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
    "react/destructuring-assignment": 0,
    "react/jsx-fragments": 0,
    "import/prefer-default-export": 0,
    "react/jsx-no-bind": 0,
    "react/sort-comp": 0,
    "react/jsx-props-no-spreading": 0
  },
};
