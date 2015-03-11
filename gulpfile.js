

// Include Our Plugins
var gulp = require('gulp');
var riot = require('gulp-riot');

// Lint Task
gulp.task('riot', function() {
    return gulp.src('public/tags/*')
        .pipe(riot())
        .pipe(gulp.dest('public/javascripts/compiled'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('public/tags/*', ['riot']);
});

// Default Task
gulp.task('default', ['riot']);

/*
gulp = require 'gulp'
riot = require 'gulp-riot'

gulp.task 'riot', ->
  gulp.src 'public/tags/item-app.html'
    .pipe riot()
    .pipe gulp.dest 'dest'
*/
