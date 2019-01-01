/**
 * Created by haoming on 2019/1/1.
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var minicCssExtractPlugin = require("mini-css-extract-plugin");

module.exports={

    entry:{ //  入口文件
        main : './src/index/index.js',
        main2 : './src/index.js'
    },
    output:{ //出口文件
        path:path.resolve(__dirname,'../dist'), //打包文件夹
        // filename:'main.js'//  打包文件名称
        // publicPath: "/",
        filename:'[name].js',
        // chunkFilename: "js/[id].chunk.js"
    },

    //模式选择
    mode:'development',
    //解读css 图片转换压缩
    module:{
        rules:[
            // css loader
            {
                test:/\.css$/, //对css结尾的文件进行loader
                use:['style-loader','css-loader']
            },

        ]
    },

    // module: {
    //     loaders: [	//加载器
    //         {test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css")},
    //         {test: /\.html$/, loader: "html"},
    //         {test: /\.(png|jpg|jpeg|pdf|gif)$/, loader: 'url-loader?limit=8000&name=./img/[hash].[ext]'},
    //         {test: /\.(eot|woff|woff2|svg|ttf|docx)([\?]?.*)$/, loader: "file-loader"}
    //     ]
    // },
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
        new minicCssExtractPlugin({
            filename:"[name].css",
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