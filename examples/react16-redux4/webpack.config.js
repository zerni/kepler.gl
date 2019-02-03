const resolve = require('path').resolve;
const webpack = require('webpack');
// const ROOT_DIR = resolve(__dirname, '../..');
// const SRC_DIR = resolve(ROOT_DIR, './src');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    alias: {
      // Imports kepler.gl library from the src directory in this repo
      // 'kepler.gl': SRC_DIR
    },
    extensions: ['*', '.js']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    hot: true
  },
  node: {
    fs: 'empty'
  }
};
