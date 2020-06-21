let config = require('../config').ejs;
let $ = require('../plugins');
if(config.flag) {
  let json = JSON.parse($.fs.readFileSync(config.meta));
  $.gulp.task('ejs', () => {
    return $.gulp.src(config.src)
      .pipe($.plumber({
        errorHandler: $.notify.onError('Error: <%= error.message %>')
      }))
      .pipe($.ejs({
        json: json
      }))
      .pipe($.rename({
        extname: '.html'
      }))
      .pipe($.notify('[HTML] Compliled:)'))
      .pipe($.gulp.dest(config.dest));
  });
} else {
  $.gulp.task('ejs', () => {
    console.log('not use ejs');
  });
}
