'use strict';

const gulp = require('gulp');
const glp = require('gulp-load-plugins')({
    lazy: true
});

gulp.task('gulp-compile', function () {
    return gulp.src('./src/views/**/*.pug')
        .pipe(glp.pug({
            // Your options in here. 
        }))
});

gulp.task('default', ['gulp-compile']);