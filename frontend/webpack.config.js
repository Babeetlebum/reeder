module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          syntax: 'postcss-scss',
          plugins: () => [
            require('postcss-easy-import')({ path: ['src'], prefix: '_', extensions: ['.scss', '.css'] }),
            require('tailwindcss'),
            // require('autoprefixer'),
          ],
        },
      },
    ],
  },
};
