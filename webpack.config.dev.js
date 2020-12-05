const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');
module.exports = {
  mode: 'development',
  devServer: {
    contentBase: 'dist',
    port: 3000,
  },
  devtool: 'inline-source-map',
  plugins: [
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname + '/src/assets'),
    //       to: 'assets',
    //     },
    //   ],
    // }),
    // new HTMLWebpackPlugin({
    //   template: path.resolve(__dirname + '/src/index.html'),
    //   filename: 'index.html',
    // }),
  ],
};
