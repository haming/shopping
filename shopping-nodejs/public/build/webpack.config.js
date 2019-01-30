const webpack = require('webpack');
const path = require('path');
const os = require('os');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HappyPack = require('happypack');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const srcDir = path.join(__dirname, './src');
const distDir = path.join(__dirname, '../dist');
const happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length}); //动态启动线程池
const vueLoaderConfig = require('./vue-loader.conf')
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
var pages = require('./pages').getConfig();

var testEnv = "sit";

var distEnv = new webpack.DefinePlugin({
    'NODE_ENV': '"' + testEnv + '"',
    'ENV_HOST': '"https://hms-' + testEnv + '.test-cignacmb.com"',
});

module.exports = {
    entry: pages.entry,//引用生成好的配置
    output: {
        path: path.resolve(__dirname, '../dist'),
        // 给js css 图片等在html引入中添加前缀
        publicPath: "/",
        filename: 'js/[name].js',
    },
    devtool: 'eval',
    watch: false, // 开启监听文件更改，自动刷新
    watchOptions: {
        ignored: /node_modules/, //忽略不用监听变更的目录
        aggregateTimeout: 3000, //防止重复保存频繁重新编译,500毫米内重复保存不打包
        poll: 1000 //每秒询问的文件变更的次数
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: "initial",
                    name: "common",
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0
                }
            }
        }
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                // options: vueLoaderConfig
            },
            {
            test: /\.html$/,
            use: [{
                loader: "html-loader",
                options: {minimize: false}
            }]
        },
            {
                test: /\.js$/,
                use: ['happypack/loader?id=babel'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: ['happypack/loader?id=css'],
                }),

            },
            {
                test: /\.scss$/,
                loader: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(gif|jpg|jpeg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192&name=img/[name][hash].[ext]'
            }
        ]
    },
    plugins: [distEnv]
        .concat(pages.plugins) //引用生成好的配置
        .concat(
            [

                new ExtractTextPlugin("css/[name].css"),	//单独使用style标签加载css并设置其路径


                // new webpack.HotModuleReplacementPlugin(),
                new HappyPack({
                    // 用唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件
                    id: 'babel',
                    // 如何处理 .js 文件，用法和 Loader 配置中一样
                    loaders: ['babel-loader?cacheDirectory'],
                    // 使用共享进程池中的子进程去处理任务
                    threadPool: happyThreadPool,
                }),
                new HappyPack({
                    id: 'css',
                    // 如何处理 .css 文件，用法和 Loader 配置中一样
                    loaders: ['css-loader'],
                    // 使用共享进程池中的子进程去处理任务
                    threadPool: happyThreadPool,
                }),
                new HappyPack({
                    id: 'scss',
                    threadPool: happyThreadPool,
                    loaders: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                    ],
                }),

                new webpack.ProvidePlugin({
                    $: 'jquery',
                    jQuery: 'jquery',
                    'window.jQuery': 'jQuery',
                    'window.$': '$',
                }),
                new webpack.ProvidePlugin({
                    avalon: 'avalon2',
                    'window.avalon': 'avalon',
                })
            ]
        ),

    devServer: {
        disableHostCheck: true,
        hot: false,
        inline: false,
        proxy: {
            '/gis_server/*': {
                target: 'http://hms-' + testEnv + '.test-cignacmb.com',
                host: 'hms-uat.test-cignacmb.com',
                secure: false,
                onProxyRes: function onProxyRes(proxyRes, req, res) {
                    if (proxyRes.headers.location) {
                        var address = getIpAddress()
                        proxyRes.headers.location = 'http://' + address + ':8050'; //重写重定向路径
                    }
                }
            }
        }
    }
};

var getIpAddress = function () {
    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
};


