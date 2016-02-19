module.exports = function(grunt) {
	
	var host="http://ddv8.local/"

	require('es6-promise').polyfill();

	grunt.initConfig({
		twig: {
    		dist: {
        		options: {
            		base: 'build'
        		}
    		}
		},
		watch: {
			dev: {
				files: ['src/**/*.sass'],
				tasks: ['sass_globbing','sass:dev'],
			},
			lint: {
				files: ['src/**/*.sass'],
				tasks: ['sasslint','sass:dev'],
			},
			twig: {
				
				tasks: ['twig'],
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
                    proxy: host,
                    ui: false,
                    injectChanges: false,
                }
            }
        },
        postcss: {
		    options: {
		      	map: false, // inline sourcemaps
				// or
				map: {
					inline: false, // save all sourcemaps as separate files...
					annotation: 'dist/css/maps/' // ...to the specified directory
				},
			    processors: [
			        require('autoprefixer')({browsers: ['> 1%', 'last 2 versions', 'Firefox >= 20']}), // add vendor prefixes
			    ]
		    },
		    dist: {
		    	src: 'css/style.css'
		    }
		},
		checkPages: {
		    development: {
		      options: {
		        pageUrls: [ 'http://ddv8.local/', ],
		        checkLinks: true,
		        onlySameDomain: true,
		        queryHashes: true,
		        noRedirects: true,
		        noLocalLinks: true,
		        noEmptyFragments: true,
		        checkXhtml: true,
		        checkCaching: true,
		        checkCompression: true,
		        maxResponseTime: 200000,
		        userAgent: 'custom-user-agent/1.2.3',
		        summary: true,
		        linksToIgnore: [
		          'http://ddv8.local/rss.xml',
		          'http://ddv8.local/themes/da_vinci/favicon.ico',
		          'http://ddv8.local/themes/da_vinci/logo.svg',
		          'http://ddv8.local/core/assets/vendor/domready/ready.min.js?v=1.0.8',
		          'http://ddv8.local/core/assets/vendor/jquery/jquery.min.js?v=2.1.4',
		          'http://ddv8.local/core/misc/drupalSettingsLoader.js?v=8.0.2',
		          'http://ddv8.local/sites/default/files/languages/es_RqQhLrjlXHt-st64kduHsYbqgkE5r83hwNx6BaiZbLo.js?o2kx06',
		          'http://ddv8.local/themes/da_vinci/js/da-vinci.js?o2kx06',
		          'http://ddv8.local/core/misc/drupal.js?v=8.0.2',
		          'http://ddv8.local/core/*'
		        ],
		      }
		    },
		  },
		accessibility: {
			options : {
				accessibilityLevel: 'WCAG2A'
			},
			test : {
				src: [
					//'templates/**/*.twig',
					'http://ddv8.local',
				]
			}
		},
		output_twig: {
		    settings: {
		      	options: {
		        	docroot: 'templates/'
		      	},
				files: [
					{
					  expand: true,
					  cwd: 'templates/',
					  src: ['**/*.twig','!_**/*', '!**/_*', '!_*'],
					  dest: 'test/output/',
					  ext: '.html'
					}
				]
		    }
		},
		twigRender: {
		    options: {
		      // Task-specific options go here. 
		    },
		    your_target: {
		      options: {
		        // Target specific options go here 
		      },
		      files : [
		        {
		          	//data: "path/to/data/file.json",
		          	expand: true,
				    cwd: 'templates/',
				    src: ['**/*.twig', '!**/_*.twig'],
				    dest: "test/output/",
				    ext: '.html'
		        }
		      ]
		    },
		},
		validation: {
		    options: {
		        reset: grunt.option('reset') || false,
		        stoponerror: false,
		        remotePath: "http://www.google.com",
		        remoteFiles: ["/"],
		        relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.'], //ignores these errors 
		        generateReport: true,
		        errorHTMLRootDir: "w3cErrorFolder",
		        useTimeStamp: true,
		        errorTemplate: "w3c_validation_error_Template.html"
		    },
		},
		pa11y: {
		    options: {
				url: host,
				debug: true,
		    }
		},
		w3c_markup_validation : {
			failOnError : true,
			pages : ['http://ddv8.local'],
			ignore : ['no document type delaration']
			// pages: ['url', 'url'],
		},
		unicorn: {
		    options: {
		      // Don't put anything here, unless it's a clever comment 
		    },
		    your_target: {
		      // I'm not sure why you'd want this yet either 
		    },
		},
		w3c_validator: {
			//url: 'http://validator.w3.org/nu/?doc=http%3A%2F%2Fwww.google.com%2F&out=json',			
			development: {
		      	options: {		
					domain: 'http://www.marca.com/',
					paths: [
						'baloncesto.html',
						'motor.html',
						]
		    	},	
	    	}
	    },
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-sass-globbing');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass-lint');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-check-pages');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-accessibility');
	grunt.loadNpmTasks('grunt-output-twig');
	grunt.loadNpmTasks('grunt-twig-render');
	grunt.loadNpmTasks('grunt-w3c-html-validation');
	grunt.loadNpmTasks('grunt-pa11y'); // phantomjs required
	grunt.loadNpmTasks('grunt-w3c-markup-validation');
	grunt.loadNpmTasks('grunt-twig');
	grunt.loadNpmTasks('grunt-unicorn');



	grunt.registerTask('val', ['validation']);
	grunt.registerTask('markup', ['w3c_markup_validation']);

	// Default task
	grunt.registerTask('default', ['browserSync','watch:dev']);

	// Watching task for dev (compile to expanded css with sourcemap)
	grunt.registerTask('dev', ['browserSync','watch:dev']);

	// Watching task for lint ()
	grunt.registerTask('lint', ['watch:lint']);

	// Task for production (compile to compressed css without sourcemap and prefixes)
	grunt.registerTask('dist', ['sass:dist', 'postcss']);

	grunt.registerTask('serve', [
    	'php:dist',
    	'watch'
	]);


	grunt.registerMultiTask('w3c_validator', 'Accesibility validator through W3C API', function() {

	    var http = require('http');
		var done = this.async();
		var completed_requests = 0;
		var responses = [];
    	var domain = grunt.config.get('w3c_validator.development.options.domain');
    	var paths = grunt.config.get('w3c_validator.development.options.paths');
		
		var callAPIValidate = function(i){

			var path = paths[i];
			var url = encodeURI("http://validator.w3.org/nu/?doc=" + domain + path + "&out=json");
			
			http.get(url, function(res) {
		    	res.on('data', function(data){
		    		responses[i].push(data);
		    	});

			    res.on('end', function () {

			    	grunt.log.header("W3c Validation results for:");
    				grunt.log.subhead(url);

	    			var results = responses[i].join("");
		    		var results = JSON.parse(results);

		    		for(var a=0; a<results.messages.length; a++){
		    			if (results.messages[a].type == "info") {

					        grunt.log.ok("["+results.messages[a].type+"] " + results.messages[a].message);
					        grunt.log.writeln(">> Line: "+results.messages[a].lastLine)
					        grunt.log.writeln(">> Extract: " + results.messages[a].extract);
					        grunt.log.writeln("--------");

					    }
					    else if (results.messages[a].type == "error") {

					        grunt.log.error("["+results.messages[a].type+"] " + results.messages[a].message);
					        grunt.log.writeln(">> Line: "+results.messages[a].lastLine)
					        grunt.log.writeln(">> Extract: " + results.messages[a].extract);
					        grunt.log.writeln("--------");

					    }
				    }
		    		//done();
		    	});
		  	}).on('error', function (err) {

		    	grunt.warn(err);
		    	done(err);

		  	});
		}
		for (var i=0; i<paths.length; i++) {
			responses.push([]);
		  	callAPIValidate(i);
		}

  	});

};
