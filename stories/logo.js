import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Logo from './../packages/pw-component-logo';

storiesOf('Logo', module)
  .add('Default', () => (
    <Logo />
  ))
  .add('Coloured', () => (
    <div>
      <Logo color="red" />
      <Logo color="green" />
      <Logo color="blue" />
      <Logo color="aqua" />
      <Logo color="purple" />
    </div>
  ));
