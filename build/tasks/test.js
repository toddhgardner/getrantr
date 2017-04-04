var gulp      = require('gulp');
var gutil     = require('gulp-util');
var webdriver = require('gulp-webdriver');
var mkdirp    = require('mkdirp');
var path      = require('path');
var selenium  = require('selenium-standalone');

var BASE_PATH = path.resolve(__dirname, '../..');

gulp.task('test', ['build', 'test:e2e']);

gulp.task('selenium', (done) => {
  mkdirp(BASE_PATH + '/log', (err) => {
    if (err) { gutil.log(gutil.colors.red(err)); return done(err); }
    var seleniumConfig = {
      version: '3.0.1',
      acceptSslCerts: true,
      baseURL: 'https://selenium-release.storage.googleapis.com',
      drivers: {
        chrome: {
          version: '2.24',
          arch: process.arch,
          baseURL: 'https://chromedriver.storage.googleapis.com'
        }
      }
    };
    selenium.install(seleniumConfig, (err) => {
      if (err) { gutil.log(gutil.colors.red(err)); return done(err); }
      selenium.start(seleniumConfig, (err, child) => {
        if (err) { gutil.log(gutil.colors.red(err)); return done(err); }
        selenium._process = child;
        done();
      });
    });
  });
});

gulp.task('test:e2e', ['test-server', 'selenium'], () => {
  return gulp.src(BASE_PATH + '/build/config/wdio.conf.js')
    .pipe(webdriver())
    .on('end', () => { selenium._process.kill(); process.exit(); })
    .on('error', (err) => { gutil.log(gutil.colors.red(err)); selenium._process.kill(); throw err; });
});

gulp.task('test-server', (done) => {
  require(BASE_PATH + '/src/index.js');
  done();
});
