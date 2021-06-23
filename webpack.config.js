// webpack用の設定ファイル
const path = require('path');

module.exports = {
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
            }
        ]
    }
};