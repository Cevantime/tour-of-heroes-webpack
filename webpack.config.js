var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HistoryFallBack = require('connect-history-api-fallback');

module.exports = {
	entry: "./app/main.js",
	output: {
		publicPath: "/",
		path: __dirname,
		filename: "bundle/app.js"
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
				'./styles'
			],
			middleware: [HistoryFallBack()],
			injectChanges: false, 
			server: {baseDir: ['']}
		})
	]
};
