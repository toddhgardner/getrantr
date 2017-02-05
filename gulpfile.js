var gulp    = require('gulp');
var nodemon = require('gulp-nodemon');
var fs      = require('fs');

fs.readdirSync('./build/tasks').forEach(function(file) {
  require('./build/tasks/' + file);
});

gulp.task('start', function() {
  nodemon({
    script: 'src/index.js',
    tasks: ['js', 'sass'],
    ext: 'js html scss',
    env: { 'NODE_ENV': 'development' }
  });
});
