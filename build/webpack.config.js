var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// 导入vueLoader
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var config = {
    //入口
    entry:{
        //配置单入口
        main:'./src/main.js'
    },
    //出口
    output:{
        // 选项用来存放打包后文件的输出目录
        path: path.join(__dirname,'./dist'),
        //指定资文件引用的目录
        publicPath:'/dist/',
        //指定输出文件的名称
        filename:'index.js'
    },
    module:{
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.css$/,
                use:ExtractTextPlugin.extract({
                    use:'css-loader',
                    fallback:'style-loader'
                })     
            }
        ]
    },
    plugins: [
        // 重新命名提取后css文件
        new ExtractTextPlugin("index.css"),
        new VueLoaderPlugin()
    ]
}

module.exports = config