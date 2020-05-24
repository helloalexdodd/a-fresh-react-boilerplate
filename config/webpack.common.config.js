const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      { loader: 'url-loader', test: /\.(gif|png|jpg)$/ },
      { loader: 'file-loader', test: /\.(ttf|eot|svg)$/ },
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  devServer: {
    hot: false,
    port: 3000,
    open: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  entry: {
    main: './src/index.js',
  },
  mode: 'none',
};
