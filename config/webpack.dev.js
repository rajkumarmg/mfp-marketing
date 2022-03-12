const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const hostip = Object.values(require("os").networkInterfaces())
        .flat()
        .filter((item) => !item.internal && item.family === "IPv4")
        .find(Boolean).address;

const HOST_IP = process.env.HOST_IP?process.env.HOST_IP:hostip;  

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://' + HOST_IP + ':8081/',
    },
    devServer: {
        port: 8081,
        host: '0.0.0.0',
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
            shared: packageJson.dependencies,
        })
    ]
};

module.exports = merge(commonConfig, devConfig);