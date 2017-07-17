const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
         {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
            })
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
            })
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './src/index.html'
      }
    ),
    new ExtractTextPlugin("bundle.css")
  ],
  devServer: {
    stats: {
      chunks: false
    }
  }
}
