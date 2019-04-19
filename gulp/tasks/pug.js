'use strict';

// Преобразование pug -> html

module.exports = function() {

    $.gulp.task('pug', function () {
        return $.gulp.src('src/pug/page/**/*.pug')
            .pipe($.gp.plumber())                           
            .pipe($.gp.pug({
                pretty: true                               
            }))
            .pipe($.gulp.dest('dest'))
            .on('end', $.bs.reload);                        
    });
};
