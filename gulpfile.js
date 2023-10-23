var gulp    = require('gulp');
var nodemon = require('gulp-nodemon');
var gulpSass = require('gulp-sass')(require('sass'));

function sass() {
  return gulp.src('./src/public/styles/index.scss')
    .pipe(gulpSass({ outputStyle: 'compressed' }).on('error', gulpSass.logError))
    .pipe(gulp.dest('./src/public/'));
}

exports.build = sass;

exports.start = gulp.series(exports.build, () => {
  return nodemon({
    script: 'src/index.js',
    tasks: ['build'],
    ext: 'js html scss',
    env: { 'NODE_ENV': 'development' }
  });
});
