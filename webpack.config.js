const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugins = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    output: {
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(css|scss|sass)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(gif)$/,
                use: ["file-loader"]
            }
        ]
    },
    devServer: {
        compress: true,
        port: 9000,
        historyApiFallback: true
    },
    plugins: [htmlPlugins]
};