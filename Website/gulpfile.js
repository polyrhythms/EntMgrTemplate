/// <binding AfterBuild='default' Clean='clean' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
"use strict";

var gulp = require('gulp');
var del = require('del');

var jsSource = 'scripts/**/*.js';
var tsSource = 'scripts/**/*.ts';
var mapSource = 'scripts/**/*.map';

var jsDestRoot = 'wwwroot/js/';
var jsDest = jsDestRoot + '**/*';

var sources = {
    scripts: [jsSource, tsSource, mapSource],
};

gulp.task('clean', async function () {
    return del([jsDest]);
});

gulp.task('default', async function () {
    return gulp.src(sources.scripts)
        .pipe(gulp.dest(jsDestRoot))
});