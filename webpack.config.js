var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HistoryFallBack = require('connect-history-api-fallback');

var path = require('path');

module.exports = {
	entry: "./app/main.js",
	output: {
		path: __dirname,
		filename: "bundle/app.js"
	},
	
	resolve : {
		root : path.resolve('./app'),
		extensions: ['', '.js']
	},
	plugins: [
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 3000,
			prependPath: false,
			files: [
				'bundle/app.js',
				'index.html',
				'styles.css',
				'./templates',
				'./styles',
				'webpack.config.js'
			],
			middleware: [HistoryFallBack()],
			injectChanges: false, 
			server: {baseDir: ['']}
		})
	]
};
