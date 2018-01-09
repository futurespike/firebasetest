const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatLoggerPlugin = require('./system/webpack-plugins/stat-logger');
const path = require('path');

const BUILD_PATH = path.resolve(__dirname, 'dist');
const SRC_PATH = path.resolve(__dirname, 'src');

module.exports = env => {
  return {
    devServer: {
      port: 8080,
      clientLogLevel: 'error',
      noInfo: true,
      overlay: true,
      hot: true,
      open: true,
    },

    entry: `${SRC_PATH}/Root.jsx`,

    output: {
      path: BUILD_PATH,
      filename: 'bundle.js',
    },

    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [SRC_PATH, path.resolve(__dirname, 'node_modules')],
    },

    module: {
      loaders: [
        {
          loader: 'eslint-loader',
          include: SRC_PATH,
          test: /\.jsx?$/,
          enforce: 'pre',
          options: {
            cache: env.development,
            failOnError: env.production,
          },
        },

        {
          loader: 'babel-loader',
          include: SRC_PATH,
          test: /\.jsx?$/,
          options: {
            presets: ['env', 'react', 'react-hmre'],
            plugins: ['transform-class-properties', 'transform-object-rest-spread'],
          },
        },
        {
          loaders: ['style-loader', 'css-loader', 'sass-loader'],
          test: /\.s?css$/,
        },
      ],
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),

      new HtmlWebpackPlugin({
        template: 'src/index.template.html',
      }),

      new StatLoggerPlugin(),
    ],

    stats: {
      assets: false,
      hash: false,
      version: false,
      timings: false,
    },
  };
};
