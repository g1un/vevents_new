var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var inline = require('gulp-inline');
var svgmin = require('gulp-svgmin');
var runSequence = require('run-sequence');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('sass', function(){
  return gulp.src('scss/style.scss')
  .pipe(sass({
    outputStyle: 'expanded'
  }))
  .pipe(postcss([
    autoprefixer({
      browsers: ['> 0%']
    })
  ]))
  .pipe(cssnano({zindex: false}))
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('jade', function(){
  return gulp.src('*.jade')
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('inline', function(){
  return gulp.src('app/*.html')
    .pipe(inline({
      base: 'app/img/svg',
      disabledTypes: ['js', 'css', 'img'],
      ignore: ['css', 'js', 'fonts']
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('svgmin', function () {
  return gulp.src('app/img/svg/*.svg')
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(gulp.dest('app/img/svg'));
});

gulp.task('reload', function(){
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('scripts', function() {
    gulp.src(['js/jquery-3.0.0.min.js', 'js/slick.min.js'/*, 'js/jquery.formstyler.js', 'js/enscroll-0.6.2.min.js', 'js/jquery.maskedinput.min.js', 'js/bootstrap/collapse.js', 'js/bootstrap/transition.js', 'js/timer.js'*/, 'js/script.js'])
        // .pipe(concat('all.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('app/js'))
});

gulp.task('watch', ['browserSync', 'jade', 'sass', 'inline', 'scripts', 'svgmin'], function(){
    gulp.watch('**/*.scss', ['sass']);
    gulp.watch('**/*.jade', function() {
      runSequence('jade', 'svgmin', 'inline', 'reload');
    });
    gulp.watch('js/*.js', ['scripts']);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app',
      index: 'index.html'
    }
  })
});