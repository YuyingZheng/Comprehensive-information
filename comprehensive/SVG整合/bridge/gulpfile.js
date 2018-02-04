var gulp = require('gulp'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    path = require('path'),
    rename = require('gulp-rename')
    clean = require('gulp-clean');


var cleanFolder =['../dist/'];

gulp.task('clean',function(){
    return gulp.src(cleanFolder,{read:false})
    .pipe(clean({force:true}));
});
/* -- */
var iconSrc = '../src2/*.svg',
    iconDist = '../dist/';

gulp.task('integrate-svg',function(){
    return gulp.src(iconSrc)
        .pipe(svgmin())
        .pipe(rename({
            prefix:'icon-'
        }))
        .pipe(svgstore())
        .pipe(gulp.dest(iconDist));
});
gulp.task('default', ['clean','integrate-svg']);
