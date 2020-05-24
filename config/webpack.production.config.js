const path = require('path');
const Merge = require('webpack-merge');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CommonConfig = require('./webpack.common.config.js');

module.exports = Merge(CommonConfig, {
  output: {
    path: path.join(__dirname, '../lib'),
    filename: 'bundle-[hash].js',
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles-[hash].css' }),
    new CleanWebpackPlugin(),
    new HtmlPlugin({
      template: './public/index.html',
      minify: true,
      hash: true,
      scriptLoading: 'defer',
      title: 'A Fresh Webpack Boilerplate',
    }),
    new FaviconsWebpackPlugin(`./src/assets/favicon.ico`),
  ],
  optimization: {
    minimize: true,
  },
});
