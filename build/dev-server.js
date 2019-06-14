
const opn = require('opn');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
// const proxyMiddleware = require('http-proxy-middleware');
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const connectHistoryApiFallback = require('connect-history-api-fallback');
const webpackConfig = require('./webpack.dev.config');

const config = require('./config');

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port;
// automatically open browser, if not set will be false
const { autoOpenBrowser } = config.dev;
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware

// const { proxyTable } = config.dev;

const app = express();

const compiler = webpack(webpackConfig);

const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true,
});

// const hotMiddleware = webpackDevMiddleware(compiler, {
//   log: false,
// });


// // force page reload when html-webpack-plugin template changes
// compiler.plugin('compilation', (compilation) => {
//   compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
//     hotMiddleware.publish({ action: 'reload' });
//     cb();
//   });
// });

// // proxy api requests$ npm install --save-dev babel-preset-es2015
// Object.keys(proxyTable).forEach((context) => {
//   let options = proxyTable[context];
//   if (typeof options === 'string') {
//     options = { target: options };
//   }
//   app.use(proxyMiddleware(options.filter || context, options));
// });

// // handle fallback for HTML5 history API
// app.use(connectHistoryApiFallback());

// // serve webpack bundle output
app.use(devMiddleware);

// // enable hot-reload and state-preserving
// // compilation error display
// app.use(hotMiddleware);

// // serve pure static assets
// const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
// // app.use(staticPath, express.static('./static'));
// app.use(staticPath, express.static(path.resolve(__dirname, `..${config.singlePagePath}/static`))); // 兼容两个地方的js

const uri = `http://mtest.zuzuche.net:${port}${config.singlePagePath}/index.html`;

// devMiddleware.waitUntilValid(() => {
//   console.log(`> Listening at ${uri}\n`);
//   if (!autoOpenBrowser) {
//     console.log('如果需要自动打开浏览器请添加 --open 选项');
//   }
//   if (config.singlePagePath) {
//     console.log('每个单页单独一个index.html');
//   }
// });


module.exports = app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri, { app: 'Google Chrome' });
  }

  console.log('Example app listening on port 3000!');
});
