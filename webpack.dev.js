const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,// find file type css
                use: ['style-loader', 'css-loader']//style-loader inject cssjs to dom , css-loader cover css to js
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']//style-loader inject cssjs to dom , css-loader cover css to js
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/template.html',
            inject: 'body'
        })
    ],
    performance: {
        hints: false
    }
}