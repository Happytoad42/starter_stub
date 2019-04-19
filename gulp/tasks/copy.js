'use strict';

// Копируем всякие нужные файлы

module.exports = function() {

    $.gulp.task('copy', function () {
        return $.gulp.src('src/download/**/*')
            .pipe($.gulp.dest('dest/download/'))
            .on('end', $.bs.reload);                        //позволяет обновить страницу только когда таски выполняться
    });

};


