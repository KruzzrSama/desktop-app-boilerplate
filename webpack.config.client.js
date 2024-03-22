const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const DotEnv = require("dotenv-webpack");
const { compilerOptions } = require("./tsconfig.base.json");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const client = {
    mode: "production",
    name: "renderer",
    target: "web",
    devtool: false,
    watch: false,
    entry: "./src/renderer/index.tsx",
    output: {
        path: path.resolve(__dirname, "public", "main", "assets"),
        filename: "main.min.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]-[hash:base64:5]',
                            },
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.min.css',
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: "./src/renderer/index.html",
            filename: "index.html"
        }),
        new CssMinimizerPlugin(),
        new DotEnv(),
        new CopyPlugin({
            patterns: [
                { from: "./src/renderer/assets/styles/toastify.css" },
                { from: "./src/renderer/assets/styles/tooltip.css" }
            ]
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        modules: [
            path.resolve(__dirname, "node_modules"),
            path.resolve(__dirname, compilerOptions.baseUrl),
        ],
    },
    performance: {
        hints: false,
        maxAssetSize: 2048,
        maxEntrypointSize: 2048,
    },
    devServer: {
        historyApiFallback: true
    }
};

module.exports = client;
