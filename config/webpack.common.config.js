const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
						},
					},
				],
			},
		],
	},
	devServer: {
		hot: false,
		port: 3000,
		open: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new FaviconsWebpackPlugin(`./src/assets/favicon.ico`),
	],
	entry: './src/index.js',
	mode: 'none',
};
