const ngtools = require('@ngtools/webpack');
const webpackMerge = require('webpack-merge');
const CommonPartial = require('./webpack/webpack.common');
const ClientPartial = require('./webpack/webpack.client');
const ClientProdPartial = require('./webpack/webpack.prod.client');
const ServerPartial = require('./webpack/webpack.server');
const ServerProdPartial = require('./webpack/webpack.prod.server');
const { getAotPlugin } = require('./webpack/webpack.aot');

module.exports = function(options, webpackOptions) {
  options = options || {};

  const env = options.env || 'production';
  const host = options.host || 'localhost';
  const port = options.port || 8000;
  const metadata = {
    host, port, env
  };

  let commonPartial = CommonPartial(options, metadata);
  let clientPartial = ClientPartial(options);
  let clientProdPartial = ClientProdPartial(options);
  let serverPartial = ServerPartial(options);
  let serverProdPartial = ServerProdPartial(options);

  if (options.aot) {
    console.log(
      `Running build for ${options.client
        ? 'client'
        : 'server'} with AoT Compilation`
    );
  }

  let serverConfig = webpackMerge({}, commonPartial, serverPartial, {
    entry: options.aot ? './src/main.server.aot.ts' : serverPartial.entry, // Temporary
    plugins: [getAotPlugin('server', !!options.aot)],
  });

  let clientConfig = webpackMerge({}, commonPartial, clientPartial, {
    plugins: [getAotPlugin('client', !!options.aot)],
  });

  if (env == 'production') {
    if (options.client) {
      console.log('Client production build');
      clientConfig = webpackMerge({}, clientConfig, clientProdPartial);
    }

    if (options.server) {
      console.log('Server production build');
      serverConfig = webpackMerge({}, serverConfig, serverProdPartial);
    }
  }

  const configs = [];
  if (!options.aot) {
    configs.push(clientConfig, serverConfig);
  } else if (options.client) {
    configs.push(clientConfig);
  } else if (options.server) {
    configs.push(serverConfig);
  }

  return configs;
};
