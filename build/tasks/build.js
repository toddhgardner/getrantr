var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build', ['js', 'sass']);

gulp.task('js', () => {});

gulp.task('sass', () => {
  return gulp.src('./src/public/styles/index.scss')
   .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
   .pipe(gulp.dest('./src/public/'));
});
