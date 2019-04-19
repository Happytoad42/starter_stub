"use strict";

module.exports = function() {

    $.gulp.task('serve', async function() {
        $.bs.init({
            server: {
                baseDir: "./dest",
                startPath: 'index.html',
            },
        });
    });
};


