const withTM = require('next-transpile-modules')(['react-syntax-highlighter']);

module.exports = withTM({
  target: 'serverless',
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  }
})
