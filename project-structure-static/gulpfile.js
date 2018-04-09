var gulp            = require('gulp'),
    $               = require('gulp-load-plugins')(),/*Loads gulp plugins from package dependencies and attaches them to an object of your choice.*/
    merge           = require('merge-stream'),
    newer           = require('gulp-newer'),
    clean           = require('gulp-clean'),
    rename          = require("gulp-rename"),
    sequence        = require('gulp-sequence'),
    sourcemaps      = require('gulp-sourcemaps'),
    browserSync     = require('browser-sync'),
    taskListing     = require('gulp-task-listing'),
    //html
    fileinclude     = require('gulp-file-include'),
    htmlbeautify    = require('gulp-html-beautify'),
    //css 
    bulkSass        = require('gulp-sass-bulk-import'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    csscomb         = require('gulp-csscomb'),
    cssnano         = require('gulp-cssnano'),
    //js
    concat          = require('gulp-concat'),
    jshint          = require('gulp-jshint'),
    uglify          = require('gulp-uglify'), 
    //image
    imagemin        = require('gulp-imagemin'),
    pngquant        = require('imagemin-pngquant');// condensation png deeply
    //icon
    svgstore        = require('gulp-svgstore'),
    svgmin          = require('gulp-svgmin'),
    path            = require('path');

//========================================================================================================//
//                                            Help Task
//========================================================================================================//
//Provides an easy way to get a listing of your tasks from your gulpfile.

gulp.task('help', taskListing);

//========================================================================================================//
//                                            Clean Task
//========================================================================================================//

//var cleanFolder = ['./dist/{css,views,js,pages,assets}/', './dist/*.html'];
var cleanFolder = ['./dist/'];

gulp.task('clean', function() {
    return gulp.src(cleanFolder, { read: false })
        .pipe(clean({ force: true }));  //force:true For safety files and folders outside the current working directory can be removed only with option force set to true.
});

//========================================================================================================//
//                                            Html Task
//========================================================================================================//

var incHtmlSrc = './src/views/*/*.{html,shtml}',
    incHtmlDest = './dist/views/',
    pageHtmlSrc = './src/views/*.{html,shtml}',
    pageHtmlDest = './dist/views/pages/',
    buildPageDest = './dist/views';

gulp.task('copy-html',function(){
    var copyIncHtml = gulp.src(incHtmlSrc)
        .pipe(newer(incHtmlDest))
        .pipe(gulp.dest(incHtmlDest));

    var copyPageHtml = gulp.src(pageHtmlSrc)
        .pipe(newer(pageHtmlDest))
        .pipe(gulp.dest(pageHtmlDest));

    return merge(copyIncHtml,copyPageHtml);
});

gulp.task('bulid-html',function(){
    return gulp.src(pageHtmlSrc)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(htmlbeautify())
        .pipe(rename({
            extname: '.html'
        }))
        .pipe(gulp.dest(buildPageDest));
}) 

gulp.task('html', function(cb) {
    sequence('copy-html','bulid-html')(cb)
});

//========================================================================================================//
//                                            Css Task
//========================================================================================================//
/* 
    gulp-sass-bulk-import:gulp task to allow importing directories in your SCSS
    @import "some/path/*";
    becomes 
    @import "some/path/file1.scss"; 
    @import "some/path/file2.scss"; 
*/

var cssSrc='./src/sass/app.scss',
    cssDest='./dist/assets/css',
    appCssDest='./dist/assets/css/app.css';

gulp.task('css-compile',function(){
    return gulp.src(cssSrc)
        .pipe(bulkSass())
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: [
                'last 2 versions',
                'Explorer >= 9',    
                'Android >= 4'
            ]
        }))
        .pipe(csscomb())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(cssDest))
        /*.pipe(cssnano())
        .pipe(rename({
            suffix:'.min'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(cssDist));*/ //sourcemap for app.min.css
});

gulp.task('css-minify',function(){
    return gulp.src(appCssDest)
        .pipe(cssnano())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest(cssDest));
});

gulp.task('css', function(cb) {
    sequence('css-compile', 'css-minify')(cb)
});

//========================================================================================================//
//                                            Scripts Task
//========================================================================================================//

var jsVendorSrc='./src/js/*/*.js'
    jsSrc='./src/js/*.js',
    jsDest='./dist/assets/js/';


gulp.task('script',function(){
    var scriptManual = gulp.src(jsSrc)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        //.pipe(gulp.dest(jsDist)) //copy each js to dist
        .pipe(concat('site.js',{newLine: ';'}))
        .pipe(gulp.dest(jsDest))
        .pipe(uglify())                 
        .pipe(rename({
            suffix:'.min'
        }))
        .pipe(gulp.dest(jsDest));

    var scriptVendors = gulp.src(jsVendorSrc)
        .pipe(newer(jsDest))
        .pipe(gulp.dest(jsDest));

    return merge(scriptManual, scriptVendors);
});

//========================================================================================================//
//                                            Images task
//========================================================================================================//
 /*older options:
.pipe(imagemin({
   interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
   progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
   optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）png
   svgoPlugins: true //类型：Boolean 默认：false 多次优化svg直到完全优化
})) 
new options:
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}), --Compress GIF images
    imagemin.jpegtran({progressive: true}),--Compress JPEG images
    imagemin.optipng({optimizationLevel: 5}),-- Compress PNG images
    imagemin.svgo({plugins: [{removeViewBox: true}]}) --Compress SVG images
]))
…
*/

var imgSrc = './src/assets/images/**/*.{png,jpg,gif,svg}',
    imgDest = './dist/assets/images/',
    uploadImgSrc = './src/assets/uploads/**/*.{png,jpg,gif,svg}',
    uploadImgDest = './dist/assets/uploads/'
gulp.task('imgmin', function () {
    var imagesFolder = gulp.src(imgSrc)
        .pipe(newer(imgDest))
        .pipe(imagemin({
            progressive: true, 
            svgoPlugins: [{removeViewBox: false}], //donot remove the property(viewbox) of svg
            use:[pngquant()]                       //use pngquant condensation png deeply
        }))
        .pipe(gulp.dest(imgDest));

    var uploadsFolder = gulp.src(uploadImgSrc)
        .pipe(newer(uploadImgDest))
        .pipe(imagemin())
        .pipe(gulp.dest(uploadImgDest));

    return merge(imagesFolder, uploadsFolder);
});

//========================================================================================================//
//                                            SvgIcons Task
//========================================================================================================//
//We also need a js file named: svgxuse.min.js to support IE (9, 10, 11) to load the
//fetches external SVGs referenced in "<use>" elements.
//Add the code to the bottom of <body> , <script defer src="js/vendors/svgxuse.min.js"></script>

var iconSrc = './src/assets/icons/*.svg',
    iconDest = './dist/assets/icons/';

gulp.task('svgicon', function() {
    return gulp.src(iconSrc)
        .pipe(svgmin())
        .pipe(rename({
            prefix:'icon-'
        }))
        .pipe(gulp.dest(iconDest)) //minify and copy each icon to dist
        .pipe(svgstore())
        .pipe(gulp.dest(iconDest));
});

//========================================================================================================//
//                                            Copy font and upload file(ex img) Task
//========================================================================================================//

var fontSrc='./src/assets/fonts/**',
    fontDest='./dist/assets/fonts/',
    uploadOtherSrc = ['./src/assets/uploads/**/*','!./src/assets/uploads/**/*.{png,jpg,gif,svg}'],
    uploadOtherDest = './dist/assets/uploads/'

gulp.task('copyfiles', function () {
    var uploadsFolder = gulp.src(uploadOtherSrc)
        .pipe(newer(uploadOtherDest))
        .pipe(gulp.dest(uploadOtherDest));
    
    var fontsFolder = gulp.src(fontSrc)
        .pipe(newer(fontDest))
        .pipe(gulp.dest(fontDest));
    
    return merge(uploadsFolder, fontsFolder);
});

//========================================================================================================//
//                                            Build task
//========================================================================================================//

gulp.task('build', function(cb) {
    sequence('html', 'css', 'script', 'imgmin', 'svgicon', 'copyfiles')(cb)
});

//========================================================================================================//
//                                            Watch task
//========================================================================================================//

var watchHtml = ['./src/*.{html,shtml}', './src/views/**/*.{html,shtml}'],
    watchCss = './src/sass/**/*.scss',
    watchJs = './src/js/**/*.js',
    watchImg = ['./src/assets/images/**/*.{png,jpg,gif,svg}', './src/assets/uploads/**/*.{png,jpg,gif,svg}'],
    watchIcon = './src/assets/icons/*.svg',
    watchFontAndOtherUpLoad = ['./src/assets/fonts/**/*','./src/assets/uploads/**/*','!./src/assets/uploads/**/*.{png,jpg,gif,svg}']
    serverFolders = './dist/**/*';

gulp.task('watch',function(){
    
    browserSync.init({
        server: {
            baseDir:'./dist',
            index:'views/index.html'
        },
        notify: false,
        port:2017
    }); 

    gulp.watch(watchHtml,['html']);
    gulp.watch(watchCss,['css']);
    gulp.watch(watchJs,['script']);
    gulp.watch(watchImg,['imgmin']);
    gulp.watch(watchIcon,['svgicon']);
    gulp.watch(watchFontAndOtherUpLoad,['copyfiles']);
    gulp.watch(serverFolders).on('change',browserSync.reload);
})
//========================================================================================================//
//                                            Default task
//========================================================================================================//

gulp.task('default', function(cb) {
    sequence('clean', 'build', 'watch')(cb)
});