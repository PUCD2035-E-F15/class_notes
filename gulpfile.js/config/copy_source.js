var config = require('./')

module.exports = {
  src: [config.sourceAssets + '/**/*', config.contentAssets + '/**/*.html', config.contentAssets + '/**/*.js'],
  dest: config.publicAssets
}
