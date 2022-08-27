const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');

const webpackClient = {
  mode: 'development',
  watch: true,
  plugins: [
    new MiniCssExtractPlugin(),
    new NodemonPlugin({
      script: './build/server/index.js',
      // Extensions to watch.
      ext: 'js',
      // What to watch.
      watch: [path.resolve('./src/client/'), path.resolve('./src/server/')],
      delay: '1000',
      // Detailed log.
      verbose: true,
      // Environment variables to pass to the script to be restarted
      env: {
        NODE_ENV: 'development',
      },
    }),
  ],
  entry: {
    app: './src/client/src/bundles/app.bundle.js',
    product: './src/client/src/bundles/product.bundle.js',
  },
  output: {
    path: path.resolve('build/client'),
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
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
};

const webpackServer = {
  mode: 'development',
  entry: './src/server/src/index.js',
  target: 'node',
  watch: true,
  plugins: [new MiniCssExtractPlugin()],
  externals: [nodeExternals()],
  output: {
    path: path.resolve('build/server'),
    filename: 'index.js',
    publicPath: path.resolve('/public/assets'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              filename: 'app.css',
              publicPath: '/public/css',
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        type: 'asset/resource',
        generator: {
          filename: '[name].css',
        },
        use: ['sass-loader'],
      },
    ],
  },
};

module.exports = [webpackClient, webpackServer];
