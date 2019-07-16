'use strict';

module.exports = function() {
    $.gulp.task('sass', function () {
        return $.gulp.src('src/static/sass/*.sass')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.plumber())
            .pipe($.gulp.dest('src/css/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });


    $.gulp.task('libs_css', function () {
        return $.gulp.src([
            'src/vendor/**/*.css',
            'src/css/*.css'
            ])
            .pipe($.gp.plumber())
            .pipe($.gp.concatCss('style.css',  { 
                rebaseUrls: false                     // Prevent path changes in urls
            }))
            // .pipe($.gp.csso())
            .pipe($.gulp.dest('dest/css/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });

};

