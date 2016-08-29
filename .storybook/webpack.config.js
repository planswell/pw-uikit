const path = require('path');

// PostCSS plugins
const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');
const postcssImport = require('postcss-import');
const postcssFontMagician = require('postcss-font-magician');
const postcssFontAwesome = require('postcss-font-awesome');

const fontAwesomeBaseUrl = 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/fonts/';
const fontAwesomeConfig = {
  FontAwesome: {
    variants: {
      normal: {
        normal: {
          url: {
            eot: fontAwesomeBaseUrl + 'fontawesome-webfont.eot',
            'embedded-opentype': fontAwesomeBaseUrl + 'fontawesome-webfont.eot?#iefix',
            woff2: fontAwesomeBaseUrl + 'fontawesome-webfont.woff2',
            woff: fontAwesomeBaseUrl + 'fontawesome-webfont.woff',
            truetype: fontAwesomeBaseUrl + 'fontawesome-webfont.ttf',
            svg: fontAwesomeBaseUrl + 'fontawesome-webfont.svg?v=4.6.3#fontawesomeregular',
          },
        },
      },
    },
  },
};

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
    postcssFontMagician({ custom: fontAwesomeConfig }),
    postcssFontAwesome,
  ]),
};
