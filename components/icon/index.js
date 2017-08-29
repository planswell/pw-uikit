/**
 * Icon
 *
 * A pretty simple thin wrapper around icons. Internally uses fontello custom font.
 * Inspired by react-fa, which is far less cool.
 */

const React = require('react');
const { PropTypes } = React;
const styles = require('./styles.css');
const cssModules = require('react-css-modules');
const { omit } = require('lodash');

const Icon = ({ name, ...props }) => <i {...omit(props, 'styles')} styleName={`icon icon-${name}`} />;

Icon.propTypes = {
  name: PropTypes.string,
};

module.exports = cssModules(Icon, styles, {
  allowMultiple: true,
});
