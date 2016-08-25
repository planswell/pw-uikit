import React from 'react';
import cssModules from 'react-css-modules';
import styles from './style.css';

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
  }

  static defaultProps = {
    type: 'text',
  }

  handleChange = e => {
    this.props.onChange(e.target.value);
  }

  render() {
    const { name, value, placeholder, tabIndex, type } = this.props;
    return (
      <input
        styleName="default"
        onChange={this.handleChange}
        {...{ name, value, placeholder, tabIndex, type }}
      />
    );
  }
}

export default cssModules(Input, styles);
