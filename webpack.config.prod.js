const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')

//    "webpack-dev-server": "^3.11.2"

module.exports = {
    mode: 'production',
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ]
}