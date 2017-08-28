const React = require('react');
const { PropTypes } = React;
const cssModules = require('react-css-modules');
const styles = require('./style.css');
const { omit } = require('lodash');

function Textarea({ appearance, ...props }) {
  const passthroughProps = omit(props, ['styles', 'appearance']);
  return (
    <textarea styleName={appearance} {...passthroughProps} />
  );
}

Textarea.propTypes = {
  appearance: PropTypes.oneOf(['default', 'invalid']),
};

Textarea.defaultProps = {
  appearance: 'default',
};

module.exports = cssModules(Textarea, styles);
