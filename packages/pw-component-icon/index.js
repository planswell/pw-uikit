/**
 * Icon
 *
 * A pretty simple thin wrapper around font-awesome, using cssModules for extra goodness
 * Inspired by react-fa, which is far less cool
 */

import React, { PropTypes } from 'react';
import style from 'font-awesome/css/font-awesome.css';
import cssModules from 'react-css-modules';
import { omit } from 'lodash';

const Icon = ({ name, ...props }) => <i {...omit(props, 'styles')} styleName={`fa fa-${name}`} />;

Icon.propTypes = {
  name: PropTypes.string,
};

export default cssModules(Icon, style, {
  allowMultiple: true,
});
