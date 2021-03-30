const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 入口文件
    entry: "./src/index.js",
    // 输出
    output: {
        filename: "built.js",
        path: resolve(__dirname, "dist")
    },
    // loader
    module: {
        rules: [
            // 特定loader配置
            {
                //匹配哪些文件
                test: /\.css$/,
                //使用哪些loader, 执行顺序从右往左
                use: [
                    // 创建style标签，将js中的样式插入到html的head里
                    'style-loader',
                    // 将css变成commonjs模块加载到js中，样式字符串
                    'css-loader'
                ]
            }
        ]
    },
    // plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: 'custom template',
            template: './src/index.html'
        })
    ],
    mode: "development",
    // mode: "production",
}