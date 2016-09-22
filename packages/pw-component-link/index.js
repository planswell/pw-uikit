import React from 'react';
import { Link } from 'react-router';
import cssModules from 'react-css-modules';
import cssStyles from './style.css';
import omit from 'lodash/omit';

const { PropTypes } = React;

const OurLink = ({ button, children, ...others }) => {
  const props = omit(others, 'styles');
  const styleName = button ? 'button' : 'link';

  return (
    <Link styleName={`base ${styleName}`} {...props}>
      <span styleName="inner">{children}</span>
    </Link>
  );
};

OurLink.propTypes = {
  button: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  disabled: PropTypes.bool,
  href: PropTypes.string,
};

const cssModuleOptions = {
  allowMultiple: true,
};

export default cssModules(OurLink, cssStyles, cssModuleOptions);
