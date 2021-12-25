const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");



const litElementProdBuild = (env, options, componentName) => {
    return {
        mode: options.mode,
        entry: {
            index: `./src/${componentName}.js`,
        },
        performance: {
            hints: false,
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    { from: "package.json", to: "." },
                    { from: `./src/${componentName}.html`, to: "." },
                ],
            }),
        ],
        devtool: 'inline-source-map',
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

module.exports = litElementProdBuild;