module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    //   parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    // 'prettier',
    // 'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  ignorePatterns: ['dist/*', 'filters/*', 'plugins/*', 'static/*', 'config/*'],
  // add your custom rules here
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
  },
}
