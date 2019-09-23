module.exports = env => {
    process.env.NODE_ENV = env.NODE_ENV;

    return {
        mode: 'development',
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
                    ]
                },
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
        },
    }
};
