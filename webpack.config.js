const path = require('path');

module.exports = {
  entry: './Sources/honor-ed-video-adapters/dist/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'Sources/honor-ed-video-adapters/dist'),
  },
};