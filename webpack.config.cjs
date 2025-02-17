const path = require('path')

module.exports = {
  entry: './dist/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'HE',
      type: 'umd',
    },
    globalObject: 'globalThis'
  },
}
