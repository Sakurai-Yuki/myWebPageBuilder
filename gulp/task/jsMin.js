let config = require('../config').js;
let $ = require('../plugins');

if(config.flag) {
  $.gulp.task('jsMin', () => {
    return $.gulp.src(config.src)
      .pipe($.plumber({
        errorHandler: $.notify.onError('Error: <%= error.message %>')
      }))
      .pipe($.uglify())
      .pipe($.rename({
        extname: '.min.js'
      }))
      .pipe($.notify('[JS] Compliled:)'))
      .pipe($.gulp.dest(config.dest));
  });
} else {
  $.gulp.task('jsMin', () => {
    console.log('not use jsMin');
  });
}
