var gulp = require('gulp'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    svgSprite = require('gulp-svg-sprite'),
    svgSymbols = require('gulp-svg-symbols'),
    path = require('path'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    sequence = require('gulp-sequence');


var cleanFolder =['../dist/**'];

gulp.task('clean',function(){
    return gulp.src(cleanFolder,{read:false})
    .pipe(clean({force:true}));
});
/* -- */
var iconSrc = ['../icon/*.svg','../icon2/*.svg'],
    iconDest = '../dist/';

gulp.task('svg-sprites',function(){
    return gulp.src(iconSrc)
        .pipe(svgmin())
        .pipe(rename({
            prefix:'icon-'
        }))
        .pipe(svgstore())
        .pipe(rename("icons.svg"))
        .pipe(gulp.dest(iconDest));
});
/* gulp.task('integrate-svg-2',function(){
    return gulp.src(iconSrc2)
        .pipe(svgmin())
        .pipe(rename({
            prefix:'icon-'
        }))
        .pipe(svgstore())
        .pipe(rename("icons2.svg"))
        .pipe(gulp.dest(iconDest));
}); */
/* gulp.task('integrate-svg-2', function(){
    return gulp.src('iconSrc')
        .pipe(svgSprite({
            shape: {
                dimension: {
                    maxWidth: 32,
                    maxHeight: 32
                }
            },
            mode: {
                symbol:true
            }
        }))
        .pipe(rename("icons2.svg"))
        .pipe(gulp.dest('iconDist'));
}); */
gulp.task('svg-sprites-2',function(){
    return gulp.src(iconSrc)
        .pipe(rename({
            prefix:'icon-'
        }))
        .pipe(svgSymbols())

        .pipe(gulp.dest(iconDest));
});
gulp.task('default',function(cb){
    sequence('clean',['svg-sprites'])(cb);
});
