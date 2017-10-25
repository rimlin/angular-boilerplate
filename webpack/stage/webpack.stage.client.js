const webpackProdClient = require('../production/webpack.prod.client');

/**
 * This is a client config which should be merged on top of common config
 */
module.exports = function(options) {
  return webpackProdClient(options);
};
