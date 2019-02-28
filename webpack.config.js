const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// mode through node env variable
// const isDevel = process.env.NODE_ENV === 'development'

module.exports = {
  entry: "./src/index.js",
  // mode: "none",
  // mode: isDevel ? 'development' : 'production',
  output: {
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader", // with 'loader' prop we can call just one loader
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // with 'use' prop we can call several loaders
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    })
  ],
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    proxy: {
      '/': 'http://localhost:3001'
    }
  }
}
