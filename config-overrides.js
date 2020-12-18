const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@Components': path.resolve(__dirname, './src/components'),
    '@Pages': path.resolve(__dirname, './src/pages'),
    '@ActionTypes': path.resolve(__dirname, './src/redux/types.js'),
    '@Hocs': path.resolve(__dirname, './src/hocs'),
  }),
);
