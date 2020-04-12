const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
      main: './src/js/index.js',
      order: './src/js/order.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
          filename: 'order.html',
          template: './src/order.html'
        }),
        new HtmlWebpackPlugin({
          filename: 'admin_auth.html',
          template: './src/admin_auth.html'
        }),
        new HtmlWebpackPlugin({
          filename: 'admin_car_setting.html',
          template: './src/admin_car_setting.html'
        }),
        new HtmlWebpackPlugin({
          filename: 'admin_entities.html',
          template: './src/admin_entities.html'
        }),
        new HtmlWebpackPlugin({
          filename: 'admin_order_list.html',
          template: './src/admin_order_list.html'
        }),
        new HtmlWebpackPlugin({
          filename: 'admin_error.html',
          template: './src/admin_error.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorPluginOptions: {
            preset: ['default', { discardComments: { removeAll: true } }],
          },
          canPrint: true
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
        }),
        new CopyWebpackPlugin([{
          from: './src/img/',
          to: './img'
        }])
    ],
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader'
            ],
          },
          {
            test: /\.(jpg|png|svg|gif)$/,
            use: [{
              loader: 'file-loader',
              options: {
                name: '/img/[name].[ext]',
                outputPath: '/img/',
                useRelativPath: true
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  // quality: 70
                }
              }
            }]
          }
        ],
    },
}