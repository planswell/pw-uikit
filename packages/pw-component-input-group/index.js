import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './style.css';
import omit from 'lodash/omit';

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

export default cssModules(InputGroup, styles);
