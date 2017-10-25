const rimraf = require('rimraf');
const fs = require('fs');
const path = require('path');

const SERVER_PATH = path.resolve('dist/server.js');
const DIST_FOLDER = path.resolve('dist');
const BUILD_FOLDER = path.resolve('build');

rimraf(DIST_FOLDER, (err) => {
  if (err) {
    console.error('rimraf error: ' + error);
    return;
  }

  rimraf(path.resolve(BUILD_FOLDER, '*.map'), (err) => {
    if (err) {
      console.error('rimraf remove source map error: ' + error);
      return;
    }

    fs.rename(BUILD_FOLDER, DIST_FOLDER, (err) => {
      if (err) {
        console.error('rename error: ' + error);
        return;
      }
    });
  });
});
