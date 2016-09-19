import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './style.css';
import omit from 'lodash/omit';

const ProgressBar = ({ children, value, dark, ...props }) => {
  const width = value * 100;
  const barStyleName = `bar-fg ${dark ? 'dark' : 'light'}`;
  const passthroughProps = omit(props, ['styles']);

  return (
    <div {...passthroughProps}>
      <div styleName="base">
        <svg styleName="bar-bg" version="1.1" viewBox="0 0 100 1" preserveAspectRatio="none">
          <rect styleName={barStyleName} x="0" y="0" width={width} height="1" />
        </svg>
        {children}
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  className: PropTypes.string,
  dark: PropTypes.bool,
  value: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ProgressBar.defaultProps = {
  value: 0,
};

const cssModuleOptions = {
  allowMultiple: true,
};

export default cssModules(ProgressBar, styles, cssModuleOptions);
