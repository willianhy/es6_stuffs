var path = require('path');

module.exports = {
  entry: ['./app/index.js'],
  output: {
    path: path.resolve('build'),
    filename: 'bundle.js'
  }
}