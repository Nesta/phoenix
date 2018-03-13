/**
 * Created by rvergara on 6/02/17.
 */
'use strict';

/****** DEPENDENCIES ********/

var autoprefixer = require('autoprefixer'),
    browserSync = require('browser-sync').create(),
    converter = require('sass-convert'),
    color = require('colors'),
    del = require('del'),
    gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    jsHint = require('gulp-jshint'),
    jsHintStylish = require('jshint-stylish'),
    postCss = require('gulp-postcss'),
    pngquant = require('imagemin-pngquant'),
    process = require('yargs').argv,
    sassDoc = require('sassdoc'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    sassLint = require('gulp-sass-lint'),
    sourceMaps = require('gulp-sourcemaps');

/********** VARIABLES *************/

// Hosts - change localhost for see it in browsersync
var path = 'localhost';

// Paths

var srcAssets = {
    styles    : 'src/sass/',
    images    : 'src/images/'
};

var distAssets = {
    styles    : 'css/',
    js        : 'js/'
};

// Sass Doc
var sassDocDist = 'sass_doc';

var sassDocOptions = {
    dest: sassDocDist,
    verbose: true,
    display: {
        access: ['public', 'private'],
        alias: true,
        watermark: true
    },
    groups: {
        'undefined': 'Ungrouped',
        foo: 'Foo group',
        bar: 'Bar group'
    },
    description: 'Sassdoc for theme phoenix',
};

/********** TASKS ***************/

gulp.task('default', function(){
    console.log('');
    console.log('Cleaning tasks'.yellow);
    console.log('gulp ' + 'clean:css'.cyan + '                           ' + '# Clean css files from css directory'.grey);
    console.log('');
    console.log('Compiling tasks'.yellow);
    console.log('gulp ' + 'imagemin'.cyan + '                            ' + '# Minifiy your images in ./src/images into ./images'.grey);
    console.log('gulp ' + 'styles:dev'.cyan + '                          ' + '# Compile expanded css and create a maps file.'.grey);
    console.log('gulp ' + 'styles:pro'.cyan + '                          ' + '# Compile compressed css, apply autoprefixer to result.'.grey);
    console.log('');
    console.log('Utils tasks'.yellow);
    console.log('gulp ' + 'clean:sassdoc'.cyan + '                       ' + '# Clean sassdoc directory.'.grey);
    console.log('gulp ' + 'sassdoc'.cyan + '                             ' + '# Create a static internal page with a sass styleguide: variables, mixins, extends...'.grey);
    console.log('');
    console.log('Debugging tasks'.yellow);
    console.log('gulp ' + 'sasslint'.cyan + '                            ' + '# Check sass files looking for a bad code practises .'.grey);
    console.log('gulp ' + 'jshint'.cyan + '                              ' + '# Check js files looking for a wrong syntaxis.'.grey);
    console.log('');
    console.log('Watching tasks'.yellow);
    console.log('gulp ' + 'watch'.cyan + '                              ' + '# Run a defined tasks if any specified files are changed.'.grey);
    console.log('gulp ' + 'watch -h'.cyan + ' yourhost'.green + '                  ' + '# Modifies your host to use BrowserSync.'.grey);
    console.log('gulp ' + 'browsersync'.cyan + '                        ' + '# Synchronize browser and device in realtime and reload browser if any specified files are changed.'.grey);
    console.log('');
    console.log('Developing task'.yellow);
    console.log('gulp ' + 'dev:browser'.cyan + '                        ' + '# Run styles:dev to compile to development enviroment, run jshint and run browserSync to synchronize browser.'.grey);
    console.log('gulp ' + 'pro'.cyan + '                                ' + '# Run styles:pro to compile to production enviroment, run jshint and run sassdoc.'.grey);
    console.log('');
    console.log('Watching task example'.yellow);
    console.log('gulp ' + 'watch -h'.cyan + ' localhost'.green + '             ' + '# To configure hosts as davinci.local.'.grey);
    console.log('');
});


/************* CLEANING *****************/

// Clean css
gulp.task('clean:css', function () {
    return del([
        distAssets.styles + '*.css'
    ]);
});

/************* COMPILING *****************/
// Minify images
gulp.task('imagemin', function () {
    return gulp.src('./src/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./images'));
});

// Css to development
gulp.task('styles:dev', function () {
    return gulp.src([srcAssets.styles + '**/*.s+(a|c)ss'])
        .pipe(sourceMaps.init())
        .pipe(sassGlob())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(sourceMaps.write('maps'))
        .pipe(gulp.dest(distAssets.styles))
        .pipe(browserSync.stream());
});

// Css to producction
gulp.task('styles:pro', ['clean:css'], function () {
    return gulp.src([srcAssets.styles + '**/*.s+(a|c)ss'])
        .pipe(sassGlob())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(postCss([
            autoprefixer({
                browsers: ['> 1%', 'ie 8', 'last 2 versions'] }
            )
        ]))
        .pipe(gulp.dest(distAssets.styles));
});

/************* SassDoc *****************/

// Clean Sassdoc
gulp.task('clean:sassdoc', function () {
    return del([
        sassDocDist
    ]);
});

// Sassdoc
gulp.task('sassdoc', ['clean:sassdoc'], function () {
    return gulp.src(srcAssets.styles + '**/*.s+(a|c)ss')
        .pipe(converter({
            from: 'sass',
            to: 'scss',
        }))
        .pipe(sassDoc(sassDocOptions));
});

/************* DEBUGGING *****************/

// Sass lint
gulp.task('sasslint', function () {
    return gulp.src(srcAssets.styles + '**/*.s+(a|c)ss')
        .pipe(sassLint({
            options: {
                configFile: 'da_vinci.sass-lint.yml'
            }
        }))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
});

// jsHint
gulp.task('jshint', function(){
    return gulp.src([distAssets.js + '**/*.js'])
        .pipe(jsHint())
        .pipe(jsHint.reporter(jsHintStylish))
        .pipe(browserSync.stream());
});

/************** DEMONS **********************/

// WATCH
gulp.task('watch', function(){
    gulp.watch(srcAssets.styles + '**/*.s+(a|c)ss', ['styles:dev'])
        .on('change', function(event) {
            console.log('');
            console.log('-> File ' + event.path.magenta.bold + ' was ' + event.type.green + ', running tasks css...');
        });

    gulp.watch(distAssets.js + '**/*.js', ['jshint'])
        .on('change', function(event) {
            console.log('');
            console.log('-> File ' + event.path.yellow + ' was ' + event.type.green + ', running tasks js...');
        });
    gulp.watch(srcAssets.images + '**/*', ['imagemin'])
        .on('change', function(event) {
            console.log('');
            console.log('-> File ' + event.path.yellow + ' was ' + event.type.green + ', running tasks images...');
    });
});

// Browser Sync
gulp.task('browsersync', function() {
    var openPath = 'local';
    if(process.h){
        path = process.h;
        openPath = 'external';
        console.log( color.green(path) +' configured as new hosts.'.yellow);
    }

    browserSync.init({
        host: path,
        open: openPath,
        proxy: path
    });
    gulp.watch(srcAssets.styles + '**/*.s+(a|c)ss', ['styles:dev'])
        .on('change', function(event) {
            console.log('');
            console.log('-> File ' + event.path.magenta.bold + ' was ' + event.type.green + ', running tasks...');
            browserSync.reload();
        });
});

/************** TIME TO WORK ***********************/

// Init enviroment
gulp.task('init', ['clean:css', 'imagemin', 'styles:dev']);

// Development enviroment
gulp.task('dev:watch', ['styles:dev', 'watch']);
gulp.task('dev:browsersync', ['styles:dev', 'browsersync']);

// Production enviroment
gulp.task('pro', ['styles:pro', 'jshint']);


/************* QA - CODE QUALITY REPORTS *************/

// JENKINS, jsHint report XML
gulp.task('jenkinsJSHintReport', function(){
    return gulp.src([distAssets.js + '*.js'])
        .pipe(jsHint())
        .pipe(jsHint.reporter('gulp-jshint-jenkins-reporter', {
            filename: 'reports/jshint-checkstyle.xml',
            level: 'e', // ewi [e:error;w=warning;i:info]
            // sourceDir:  __dirname + '/', // full path to file
            rulesFile: '.jshintrc'
        }))
        .pipe(browserSync.stream());
});

// JENKINS, sasslint report XML
gulp.task('jenkinsSassLintReport', function () {
    const fs = require('fs');
    var file = fs.createWriteStream('reports/sasslint-checkstyle.xml');
    return gulp.src('src/sass/**/*.sass')
        .pipe(sassLint({
            options: {
                configFile: 'da_vinci.sass-lint.yml',
                formatter: 'checkstyle'
            }
        }))
        .pipe(sassLint.format(file));
    stream.on('finish', function() {
        file.end();
    });
    return stream;
});

// DEVELOPER, sasslint report HTML
gulp.task('sassLintReport', function () {
    const fs = require('fs');
    var file = fs.createWriteStream('reports/sassLintResult.html');
    return gulp.src('src/sass/**/*.sass')
        .pipe(sassLint({
            options: {
                configFile: 'da_vinci.sass-lint.yml',
                formatter: 'html'
            }
        }))
        .pipe(sassLint.format(file));
    stream.on('finish', function() {
        file.end();
    });
    return stream;
});

// DEVELOPER, jsHint report HTML
gulp.task('jsHintReport', function(){
    return gulp.src([distAssets.js + '*.js'])
        .pipe(jsHint({
            options: {
                configFile: '.jshintrc',
                reporter: 'checkstyle'
            }
        }))
        .pipe(jsHint.reporter('gulp-jshint-html-reporter', {
            filename: 'reports/jshintResult.html',
            createMissingFolders : false
        }))
        .pipe(browserSync.stream());
});
