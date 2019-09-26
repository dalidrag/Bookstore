module.exports = env => {
  process.env.NODE_ENV = env.NODE_ENV;

  return {
    mode: process.env.NODE_ENV,
    // 1
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        // css
        {
          test: /\.(css|scss)$/,
          use: [
            'style-loader',
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
          ]
        },
        // assets
        {
          test: /\.(svg|jpg|png|gif|svg|mp4|webm|eot|svg|ttf|woff|woff2)(\?.*)?$/,
          loader: 'url-loader'
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    // 2
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    // 3
    devServer: {
      contentBase: './dist'
    }
  };
};
