const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/awesome-app.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './src',
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/awesome-app.html'
        }),
    ],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
};