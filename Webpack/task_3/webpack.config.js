const path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'development',
  performance: {
    maxAssetSize: 200000,
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(gif|png|jpg|svg)$/i,
            use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true,
                        disable: true,
                    },
                },
            ],
        },
    ],
  },
};