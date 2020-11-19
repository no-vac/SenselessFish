const path = require('path');
module.exports = {
  entry: ['./src/script.js', './src/socket.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
