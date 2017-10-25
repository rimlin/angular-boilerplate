const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { root } = require('../helpers');

/**
 * This is a client config which should be merged on top of common config
 */
module.exports = function(options) {
  return {
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'server', // 'disabled'|'server'
        reportFilename: root('build/report.html'),
        generateStatsFile: true,
        statsFilename: root('build/stats.json'),
      }),
    ]
  };
}
