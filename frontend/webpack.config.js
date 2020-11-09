const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../backend/public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin(
    {
      template: 'src/index.html',
    },
  )],
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    overlay: true,
    stats: 'errors-only',
    port: 8081,
    hot: true,
    proxy: {
      '/': 'http://127.0.0.1:3000',
    },
  },

};
