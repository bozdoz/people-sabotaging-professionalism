const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

const ENV = process.env.NODE_ENV || 'dev';
const is_prod = ENV === 'production';

const sourceMap = is_prod ? '' : '?sourceMap';

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './js/main.js',
        path: path.resolve(__dirname, 'docs')
    },
    devServer: is_prod ? {} : {
    	contentBase: './docs',
        historyApiFallback: true,
        hot: true
    },
    devtool: is_prod ? false : 'cheap-module-eval-source-map',
    plugins: [
        new CleanWebpackPlugin([
            './docs/js/main.js',
            './docs/index.html'
        ]),
        new HtmlWebpackPlugin({
            title: 'People Sabotaging Professionalism',
            description: 'A series of unfortunate events which took place on Earth, a few years ago...',
            site: 'https://bozdoz.github.io/people-sabotaging-professionalism',
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        is_prod ? new webpack.optimize.UglifyJsPlugin() : function () {}
    ],
    module: {
        rules: [
        {
            test: /\.js$/,
            use: ['babel-loader']
        },
        {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader' + sourceMap,
                'sass-loader' + sourceMap,
                'postcss-loader' + sourceMap
            ]
        },
        {
            test: /\.json$/,
            use: ['json-loader']
        }]
    }
};