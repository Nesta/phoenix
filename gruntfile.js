module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
			dev: {
				files: ['src/**/*.sass'],
				tasks: ['sass_globbing','sass:dev'],
			},
			lint: {
				files: ['src/**/*.sass'],
				tasks: ['sasslint','sass:dev'],
			},
		},
		sass: {
			dist: { 
				options: { 
					outputStyle: 'compressed',
				},
				files: { 
					'css/main.css': 'src/sass/main.sass',
				}
			},
			dev: { 
				options: { 
					outputStyle: 'expanded',
					sourceMap: true
				},
				files: { 
					'css/main.css': 'src/sass/main.sass',
				}
			}
		},
		sass_globbing: {
		    your_target: {
		      files: {
		        'src/sass/pages/_pages.sass': 'src/sass/pages/**/*.sass',
		        'src/sass/components/_components.sass': 'src/sass/components/**/**/*.sass',
		      },
		      options: {
		        useSingleQuotes: false,
		        signature: false,
		      }
		    }
		},
		sasslint: {
	        options: {
	            configFile: 'da_vinci.sass-lint.yml',
	        },
	        target: ['src/**/*.sass']
	    },
		browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        'js/*.js',
                        'templates/**/*.twig'
                    ]
                },
                options: {
                    watchTask: true,
                    proxy: 'ddv8.local',
                    ui: false,
                    injectChanges: false,
                }
            }
        },
		accessibility: {
		  options : {
		    accessibilityLevel: 'WCAG2A'
		  },
		  test : {
		    src: ['test.html']
		  }
		},
		tenon: {
		  options: {
		    key: '40e32a06dd46c41330ef0ba1bd9c9492',
		    filter: [31, 54],
		    level: 'AAA',
		    force:false
		  },
		  all: {
		    options: {
		      saveOutputIn: 'allHtml.json',
		      snippet: true,
		      asyncLim: 2,
		      urlPrefix: 'http://www.google.es/'
		    },
		    src: [
		      'test.html'
		    ]
		  },
		},
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-sass-globbing');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass-lint');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-accessibility');
	grunt.loadNpmTasks('grunt-tenon-client');


	// Default task's
	grunt.registerTask('default', ['browserSync','watch:dev']);

	// Watching task for dev
	grunt.registerTask('dev', ['browserSync','watch:dev']);

	// Watching task for lint
	grunt.registerTask('lint', ['watch:lint']);

	// Task for production
	grunt.registerTask('dist', ['sass:dist']);

};

//curl -X POST -H Content-Type:application/x-www-form-urlencoded -H Cache-Control:no-cache -d 'url=http://www.google.es&key=40e32a06dd46c41330ef0ba1bd9c9492' https://tenon.io/api/
