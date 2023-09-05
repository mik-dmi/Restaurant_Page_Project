const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development', 
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
module: {
  rules: [
      {
          test: /\.(woff|woff2|ttf|eot)$/,
          use: {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]', // Use placeholders for the output filename
                outputPath: '../'
              }
          }
      }

    ]
},
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader', // Add Babel loader for ES6 support
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    },
    {
      test: /\.(png|jpg|jpeg|gif|svg)$/i,
      use: [
          {
              loader: 'file-loader',
              options: {
                  outputPath: 'images', // Output directory for images
              },
          },
      ],
  },
  ],
}
};