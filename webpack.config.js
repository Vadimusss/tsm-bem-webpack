const webpack = require('webpack');
const path = require('path');
const Copy = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const fs = require('fs');

const pageNames = fs.readdirSync('./pages')
  .filter((value) => value.includes('.html'))
  .map((value) => value.replace('.html', ''));

const entryPoints = pageNames.reduce((acc, value) => ({ ...acc, ...{ [value]: path.resolve(__dirname, "pages", `${value}.js`) } }), {});

const copyPaths = pageNames.map((name) => ({
  from: path.resolve(__dirname, `pages/${name}.html`),
  to: path.resolve(__dirname, `dist/${name}`),
}));

module.exports = {
  entry: entryPoints,
  output: {
    filename: `[name]/[name].js`,
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: ({ chunk }) => `${chunk.name}/${chunk.name}.css`,
    }),
    new Copy(copyPaths),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'bemdecl-to-fs-loader',
            options: { levels: ['desktop'], extensions: ['css', 'js'] } // Add css and js files of BEM entities to bundle
          },
          {
            loader: 'html2bemdecl-loader'
          } // First, convert HTML to bem DECL format
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader'
        ],
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '../dist/img/',
          esModule: false,
          publicPath: '../img/'
        },
      },
    ]
  },
}
