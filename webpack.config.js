const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
  entry: {
    main: "./src/client/js/main.js",
    login: "./src/client/js/login.js",
    join: "./src/client/js/join.js",
    header: "./src/client/js/header.js",
    upload: "./src/client/js/upload.js",
    avatar: "./src/client/js/avatar.js",
    like: "./src/client/js/like.js",
  },
  mode: "development",
  watch: true,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "js/[name].js",
    //path.resolve()는 몇 개가 되었든 내가 입력하는 파트들을 모아서 경로로 만들어주는 것,
    //__dirname은 파일까지의 경로 전체.
    //즉 /현재 파일까지의 경로/assets 경로가 만들어진다.
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
