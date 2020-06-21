// flag
const ejsFlag = true;
const sassFlag = true;
const sourcemapFlag = true;
const imgMinFlag = true;
const imgWebPFlag = true;
const jsMinFlag = false;
const localServerFlag = true;
// normal or PHP or SSI
const serverMode = 'normal';

const distPath = './dist/';
const srcPath = './src/';

// ejs
const ejsSrc = srcPath + 'html/**/*.ejs';
const ejsExclusion = '!' + srcPath + '**/_*.ejs';
const ejsDest = distPath;
const ejsMeta = srcPath + '_json/meta.json';

// sass
const sassSrc = srcPath + '_scss/**/*.scss';
const sassDest = distPath + 'css/';

// imgMin
const imgMinSrc = srcPath + '_img/**/*.+(jpg|jpeg|png)';
const imgMinSVGSrc = srcPath + '_img/**/*.svg';
const imgMinDest = distPath + 'img/';

//jsMin
const jsMinSrc = srcPath + '_js/*.js';
const jsMinDest = distPath + 'js/';

// localServer
const localServerDir = distPath;

module.exports = {
  tasks: {
    ejs: {
      flag: ejsFlag,
      src: ejsSrc,
      meta: ejsMeta
    },
    sass: {
      flag: sassFlag,
      mode: sourcemapFlag,
      src: sassSrc
    },
    img: {
      flag: imgMinFlag,
      src: imgMinSrc,
      SVGsrc: imgMinSVGSrc
    },
    js: {
      flag: jsMinFlag,
      src: jsMinSrc,
    },
    localServer: {
      flag: localServerFlag,
      mode: serverMode,
      src: localServerDir + '/**/*'
    }
  },
  ejs: {
    flag: ejsFlag,
    src: [
      ejsSrc,
      ejsExclusion
    ],
    dest: ejsDest,
    meta: ejsMeta
  },
  sass: {
    flag: sassFlag,
    mode: sourcemapFlag,
    src: sassSrc,
    dest: sassDest
  },
  img: {
    flag: imgMinFlag,
    webPflag: imgWebPFlag,
    src: imgMinSrc,
    SVGsrc: imgMinSVGSrc,
    dest: imgMinDest
  },
  js: {
    flag: jsMinFlag,
    src: jsMinSrc,
    dest: jsMinDest
  },
  localServer: {
    flag: localServerFlag,
    baseDir: localServerDir,
    mode: serverMode
  }
};
