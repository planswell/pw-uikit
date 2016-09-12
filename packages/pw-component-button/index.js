import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './style.css';
import omit from 'lodash/omit';

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
  };

  static defaultProps = {
    onClick: () => {},
    type: 'default',
    submit: false,
  };

  render() {
    const { children, disabled, loading, submit, type, ...props } = this.props;
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
        {children}
      </button>
    );
  }
}

export default cssModules(Button, styles);
