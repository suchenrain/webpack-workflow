const { resolve, join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    // 入口文件
    entry: './src/main.js',
    // 输出
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'dist')

    },
    // loader配置
    module: {
        rules: [
            // less 样式
            {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader, options: {
                        // publicPath: 'test'
                    }
                }, 'css-loader', 'less-loader']
            },
            // css
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            // 图片
            {
                test: /\.(jpg|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 9 * 1024,
                        name: '[hash:8].[ext]',
                        esModule: false,
                        outputPath: 'assets/images'
                    }
                }]
            },
            // html中的图片
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            // 其它资源
            {
                exclude: /\.(html|ejs|less|css|json|js|jpe?g|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash:8].[ext]',
                    outputPath: 'assets/icons'
                }
            }
        ]
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            title: 'basic development env',
            template: resolve(__dirname, './src/index.ejs')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash:8].css',
            chunkFilename: "[id].[hash:8].css"
        })
    ],
    // 模式: development | production
    mode: 'development',

    // dev server
    devServer: {
        contentBase: join(__dirname, 'dist'),
        port: 3000,
        compress: true,
        open: true
    }


}