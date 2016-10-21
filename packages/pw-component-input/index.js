import React from 'react';
import cssModules from 'react-css-modules';
import cssStyles from './style.css';
import omit from 'lodash/omit';
import MaskedInput from 'react-maskedinput';

const { PropTypes } = React;

class Input extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'text',
      'email',
      'number',
      'password',
      'search',
    ]),
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    invalid: PropTypes.bool,
    tabIndex: PropTypes.number,
    mask: PropTypes.string,
  }

  static defaultProps = {
    type: 'text',
  }

  handleChange = e => this.props.onChange(e.target.value);

  render() {
    const { mask } = this.props;
    const passthroughProps = omit(this.props, 'styles');
    const InputComponent = mask ? MaskedInput : 'input';
    return (
      <InputComponent
        {...passthroughProps}
        styleName="default"
        onChange={this.handleChange}
      />
    );
  }
}

export default cssModules(Input, cssStyles);
