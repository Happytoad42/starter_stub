'use strict';

global.$ = {                                 // .$ содержит наши модули поэтому добовляем в к имени модуля .$ ($.gp...)
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),      //чтобы не перечислять плагины по именно добовляем к ним gp. (gp...)
    bs: require('browser-sync').create(),    //сервер автообновления браузера

    path: {
        tasks: require('./gulp/config.js')   //указываем путь к мосиву тасков
    }
};

//перебираем масив и забераем таски
$.path.tasks.forEach(function(taskPath){
    require(taskPath)();
});

// таска при выове gulp, вызывает перечислиные таски паралельно(.parallel) либо поочередно(gulp.series)
$.gulp.task('default', $.gulp.series(
    $.gulp.series('clean'),
    $.gulp.series('pug', 'sass', 'scripts', 'img', 'copy', 'libs_css'),
    $.gulp.parallel('watch', 'serve')
    ));
    
$.gulp.task('build', $.gulp.series(
    $.gulp.series('clean'),
    $.gulp.series('pug', 'sass', 'scripts', 'img', 'copy', 'libs_css'),
));
