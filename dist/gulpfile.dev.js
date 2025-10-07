"use strict";

var _require = require('gulp'),
    src = _require.src,
    dest = _require.dest,
    watch = _require.watch,
    series = _require.series;

var sass = require('gulp-sass')(require('sass'));

var postcss = require('gulp-postcss');

var autoprefixer = require('autoprefixer');

var cleanCSS = require('gulp-clean-css');

var rename = require('gulp-rename');

var sourcemaps = require('gulp-sourcemaps');

var terser = require('gulp-terser'); // Шляхи до файлів


var paths = {
  scss: './css/**/*.scss',
  // SCSS файли
  css: './css/',
  // Згенерований CSS сюди
  js: './assets/js/**/*.dev.js',
  // Dev JS файли
  jsDist: './assets/js/' // Мінімізований JS сюди

}; // SCSS → CSS + min.css

function styles() {
  return src(paths.scss).pipe(sourcemaps.init()).pipe(sass().on('error', sass.logError)).pipe(postcss([autoprefixer()])).pipe(dest(paths.css)) // звичайний CSS
  .pipe(cleanCSS()) // мінімізація
  .pipe(rename({
    suffix: '.min'
  })) // style.min.css
  .pipe(sourcemaps.write('.')).pipe(dest(paths.css));
} // JS → мінімізований prod


function scripts() {
  return src(paths.js).pipe(rename({
    suffix: '.prod'
  })) // main.dev.js → main.prod.js
  .pipe(terser()).pipe(dest(paths.jsDist));
} // Watch SCSS та JS


function watchFiles() {
  watch(paths.scss, styles);
  watch(paths.js, scripts);
} // Експорт тасків


exports.styles = styles;
exports.scripts = scripts;
exports.watch = watchFiles;
exports["default"] = series(styles, scripts, watchFiles);