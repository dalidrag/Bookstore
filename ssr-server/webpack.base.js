const ExtractTextPlugin = require('extract-text-webpack-plugin');
// Extract CSS
const extractCSS = new ExtractTextPlugin('../public/styles.min.css');

module.exports = {
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-react',
            ['@babel/env', { targets: { browsers: ['last 2 versions'] } }]
          ],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      },
      // css
      {
        test: /\.(css|scss)$/,
        use: extractCSS.extract([
          {
            loader: 'css-loader'
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ])
      },
      // assets
      {
        test: /\.(svg|jpg|png|gif|svg|mp4|webm|eot|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [extractCSS]
};
