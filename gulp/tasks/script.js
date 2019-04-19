'use strict';

module.exports = function() {

    // $.gulp.task('scripts:lib', function () {
    //     return $.gulp.src(['src/vendor/slick/slick.min.js'])
    //         .pipe($.gp.plumber())
    //         //.pipe($.gp.concat('all.libs.js'))
    //         //.pipe($.gp.uglify())
    //         //.pipe($.gp.rename('all.libs.min.js'))
    //         .pipe($.gulp.dest('dest/js/'))
    //         .pipe($.bs.reload({
    //             stream: true
    //         }));
    // });

    $.gulp.task('scripts', function () {
        return $.gulp.src(['src/static/js/*.js','src/vendor/**/*.js' ])
            .pipe($.gp.plumber())
            .pipe($.gp.concat('main.js'))
            //.pipe($.gp.uglify())
            // .pipe($.gp.rename('all.common.min.js'))
            .pipe($.gulp.dest('dest/js/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
};
