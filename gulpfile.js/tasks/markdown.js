var gulp = require('gulp');
var browserSync  = require('browser-sync');
var remarkable = require('gulp-remarkable');
var wrap = require("gulp-wrap");
var handleErrors = require('../lib/handleErrors');
var config      = require('../config/markdown');

// var changed     = require('gulp-changed');




gulp.task('markdown', function() {
	console.log("markdown");

	return gulp.src(config.src)
		// .pipe(frontMatter({property: 'frontMatter', remove: true}))
		.pipe(remarkable({preset: 'commonmark'}))
		.pipe(wrap({src: config.template}))
		.pipe(gulp.dest(config.dest))
		.pipe(browserSync.reload({ stream:true }));
});
