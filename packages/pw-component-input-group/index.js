import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './style.css';

const InputGroup = ({ children }) => (
  <div styleName="base">
    {children}
  </div>
);

InputGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default cssModules(InputGroup, styles);
