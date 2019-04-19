'use strict';

// Удаляем папку dist

module.exports = function() {

    $.gulp.task('clean', function () {
        return $.gulp.src('dest', {read: false, allowEmpty: true})
            .pipe($.gp.clean())
    });
};
