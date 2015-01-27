// TODO minify JS
// TODO maybe later something about styles

var gulp       = require('gulp');
var gutil      = require('gulp-util');
var browserify = require('gulp-browserify');
var reactify   = require('reactify');
var literalify = require('literalify');
var rename     = require('gulp-rename');
var watch      = require('gulp-watch');

gulp.task('js', function() {
  return gulp.src('js/app.js')
             .pipe(browserify({
               debug: true,
               extensions: ['.jsx', '.js', '.json'],
               transform: [reactify, literalify.configure({
                 react: 'window.React'
               })]
             }))
             .on('error', function(err) {
               gutil.log(err.message)
             })
             .pipe(rename('client.js'))
             .pipe(gulp.dest('build'))
})

gulp.task('watch', function () {
    gulp.watch('js/**',['js']);
});

gulp.task('default',['js']);
