let config = require('../config').localServer;
let $ = require('../plugins');

if(config.flag) {
  if(config.mode == 'normal') {
    $.gulp.task('server', (done) => {
      console.log('U use normal LocalServer');
      $.browserSync.init({
        server: config.baseDir
      });
      done();
    });
  } else if(config.mode == "PHP") {
    $.gulp.task('server', (done) => {
      console.log('U use PHP LocalServer');
      $.php.server({
        port:3000,
        base: config.baseDir
      }, () => {
        $.browserSync.init({
          proxy: 'localhost:3000'
        });
        done();
      }
    );
    });
  } else if (config.mode == "SSI") {
    $.gulp.task('server', (done) => {
      let ssiPath = config.baseDir.replace('\.', '');
      $.browserSync.init({
        server: {
          baseDir: config.baseDir,
        },
        port: 3000,
        rewriteRules: [
        {
          match: /<!--#include virtual="(.+?)"-->/g,
          fn: function (req, res, match, filename) {
              const filePath = $.path.resolve(__dirname, '../..' + ssiPath + filename);
              console.log(filePath);
              if (! $.fs.existsSync(filePath)) {
                return `<span style="color: red">${filename} could not be found</span>`;
              }
              return $.fs.readFileSync(filePath);
            }
          }
        ]
      });
    })
  }
} else {
  $.gulp.task('server', () => {
    console.log('not use LocalServer');
  });
}
