import React from 'react';
import cssModules from 'react-css-modules';
import cssStyles from './style.css';
import { omit } from 'lodash';
import MaskedInput from 'react-maskedinput';

const { PropTypes } = React;

class Input extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'color',
      'date',
      'datetime',
      'datetime-local',
      'email',
      'file',
      'image',
      'month',
      'number',
      'password',
      'range',
      'search',
      'tel',
      'text',
      'time',
      'url',
      'week',
    ]),
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    invalid: PropTypes.bool,
    tabIndex: PropTypes.number,
    mask: PropTypes.string,
    appearance: PropTypes.oneOf(['default', 'invalid']),
  }

  static defaultProps = {
    appearance: 'default',
    type: 'text',
  }

  handleChange = e => this.props.onChange(e.target.value);

  render() {
    const { mask, appearance } = this.props;
    const passthroughProps = omit(this.props, ['styles', 'appearance']);
    const InputComponent = mask ? MaskedInput : 'input';
    return (
      <InputComponent
        styleName={appearance}
        {...passthroughProps}
        onChange={this.handleChange}
      />
    );
  }
}

export default cssModules(Input, cssStyles);
