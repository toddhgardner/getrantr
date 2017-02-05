var dns       = require('dns');
var gulp      = require('gulp');
var gutil     = require('gulp-util');

gulp.task('test-env-check', function(done) {
  function checkAddr(name, addr, next) {
    dns.lookup(name, function(err, result) {
      if (err || addr !== result) {
        gutil.log(gutil.colors.red('Hostname ' + gutil.colors.bold(name) +
          ' did not resolve to expected address ' + gutil.colors.bold(addr)));
        gutil.log(gutil.colors.red('Aborting test. Please see ' + gutil.colors.bold('README.md') +
          ' for information on developer environment setup.'));
        gutil.beep();
        done('hosts file is not configured correctly.');
      }
      else {
        next();
      }
    });
  }
  checkAddr('getrantr.io', '127.0.0.1', function() {
    checkAddr('cdn.getrantr.io', '127.0.0.1', done);
  });
});
