import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Dropdown from './../packages/pw-component-dropdown';

const values = [{
  label: 'travel',
  value: false,
}, {
  label: 'time with family',
  value: false,
}, {
  label: 'working on a passion',
  value: false,
}];

storiesOf('Dropdown', module)
  .add('default ', () => <Dropdown values={values} label="retirmentTime" />);
