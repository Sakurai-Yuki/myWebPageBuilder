let config = require('../config').img;
let $ = require('../plugins');

if(config.flag) {
  $.gulp.task('imgMin', () => {
    let plugins = [
      $.imgMinPng({quality: [.7, .85]}),
      $.imgMinJpg()
    ];
    if(config.webPflag) {
      return $.gulp.src(config.src)
        .pipe($.change(config.dest))
        .pipe($.imgMin(plugins))
        .pipe($.gulp.dest(config.dest))
        .pipe($.imgWebP())
        .pipe($.gulp.dest(config.dest));
    } else {
      return $.gulp.src(config.src)
        .pipe($.change(config.dest))
        .pipe($.imgMin(plugins))
        .pipe($.gulp.dest(config.dest))
        .pipe($.gulp.dest(config.dest));
    }
  });

  $.gulp.task('imgMinSVG', () => {
    return $.gulp.src(config.SVGsrc)
      .pipe($.change(config.dest))
      .pipe($.imgMinSVG())
      .pipe($.gulp.dest(config.dest));
  });

} else {
  $.gulp.task('imgMin', () => {
    console.log('not use imgMin');
  });
}
