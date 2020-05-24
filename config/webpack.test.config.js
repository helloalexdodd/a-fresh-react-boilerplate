const path = require('path');
const glob = require('glob');
const Merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CommonConfig = require('./webpack.common.config');

const testFiles = glob
  .sync('src/**/*.test.js')
  .filter((element) => {
    return element !== '../bundle.test.js' && !element.includes('node_modules');
  })
  .map((element) => {
    return `./${element}`;
  });

module.exports = Merge(CommonConfig, {
  entry: testFiles,
  output: {
    path: path.join(__dirname, '../src/tests'),
    filename: 'bundle.test.js',
  },
  plugins: [new CleanWebpackPlugin()],
  mode: 'none',
});
