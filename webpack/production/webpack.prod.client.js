const webpack = require('webpack');

const { root } = require('../helpers');

/**
 * This is a client config which should be merged on top of common config
 */
module.exports = function(options) {
  return {
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
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
        sourceMap: false
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
