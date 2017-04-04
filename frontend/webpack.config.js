const webpack = require('webpack')
const ExtractPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.jsx',
  output:{
    path: __dirname + '/public',
    filename: './app.js'
  },
  resolve:{
    extensions: ['', '.js', '.jsx'],
    alias: {
      modules: __dirname + 'node_modules'
    }
  },
  plugins: [
    new ExtractPlugin('app.css')
  ],
  module:{
    loaders: [{
      test: /\.js[x]?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query:{
        presets: ['es2015', 'react'],
        plugins: ['transform-object-rest-spread']
      }
    },
      {
        test: /\.css$/,
        loader: ExtractPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /.woff|.woff2|.ttf|.eot|svg*.*/,
        loader: 'file'
      }
      ]
    }
  }
