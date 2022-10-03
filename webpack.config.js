const path = require("path");

module.exports = {
  entry: [
    // array of js / SCSS files
    //  __dirname + "/js/entry.js",
    // __dirname + "/scss/style.scss",

  ],
  output: {
    path: path.resolve(__dirname),
    filename: "js/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: { outputPath: "css/", name: "[name].css" },
          },
          {
            loader: "postcss-loader",
            options: {
              // All postcss options is now under `postcssOptions`
              postcssOptions: {
                plugins: [require("autoprefixer")],
              },
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(?:|gif|png|jpg|svg)$/,
        type: "asset/inline",
      },
    ],
  },
};
