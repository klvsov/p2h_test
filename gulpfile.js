const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const cssnano = require('gulp-cssnano');

gulp.task('scss', (callback) => {
  return gulp
    .src('./src/scss/main.scss')
    .pipe(
      plumber({
        errorHandler: notify.onError((err) => {
          return {
            title: 'Styles',
            sound: false,
            message: err.message,
          };
        }),
      })
    )
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 4 versions'],
      })
    )
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/css/'));
  callback();
});

gulp.task('watch', () => {
  watch(['./*.html', './build/css/*.css'], gulp.parallel(browserSync.reload));

  watch('./src/scss/*.scss', () => {
    setTimeout(gulp.parallel('scss'), 1000);
  });
});

gulp.task('server', () => {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
});

gulp.task('default', gulp.parallel('server', 'watch', 'scss'));
