const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
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
        // new CleanWebpackPlugin(['dist']),
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