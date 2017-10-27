const webpack = require('webpack')

module.exports = {
	entry: './index.js',

	output: {
	path: __dirname + '/js/build',
	publicPath: '/',
	filename: 'app.js'
	},

	devServer: {
	contentBase: './js/build'
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

		        query: {
		           presets: ["es2015", "react"]
		        }
	    	}
		]
	},
	plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
  	],


}