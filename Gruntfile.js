module.exports = function(grunt) {
	const sass = require('node-sass');
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		connect: {
			server: {
				options: {
          			hostname: 'localhost',
          			port: 3000,
					livereload: true,
        		}
			}
		},
		sass: {
			options: {
				implementation: sass,
				sourceMap: true
			},
			dist: {
				files: {                         
					'src/assets/css/main.css': 'src/assets/scss/main.scss',       
				}
			}
		},
		watch: {
			scripts: {
				files: ['*.html', 'src/assets/scss/**/*.scss'],
				tasks: ['sass'],
				options: {
					livereload: true
				},
			},
		},
		cssmin: {
			options: {
			  mergeIntoShorthands: false,
			  roundingPrecision: -1
			},
			target: {
				src : ["src/assets/css/main.css"],
				dest : "dist/css/style.min.css"
			}
		  },
		  uglify: {
			my_target: {
			  files: {
				'dist/js/.min.js': ['src/assets/js/index.js']
			  }
			}
		},
		imagemin: {
            png: {
              options: {
				optimizationLevel: 7
              },
              files: [
                {
                  expand: true,
                  cwd: 'src/assets/img/',
				  src: ['**/*.png'],
                  dest: 'dist/img/',
                  ext: '.png'
                }
              ]
            }
        }
	});
	
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default', ['sass', 'connect','cssmin', 'uglify', 'imagemin', 'watch']);
};