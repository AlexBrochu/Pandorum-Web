const paths = require('./paths')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// polyfill only stable `core-js` features - ES and web standards:
// https://github.com/zloirock/core-js#usage
require('core-js/stable')
require('regenerator-runtime/runtime')

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + '/index.tsx'],

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
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
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
        },
        {
          from: paths.assets,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'Hidden Games Studio',
      template: paths.src + '/index.html', // index file
      filename: 'index.html', // output file
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      { test: /\.md?$/, exclude: /node_modules/, use: ['raw-loader'] },
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },// babel compiling with polyfill for support
      { test: /\.json5?$/, exclude: /node_modules/, use: ['json5-loader'] },

      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1 },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },
  devServer: {
    contentBase: paths.build,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3080',
      },
    },
  },
}
