const paths = require("./paths");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + "/index.ts"],
  target: ["node"],

  resolve: {
    extensions: [".ts", ".js"],
  },

  // Where webpack outputs the assets and bundles
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "api.bundle.js",
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
          to: "assets",
          globOptions: {
            ignore: ["*.DS_Store"],
          },
        },
      ],
    }),
  ],

  module: {
    rules: [{ test: /\.md?$/, exclude: /node_modules/, use: ["raw-loader"] }],
  },
};
