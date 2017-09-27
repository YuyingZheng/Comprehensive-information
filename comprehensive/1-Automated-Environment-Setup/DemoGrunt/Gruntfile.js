module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		csscomb: {
			options: {
				config: 'csscomb.json' //From bootstrap https://github.com/twbs/bootstrap/blob/master/less/.csscomb.json
			},
			dist: {
				expand: true,
				cwd: 'src/sass',
				src: ['**/*.scss'],
				dest: 'src/sass'
			}
		},
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'dist/css/styles.css': 'src/sass/styles.scss'
				}
			}
		},
		postcss: {
			options: {
				map: true,
				processors: [
					require('autoprefixer')({
						browsers: [
							'Chrome >= 35',
							'Firefox >= 31',
							'Edge >= 12',
							'Explorer >= 9',
							'iOS >= 8',
							'Safari >= 8',
							'Android 2.3',
							'Android >= 4',
							'Opera >= 12'
						]
					})
				]
			},
			dist: {
				src: 'dist/css/*.css'
			}
		},
		cssmin: {
			options: {
				compatibility: 'ie9',
				keepSpecialComments: '*',
				advanced: false
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'dist/css',
					src: ['*.css', '!*.min.css'],
					dest: 'dist/css',
					ext: '.min.css'
				}]
			}
		},
		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: 'src/images',
					src: ['*'],
					dest: 'dist/images'
				}]
			}
		},
		watch: {
			image: {
				files: 'src/images/*',
				tasks: ['newer:imagemin']
			},
			sass: {
				options: {
					livereload: true
				},
				files: 'src/sass/**/*.scss',
				tasks: ['default']
			},
			reload: {
				files: ['dist/**/*.html', 'dist/css/*', 'dist/js/*', 'dist/images/*'],
				options: {
					livereload: true
				}
			}
		}
	});


	// Default task(s).
	grunt.registerTask('default', ['sass', 'csscomb', 'postcss', 'cssmin']);

};
