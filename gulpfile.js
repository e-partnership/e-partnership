var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var jade = require('gulp-jade');
 
gulp.task('templates', function() {
  var YOUR_LOCALS = {};
 
  gulp.src('./jade/*.jade')
    .pipe(jade({
    //   locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./'))
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', ['browser-sync'], function() {

  gulp.watch('./jade', ['templates']);
});