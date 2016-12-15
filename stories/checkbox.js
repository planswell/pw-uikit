import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Checkbox from './../packages/pw-component-checkbox';

storiesOf('Checkbox', module)
  .add('default un-checked', () => <Checkbox label="Yes" />)
  .add('default checked', () => <Checkbox label="No" checked />);
