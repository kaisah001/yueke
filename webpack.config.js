var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'), //入口文件
    output: { //指定输出选项
        path: path.join(__dirname, './dist'), //输出路径
        filename: 'bundle.js' //指定输出文件名称
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html',
            
        }),
        new VueLoaderPlugin()
    ],
    module:{
    	rules:[
         {test:/\.css$/,use:['style-loader','css-loader']},
         {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
         {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
         {test:/\.styl$/,use:['style-loader','stylus-loader','stylus-loader']},
         {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=7632'},
         {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
         {test:/\.vue$/,use:'vue-loader'}
    	]
    }
}