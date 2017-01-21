const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Read environment variables from ./.env
require('dotenv').config();

// Rules are defined in config/rules
const rules = require('./config/rules')(__dirname);

const config = {
  entry: path.resolve(__dirname, 'app/main.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      rules.gif,
      rules.jsx,
      rules.png,
      rules.sass,
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      // Copy app/index.html to dist/index.html
      { from: './app/index.html', to: 'index.html' },
      // Copy our empty service-worker.js file over
      { from: './app/service-worker.js', to: 'service-worker.js' },
    ]),
    new webpack.ProvidePlugin({
      // Bootstrap requires that jQuery and Tether be available on window
      $: 'jquery',
      jQuery: 'jquery',
      Tether: 'tether',
    }),
  ],
};

module.exports = config;
