'use strict';

module.exports = function() {

    $.gulp.task('watch', function () {
        $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'))
        $.gulp.watch('src/static/sass/**/*.sass', $.gulp.series(['sass', 'libs_css']))
        $.gulp.watch('src/static/js/**/*.js', $.gulp.series('scripts'))
        $.gulp.watch('src/static/img/**/*', $.gulp.series('img'))
        $.gulp.watch('src/static/vendor/*', $.gulp.series('scripts'));
    });
};