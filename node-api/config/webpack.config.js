const paths = require('./paths')

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + '/index.ts'],
  target: ['node'],

  resolve: {
    extensions: [ '.ts', '.js' ],
  },

  // Where webpack outputs the assets and bundles
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'api.bundle.js',
  },

}