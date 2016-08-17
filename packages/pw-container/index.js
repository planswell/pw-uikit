import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './style.css';

const NativeContainer = ({ children }) =>
  <div styleName="default">
    {children}
  </div>;

NativeContainer.propTypes = {
  children: PropTypes.array.isRequired,
};

const Container = cssModules(NativeContainer, styles);

export { Container };
