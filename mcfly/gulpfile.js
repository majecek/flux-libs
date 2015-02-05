var gulp       = require('gulp');
var gutil      = require('gulp-util');
var uglify     = require('gulp-uglify');
var browserify = require('gulp-browserify');
var reactify   = require('reactify');
var to5ify     = require('6to5ify');
var rename     = require('gulp-rename');
var watch      = require('gulp-watch');

gulp.task('js', function() {
  return gulp.src('js/app.js')
             .pipe(browserify({
               debug: true,
               extensions: ['.jsx', '.js', '.json'],
               transform: [to5ify, reactify]
             }))
             .on('error', function(err) {
               gutil.log(err.message)
             })
             .pipe(rename('app.js'))
             .pipe(gulp.dest('build'))
})

gulp.task('build', ['js'], function() {
  return gulp.src('build/app.js')
             .pipe(uglify())
             .pipe(rename('app.min.js'))
             .pipe(gulp.dest('build'));
});

gulp.task('watch', function () {
    gulp.watch('js/**',['js']);
});

gulp.task('default',['js']);
