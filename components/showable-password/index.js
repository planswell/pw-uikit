const React = require('react');
const Input = require('../input');
const cssModules = require('react-css-modules');
const styles = require('./style.css');
const { omit } = require('lodash');

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

  onChange = (e) => {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  toggleShow = () => this.setState({ showing: !this.state.showing });

  render() {
    const { name, value, placeholder, tabIndex, ...props } = this.props;
    const { onChange, toggleShow } = this;
    const { showing } = this.state;
    const [type, addonStyle] = showing ? ['text', 'addon-password-showing'] : ['password', 'addon-password-hiding'];
    const inputProps = { name, type, value, onChange, placeholder, tabIndex };

    return (
      <div {...omit(props, ['styles', 'showing'])} styleName="base">
        <Input {...inputProps} />
        <a tabIndex="0" styleName={addonStyle} onClick={toggleShow}>Show</a>
      </div>
    );
  }
}

module.exports = cssModules(Password, styles);
