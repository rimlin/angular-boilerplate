const webpack = require('webpack');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SvgConcatPlugin = require('webpack-concat-svg-plugin');

const { SVG_SYMBOLS } = require('../src/config/svg-icons');
const { root } = require('./helpers');

/**
 * This is a common webpack config which is the base for all builds
 */
module.exports = function(options, metadata) {
  return {
    resolve: {
      extensions: ['.ts', '.js']
    },
    output: {
      path: root('build'),
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loaders: [ // check usage of [['awesome-typescript-loader', 'angular2-template-loader']]
            '@ngtools/webpack',
            'angular-router-loader'
          ]
        },
        { test: /\.css$/, loader: 'raw-loader' },
        { test: /\.html$/, loader: 'raw-loader' },
        {
          test: /\.scss$/,
          exclude: [/\.global\.scss$/],
          use: [{
              loader: "raw-loader"
          }, {
              loader: "sass-loader",
              options: {
                includePaths: ['node_modules', 'bower_components', 'src', '.']
              }
          }]
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: root('src/assets'), to: 'assets' },
      ]),

      new DefinePlugin({
        'ENV': JSON.stringify(metadata.env),
        'process.env': {
          'ENV': JSON.stringify(metadata.env),
          'NODE_ENV': JSON.stringify(metadata.env),
          'HOST': JSON.stringify(metadata.host),
          'PORT': JSON.stringify(metadata.port),
        }
      }),

      /*
      new SvgConcatPlugin({
        svgo: true,
        useHash: false,
        name: 'icons',
        fileName: '[name].svg',
        filesToConcat: SVG_SYMBOLS.map(svg => root(`src/${svg}`))
      })*/
    ]
  };
}
