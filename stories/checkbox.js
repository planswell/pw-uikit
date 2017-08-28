const React = require('react');
const { storiesOf } = require('@kadira/storybook');
const Checkbox = require('../components/checkbox');

storiesOf('Checkbox', module)
  .add('default un-checked', () => <Checkbox label="Yes" />)
  .add('default checked', () => <Checkbox label="No" defaultChecked />);
