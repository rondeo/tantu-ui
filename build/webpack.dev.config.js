const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');
// const config = require('./config');
// const utils = require('./utils');

// console.log('baseWebpackConfig', baseWebpackConfig);

// add hot-reload related code to entry chunks
// Object.keys(baseWebpackConfig.entry).forEach((name) => {
//   baseWebpackConfig.entry[name] = [config.dev.hot ? './build/dev-client-hot' : './build/dev-client'].concat(baseWebpackConfig.entry[name]);
// });

module.exports = merge(baseWebpackConfig, {
  // module: {
  //   rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap }),
  // },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': config.dev.env,
    // }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: path.join(__dirname, '..', config.singlePagePath, 'index.html'),
    //   inject: true,
    // }),
    // new FriendlyErrorsPlugin(),
  ],
});
