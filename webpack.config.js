const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const extractCSS = new ExtractTextPlugin('u4bi.min.css')
const webpack = require('webpack');
const path = require('path');


const config = {
  context: path.resolve(__dirname, 'src'),
  entry: './core/App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'u4bi.min.js',
    library: 'U4bi',
    libraryTarget: "umd"
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'), 
      use: [{ 
        loader: 'babel-loader', 
        options: { 
          presets: [ 
            ['es2015', { modules: false }] 
          ] 
        } 
      }]
    },
    {
      test: /\.scss$/,
      loader: extractCSS.extract(['css-loader','sass-loader'])
    }]
  },
  plugins: [
    extractCSS,
    new UglifyJSPlugin()
  ]
};


module.exports = config;