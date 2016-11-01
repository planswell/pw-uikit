/**
 * Icon
 *
 * A pretty simple thin wrapper around icons. Internally uses fontello custom font.
 * Inspired by react-fa, which is far less cool.
 */

import React, { PropTypes } from 'react';
import styles from './styles.css';
import cssModules from 'react-css-modules';
import { omit } from 'lodash';

const Icon = ({ name, ...props }) => <i {...omit(props, 'styles')} styleName={`icon icon-${name}`} />;

Icon.propTypes = {
  name: PropTypes.string,
};

export default cssModules(Icon, styles, {
  allowMultiple: true,
});
