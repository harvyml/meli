const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './src/server/src/index.js',
  target: 'node',
  watch: false,
  plugins: [new MiniCssExtractPlugin()],
  externals: [nodeExternals()],
  output: {
    path: path.resolve('server-build'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/public/css',
            },
          },
          'css-loader',
        ],
      },
    ],
  },
};
