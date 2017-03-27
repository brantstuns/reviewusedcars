require('babel-polyfill');

const gulp = require('gulp');
const babel = require('babel-core/register');
const gulpMocha = require('gulp-mocha');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config');
const plumber = require('gulp-plumber');
const gutil = require('gulp-util');
const nodemon = require('gulp-nodemon');
const sass = require('gulp-sass');
const cssimport = require('gulp-cssimport');
const autoprefixer = require('gulp-autoprefixer')

gulp.task('server', function () {
  process.env.port = 3000;
  nodemon({
    script: './server/server.js',
    ext: '.js',
    ignore: ['client/', 'public/']
  });
});

gulp.task('webpack', function () {
  return gulp.src('./client/index.js')
    .pipe(plumber())
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('public/'));
});

gulp.task('dev', [
  'stylesheetsWatch',
  'webpack',
  'server'
]);

//SPEC TASKS
gulp.task('jasmine', function () {
  process.env.NODE_ENV = 'test';
  return bundleUnitTestAssets({watch: true}, false)
    .pipe(jasmineBrowser.specRunner({sourcemappedStacktrace: true}))
    .pipe(jasmineBrowser.server({port: 8888}));
});

gulp.task('unitSpecs', function () {
  process.env.NODE_ENV = 'test';
  return gulp.src('./test/**/*Spec.js')
    .pipe(gulpMocha({
      compilers: {
        js: babel
      }
    }));
});

function bundleUnitTestAssets (options, shouldKillProcess) {
  options = options || {};
  return gulp.src(['./test/**/*Spec.js'])
    .pipe(plumber())
    .pipe(webpack(Object.assign(webpackConfig, options)))
    .on('error', function (err) {
      gutil.log(gutil.colors.red('Building test assets failed'), gutil.colors.red(err));
      if (shouldKillProcess) {
        process.exit(1);
      }
    });
}

function bundleAssets(config, options) {
  options = options || {};
  return gulp.src('./client/index.js')
    .pipe(plumber())
    .pipe(webpack(Object.assign(config, options)));
}

// SASS STYLE TASKS
function stylesheets(compileSass) {
  return gulp.src('client/styles/**/*.scss')
    .pipe(compileSass())
    .pipe(plumber())
    .pipe(cssimport())
    .pipe(autoprefixer())
    .pipe(gulp.dest('public/'));
}

gulp.task('stylesheetsNoThrow', function () {
  return stylesheets(function () {
    return sass().on('error', sass.logError);
  });
});

gulp.task('stylesheets', function () {
  return stylesheets(function () {
    return sass();
  });
});

gulp.task('stylesheetsWatch', ['stylesheetsNoThrow'], function () {
  return gulp.watch('client/styles/*.scss', ['stylesheetsNoThrow']);
});