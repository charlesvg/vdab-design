const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

const litElementBuild = (env, options) => {
    return {
        mode: options.mode,
        entry: {
            index: './src/button.js',
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

const staticCSSBuild = (env, options) => {
    return {
        // Build separate .css file
        mode: options.mode,
        performance: {
            hints: false,
        },
        entry: {
            style: './src/button.scss',
        },
        devtool: 'inline-source-map',
        output: {
            clean: false,
        },
        plugins: [
            new RemoveEmptyScriptsPlugin(),
            new MiniCssExtractPlugin({filename: "style.css"}),
        ],
        module: {
            rules: [
                {
                    test: /\.(scss|css)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
                },
            ],
        },
    };
}
const generateBuilds = (env, options) => {
    const builds = [];
    builds.push(litElementBuild(env, options));
    if (options.mode === 'production') {
        builds.push(staticCSSBuild(env, options));
    }
    return builds;
}

module.exports = generateBuilds;