import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './style.css';

function %nameclasscase%(props) {
  return (
    <div className={props.className} styleName="base">
    </div>
  );
}

%nameclasscase%.propTypes = {
  foo: PropTypes.string,
};

export default cssModules(%nameclasscase%, styles);
