import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Logo from '../../components/logo'; // '../index.js';
import styles from './style.css';
import cssModules from 'react-css-modules';

storiesOf('Logo', module)
  .add('Default', () => (
    <Logo />
  ))
  .add('Coloured', cssModules(() => (
    <div>
      <Logo styleName="red" />
      <Logo styleName="green" />
      <Logo styleName="blue" />
      <Logo styleName="aqua" />
      <Logo styleName="purple" />
      <Logo styleName="yellow" />
    </div>)
  , styles));
