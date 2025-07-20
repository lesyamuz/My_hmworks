"use strict";

var gulp = require('gulp');

var sass = require('gulp-sass')(require('sass'));

var postcss = require('gulp-postcss');

var autoprefixer = require('autoprefixer');

gulp.task('styles', function () {
  return gulp.src('assets/css/**/*.scss').pipe(sass().on('error', sass.logError)).pipe(postcss([autoprefixer()])).pipe(gulp.dest('assets/css'));
});
gulp.task('watch', function () {
  gulp.watch('assets/css/**/*.scss', gulp.series('styles'));
});