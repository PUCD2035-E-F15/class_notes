var config = require('./')

module.exports = {
  src: [config.sourceAssets + '/**/*', config.contentAssets + '/**/*.html', config.contentAssets + '/**/*.png', config.contentAssets + '/**/*.jpg', config.contentAssets + '/**/*.js', config.contentAssets + '/**/*.css'],
  dest: config.publicAssets
}
