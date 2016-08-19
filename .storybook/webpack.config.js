const path = require('path');

// PostCSS plugins
const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');
const postcssFlexbox = require('postcss-flexbox');
const postcssImport = require('postcss-import');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css?$/,
        include: path.resolve(__dirname, '../packages'),
        loader: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',
      }, {
        test: /\.css$/,
        include: path.resolve(__dirname, '../node_modules'),
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },

  postcss: () => ([
    postcssImport(),
    postcssFocus(), // Add a :focus to every :hover
    cssnext({ // Allow future CSS features to be used, also auto-prefixes the CSS...
      browsers: ['last 2 versions', 'IE > 10'], // ...based on this browser list
    }),
    postcssReporter({ // Posts messages from plugins to the terminal
      clearMessages: true,
    }),
    postcssFlexbox,
  ]),
};
