const path = require('path');
module.exports = {
	entry: path.join(__dirname, '/final.ts'),
	output: {
		filename: 'final.js',
		path: __dirname
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	}
}