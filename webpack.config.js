'use strict';

const NODE_ENV =  process.env.NODE_ENV || 'development';
const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');

module.exports = {

    entry: path.join(__dirname, 'src', 'app-client.js'),

    devServer: {
        inline: true,
        port: 3333,
        contentBase: "src/static/",
        historyApiFallback: {
            index: '/index-static.html'
        }
    },

    output: {
        path: path.join(__dirname, 'src', 'static', 'js'),
        publicPath: "/js/",
        filename: '[name].js'
    },

    devtool: debug ? 'sourcemap' : '',

    watch: debug,

    module: {
        loaders:[{
            test: path.join(__dirname, 'src'),
            loader: 'babel-loader',
            query: {
                presets: debug ? ['react', 'es2015', 'react-hmre'] : ['react', 'es2015']
            }
        }]
    },

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common'
        // }),
        new webpack.optimize.UglifyJsPlugin({
            unsafe: true,
            drop_console: true
        })
    ]
};