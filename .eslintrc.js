module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
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
  plugins: ['react', 'prettier'],
  rules: {
    'eslint(react/react-in-jsx-scope)': 'off',
    'no-debugger': 'off',
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'react/prop-types': 'warn',
    'eslint-disable-next-line': 'on',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};

