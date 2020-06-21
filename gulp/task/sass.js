let config = require('../config').sass;
let $ = require('../plugins');

if(config.flag) {
  $.gulp.task('sass', () => {
    let plugins = [
      $.sorter({
        order: 'smacss'
      }),
      $.mqpacker(),
      $.autoprefixer({
        overrideBrowserslist: [
        'last 2 versions',
        'ie 11',
        'Android 4',
        'iOS 9'
      ]}),
    ];
    if(config.mode) {
      return $.gulp.src(config.src)
        .pipe($.plumber({
          errorHandler: $.notify.onError('Error: <%= error.message %>')
        }))
        .pipe($.sourcemap.init())
        .pipe($.sass({
          outputStyle: 'expanded'
        }))
        .pipe($.sourcemap.write({includeContent: false}))
        .pipe($.sourcemap.init({loadMaps: true}))
        .pipe($.postcss(plugins))
        .pipe($.sourcemap.write())
        .pipe($.notify('[CSS] Compliled:)'))
        .pipe($.gulp.dest(config.dest));
    } else {
      return $.gulp.src(config.src)
        .pipe($.plumber({
          errorHandler: $.notify.onError('Error: <%= error.message %>')
        }))
        .pipe($.sass({
          outputStyle: 'expanded'
        }))
        .pipe($.postcss(plugins))
        .pipe($.notify('[CSS] Compliled:)'))
        .pipe($.gulp.dest(config.dest));
    }
  });
} else {
  $.gulp.task('sass', () => {
    console.log('not use sass');
  });
}
