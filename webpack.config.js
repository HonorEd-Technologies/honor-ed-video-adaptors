const path = require('path');

module.exports = {
  entry: './dist/HonorPlayer.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: "HonorPlayer",
    libraryExport: 'default'
  },
};