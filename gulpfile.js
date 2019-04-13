let gulp = require('gulp'),
    sass = require('gulp-sass'),// sass в сss
    prefix = require('gulp-autoprefixer'),// тегам в css дає кросбраузні префікси
    browserSync = require('browser-sync').create(), //обновля після зміни файлів.
    useref = require('gulp-useref'),//в теорії собирає всі файли в 1
    csso = require('gulp-csso'),//мініфікатор css
    webpackStream = require('webpack-stream'),//підключення WEBPACK в GULP
    named = require('vinyl-named'),//для webpack-а якшо багато js файлів шоб сохранялись імена.
    image = require('gulp-image'), //сжима картінки
    concatCss = require('gulp-concat-css'), //всі css в один файл
    pug = require('gulp-pug'); //pug в html
    // uglify = require('gulp-uglify'),//сжимає JSфайли в 1 строчку
    // connect = require('gulp-connect');// перезапуска JS після зміни


gulp.task('style', function () {
   gulp.src('./frontend/styles/*.sass')
       .pipe(sass())
       .pipe( prefix({
           browsers: ['last 20 versions']
       }) )
       .pipe(concatCss("index.css"))
       .pipe(gulp.dest('./ready/css'))
       .pipe(browserSync.stream());
});

gulp.task('image', function () {
    gulp.src('./frontend/img/*')
        .pipe(image())
        .pipe(gulp.dest('./ready/img'))
        .pipe(browserSync.stream());
});

gulp.task('server', function(){
    browserSync.init({
        server: {
            baseDir: "./ready"
        }
    });
});


gulp.task('build', function(){
    gulp.src('./frontend/*.html')
        .pipe(useref())
        .pipe(gulp.dest('./ready'))
        .pipe(browserSync.stream());
});

gulp.task('js', function(){
    gulp.src('./frontend/JS/*.js')
        .pipe(named())
        .pipe(webpackStream({
            output: {
                filename: "[name].js"
            },
        }))
        .pipe(gulp.dest('./ready/js'))
        .pipe(browserSync.stream());
});

gulp.task('pug', function () {
    return gulp.src('./frontend/Pug/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./ready'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function(){
    gulp.watch('./frontend/styles/**/*.sass', ['style']);
    gulp.watch('./frontend/*.html', ['build']);
    gulp.watch('./frontend/Pug/**/*.pug', ['pug']);
    gulp.watch('./frontend/JS/**/*.js', ['js']);
    gulp.watch('./frontend/img/*', 'image');
});

gulp.task('default', ['build', 'pug', 'style', 'image', 'js', 'server', 'watch']);