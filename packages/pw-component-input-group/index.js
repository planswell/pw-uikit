import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './style.css';

const InputGroup = ({ children, ...props }) => {
  const divProps = { ...props };
  delete divProps.styles;

  return (
    <div {...divProps} styleName="base">
      {children}
    </div>
  );
};

InputGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

export default cssModules(InputGroup, styles);
