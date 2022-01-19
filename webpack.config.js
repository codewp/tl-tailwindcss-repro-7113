// @ts-check

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const postcssConfig = require("./postcss.config.js")

module.exports = {
	mode: "development",
	entry: {
		admin: './assets/js/dev/admin/index.js',
	},
	output: {
		filename: './assets/js/admin/[name]/index.js',
		path: __dirname,
		library: [ '[modulename]' ],
		libraryTarget: 'this',
	},
	module: {
		rules: [
			{
				parser: {
					amd: false,
				},
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loaders: [ 'babel-loader' ],
			},
			{ test: /\.md$/, use: 'raw-loader' },
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: { postcssOptions: postcssConfig },
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
				loader: 'url-loader',
			},
		],
	},
	resolve: {
		extensions: [ '*', '.js', '.jsx' ],
	},
	plugins: [
		new MiniCssExtractPlugin( {
			filename: './assets/css/[name]/style.css',
		} ),
	],
}