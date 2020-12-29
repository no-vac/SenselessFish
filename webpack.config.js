const path = require('path');
module.exports = {
  entry: ['./src/main.js', './src/fish.js', './src/flakes.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'electronApp/src/public'),
    sourceMapFilename: 'main.js.map',
  },
  devtool: 'source-map',
};
