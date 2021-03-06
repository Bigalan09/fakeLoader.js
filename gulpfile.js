var gulp = require('gulp');
var minify = require('gulp-minify');
var rename = require("gulp-rename");
var cleanCSS = require('gulp-clean-css');

gulp.task('default', ['minify:css', 'minify:js'], function() {});

gulp.task('minify:css', function() {
    return gulp.src('fakeLoader.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('minify:js', function() {
    return gulp.src('fakeLoader.js')
        .pipe(minify({
            ext: {
                src: '-debug.js',
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest('dist/js'));
});
