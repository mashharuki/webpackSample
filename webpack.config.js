// webpack用の設定ファイル
const path = require('path');
// Webpack本体を読み込む
const webpack = require('webpack');

module.exports = {
    watch: true,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    // ローダーの設定を追加
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                },
                // node_modulesフォルダ以下はloaderの対象外とする。
                exclude: /node_modules/
            }
        ]
    },
    // プラグインの設定を追加
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            extractComments: true
        })
    ]
};