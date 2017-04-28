'use strict';

const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    name: 'server',
    target: 'node',
    entry: path.join(__dirname, 'src', 'server', 'server.js'),
    output: {
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, 'build')
    },
    module: {
        rules: [
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
                    fallback: 'style-loader',
                    use: ['css-loader'],
                    // publicPath: path.join(__dirname, 'src', 'static', 'css')
                })
            }
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),

        new ExtractTextPlugin({
            filename: "../css/main-server.css",
            disable: false,
            allChunks: true
        }),

        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common-server',
        //     minChunks: 2
        // }),
        new webpack.optimize.UglifyJsPlugin({
            unsafe: true,
            drop_console: true
        })
    ],
    node: {
        __dirname: true,
        __filename: false,
        Buffer: false,
        console: false,
        global: false,
        process: false,
    },
    externals: require('webpack-node-externals')(),


};