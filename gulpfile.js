const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js') // Inclui todos os arquivos JS em subpastas
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}


function styles() {
    return gulp.src('./src/styles/*.scss') // Inclui todos os arquivos SCSS em subpastas
        .pipe(sass({outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)); // Observa todos os arquivos SCSS em subpastas
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts)); // Observa todos os arquivos JS em subpastas
}