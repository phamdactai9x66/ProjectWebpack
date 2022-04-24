const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        filename: '[name].[hash:6].bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,// find file type css
                use: [MiniCssExtractPlugin.loader, 'css-loader']//style-loader inject cssjs to dom , css-loader cover css to js
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']//style-loader inject cssjs to dom , css-loader cover css to js
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            // {
            //     test: /\.(svg|png|jpg)$/,
            //     use: {
            //         loader: 'file-loader',
            //         options:{
            //             name: '[name].[hash].[ext]'
            //         }
            //     }
            // }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].[hash:6].css' }),
        new htmlWebpackPlugin({
            template: './src/template.html',
            inject: 'body'
        }),
        new CleanWebpackPlugin(),
    ],
    performance: {
        hints: false
    }
}