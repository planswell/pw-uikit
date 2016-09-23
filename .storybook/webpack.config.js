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
      {
        test: /\.css$/,
        include: path.resolve(__dirname, '../stories'),
        loader: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1!postcss-loader',
      },
      // "file" loader makes sure those assets get served by WebpackDevServer.
      // When you `import` an asset, you get its (virtual) filename.
      // In production, they would get copied to the `build` folder.
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        exclude: /\/favicon.ico$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },

  postcss: () => ([
    postcssImport(),
    postcssFocus(), // Add a :focus to every :hover
    postcssReporter({ // Posts messages from plugins to the terminal
      clearMessages: true,
    }),
    postcssFontAwesome,
    postcssFontMagician({ custom: fontAwesomeConfig }), // Must be after FontAwesome
    cssnext({ // Should be the end since this add vendor prefixes
      browsers: ['last 2 versions', 'IE > 10'], // ...based on this browser list
    }),
  ]),
};
