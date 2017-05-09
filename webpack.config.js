const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: './src',
    port: process.env.WIDGET_PORT || 3333,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2'],
          plugins: ['transform-class-properties'],
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
};
