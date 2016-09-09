import React from 'react';
import Input from 'pw-component-input';
import cssModules from 'react-css-modules';
import styles from './style.css';

const { PropTypes } = React;

class Password extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    showing: PropTypes.bool,
    tabIndex: PropTypes.number,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      showing: this.props.showing || false,
    };
  }

  onChange = e => {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  toggleShow = () => {
    this.setState({ showing: !this.state.showing });
  };

  render() {
    const { className, name, value, placeholder, tabIndex } = this.props;
    const { onChange, toggleShow } = this;
    const { showing } = this.state;
    const [type, addonStyle] = showing ? ['text', 'addon-password-showing'] : ['password', 'addon-password-hiding'];

    return (
      <div className={className} styleName="base">
        <Input {...{ name, type, value, onChange, placeholder, tabIndex }} />
        <span styleName={addonStyle} onClick={toggleShow}>
          Show
        </span>
      </div>
    );
  }
}

export default cssModules(Password, styles);
