const ngtools = require('@ngtools/webpack');
const webpackMerge = require('webpack-merge');

const CommonConfig = require('./webpack/webpack.common');

const ClientConfig = {
  main       : require('./webpack/main/webpack.main.client'),
  development: require('./webpack/development/webpack.dev.client'),
  production : require('./webpack/production/webpack.prod.client'),
  stage      : require('./webpack/stage/webpack.stage.client')
};

const ServerConfig = {
  main       : require('./webpack/main/webpack.main.server'),
  development: require('./webpack/development/webpack.dev.server'),
  production : require('./webpack/production/webpack.prod.server'),
  stage      : require('./webpack/stage/webpack.stage.server')
};

const { getAotPlugin } = require('./webpack/webpack.aot');

module.exports = function(options, webpackOptions) {
  options = options || {};

  const availableEnvs = ['production', 'development', 'stage'];
  const env = options.env || 'production';
  const host = options.host || 'localhost';
  const port = options.port || 8000;
  const metadata = {
    host, port, env
  };

  if (!availableEnvs.includes(env)) {
    console.log(`Invalid enviroment: ${env}`);
    return;
  }

  let commonConfig = CommonConfig(options, metadata);
  let serverMainConfig = ServerConfig.main(options);
  let clientMainConfig = ClientConfig.main(options);

  if (options.aot) {
    console.log(
      `Running build for ${options.client
        ? 'client'
        : 'server'} with AoT Compilation`
    );
  }

  let serverConfig = webpackMerge({}, commonConfig, serverMainConfig, {
    entry: options.aot ? './src/main.server.aot.ts' : serverMainConfig.entry, // Temporary
    plugins: [getAotPlugin('server', !!options.aot)],
  });

  let clientConfig = webpackMerge({}, commonConfig, clientMainConfig, {
    plugins: [getAotPlugin('client', !!options.aot)],
  });


  if (options.server) {
    console.log(`Server build: ${env}`);
    serverConfig = webpackMerge({}, serverConfig, ServerConfig[env](options));
  }

  if (options.client) {
    console.log(`Client build: ${env}`);
    clientConfig = webpackMerge({}, clientConfig, ClientConfig[env](options));
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
