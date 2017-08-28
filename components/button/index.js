const React = require('react');
const { PropTypes } = React;
const cssModules = require('react-css-modules');
const styles = require('./style.css');
const { omit } = require('lodash');
const Icon = require('../icon');

class Button extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    onClick: PropTypes.func.isRequired,
    submit: PropTypes.bool,
    type: PropTypes.oneOf([
      'default',
      'primary',
      'success',
      'warning',
      'danger',
    ]).isRequired,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    className: PropTypes.string,
    icon: PropTypes.string,
    align: PropTypes.oneOf([
      'left',
      'right',
    ]),
  };

  static defaultProps = {
    onClick: () => {},
    type: 'default',
    submit: false,
    align: 'left',
  };

  render() {
    const { children, disabled, loading, submit, type, icon, align, ...props } = this.props;
    const buttonType = submit ? 'submit' : 'button';

    // Unless the disabled state is explicitly set, the button is disabled when loading.
    const isDisabled = (disabled !== undefined ? disabled : loading) || false;

    return (
      <button
        {...omit(props, 'styles')}
        type={buttonType}
        styleName={type}
        disabled={isDisabled}
      >
        {icon && align === 'left' && <Icon name={icon} styleName="icon-left" />}
        {children}
        {icon && align === 'right' && <Icon name={icon} styleName="icon-right" />}
      </button>
    );
  }
}

module.exports = cssModules(Button, styles);
