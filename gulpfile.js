var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var jade = require('gulp-jade');
 
gulp.task('templates', function() {
  var YOUR_LOCALS = {};
 
  gulp.src('./jade/*.jade')
    .pipe(jade({
      locals: {
        //   path: path
      }
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

gulp.task('watch', function() {
  gulp.watch('./jade/**/*.jade', ['templates'], function() {
       browserSync.reload();
  });
 gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch'])