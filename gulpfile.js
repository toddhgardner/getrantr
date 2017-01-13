var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var fs = require('fs');

fs.readdirSync('./build').forEach(function(file) {
  require('./build/' + file);
});

gulp.task('start', function() {
  nodemon({
    script: 'src/index.js',
    tasks: ['js', 'sass'],
    ext: 'html scss',
    env: { 'NODE_ENV': 'development' }
  });
});
