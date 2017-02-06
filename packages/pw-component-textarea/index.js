import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './style.css';
import { omit } from 'lodash';

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

export default cssModules(Textarea, styles);
