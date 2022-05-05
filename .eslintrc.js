module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [0],
    'react/prop-types': 0,
    'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
    'import/extensions': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'arrow-body-style': ['error', 'always'],
    'object-curly-newline': ['error', {
      ImportDeclaration: 'never',
      ExportDeclaration: { multiline: true, minProperties: 10 },
    }],
  },
};
