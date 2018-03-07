const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        app:'./src/index.js'
        // print:'./src/print.js'
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        inline: true, //live-reloading
        port:2018,
        hot:true
    },
    plugins:[
         //clean
        new CleanWebpackPlugin(['dist']),  

        //会默认生成 index.html 文件
        new HtmlWebpackPlugin({
            title: 'build via  HtmlWebpackPlugin',
            template : __dirname +'/dist/app/index.html'
        }),
        //hot
        new webpack.NamedModulesPlugin(),   
        new webpack.HotModuleReplacementPlugin(),
        //删除未引用代码(dead code)的压缩工具
        // new UglifyJSPlugin() 
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            //load js
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/
            },
            //load css
            {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader' //将所有的计算后的样式加入页面中
                    },
                    {
                        loader: 'css-loader', // 能够使用类似@import 和 url(...)的方法实现 require()的功能,
                        options: {
                            modules: true,
                            localIdentName: '[name]_[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            //load image
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            // load font
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            //load data
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }

        ]
    }
}