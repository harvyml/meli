const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'development',
  watch: true,
  plugins: [new MiniCssExtractPlugin()],
  entry: {
    bundle: './src/client/src/bundle.js',
  },
  output: {
    path: path.resolve(__dirname, './public/build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        exclude: [/node_modules/, /public/],
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[md5:hash:hex].[ext]',
              publicPath: './assets/',
              outputPath: 'img',
            },
          },
        ],
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
