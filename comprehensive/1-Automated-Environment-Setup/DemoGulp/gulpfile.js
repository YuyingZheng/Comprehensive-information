var gulp            = require('gulp');

var $               = require('gulp-load-plugins')();/*Loads gulp plugins from package dependencies and attaches them to an object of your choice.*/

var autoprefixer    = require('gulp-autoprefixer');
var csscomb         = require('gulp-csscomb');
var sass            = require('gulp-sass');
var cssnano         = require('gulp-cssnano');
var rename          = require("gulp-rename");
var sourcemaps      = require('gulp-sourcemaps');

var concat          = require('gulp-concat');
var jshint          = require('gulp-jshint');
var uglify          = require('gulp-uglify'); 

var imagemin        = require('gulp-imagemin');
var newer           = require('gulp-newer');  //newer(dest)
var pngquant        = require('imagemin-pngquant');// 深度压缩png

var merge           = require('merge-stream');//Merge (interleave) a bunch of streams(merge multi-streams in the task)
var sequence        = require('gulp-sequence');  //Run a series of gulp tasks in order.
 
var svgSprite       = require('gulp-svg-sprite');
var svgmin          = require('gulp-svgmin');
var svgstore        = require('gulp-svgstore');

var notify          = require('gulp-notify');
var clean           = require('gulp-clean');
var browserSync = require('browser-sync');
var replace         = require('gulp-replace');
/*var browserSync     = require('browser-sync');*/
/*var reload          = browserSync.reload;*/
/*var livereload    = require('gulp-livereload');  */

var gcmq            = require('gulp-group-css-media-queries');

var path            = require('path');
var bump            = require('gulp-bump');
/*List all tasks (name includ c、-、_task就被认为是子task)*/
gulp.task('help',$.taskListing);

/*Bump any version in any file which supports semver versioning*/

/*------------styles---------------------------*/
gulp.task('csscomb', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(csscomb())
        .pipe(gulp.dest('src/sass/'))
        /*.pipe(notify({ message: 'csscomb task complete'}));*/
});


gulp.task('css-compile', function () {
    return gulp.src('src/sass/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: [
                'last 2 versions',
                'Explorer >= 9',    
                'Android >= 4'
            ]
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(gcmq()) //gulp-group-css-media-queries
        .pipe(cssnano({
            zindex:true//Unsafe optimisation, please check here for details http://cssnano.co/optimisations/
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest('dist/css'));
     /*   .pipe(browserSync.stream());*/
        /*.pipe(notify({ message: 'css-compile task complete'}));*/
       ;
});

gulp.task('styles',sequence('csscomb','css-compile'));
/*// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('serve',['css-compile'], function() {
    browserSync.init({
        server: "./DemoGulp"
    });    
        gulp.watch("src/scss/.scss", ['css-compile']);
        gulp.watch("dist/*.html").on('change', reload);
});*/

/*gulp.task('cssminify', function(){
    return gulp.src(['*.css','!*.min.css'], {cwd: 'dist/css'})
        .pipe(sourcemaps.init())
        .pipe(cssnano({
            zindex:true//Unsafe optimisation, please check here for details http://cssnano.co/optimisations/
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest('dist/css'));
});*/
/*------------js------------*/

gulp.task('scripts',function(){
    return gulp.src('src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest('dist/js'))
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rename({
            suffix:'.min'
        }))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('imagesmin', function () {
    var imagesFolder = gulp.src('src/images/*')
        .pipe(newer('dist/images'))
        .pipe(imagemin({
           /* optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化*/
            progressive:true,
            svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        }))
        .pipe(gulp.dest('dist/images'));
    var uploadsFolder = gulp.src('src/uploads/*.{png,jpg,gif}')
        .pipe(newer('dist/uploads'))
        .pipe(imagemin())
        .pipe(gulp.dest('dist/uploads'));
    return merge(imagesFolder, uploadsFolder);
});

gulp.task('copyfiles', function () {
    var uploadsFolder = gulp.src(['*','!*.{png,jpg,gif}'], {cwd: 'src/uploads'})
        .pipe(newer('dist/uploads'))
        .pipe(gulp.dest('dist/uploads'));
    var fontsFolder = gulp.src('src/fonts/*')
        .pipe(newer('dist/css/fonts'))
        .pipe(gulp.dest('dist/css/fonts'));
    return merge(uploadsFolder, fontsFolder);
});

gulp.task('svgSprite', function(){
    gulp.src('src/svg/*.svg')
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
        .pipe(gulp.dest('dist/svg'));
});
//Id of symbol element is calculated from file name. You cannot pass files with the same name, because id should be unique.
//If you need to add prefix to each id, please use gulp-rename:
gulp.task('svgstore', function () {
    return gulp.src('src/svg/*.svg')
        .pipe(svgmin(function(file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(rename({
             prefix:'icon-'  
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('dist/svg'));
});

gulp.task('clean',function(){
    return gulp.src(['css/*','js/*','images/*','svg/*','uploads/*'],{read:false,cwd:'dist'})
        .pipe(clean());
});


/*gulp.task('styles',function(cb){
    sequence('csscomb','css-compile',cb);
});*/

// 静态服务器


gulp.task('watch', function () {
   /* livereload.listen();*/

    browserSync.init({
        server: './dist/',
        notify: false,
        logFileChanges: true,
        port:8080
    });

    gulp.watch('src/sass/**/*.scss', ['styles']);
    gulp.watch('src/js/**/*.js',['scripts']);
    gulp.watch(['src/images/*','src/uploads/*.{png,jpg,gif}'], ['imagesmin']);
    gulp.watch(['src/uploads/*','!src/uploads/*.{png,jpg,gif}'], ['copyfiles']);
    gulp.watch('./dist/**/*').on('change', browserSync.reload);

  /*  var server = livereload();

    // 看守所有位在 dist/  目录下的档案，一旦有更动，便进行重整
    gulp.watch(['dist/**']).on('change', function(file) {
    server.changed(file.path);
  });*/
});


gulp.task('default',sequence('clean',['styles','scripts','imagesmin','svgstore','copyfiles','watch']));