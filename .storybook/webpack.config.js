const path = require('path');
const postcss_autoreset = require('postcss-autoreset');
const postcss_initial = require('postcss-initial');
const postcss_flexbox = require('postcss-flexbox');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css?$/,
        include: path.resolve(__dirname, '../packages'),
        exclude: /node_modules/,
        loader: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',
      }, {
        test: /\.css$/,
        include: path.resolve(__dirname, '../node_modules'),
        loaders: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  postcss: function() {
    return [postcss_initial, postcss_flexbox]
  },
};
