/* eslint-disable react/no-multi-comp */
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './style.css';
import funcy from 'funcy';

const $ = funcy.parameter;

class NativeInput extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'text',
      'email',
      'number',
      'password',
      'search',
    ]),
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    type: 'text',
  };

  constructor(props) {
    super(props);
    this.state = { showing: false };
  }

  handleChange = e => {
    this.props.onChange(e.target.value);
  };

  handleShow = () => {
    this.setState({ showing: !this.state.showing });
  };

  render() {
    let styleName = 'default';
    let type = this.props.type;
    let passwordClass = 'addon-password-hiding';
    if (this.props.type === 'password' &&
       this.state.showing === true) {
      type = 'text';
      passwordClass = 'addon-password-showing';
    }

    const input1 = (
      <input
        type={type}
        styleName={styleName}
        name={this.props.name}
        value={this.props.value}
        onChange={this.handleChange}
        placeholder={this.props.placeholder}
      />
    );


    const retFun = funcy(
      ['password', () => (
        <div styleName="addon">
          { input1 }
          <span styleName={passwordClass} onClick={this.handleShow}>Show</span>
        </div>
      )],
      [$, () => input1],
    );

    return retFun(this.props.type);
  }
}

const NativeInputGroup = ({ children }) =>
  <div styleName="group">
    {children}
  </div>;

NativeInputGroup.propTypes = {
  children: PropTypes.array,
};

const Input = cssModules(NativeInput, styles);
const InputGroup = cssModules(NativeInputGroup, styles);

export { Input, InputGroup };
