'use strict';

const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

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

    // watch: debug,

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.css', '.sass']
    },

    resolveLoader: {
        modules: ['node_modules'],
        moduleExtensions: ['-loader'],
        extensions: ['.js', '.jsx', '.css', 'sass']
    },

    module: {
        loaders: [
            {
                test: path.join(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: debug ? ['react', 'es2015', 'react-hmre'] : ['react', 'es2015']
                }
            },

            {
                test: /.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: ['style-loader'],
                    use: ['css-loader'],
                    publicPath: path.join(__dirname, 'src', 'static', 'css')
                })
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),

        new ExtractTextPlugin({
            filename: "../css/main.css",
            disable: false,
            allChunks: true
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: 1
        }),
        new webpack.optimize.UglifyJsPlugin({
            unsafe: true,
            drop_console: true
        })
    ]
};