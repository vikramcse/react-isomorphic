var gulp 		= 	require('gulp');
var LiveServer	=	require('gulp-live-server');
var browserSync	=	require('browser-sync');
var browserify	=	require('browserify');
var reactify	=	require('reactify');
var source		=	require('vinyl-source-stream'); // converts file from one format to another

gulp.task('live-server', function() {
    var server = new LiveServer('server/main.js');
    server.start();
});

gulp.task('bundle', function() {
    return browserify({
        entries: 'app/main.jsx', // starting file
        debug: true // improved console output
    })
    .transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./.temp'));
});

gulp.task('copy', function() {
    gulp.src(['app/*.css'])
        .pipe(gulp.dest('./.temp'));
});

// [] are called dependencies i.e live server has to run before serve
gulp.task('serve', ['bundle', 'live-server'], function(){
    // null because our server is defined earlier
    // proxy defined server address
    browserSync.init(null, {
        proxy:"http://localhost:7777",
        port:9001
    });
});
