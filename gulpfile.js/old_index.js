var gulp = require('gulp');
var del = require('del');
var remarkable = require('gulp-remarkable');
var wrap = require("gulp-wrap");
var frontMatter = require('gulp-front-matter');
var browserSync = require('browser-sync');
var reload = browserSync.reload;





gulp.task('clean', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del.sync(['public'], cb);
});



gulp.task('copy', function() {
	return gulp.src("./src/**")
	.pipe(gulp.dest("./public/"))
	.pipe(reload({ stream:true }));
});

gulp.task('markdown', function() {
	console.log("markdown");

	return gulp.src("./*.md")
		// .pipe(frontMatter({property: 'frontMatter', remove: true}))
		.pipe(remarkable({preset: 'commonmark'}))
		.pipe(wrap({src: 'layouts/default.html'}))
		.pipe(gulp.dest("./public/"))
		.pipe(reload({ stream:true }));
});


gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'public'
    }
  });

  gulp.watch(['./src/**'], ['copy']);
  gulp.watch(['./*.md', './layouts/*.html'], ['markdown']);
});



gulp.task('default', ['clean', 'markdown', 'copy', 'serve']);
