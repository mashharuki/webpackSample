// webpack用の設定ファイル
const path = require('path');
// プラグインを読み込む
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    // プラグインの設定を追加
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Plugin generate page',
            template: 'src/root.html'
        })
    ]
};