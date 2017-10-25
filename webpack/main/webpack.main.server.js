const { AotPlugin } = require('@ngtools/webpack');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

const { root } = require('./helpers');

/**
 * This is a server config which should be merged on top of common config
 */
module.exports = function(options) {
  return {
    entry: root('./src/main.server.ts'),
    output: {
      filename: 'server.js'
    },
    target: 'node',
    plugins: [
      new TsConfigPathsPlugin({
        configFilePath: options.aot
          ? root('./src/tsconfig.server.json')
          : root('./src/tsconfig.server.aot.json'),
      }),

      new DefinePlugin({
        window: undefined,
        document: undefined,
        location: JSON.stringify({
            protocol: 'http', // `http` or `https`
            host: 'localhost',
        })
      }),
    ],
  };
};
