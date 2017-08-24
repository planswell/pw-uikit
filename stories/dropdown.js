import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Dropdown from '../components/dropdown';

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
