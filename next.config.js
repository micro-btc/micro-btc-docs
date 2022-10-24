const config = {
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.js',
  unstable_staticImage: true,
  unstable_flexsearch: {
    codeblock: false
  }
}

const withNextra = require('nextra')(config)

module.exports = withNextra({
  reactStrictMode: true
})
