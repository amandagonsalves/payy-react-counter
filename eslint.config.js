import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      'plugin:prettier/recommended',
      ...tseslint.configs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'comma-dangle': [2, 'always-multiline'],
      'object-curly-spacing': [2, 'always'],
      'react/display-name': 0,
      semi: ['error', 'never'],
      'no-underscore-dangle': 0,
      'space-before-function-paren': 0,
      'arrow-body-style': 0,
      'no-use-before-define': 0,
      'arrow-parens': 0,
      'no-trailing-spaces': 'error',
      '@typescript-eslint/indent': ['error', 2],
      quotes: 'off',
      '@typescript-eslint/quotes': ['error', 'single'],
      semi: ['error', 'always'],
      'comma-dangle': [
        'error',
        {
          arrays: 'always',
          objects: 'always',
          imports: 'never',
          exports: 'never',
          functions: 'never',
        },
      ],
    },
  },
);
