import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './style.css';
import omit from 'lodash/omit';

const StickyBar = ({ children, ...props }) => (
  <div {...omit(props, 'styles')} styleName="base">
    {children}
  </div>
);

StickyBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

export default cssModules(StickyBar, styles);
