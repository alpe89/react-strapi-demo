module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/function-component-definition': 0,
    'import/prefer-default-export': 0,
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'arrow-parens': 0,
    'implicit-arrow-linebreak': 0,
    'no-debugger': 1,
  },
};
