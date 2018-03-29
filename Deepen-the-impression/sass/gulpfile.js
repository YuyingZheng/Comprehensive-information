var gulp			 = require("gulp"),
	csscomb			 = require("gulp-csscomb"),
	sass			 = require("gulp-sass"),
	autoprefixer     = require('gulp-autoprefixer');

gulp.task("sass-compile",function(){
	return gulp.src('sass/*.scss')
		.pipe(sass().on('error', sass.logError))
	    .pipe(autoprefixer({
            browsers: [
                'last 2 versions',
                'Explorer >= 9',
                'Android >= 4'
            ]
        }))
        .pipe(gulp.dest('css'))
        .pipe(csscomb())
        .pipe(gulp.dest('css'));  
});

gulp.task('watch',function(){
	gulp.watch('sass/*.scss',['sass-compile']);
});