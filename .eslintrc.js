module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    'react-app',
  ],
  rules: {
    'no-debugger': 'off',
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'react/prop-types': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
