const paths = require('./paths')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + '/index.ts'],
  target: ['node'],

  resolve: {
    extensions: ['.ts', '.js'],
  },

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: 'api.bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.assets,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
        },
      ],
    }),
  ],

  module: {
    rules: [
      { test: /\.ts?$/, exclude: /node_modules/, use: ['ts-loader'] },
      { test: /\.md?$/, exclude: /node_modules/, use: ['raw-loader'] },
    ],
  },
}
