var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
// var ipConfig = require('./webpack.ip.config');
// var CopyWebpackPlugin = require('copy-webpack-plugin');

// var env = 'sit';
var env = 'uat';

var distEnv = new webpack.DefinePlugin({
    'NODE_ENV': '"' + env + '"',
    'MOBILE_UPLOAD_URL': '"https://hms-' + env + '.test-cignacmb.com/gis_server/sit/opr/ipmi/M"',
    'ENV_HOST': '"https://hms-' + env + '.test-cignacmb.com"',
    'CANCEL_TEST_URL': '"https://t.ihaola.com.cn/partners/zhaoshangdm-a1239dcd-4605-2a18-6a51-b39cf339e1ec/azzs/launching.html?openid="'
});

module.exports = {

    entry: {
        //
        common_login: "./src/common/view/common/login/index.js",
        common_index: "./src/common/view/common/index/index.js",
        common_myOrder: "./src/common/view/common/myOrder/index.js",
        common_qrcode: "./src/common/view/common/qrcode/index.js",
        common_signup: "./src/common/view/common/signup/index.js",
        common_signup_precheck: "./src/common/view/common/signup_precheck/index.js",
        common_signup_confirm: "./src/common/view/common/signup_confirm/index.js",
        common_signup_success: "./src/common/view/common/signup_success/index.js",
        common_survey: "./src/common/view/common/survey/index.js",
        //
        ipmi_detail: "./src/ipmi/view/ipmi/detail/index.js",
        ipmi_2: "./src/ipmi/view/ipmi/2/index.js",
        ipmi_3: "./src/ipmi/view/ipmi/3/index.js",
        ipmi_4: "./src/ipmi/view/ipmi/4/index.js",
        ipmi_5: "./src/ipmi/view/ipmi/5/index.js",
        ipmi_8: "./src/ipmi/view/ipmi/8/index.js",
        ipmi_pay: "./src/ipmi/view/ipmi/pay/index.js",
        ipmi_pay_success: "./src/ipmi/view/ipmi/pay_success/index.js",
        ipmi_pay_failure: "./src/ipmi/view/ipmi/pay_failure/index.js",
        ipmi_preview: "./src/ipmi/view/ipmi/preview/index.js",
        ipmi_notice: "./src/ipmi/view/ipmi/notice/index.js",
        ipmi_error: "./src/ipmi/view/ipmi/error/index.js",
        ipmi_clause: "./src/ipmi/view/ipmi/clause/index.js",
        ipmi_uploadId: "./src/ipmi/view/ipmi/uploadId/index.js",
        ipmi_myOrder: "./src/common/view/common/myOrder/index.js",
        ipmi_zerenmianchu: "./src/ipmi/view/ipmi/zerenmianchu/index.js",
        ipmi_modlePDF: "./src/ipmi/view/ipmi/modlePDF/index.js",
        ipmi_baoxiantiaokuan: "./src/ipmi/view/ipmi/baoxiantiaokuan/index.js",
        ipmi_shengmingyushouquan: "./src/ipmi/view/ipmi/shengmingyushouquan/index.js",

    },
    output: {
        path: path.join(__dirname, '../dist/local'),
        publicPath: "/",
        filename: "js/[name].js",
        chunkFilename: "js/[id].chunk.js"
    },
    module: {
        loaders: [	//加载器
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css")},
            {test: /\.html$/, loader: "html"},
            {test: /\.(png|jpg|jpeg|pdf|gif)$/, loader: 'url-loader?limit=8000&name=./img/[hash].[ext]'},
            {test: /\.(eot|woff|woff2|svg|ttf|docx)([\?]?.*)$/, loader: "file-loader"}
        ]
    },

    plugins: [
        distEnv,
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        }),
        new webpack.ProvidePlugin({ //前端调试库
            eruda: 'eruda',
            'window.eruda': 'eruda',
        }),
        new ExtractTextPlugin("css/[name].css"),	//单独使用style标签加载css并设置其路径
        //
        // new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
        //     filename: 'index.html',	//生成的html存放路径，相对于 path
        //     chunks: ['common.js', 'common_index'],
        //     template: './src/common/view/common/index/index.html',	//html模板路径
        //     inject: true,	//允许插件修改哪些内容，包括head与body
        //     hash: true	//为静态资源生成hash值
        // }),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'login.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'common_login'],
            template: './src/common/view/common/login/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'myOrder.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'common_myOrder'],
            template: './src/common/view/common/myOrder/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'qrcode.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'common_qrcode'],
            template: './src/common/view/common/qrcode/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'signup.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'common_signup'],
            template: './src/common/view/common/signup/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'signup-precheck.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'common_signup_precheck'],
            template: './src/common/view/common/signup_precheck/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'signup-confirm.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'common_signup_confirm'],
            template: './src/common/view/common/signup_confirm/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'signup-success.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'common_signup_success'],
            template: './src/common/view/common/signup_success/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'survey.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'common_survey'],
            template: './src/common/view/common/survey/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),

        //
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'index.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'ipmi_detail'],
            template: './src/ipmi/view/ipmi/detail/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'ipmi-2.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'ipmi_2'],
            template: './src/ipmi/view/ipmi/2/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'ipmi-3.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'ipmi_3'],
            template: './src/ipmi/view/ipmi/3/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),

        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'ipmi-4.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'ipmi_4'],
            template: './src/ipmi/view/ipmi/4/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'ipmi-5.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'ipmi_5'],
            template: './src/ipmi/view/ipmi/5/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'ipmi-8.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'ipmi_8'],
            template: './src/ipmi/view/ipmi/8/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),

        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'ipmi-pay.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'ipmi_pay'],
            template: './src/ipmi/view/ipmi/pay/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'ipmi-pay-failure.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'ipmi_pay_failure'],
            template: './src/ipmi/view/ipmi/pay_failure/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'ipmi-pay-success.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'ipmi_pay_success'],
            template: './src/ipmi/view/ipmi/pay_success/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'ipmi-preview.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'ipmi_preview'],
            template: './src/ipmi/view/ipmi/preview/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'ipmi-error/error.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'error'],
            template: './src/ipmi/view/ipmi/error/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'ipmi-clause.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'clause'],
            template: './src/ipmi/view/ipmi/clause/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'ipmi-uploadId.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'ipmi_uploadId'],
            template: './src/ipmi/view/ipmi/uploadId/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'ipmi-myOrder.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'ipmi_myOrder'],
            template: './src/common/view/common/myOrder/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'ipmi-zerenmianchu.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'ipmi_zerenmianchu'],
            template: './src/ipmi/view/ipmi/zerenmianchu/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'ipmi-modlePDF.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'ipmi_modlePDF'],
            template: './src/ipmi/view/ipmi/modlePDF/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'ipmi-baoxiantiaokuan.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'ipmi_baoxiantiaokuan'],
            template: './src/ipmi/view/ipmi/baoxiantiaokuan/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
            filename: 'ipmi-shengmingyushouquan.html',	//生成的html存放路径，相对于 path
            chunks: ['common.js', 'ipmi_shengmingyushouquan'],
            template: './src/ipmi/view/ipmi/shengmingyushouquan/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true	//为静态资源生成hash值
        }),
        new CommonsChunkPlugin({
            name: "common.js",
            minChunks: 10
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ],

    devServer: {
        contentBase: '../dist/local',
        disableHostCheck: true,
        proxy: {
            '/gis_server/*': {
                target: 'http://hms-' + env + '.test-cignacmb.com',
                host: 'hms-' + env + '.test-cignacmb.com',
                secure: false,
                onProxyRes: function onProxyRes(proxyRes, req, res) {
                    if (proxyRes.headers.location) {
                        var address = getIpAddress()
                        proxyRes.headers.location = 'http://' + address + ':8050';//重写重定向路径
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


