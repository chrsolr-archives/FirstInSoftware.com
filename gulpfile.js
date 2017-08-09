'use strict';

const config = require('./src/config/config');
const data = require('./src/config/data');
const gulp = require('gulp');
const glp = require('gulp-load-plugins')({
    lazy: true
});

gulp.task('view-home', () =>
    gulp.src('./src/views/partials/*.pug')
        .pipe(glp.pug({
            self: true,
            locals: data.home,
        })).pipe(gulp.dest('./dist'))
);

gulp.task('sass-compile', () =>
    gulp.src(config.paths.SASS + 'style.scss')
        .pipe(glp.sass().on('error', glp.sass.logError))
        .pipe(gulp.dest(config.paths.CSS))
);

gulp.task('minify-autoprefixer', ['sass-compile'], () =>
    gulp.src(config.paths.CSS + 'style.css')
        .pipe(glp.autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(config.paths.CSS))
        .pipe(glp.cssnano(config.css_nano_opts))
        .pipe(glp.rename('style.min.css'))
        .pipe(gulp.dest(config.paths.CSS))
);

gulp.task('move-assets', () =>
    gulp.src(['./src/assets/**.*'], { base: 'src/' })
        .pipe(gulp.dest('./dist'))
);

gulp.task('watch-sass', () =>
    gulp.watch('./src/sass/**/*.scss', ['minify-autoprefixer'])
);

gulp.task('default', ['view-home', 'minify-autoprefixer', 'move-assets']);