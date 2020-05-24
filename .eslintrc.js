module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['prettier'],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': 0,
  },
  overrides: [
    {
      files: ['src/components/index.js'],
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
  ],
};
