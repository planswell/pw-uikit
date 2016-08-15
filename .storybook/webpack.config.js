const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css?$/,
        include: path.resolve(__dirname, '../packages'),
        exclude: /node_modules/,
        loader: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!',
      }, {
        test: /\.css$/,
        include: path.resolve(__dirname, '../node_modules'),
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
};
