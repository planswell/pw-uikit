import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './style.css';
import { omit } from 'lodash';

function Checkbox({ checked, label, ...props }) {
  Checkbox.incrementor += 1;
  const uniqueId = Checkbox.incrementor;
  const passthroughProps = omit(props, ['styles']);
  return (
    <label htmlFor={uniqueId} styleName="base">
      <input {...passthroughProps} id={uniqueId} styleName="stealthy" type="checkbox" defaultChecked={checked} />
      <span styleName="label">
        <i styleName="icon" />
        {label}
      </span>
    </label>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  invalid: PropTypes.bool,
  tabIndex: PropTypes.number,
  checked: PropTypes.bool,
  label: PropTypes.string,
};

export default cssModules(Checkbox, styles);
