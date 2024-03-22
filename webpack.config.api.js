const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { compilerOptions } = require("./tsconfig.base.json");
const DotEnv = require("dotenv-webpack");

const api = {
    mode: "production",
    name: "api",
    target: "node",
    devtool: false,
    entry: "./src/api/index.ts",
    output: {
        path: path.resolve(__dirname, "public", "api"),
        filename: "index.js",
        publicPath: "/",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new DotEnv()
    ],
    externals: [nodeExternals()],
    optimization: {
        minimize: false
    },
    resolve: {
        extensions: [".ts", ".js", ".json"],
        modules: [
            path.resolve(__dirname, "node_modules"),
            path.resolve(__dirname, compilerOptions.baseUrl)
        ]
    },
    performance: {
        hints: false,
        maxAssetSize: 2048,
        maxEntrypointSize: 2048,
    },
};

module.exports = api;