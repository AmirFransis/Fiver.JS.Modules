const path = require('path');

module.exports = {
    entry: './wwwroot/with-webpack/app.js',
    output: {
        path: path.resolve(__dirname, 'wwwroot/with-webpack/build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    }
};