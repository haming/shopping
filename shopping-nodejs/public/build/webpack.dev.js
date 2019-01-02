/**
 * Created by haoming on 2019/1/1.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const minicCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports={

    entry:{ //  入口文件
        main : './src/index/index.js',
        test : './src/test/index.js',
    },
    output:{ //出口文件
        path:path.resolve(__dirname,'../dist'), //打包文件夹
        // filename:'main.js'//  打包文件名称
        publicPath: "/",
        filename:'js/[name].js',
        // chunkFilename: "js/[id].chunk.js"
    },

    //模式选择
    mode:'development',
    //解读css 图片转换压缩
    module:{
        rules:[
            { //css
                test: /\.css$/,
                use: [
                    {
                        loader: minicCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'  // 特别重要，否则css文件打包后其中引用的图片文件不正确
                        }
                    },
                    "css-loader"
                ]
            },
            { //html里面的img
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {  //css里面的img
                test: /\.(png|jpg|jpeg|pdf|gif)$/,
                use:{
                    loader: 'url-loader?limit=8000&name=./img/[hash].[ext]'
                }
            },
        ]
    },
    //插件 用于生产模块和各项功能
    plugins:[
        // new ExtractTextPlugin("css/[name].css"),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'index.html',	//生成的html存放路径，相对于 path
            chunks: ['main'],
            template: './src/index/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'test.html',	//生成的html存放路径，相对于 path
            chunks: ['test'],
            template: './src/test/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new minicCssExtractPlugin({
            filename:"css/[name].css",
            chunkFilename:"[id].css"
        })
    ],
    //loader 转换器
    loader:{},
    // 服务器配置
    devServer:{
        contentBase :path.resolve(__dirname,'../dist'), //设置项目的基本目录结构
        host:'localhost', //服务器IP配置
        port:'8009', //端口配置
        compress:true //服务器压缩是否开启
    }
}