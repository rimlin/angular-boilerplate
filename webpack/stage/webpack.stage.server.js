const webpackProdServer = require('../production/webpack.prod.server');

/**
 * This is a server config which should be merged on top of common config
 */
module.exports = function(options) {
  return webpackProdServer(options);
};
