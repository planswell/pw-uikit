const React = require('react');
const { PropTypes } = React;
const cssModules = require('react-css-modules');
const styles = require('./style.css');
const { omit } = require('lodash');

const InputGroup = ({ children, ...props }) =>
  <div {...omit(props, 'styles')} styleName="base">
    {children}
  </div>;

InputGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

module.exports = cssModules(InputGroup, styles);
