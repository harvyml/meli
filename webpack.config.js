const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  entry: {
    bundle: './src/client/src/bundle.js',
  },
  output: {
    path: path.resolve(__dirname, './build/public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
};
