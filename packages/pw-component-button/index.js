import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './style.css';

class NativeButton extends React.Component {
  static propTypes = {
    children: PropTypes.array,
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
  };

  static defaultProps = {
    type: 'default',
    submit: false,
  };

  render() {
    const { disabled, loading } = this.props;
    const buttonType = this.props.submit ? 'submit' : 'button';

    // Unless the disabled state is explicitly set, the button is disabled when loading.
    const isDisabled = (disabled !== undefined ? disabled : loading) || false;

    return (
      <button
        type={buttonType}
        styleName={this.props.type}
        disabled={isDisabled}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}
const Button = cssModules(NativeButton, styles);
export { Button };
