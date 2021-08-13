const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const resolvePath = inputPath => path.join(__dirname, inputPath)
const isProd = process.env.NODE_ENV === 'production'

webpackConfig = {
    mode: isProd ? 'production' : 'development',
    stats: 'minimal',
    entry: {
        app: [resolvePath('./src/main.js')]
    },
    output: {
        filename: '[name].[hash:8].js',
        path: isProd ? resolvePath('../vue-dist') : resolvePath('dist'),
        publicPath: isProd ? './' : '/'
    },
    devServer: {
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolvePath('src'),
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }, {
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: file => (
                /node_modules/.test(file) && !/\.vue\.js/.test(file)
            ),
        }, {
            test: /\.css$/i,
            use: [
                'vue-style-loader',
                'css-loader',
            ]
        }, {
            test: /\.less$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'less-loader'
            ]
        }, {
            test: /\.(ttf|eot|woff|woff2?|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 5000, // fonts file size <= 5KB ? use 'base64' : svg
                    outputPath: 'fonts/'
                },
            }]
        }, {
            test: /\.(jpe?g|png|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192, // 小于8k的图片自动转成base64格式
                    outputPath: 'images/' //图片打包后的文件夹
                }
            }
            ]
        }],
    },
    plugins: [
        // 处理.vue
        new VueLoaderPlugin(),

        // 输出 index.html 到output
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: '/frontend/public/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
    },
}

if(isProd) {
    webpackConfig.plugins.push(
        // 每次 build 清空 output 目录
        new CleanWebpackPlugin(resolvePath('../vue-dist'))
    )
    webpackConfig.plugins.push(
        // 分离单独的 CSS 文件到 output
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    )
}

module.exports = webpackConfig