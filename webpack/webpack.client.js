const webpack = require('webpack');
const { AotPlugin } = require('@ngtools/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

const { root } = require('./helpers');

/**
 * This is a client config which should be merged on top of common config
 */
module.exports = function(options) {
  return {
    entry: {
      vendors: root('./src/vendor.browser.ts'),
      app: root('./src/main.browser.ts'),
    },
    output: {
      filename: '[name].js'
    },
    target: 'web',
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
        minChunks: Infinity,
      }),

      new HtmlWebpackPlugin({
        template: root('./src/index.ejs'),
        output: root('build'),
        inject: 'body',
        hash: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeEmptyAttributes: true,
          minifyJS: true,
        }
      }),

      new TsConfigPathsPlugin({
        configFileName: root('./src/tsconfig.browser.json')
      }),
    ]
  };
}
