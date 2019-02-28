const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// mode through node env variable
// const isDevel = process.env.NODE_ENV === 'development'

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  // mode: 'none',
  // mode: isDevel ? 'development' : 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "[name].[chunkhash:8].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader', // with 'loader' prop we can call just one loader
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // with 'use' prop we can call several loaders
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    })
  ],
  devtool: "hidden-source-map",
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    proxy: {
      '/': 'http://localhost:3001'
    }
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: 'vendor',
          name: 'vendor',
          enforce: true,
          chunks: 'all'
        }
      }
    }
  }
}
