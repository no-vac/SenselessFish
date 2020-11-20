const path = require('path');
module.exports = {
  watch: true,
  entry: './src/script.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: 'main.js.map',
  },
  devtool: 'source-map',
};
