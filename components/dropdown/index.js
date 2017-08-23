import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './style.css';
import { omit } from 'lodash';

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


export default cssModules(Dropdown, styles);
