const { AotPlugin } = require('@ngtools/webpack');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

const { root } = require('../helpers');

/**
 * This is a server config which should be merged on top of common config
 */
module.exports = function(options) {
  return {};
};
