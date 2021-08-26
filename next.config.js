const withTM = require('next-transpile-modules')(['react-syntax-highlighter', 'react-markdown', 'remark-gfm']);

module.exports = withTM({
  target: 'serverless',
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  }
})
