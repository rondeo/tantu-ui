const ora = require('ora');
const chalk = require('chalk');
const webpack = require('webpack');
const path = require('path');

const spinner = ora('building for production...');
spinner.start();

process.env.NODE_ENV = 'production';

webpack({
  entry: './src/index.ts',
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.txt$/, use: 'raw-loader',
      }, {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }, {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          // {
          //   loader: 'typings-for-css-modules-loader',
          //   options: {
          //     modules: true,
          //     namedExport: true,
          //     camelCase: true,
          //     sass: true,
          //   },
          // },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8000,
  },
}, (err, stats) => {
  // spinner.stop();
  if (err) throw err;
  process.stdout.write(`${stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  })}\n\n`);
  console.log(chalk.cyan('  Build complete.\n'));
  console.log(chalk.yellow(
    '  Tip: built files are meant to be served over an HTTP server.\n'
      + "  Opening index.html over file:// won't work.\n",
  ));
});
