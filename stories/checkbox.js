import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Checkbox from '../components/checkbox';

storiesOf('Checkbox', module)
  .add('default un-checked', () => <Checkbox label="Yes" />)
  .add('default checked', () => <Checkbox label="No" defaultChecked />);
