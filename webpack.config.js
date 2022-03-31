const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
    plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo List',
      template: './src/index.html',
      filename: 'index.html'
    }),
  ],
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
     assetModuleFilename: 'images/[hash][ext][query]',
     clean: true,
   },
   module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
     ],
   },
 };