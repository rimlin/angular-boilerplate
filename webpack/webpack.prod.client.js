const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { root } = require('./helpers');

/**
 * This is a prod config to be merged with the Server config
 */
module.exports = function(options) {
  return {
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),

      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled', // 'disabled'|'server'
        reportFilename: root('build/report.html'),
        generateStatsFile: true,
        statsFilename: root('build/stats.json'),
      }),

      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false
        },
        compress: {
          warnings: false,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
          negate_iife: false // we need this for lazy v8
        },
        sourceMap: true
      }),

      new webpack.NormalModuleReplacementPlugin(
        /@angular(\\|\/)upgrade/,
        root('webpack/empty.js')
      ),
      // problem with platformUniversalDynamic on the server/client
      new webpack.NormalModuleReplacementPlugin(
        /@angular(\\|\/)compiler/,
        root('webpack/empty.js')
      ),
      new webpack.NormalModuleReplacementPlugin(
        /@angular(\\|\/)platform-browser-dynamic/,
        root('webpack/empty.js')
      ),
      new webpack.NormalModuleReplacementPlugin(
        /dom(\\|\/)debug(\\|\/)ng_probe/,
        root('webpack/empty.js')
      ),
      new webpack.NormalModuleReplacementPlugin(
        /dom(\\|\/)debug(\\|\/)by/,
        root('webpack/empty.js')
      ),
      new webpack.NormalModuleReplacementPlugin(
        /src(\\|\/)debug(\\|\/)debug_node/,
        root('webpack/empty.js')
      ),
      new webpack.NormalModuleReplacementPlugin(
        /src(\\|\/)debug(\\|\/)debug_renderer/,
        root('webpack/empty.js')
      ),
    ]
  };
}
