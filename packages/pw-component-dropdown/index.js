import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './style.css';

const createOption = option => (
  <option key={`option-${option.label}-${option.value}`} value={option.label}>{option.label}</option>
);

function Dropdown({ values, label }) {
  return (
    <select styleName="base" name={label}>
      {values && values.map(e => createOption(e))}
    </select>
  );
}

Dropdown.propTypes = {
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
  label: PropTypes.string,
};

export default cssModules(Dropdown, styles);
