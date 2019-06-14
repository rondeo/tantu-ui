// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path');
const { argv } = require('yargs');

const merge = require('webpack-merge');

const prodEnv = {
  NODE_ENV: '"production"',
};

/*
* singlePagePath config/index.js index和assetsRoot的路径配置
* assetsPublicPath config/index.js assetsPublicPath
* baseEntry build/webpack.base.conf.js 入口文件的配置
* baseImgSize build/webpack.base.conf.js 图片打包大小限制的配置
* devPath build/webpack.dev.conf.js html单页路径配置
* prodPath build/webpack.prod.conf.js html单页路径配置
* copyPath build/webpack.prod.conf.js 拷贝文件路径配置
* */
const singlePagePath = '';
const assetsPublicPath = '';
const baseEntry = './src/main.js';
const baseImgSize = 10000;
const devPath = '';
const prodPath = '';
const copyPath = '../static';


module.exports = {
  build: {
    env: prodEnv,
    index: path.resolve(__dirname, `../dist${singlePagePath}/index.html`),
    assetsRoot: path.resolve(__dirname, `../dist${singlePagePath}`),
    assetsSubDirectory: 'static',
    assetsPublicPath,
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: argv.analyse,
  },
  dev: {
    env: merge(prodEnv, {
      NODE_ENV: '"development"',
    }),
    port: 80,
    hot: !!argv.hot,
    autoOpenBrowser: !!argv.open,
    assetsSubDirectory: 'static',
    assetsPublicPath: `${singlePagePath}/`,
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
  },
  // 下列为新增配置用户区分web-app打包和single-page的打包
  singlePagePath,
  baseEntry,
  baseImgSize,
  devPath,
  prodPath,
  copyPath,
};
