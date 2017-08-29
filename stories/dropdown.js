const React = require('react');
const { storiesOf } = require('@kadira/storybook');
const Dropdown = require('../components/dropdown');

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
