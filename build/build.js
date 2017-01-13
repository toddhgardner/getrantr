var gulp = require('gulp');
var include = require('gulp-include');
var sass = require('gulp-sass');

gulp.task('js', () => {
  return gulp.src('./src/public/scripts/index.js')
    .pipe(include())
    .pipe(gulp.dest('./src/public/'));
});

gulp.task('sass', () => {
  return gulp.src('./src/public/styles/index.scss')
   .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
   .pipe(gulp.dest('./src/public/'));
});
