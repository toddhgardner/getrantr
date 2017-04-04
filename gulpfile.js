var gulp    = require('gulp');
var nodemon = require('gulp-nodemon');
var fs      = require('fs');

fs.readdirSync('./build/tasks').forEach(function(file) {
  require('./build/tasks/' + file);
});

gulp.task('start', ['build'], function() {
  nodemon({
    script: 'src/index.js',
    tasks: ['build'],
    ext: 'js html scss',
    env: { 'NODE_ENV': 'development' }
  });
});
