import React from 'react';
import Input from 'pw-component-input';
import cssModules from 'react-css-modules';
import styles from './style.css';
import isEmpty from 'lodash/isEmpty';

const { PropTypes } = React;

class Password extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    showing: PropTypes.bool,
    tabIndex: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      showing: this.props.showing || false,
    };
  }

  toggleShow = () => {
    this.setState({ showing: !this.state.showing });
  };

  handleChange = e => {
    // the below is done to support placeholders with password field
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
    e.preventDefault();
  };

  render() {
    const { name, value, onChange, placeholder, tabIndex } = this.props;
    let type;
    let addonStyle;

    if (this.state.showing) {
      type = 'text';
      addonStyle = 'addon-password-showing';
    } else {
      type = 'password';
      addonStyle = 'addon-password-hiding';
      if (isEmpty(this.props.value) && this.props.placeholder) {
        type = 'text';
      }
    }

    return (
      <div styleName="base">
        <Input
          type={type}
          {...{ name, value, onChange, placeholder, tabIndex }}
        />
        <span styleName={addonStyle} onClick={this.toggleShow}>
          Show
        </span>
      </div>
    );
  }
}

export default cssModules(Password, styles);
