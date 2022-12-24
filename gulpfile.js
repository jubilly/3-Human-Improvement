const gulp = require('gulp');
const concatCss = require('gulp-concat-css');
const cssNano = require('gulp-cssnano');
const sass = require('gulp-sass')(require('sass'));
const flatten = require('gulp-flatten');

gulp.task('sass', function sassFunc() {
  return gulp
    .src('./src/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/assets'))
    .pipe(concatCss('custom_head.css'));
});

gulp.task('javascript', function sassFunc() {
  return gulp
    .src('./src/**/*.js')
    .pipe(flatten())
    .pipe(gulp.dest('./dist/assets/'));
});

gulp.task('sections', function sassFunc() {
  return gulp
    .src('./src/sections/*.liquid')
    .pipe(flatten())
    .pipe(gulp.dest('./dist/sections/'));
});

gulp.task('snippets', function sassFunc() {
  return gulp
    .src('./src/snippets/*.liquid')
    .pipe(flatten())
    .pipe(gulp.dest('./dist/snippets/'));
});

gulp.task('minify', function minifyFunc() {
  return gulp
    .src('./src/upsell-pop-up.css')
    .pipe(cssNano({ zindex: false }))
    .pipe(gulp.dest('./dist/assets'));
});

gulp.task('watch', function watchFunc() {
  gulp.watch('./src/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/**/*', gulp.series('sections'));
  gulp.watch('./src/**/*', gulp.series('snippets'));
  gulp.watch('./src/**/*', gulp.series('javascript'));
});
