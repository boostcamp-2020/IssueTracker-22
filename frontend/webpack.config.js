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
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@lib': path.resolve(__dirname, 'src/lib/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
    },
  },
};
