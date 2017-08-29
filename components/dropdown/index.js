const React = require('react');
const { PropTypes } = React;
const cssModules = require('react-css-modules');
const styles = require('./style.css');
const { omit } = require('lodash');

const createOption = option => (
  <option key={`option-${option.label}-${option.value}`} value={option.value}>{option.label || option.value}</option>
);

class Dropdown extends React.Component {
  static propTypes = {
    invalid: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    tabIndex: PropTypes.number,
    values: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.bool,
          PropTypes.number,
        ]),
      })
    ),
  };

  handleChange = event => this.props.onChange(event.target.value, event);

  render() {
    const { values, label, ...props } = this.props;
    const passthroughProps = omit(props, ['styles']);
    return (
      <select styleName="base" name={label} {...passthroughProps} onChange={this.handleChange}>
        {values && values.map(e => createOption(e))}
      </select>
    );
  }
}


module.exports = cssModules(Dropdown, styles);
