const React = require('react');
const { storiesOf } = require('@kadira/storybook');
const Textarea = require('../components/textarea');

storiesOf('Textarea', module)
  .add('default', () => (
    <Textarea name="test" placeholder="Enter text here" />
  ));
