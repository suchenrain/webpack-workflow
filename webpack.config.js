const resolve = require('path')

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
        rules: []
    },
    // plugins
    plugins: [

    ],
    mode: "development",
    // mode: "production",
}