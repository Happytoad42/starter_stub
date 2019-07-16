'use strict';

// Обработка изображений

module.exports = function() {

    $.gulp.task('img', function (done) {
        return $.gulp.src(['src/static/img/**/*.{png,jpg,svg,gif,ico}'])
            .pipe($.gp.plumber())
            // .pipe($.gp.imagemin())
            .pipe($.gulp.dest('dest/img/'))
            .pipe($.bs.reload({
                stream:true
            }));
    });
};
