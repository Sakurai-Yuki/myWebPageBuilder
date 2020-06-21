// let defaultTasks;
let config = require('./gulp/config').tasks;
let $ = require('./gulp/plugins');

let reload = $.browserSync.reload;

$.requireDir('./task', { recurse: true });

//============================================================
// watch
//============================================================
let watch = $.gulp.task('watch', () => {
  console.log('ejs : ' + config.ejs.flag);
  console.log('sass : ' + config.sass.flag);
  if(config.ejs.flag) {
    $.gulp.watch([config.ejs.src, config.ejs.meta], $.gulp.series('ejs'));
  }
  if(config.sass.flag) {
    $.gulp.watch(config.sass.src, $.gulp.series('sass'));
    console.log('sassSourcemap : ' + config.sass.mode);
  }
  if(config.img.flag) {
    $.gulp.watch(config.img.src, $.gulp.series('imgMin'));
    $.gulp.watch(config.img.SVGsrc, $.gulp.series('imgMinSVG'));
  }
  if(config.js.flag) {
    $.gulp.watch(config.js.src, $.gulp.series('jsMin'));
  }
  // if(config.localServer.flag) {
  //   $.gulp.watch(config.localServer.src, reload);
  //   console.log('serverMode : ' + config.localServer.mode);
  // }
});

let defaultTasks = $.gulp.parallel('watch','server');
$.gulp.task('default', defaultTasks);
