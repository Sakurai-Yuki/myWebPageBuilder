module.exports = {
  gulp: require('gulp'),
  plumber: require('gulp-plumber'),
  notify: require('gulp-notify'),
  requireDir: require('require-dir'),

  //html
  ejs: require('gulp-ejs'),
  rename: require('gulp-rename'),
  htmlbeautify: require('gulp-html-beautify'),
  fs: require('fs'),

  // sass
  sass: require('gulp-sass'),
  sourcemap: require('gulp-sourcemaps'),
  postcss: require('gulp-postcss'),
  autoprefixer: require('autoprefixer'),
  sorter: require('css-declaration-sorter'),
  mqpacker: require('css-mqpacker'),

  // imgMin
  change: require('gulp-changed'),
  imgMin: require('gulp-imagemin'),
  imgMinJpg: require('imagemin-jpeg-recompress'),
  imgMinPng: require('imagemin-pngquant'),
  imgMinSVG: require('gulp-svgmin'),
  imgWebP: require('gulp-webp'),

  // js
  uglify: require('gulp-uglify'),

  // localServer
  browserSync: require('browser-sync'),
  php: require('gulp-connect-php'),
  path: require('path')

};
