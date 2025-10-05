import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

console.log('Directory name:', __dirname)

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next', 'next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended', 'plugin:jsx-a11y/recommended'],
    plugins: ['prettier', 'jsx-a11y', 'tailwindcss'],
    settings: {
      tailwindcss: {
        config: `${__dirname}/src/app/globals.css`,
      },
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'all',
          semi: false,
          tabWidth: 2,
          singleQuote: true,
          printWidth: 130,
          endOfLine: 'auto',
          arrowParens: 'always',
        },
        {
          usePrettierrc: false,
        },
      ],
      'react/jsx-curly-brace-presence': ['error', { props: 'always', children: 'ignore' }],
      'react/react-in-jsx-scope': 'off',
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'warn',
      'jsx-a11y/role-supports-aria-props': 'warn',

      'tailwindcss/enforces-shorthand': 'error',
    },
  }),
]

export default eslintConfig
