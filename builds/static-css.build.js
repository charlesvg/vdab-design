const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');


const staticCSSBuild = (env, options, componentName) => {
    return {
        // Build separate .css file
        mode: options.mode,
        performance: {
            hints: false,
        },
        entry: {
            style: `./src/${componentName}.scss`,
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

module.exports = staticCSSBuild;