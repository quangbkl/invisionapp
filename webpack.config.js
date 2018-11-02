const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/js')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                'style-loader',
                'css-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};