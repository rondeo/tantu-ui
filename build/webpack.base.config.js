const path = require('path');
// const autoprefixer = require('autoprefixer');


module.exports = {
  entry: {
    app: './src/index.ts',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: 'production',
  },
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
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
        ],
      },
    ],
    // postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
  },
};
