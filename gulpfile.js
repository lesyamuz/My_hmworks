const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

gulp.task('styles', function () {
  return gulp.src('assets/css/**/*.scss')   
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('assets/css'));          
});

gulp.task('watch', function () {
  gulp.watch('assets/css/**/*.scss', gulp.series('styles'));  
});
