/* eslint-disable import-x/no-extraneous-dependencies */
import js from '@eslint/js';
import eslintPluginImportX from 'eslint-plugin-import-x';
import globals from 'globals';
import { configs as tsConfigs, parser as tsParser } from 'typescript-eslint';

export default [
  js.configs.recommended,
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.typescript,
  ...tsConfigs.recommended,
  {
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.node,
      },
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      'import-x/first': 'error',
      'import-x/exports-last': 'error',
      'import-x/newline-after-import': 'error',
      'import-x/prefer-default-export': 'error',
      'import-x/group-exports': 'error',
      'import-x/no-duplicates': 'error',
      'import-x/no-amd': 'error',
      'import-x/no-commonjs': 'error',
      'import-x/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',

          alphabetize: {
            order: 'asc',
          },
        },
      ],
      'import-x/no-unused-modules': 'error',
      'import-x/no-mutable-exports': 'error',
      'import-x/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['src/**/*.test.ts'],
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'error',
    },
  },
];
