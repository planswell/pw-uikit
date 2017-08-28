const React = require('react');
const { PropTypes } = React;
const cssModules = require('react-css-modules');
const styles = require('./style.css');
const { omit } = require('lodash');

class Checkbox extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    invalid: PropTypes.bool,
    tabIndex: PropTypes.number,
    checked: PropTypes.bool,
    label: PropTypes.string,
  };

  handleChange = event => this.props.onChange(event.target.checked, event);

  render() {
    const { label, ...props } = this.props;
    Checkbox.incrementor = (Checkbox.incrementor || 0) + 1;
    const uniqueId = `pw-component-checkbox-${Checkbox.incrementor}`;
    const passthroughProps = omit(props, ['styles']);
    return (
      <label htmlFor={uniqueId} styleName="base">
        <input {...passthroughProps} id={uniqueId} styleName="stealthy" type="checkbox" onChange={this.handleChange} />
        <span styleName="label">
          <i styleName="icon" />
          {label}
        </span>
      </label>
    );
  }
}

module.exports = cssModules(Checkbox, styles);
