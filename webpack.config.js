'use strict';

const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
        extensions: ['.js', '.jsx']
    },

    resolveLoader: {
        modules: ['node_modules'],
        moduleExtensions: ['-loader'],
        extensions: ['.js','.jsx']
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
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            }


            // { test:/\.css$/, use: ['isomorphic-style-loader','style-loader','css-loader']}

            // {
            //     test: /\.scss$/,
            //     use: ExtractTextPlugin.extract({
            //     fallback: 'style-loader',
            //     use: ['css-loader','sass-loader']
            // })
            // }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            // 'process.env': {
            //   BROWSER: JSON.stringify(true)
            // }
        }),

        new ExtractTextPlugin({
            filename: 'style.css',
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