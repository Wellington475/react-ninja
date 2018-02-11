'use strict';

const path = require('path');
const webpack = require('webpack');
const validade = require('webpack-validator');

module.exports = validade({
	devtool: 'source-map',
	entry: [
		path.join(__dirname, 'src', 'index')
	],
	
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/js/'
	},

	module: {
		preLoaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			include: /src/,
			loader: 'standard'
		}],

		loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
			loader: 'babel',
			query: {
				presets:['react']
			}
    }]
	}
});