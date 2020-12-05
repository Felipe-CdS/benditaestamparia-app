const path = require('path')

module.exports = {
  mode: 'development',

  entry: {
    index: './scripts/index.js'
  },
 
  output: {
     filename: 'scripts/[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   }, 

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
     
    ],
  },
}