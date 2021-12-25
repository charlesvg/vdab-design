const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const litElementDevBuild = (env, options, componentName) => {
    return {
        mode: options.mode,
        entry: {
            index: `./src/${componentName}.js`,
        },
        performance: {
            hints: false,
        },
        devtool: 'inline-source-map',
        devServer: {
            hot: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html'
            }),
        ],
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist'),
            clean: false,
        },
        module: {
            rules: [
                {
                    test: /\.html$/i,
                    loader: "html-loader",
                },
                {
                    test: /\.(scss|css)$/,
                    use: ['css-loader', 'sass-loader'],
                },
            ],
        },
    };
}

module.exports = litElementDevBuild;