var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var coffee = require('gulp-coffee');
var coffeelint = require('gulp-coffeelint');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  sass: ['./scss/**/*.scss'],
  coffee: ['./src/**/*.coffee']
};

gulp.task('default', ['sass', 'watch']);

gulp.task('lint', function () {
  return gulp.src('./src/**/*.coffee')
    .pipe(coffeelint('coffeelint.json'))
    .pipe(coffeelint.reporter());
});

gulp.task('coffee', function () {
  return gulp.src(paths.coffee)
    .pipe(sourcemaps.init())
      .pipe(coffee())
      .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./www/js'));
});

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', ['coffee'], function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.coffee, ['coffee']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
