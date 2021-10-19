/*
 | Browser-sync config file
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 | */
 module.exports = {
  "ui": false,
  "files": ['docs/**/*'],
  "watchEvents": [
      "change"
  ],
  "watchOptions": {
      "ignoreInitial": true
  },
  "server": {
      baseDir: "docs"
  },
  "port": 3000,
  "notify": false
};