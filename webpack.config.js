var path = require('path');
var webpack = require('webpack');

var plugins = [
    // exposing jQuery for trumbowyg
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
]

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    plugins,
    module: {
        loaders: [
             { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};