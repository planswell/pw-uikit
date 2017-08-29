const React = require('react');
const { PropTypes } = React;
const { Link } = require('react-router');
const cssModules = require('react-css-modules');
const cssStyles = require('./style.css');

const OurLink = ({ button, children, styles, to, type, ...props }) => {
  const buttonStyles = type ? `button-${type}` : 'button-default';
  const styleName = button ? buttonStyles : 'link';
  const childrenContainer = <span styleName="inner">{children}</span>;

  const routerLink = () => (
    <Link styleName={`base ${styleName}`} activeClassName={styles.active} to={to} {...props}>
      {childrenContainer}
    </Link>
  );

  const normalLink = () => (
    <a styleName={`base ${styleName}`} {...props}>
      {childrenContainer}
    </a>
  );

  return to ? routerLink() : normalLink();
};

OurLink.propTypes = {
  button: PropTypes.bool,
  type: PropTypes.oneOf([
    'default',
    'primary',
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  disabled: PropTypes.bool,
  href: PropTypes.string,
  styles: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

const cssModuleOptions = {
  allowMultiple: true,
};

module.exports = cssModules(OurLink, cssStyles, cssModuleOptions);
